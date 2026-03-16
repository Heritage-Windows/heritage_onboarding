import { CheckCircle2, Lock, PlayCircle, Circle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface ModuleCardProps {
  id: string;
  title: string;
  description: string;
  order: number;
  status: "not_started" | "in_progress" | "completed";
  unlocked: boolean;
}

export function ModuleCard({ id, title, description, order, status, unlocked }: ModuleCardProps) {
  const navigate = useNavigate();

  const statusConfig = {
    not_started: {
      icon: Circle,
      label: "Not Started",
      color: "text-muted-foreground",
      bg: "bg-muted",
    },
    in_progress: {
      icon: PlayCircle,
      label: "In Progress",
      color: "text-warning",
      bg: "bg-warning/10",
    },
    completed: {
      icon: CheckCircle2,
      label: "Completed",
      color: "text-success",
      bg: "bg-success/10",
    },
  };

  const config = statusConfig[status];
  const StatusIcon = unlocked ? config.icon : Lock;

  return (
    <Card
      className={cn(
        "transition-all duration-200 border",
        unlocked
          ? "hover:shadow-md hover:border-primary/30 cursor-pointer"
          : "opacity-60 cursor-not-allowed"
      )}
      onClick={() => unlocked && navigate(`/module/${id}`)}
    >
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-full shrink-0 text-sm font-bold",
              status === "completed"
                ? "bg-success text-success-foreground"
                : unlocked
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            )}
          >
            {status === "completed" ? (
              <CheckCircle2 className="w-5 h-5" />
            ) : (
              order
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-foreground truncate">{title}</h3>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {description}
            </p>
            <div className="flex items-center justify-between">
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full",
                  config.bg,
                  config.color
                )}
              >
                <StatusIcon className="w-3.5 h-3.5" />
                {unlocked ? config.label : "Locked"}
              </span>
              {unlocked && status !== "completed" && (
                <Button
                  size="sm"
                  variant={status === "in_progress" ? "default" : "outline"}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/module/${id}`);
                  }}
                >
                  {status === "in_progress" ? "Continue" : "Start"}
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
