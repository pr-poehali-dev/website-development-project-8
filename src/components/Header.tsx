import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLink = (path: string, label: string) => (
    <button
      onClick={() => { navigate(path); setMobileOpen(false); }}
      className={`px-5 py-2 rounded-md text-[1.3rem] font-medium transition-colors ${
        location.pathname === path
          ? "text-primary"
          : "text-primary/60 hover:text-primary"
      }`}
    >
      {label}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 shrink-0">
            <img
              src="https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/bucket/b03a7c85-5173-4f53-9720-3654039163f3.png"
              alt="LaserDesign"
              className="h-7 md:h-9 w-auto"
            />
            <img
              src="https://cdn.poehali.dev/files/4982d315-c954-414c-ae74-6dce639d2efc.png"
              alt="LaserDesign"
              className="h-4 md:h-5 w-auto brightness-0 invert hidden sm:block"
            />
          </button>

          {/* Десктоп навигация */}
          <nav className="hidden md:flex items-center gap-1">
            {navLink("/", "ГЛАВНАЯ")}
            {navLink("/portfolio", "ПОРТФОЛИО")}
            {navLink("/about", "О НАС")}
          </nav>

          {/* Десктоп контакты */}
          <div className="hidden md:flex items-center gap-4 text-sm text-primary/60">
            <span className="font-medium text-primary/80">КОНТАКТЫ</span>
            <a href="tel:+79097764353" className="hover:text-primary transition-colors">+7 909 776-43-53</a>
            <a href="mailto:laserdesign39@yandex.ru" className="hover:text-primary transition-colors">laserdesign39@yandex.ru</a>
          </div>

          {/* Мобильная правая часть */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="w-9 h-9 flex items-center justify-center rounded-md text-primary/60 hover:text-primary transition-colors"
            >
              <Icon name={mobileOpen ? "X" : "Menu"} size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 py-4 flex flex-col gap-1">
          {navLink("/", "ГЛАВНАЯ")}
          {navLink("/portfolio", "ПОРТФОЛИО")}
          {navLink("/about", "О НАС")}
        </div>
      )}
    </header>
  );
};

export default Header;