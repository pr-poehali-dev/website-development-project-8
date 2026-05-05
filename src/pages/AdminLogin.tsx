import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { cmsLogin } from "@/lib/cms";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const result = await cmsLogin(password);
    setLoading(false);
    if (result.ok && result.token) {
      sessionStorage.setItem("cms_token", result.token);
      navigate("/admin");
    } else {
      setError(result.error || "Неверный пароль");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-sm p-8 bg-card border-border">
        <div className="text-center mb-8">
          <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
            <Icon name="Lock" className="text-primary" size={28} />
          </div>
          <h1 className="text-2xl font-bold">Управление сайтом</h1>
          <p className="text-muted-foreground text-sm mt-1">Введите пароль для входа</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          {error && (
            <p className="text-sm text-destructive flex items-center gap-1">
              <Icon name="AlertCircle" size={14} />
              {error}
            </p>
          )}
          <Button type="submit" className="w-full" disabled={loading || !password}>
            {loading ? "Вход..." : "Войти"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AdminLogin;
