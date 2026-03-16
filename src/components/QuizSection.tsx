import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import type { QuizQuestion } from "@/data/modules";

interface QuizSectionProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
  isCompleted: boolean;
}

export function QuizSection({ questions, onComplete, isCompleted }: QuizSectionProps) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [allCorrect, setAllCorrect] = useState(false);

  const handleSelect = (questionId: string, optionIndex: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmit = () => {
    const correct = questions.every(
      (q) => answers[q.id] === q.correctAnswer
    );
    setSubmitted(true);
    setAllCorrect(correct);
    if (correct) {
      onComplete(100);
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setAllCorrect(false);
  };

  const allAnswered = questions.every((q) => answers[q.id] !== undefined);

  if (isCompleted) {
    return (
      <Card className="border-success/30 bg-success/5">
        <CardContent className="p-6 flex items-center gap-3">
          <CheckCircle2 className="w-6 h-6 text-success" />
          <div>
            <p className="font-semibold text-foreground">Knowledge Check Complete!</p>
            <p className="text-sm text-muted-foreground">You've passed this module's quiz.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Knowledge Check</CardTitle>
        <p className="text-sm text-muted-foreground">
          Answer all questions correctly to complete this module.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {questions.map((q, qIndex) => (
          <div key={q.id} className="space-y-3">
            <p className="font-medium text-foreground">
              {qIndex + 1}. {q.question}
            </p>
            <div className="space-y-2">
              {q.options.map((option, oIndex) => {
                const isSelected = answers[q.id] === oIndex;
                const isCorrect = q.correctAnswer === oIndex;
                const showResult = submitted;

                return (
                  <button
                    key={oIndex}
                    onClick={() => handleSelect(q.id, oIndex)}
                    disabled={submitted}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-lg border text-sm transition-all",
                      !submitted && isSelected
                        ? "border-primary bg-primary/5 text-foreground"
                        : !submitted
                        ? "border-border hover:border-primary/40 hover:bg-muted/50 text-foreground"
                        : showResult && isCorrect
                        ? "border-success bg-success/10 text-foreground"
                        : showResult && isSelected && !isCorrect
                        ? "border-destructive bg-destructive/10 text-foreground"
                        : "border-border text-muted-foreground"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className="shrink-0">
                        {showResult && isCorrect ? (
                          <CheckCircle2 className="w-4 h-4 text-success" />
                        ) : showResult && isSelected && !isCorrect ? (
                          <XCircle className="w-4 h-4 text-destructive" />
                        ) : (
                          <span
                            className={cn(
                              "w-4 h-4 rounded-full border-2 inline-block",
                              isSelected ? "border-primary bg-primary" : "border-muted-foreground"
                            )}
                          />
                        )}
                      </span>
                      {option}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <div className="flex gap-3 pt-2">
          {!submitted ? (
            <Button onClick={handleSubmit} disabled={!allAnswered}>
              Submit Answers
            </Button>
          ) : allCorrect ? (
            <div className="flex items-center gap-2 text-success font-medium">
              <CheckCircle2 className="w-5 h-5" />
              All correct! Module complete.
            </div>
          ) : (
            <Button onClick={handleRetry} variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          )}
        </div>

        {submitted && !allCorrect && (
          <p className="text-sm text-destructive">
            Some answers are incorrect. Review the highlighted questions and try again.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
