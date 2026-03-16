import { useIsAdmin } from "@/hooks/useIsAdmin";
import { useAdminData } from "@/hooks/useAdminData";
import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressBar } from "@/components/ProgressBar";
import { Navigate } from "react-router-dom";
import { Loader2, Users, TrendingUp, CheckCircle2 } from "lucide-react";

export default function AdminPage() {
  const { data: isAdmin, isLoading: roleLoading } = useIsAdmin();
  const { data: reps = [], isLoading: repsLoading } = useAdminData();

  if (roleLoading || repsLoading) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center h-64">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </AppLayout>
    );
  }

  if (!isAdmin) return <Navigate to="/dashboard" replace />;

  const avgProgress = reps.length
    ? Math.round(reps.reduce((s, r) => s + r.percentage, 0) / reps.length)
    : 0;
  const fullyComplete = reps.filter((r) => r.percentage === 100).length;

  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Overview of all sales rep onboarding progress.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{reps.length}</p>
                <p className="text-sm text-muted-foreground">Total Reps</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{avgProgress}%</p>
                <p className="text-sm text-muted-foreground">Avg Progress</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{fullyComplete}</p>
                <p className="text-sm text-muted-foreground">Fully Onboarded</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reps Table */}
        <Card>
          <CardHeader>
            <CardTitle>Sales Representatives</CardTitle>
          </CardHeader>
          <CardContent>
            {reps.length === 0 ? (
              <p className="text-muted-foreground text-sm">No reps have completed profile setup yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="py-3 px-2 font-medium text-muted-foreground">Name</th>
                      <th className="py-3 px-2 font-medium text-muted-foreground">Email</th>
                      <th className="py-3 px-2 font-medium text-muted-foreground hidden md:table-cell">Market</th>
                      <th className="py-3 px-2 font-medium text-muted-foreground hidden md:table-cell">Hire Date</th>
                      <th className="py-3 px-2 font-medium text-muted-foreground">Modules</th>
                      <th className="py-3 px-2 font-medium text-muted-foreground min-w-[120px]">Progress</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reps.map((rep) => (
                      <tr key={rep.userId} className="border-b border-border/50 hover:bg-muted/30">
                        <td className="py-3 px-2 font-medium text-foreground">
                          {rep.firstName} {rep.lastName}
                        </td>
                        <td className="py-3 px-2 text-muted-foreground">{rep.email}</td>
                        <td className="py-3 px-2 text-muted-foreground hidden md:table-cell">{rep.cityMarket || "—"}</td>
                        <td className="py-3 px-2 text-muted-foreground hidden md:table-cell">{rep.hireDate || "—"}</td>
                        <td className="py-3 px-2 text-foreground">
                          {rep.completedModules}/{rep.totalModules}
                        </td>
                        <td className="py-3 px-2">
                          <ProgressBar percentage={rep.percentage} showLabel={false} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
