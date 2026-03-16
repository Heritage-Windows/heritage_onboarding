import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { TRAINING_MODULES } from "@/data/modules";

interface RepProgress {
  userId: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  cityMarket: string | null;
  hireDate: string | null;
  completedModules: number;
  totalModules: number;
  percentage: number;
}

export function useAdminData() {
  return useQuery({
    queryKey: ["admin-reps"],
    queryFn: async () => {
      // Fetch all profiles
      const { data: profiles, error: pErr } = await supabase
        .from("profiles")
        .select("*")
        .eq("profile_completed", true);
      if (pErr) throw pErr;

      // Fetch all progress
      const { data: progress, error: mErr } = await supabase
        .from("module_progress")
        .select("*");
      if (mErr) throw mErr;

      const total = TRAINING_MODULES.length;

      const reps: RepProgress[] = (profiles || []).map((p) => {
        const completed = (progress || []).filter(
          (m) => m.user_id === p.user_id && m.status === "completed"
        ).length;
        return {
          userId: p.user_id,
          firstName: p.first_name,
          lastName: p.last_name,
          email: p.email,
          cityMarket: p.city_market,
          hireDate: p.hire_date,
          completedModules: completed,
          totalModules: total,
          percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
        };
      });

      return reps;
    },
  });
}
