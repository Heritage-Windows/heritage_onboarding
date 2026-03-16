import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile";
import { useModuleProgress, getProgressPercentage, getModuleStatus, isModuleUnlocked } from "@/hooks/useModuleProgress";
import { TRAINING_MODULES } from "@/data/modules";
import { AppLayout } from "@/components/AppLayout";
import { ProgressBar } from "@/components/ProgressBar";
import { ModuleCard } from "@/components/ModuleCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user } = useAuth();
  const { data: profile } = useProfile();
  const { data: progress = [], isLoading } = useModuleProgress();
  const navigate = useNavigate();

  const percentage = getProgressPercentage(progress);

  // Find next incomplete module
  const nextModule = TRAINING_MODULES.find((m) => {
    const status = getModuleStatus(m.id, progress);
    return status !== "completed" && isModuleUnlocked(m.id, progress);
  });

  if (isLoading) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center h-64">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        {/* Welcome Section */}
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Welcome{profile?.first_name ? `, ${profile.first_name}` : ""}!
          </h1>
          <p className="text-muted-foreground mt-1">
            {percentage === 100
              ? "Congratulations! You've completed all onboarding modules."
              : "Complete your training modules to get started selling."}
          </p>
        </div>

        {/* Progress Card */}
        <Card>
          <CardContent className="p-6">
            <ProgressBar percentage={percentage} />
            {nextModule && (
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Next: <span className="font-medium text-foreground">{nextModule.title}</span>
                </p>
                <Button size="sm" onClick={() => navigate(`/module/${nextModule.id}`)}>
                  Continue <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Modules Grid */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">Training Modules</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {TRAINING_MODULES.map((mod) => (
              <ModuleCard
                key={mod.id}
                id={mod.id}
                title={mod.title}
                description={mod.description}
                order={mod.order}
                status={getModuleStatus(mod.id, progress)}
                unlocked={isModuleUnlocked(mod.id, progress)}
              />
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
