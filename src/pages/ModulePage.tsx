import { useParams, useNavigate } from "react-router-dom";
import { TRAINING_MODULES } from "@/data/modules";
import heritageLogo from "@/assets/heritage-logo-welcome.png";
import {
  useModuleProgress,
  useCompleteModule,
  useStartModule,
  getModuleStatus,
  isModuleUnlocked,
} from "@/hooks/useModuleProgress";
import { AppLayout } from "@/components/AppLayout";
import { VideoPlayer } from "@/components/VideoPlayer";
import { QuizSection } from "@/components/QuizSection";
import { SubModuleSection } from "@/components/SubModuleSection";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  Lock,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { toast } from "sonner";

export default function ModulePage() {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const { data: progress = [], isLoading } = useModuleProgress();
  const completeModule = useCompleteModule();
  const startModule = useStartModule();

  const module = TRAINING_MODULES.find((m) => m.id === moduleId);
  const moduleIndex = TRAINING_MODULES.findIndex((m) => m.id === moduleId);

  const status = module ? getModuleStatus(module.id, progress) : "not_started";
  const unlocked = module ? isModuleUnlocked(module.id, progress) : false;

  const prevModule = moduleIndex > 0 ? TRAINING_MODULES[moduleIndex - 1] : null;
  const nextModule =
    moduleIndex < TRAINING_MODULES.length - 1
      ? TRAINING_MODULES[moduleIndex + 1]
      : null;

  // Track completed sub-modules locally
  const [completedSubs, setCompletedSubs] = useState<Set<string>>(new Set());

  const hasSubModules = module?.subModules && module.subModules.length > 0;
  const allSubsComplete = hasSubModules
    ? module.subModules!.every((s) => completedSubs.has(s.id))
    : false;

  // Auto-complete parent module when all subs are done
  useEffect(() => {
    if (hasSubModules && allSubsComplete && status !== "completed" && module) {
      completeModule
        .mutateAsync({ moduleId: module.id, quizScore: 100 })
        .then(() => toast.success("Module completed! 🎉"))
        .catch(() => toast.error("Failed to save progress"));
    }
  }, [allSubsComplete, hasSubModules, status, module?.id]);

  // Mark as in_progress when first viewed
  useEffect(() => {
    if (module && unlocked && status === "not_started") {
      startModule.mutate(module.id);
    }
  }, [module?.id, unlocked, status]);

  const handleSubQuizComplete = useCallback((subModuleId: string, _score: number) => {
    setCompletedSubs((prev) => new Set(prev).add(subModuleId));
  }, []);

  if (isLoading) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center h-64">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </AppLayout>
    );
  }

  if (!module) {
    return (
      <AppLayout>
        <div className="text-center py-16">
          <p className="text-muted-foreground">Module not found.</p>
          <Button variant="outline" className="mt-4" onClick={() => navigate("/dashboard")}>
            Back to Dashboard
          </Button>
        </div>
      </AppLayout>
    );
  }

  if (!unlocked) {
    return (
      <AppLayout>
        <div className="max-w-2xl mx-auto text-center py-16">
          <Lock className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-foreground mb-2">Module Locked</h2>
          <p className="text-muted-foreground mb-6">
            Complete the previous module to unlock this one.
          </p>
          <Button onClick={() => navigate("/dashboard")}>Back to Dashboard</Button>
        </div>
      </AppLayout>
    );
  }

  const handleQuizComplete = async (score: number) => {
    try {
      await completeModule.mutateAsync({ moduleId: module.id, quizScore: score });
      toast.success("Module completed! 🎉");
    } catch (err: any) {
      toast.error("Failed to save progress");
    }
  };

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
        {/* Header */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              Module {module.order} of {TRAINING_MODULES.length}
            </p>
            <h1 className="text-xl md:text-2xl font-display font-bold text-foreground">
              {module.title}
            </h1>
          </div>
          {status === "completed" && (
            <CheckCircle2 className="w-6 h-6 text-success" />
          )}
        </div>

        {/* Video (skip for sub-module parents) */}
        {module.videoUrl && <VideoPlayer url={module.videoUrl} title={module.title} />}

        {/* Content */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4 text-foreground">
              {hasSubModules ? "Overview" : "Training Notes"}
            </h2>
            <div className="prose prose-sm max-w-none text-foreground/85 space-y-3">
              {module.content.split("\n").map((line, i) => (
                <p key={i} className={line.startsWith("•") ? "pl-4" : ""}>
                  {line.startsWith("**") ? (
                    <strong>{line.replace(/\*\*/g, "")}</strong>
                  ) : (
                    line
                  )}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sub-modules OR Quiz */}
        {hasSubModules ? (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">
              Sub-Sections ({completedSubs.size}/{module.subModules!.length} complete)
            </h2>
            {module.subModules!.map((sub, i) => (
              <SubModuleSection
                key={sub.id}
                subModule={sub}
                index={i}
                isCompleted={status === "completed" || completedSubs.has(sub.id)}
                onQuizComplete={handleSubQuizComplete}
              />
            ))}
          </div>
        ) : (
          <QuizSection
            questions={module.quiz}
            onComplete={handleQuizComplete}
            isCompleted={status === "completed"}
          />
        )}

        {/* Navigation */}
        <div className="flex justify-between pt-4 pb-8">
          {prevModule ? (
            <Button
              variant="outline"
              onClick={() => navigate(`/module/${prevModule.id}`)}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
          ) : (
            <div />
          )}
          {nextModule && status === "completed" ? (
            <Button onClick={() => navigate(`/module/${nextModule.id}`)}>
              Next Module
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button variant="outline" onClick={() => navigate("/dashboard")}>
              Back to Dashboard
            </Button>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
