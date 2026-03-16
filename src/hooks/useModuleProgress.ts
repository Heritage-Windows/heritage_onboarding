import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";
import { TRAINING_MODULES } from "@/data/modules";

export interface ModuleProgress {
  id: string;
  user_id: string;
  module_id: string;
  status: "not_started" | "in_progress" | "completed";
  quiz_score: number | null;
  completed_at: string | null;
}

export function useModuleProgress() {
  const { user } = useAuth();

  return useQuery({
    queryKey: ["module_progress", user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data, error } = await supabase
        .from("module_progress")
        .select("*")
        .eq("user_id", user.id);
      if (error) throw error;
      return data as ModuleProgress[];
    },
    enabled: !!user,
  });
}

export function useCompleteModule() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      moduleId,
      quizScore,
    }: {
      moduleId: string;
      quizScore: number;
    }) => {
      if (!user) throw new Error("Not authenticated");
      const { data, error } = await supabase
        .from("module_progress")
        .upsert(
          {
            user_id: user.id,
            module_id: moduleId,
            status: "completed",
            quiz_score: quizScore,
            completed_at: new Date().toISOString(),
          },
          { onConflict: "user_id,module_id" }
        )
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["module_progress", user?.id] });
    },
  });
}

export function useStartModule() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (moduleId: string) => {
      if (!user) throw new Error("Not authenticated");
      const { data, error } = await supabase
        .from("module_progress")
        .upsert(
          {
            user_id: user.id,
            module_id: moduleId,
            status: "in_progress",
          },
          { onConflict: "user_id,module_id" }
        )
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["module_progress", user?.id] });
    },
  });
}

/** Calculate overall progress percentage */
export function getProgressPercentage(progress: ModuleProgress[]): number {
  const total = TRAINING_MODULES.length;
  if (total === 0) return 0;
  const completed = progress.filter((p) => p.status === "completed").length;
  return Math.round((completed / total) * 100);
}

/** Get the status for a specific module */
export function getModuleStatus(
  moduleId: string,
  progress: ModuleProgress[]
): "not_started" | "in_progress" | "completed" {
  const entry = progress.find((p) => p.module_id === moduleId);
  return entry?.status ?? "not_started";
}

/** Check if a module is unlocked (previous module completed or it's the first) */
export function isModuleUnlocked(
  moduleId: string,
  progress: ModuleProgress[]
): boolean {
  const module = TRAINING_MODULES.find((m) => m.id === moduleId);
  if (!module) return false;
  if (module.order === 1) return true;

  const previousModule = TRAINING_MODULES.find((m) => m.order === module.order - 1);
  if (!previousModule) return true;

  return getModuleStatus(previousModule.id, progress) === "completed";
}
