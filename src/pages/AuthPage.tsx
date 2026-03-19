import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, ArrowRight, Mail, Lock } from "lucide-react";
import { toast } from "sonner";
import heritageLogo from "@/assets/heritage-logo-square.png";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) throw error;
        navigate("/dashboard");
      } else {
        const { error } = await signUp(email, password);
        if (error) throw error;
        toast.success("Account created! Check your email to confirm, then log in.");
        setIsLogin(true);
      }
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-background relative overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      {/* Left panel - branding */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
        <div className="relative z-10 max-w-md space-y-8">
          <img src={heritageLogo} alt="Heritage Windows" className="w-20 h-20 object-contain" />
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground font-display">Heritage Windows</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">Sales Rep Onboarding Portal.</p>
          </div>
          <div className="flex gap-3">
            {["Training", "Quizzes", "Videos"].map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel - auth form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-sm space-y-8 animate-fade-in">
          {/* Mobile logo */}
          <div className="lg:hidden text-center space-y-3">
            <img src={heritageLogo} alt="Heritage Windows" className="w-16 h-16 mx-auto object-contain" />
            <h2 className="text-xl font-bold text-foreground font-display">Heritage Windows</h2>
          </div>

          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {isLogin ? "Welcome back" : "Get started"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {isLogin ? "Sign in to continue your onboarding" : "Create your account to begin training"}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 h-11 bg-secondary/50 border-border/50 focus:border-primary focus:bg-secondary transition-colors"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="password"
                className="text-xs uppercase tracking-wider text-muted-foreground font-semibold"
              >
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="pl-10 h-11 bg-secondary/50 border-border/50 focus:border-primary focus:bg-secondary transition-colors"
                />
              </div>
            </div>

            <Button type="submit" className="w-full h-11 font-semibold group" disabled={loading}>
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  {isLogin ? "Sign In" : "Create Account"}
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </Button>
          </form>

          {/* Toggle */}
          <div className="text-center space-y-3">
            {isLogin && (
              <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                <p className="text-sm font-medium text-foreground">First time here?</p>
                <p className="text-xs text-muted-foreground mt-0.5">You'll need to create an account to get started.</p>
              </div>
            )}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className={`text-sm transition-colors ${
                isLogin
                  ? "px-4 py-2 rounded-md bg-secondary text-foreground font-semibold hover:bg-secondary/80 border border-border"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isLogin ? "Create an Account" : (
                <>Already have an account? <span className="text-primary font-medium hover:underline">Sign in</span></>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
