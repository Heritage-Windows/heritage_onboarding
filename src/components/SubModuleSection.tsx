import { useState } from "react";
import { ChevronDown, CheckCircle2, PlayCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { VideoPlayer } from "@/components/VideoPlayer";
import { QuizSection } from "@/components/QuizSection";
import { cn } from "@/lib/utils";
import type { SubModule } from "@/data/modules";

interface SubModuleSectionProps {
  subModule: SubModule;
  index: number;
  isCompleted: boolean;
  onQuizComplete: (subModuleId: string, score: number) => void;
}

export function SubModuleSection({
  subModule,
  index,
  isCompleted,
  onQuizComplete,
}: SubModuleSectionProps) {
  const [isOpen, setIsOpen] = useState(!isCompleted);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card className={cn(
        "overflow-hidden transition-colors",
        isCompleted && "border-success/30"
      )}>
        <CollapsibleTrigger className="w-full">
          <div className="flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors">
            <div className={cn(
              "flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold shrink-0",
              isCompleted
                ? "bg-success/15 text-success"
                : "bg-primary/10 text-primary"
            )}>
              {isCompleted ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-foreground text-sm md:text-base">
                {subModule.title}
              </h3>
              <p className="text-xs text-muted-foreground">{subModule.description}</p>
            </div>
            <ChevronDown className={cn(
              "w-5 h-5 text-muted-foreground transition-transform shrink-0",
              isOpen && "rotate-180"
            )} />
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <CardContent className="p-4 pt-0 space-y-6">
            {/* Video */}
            {subModule.videoUrl && (
              <VideoPlayer url={subModule.videoUrl} title={subModule.title} />
            )}

            {/* Content */}
            <div className="prose prose-sm max-w-none text-foreground/85 space-y-3">
              {subModule.content.split("\n").map((line, i) => (
                <p key={i} className={line.startsWith("•") ? "pl-4" : ""}>
                  {line.startsWith("**") ? (
                    <strong>{line.replace(/\*\*/g, "")}</strong>
                  ) : (
                    line
                  )}
                </p>
              ))}
            </div>

            {/* Quiz */}
            <QuizSection
              questions={subModule.quiz}
              onComplete={(score) => onQuizComplete(subModule.id, score)}
              isCompleted={isCompleted}
            />
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
}
