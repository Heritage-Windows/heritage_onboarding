import { cn } from "@/lib/utils";

interface ProgressBarProps {
  percentage: number;
  className?: string;
  showLabel?: boolean;
}

export function ProgressBar({ percentage, className, showLabel = true }: ProgressBarProps) {
  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-foreground">
            Onboarding Progress
          </span>
          <span className="text-sm font-semibold text-primary">
            {percentage}% Complete
          </span>
        </div>
      )}
      <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
