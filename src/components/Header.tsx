import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { cmsGetContent } from "@/lib/cms";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [phone, setPhone] = useState("+7 909 776-43-53");
  const [email, setEmail] = useState("laserdesign39@yandex.ru");

  useEffect(() => {
    cmsGetContent().then((d) => {
      if (d.contacts_phone) setPhone(d.contacts_phone);
      if (d.contacts_email) setEmail(d.contacts_email);
    });
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLink = (path: string, label: string) => (
    <button
      onClick={() => { navigate(path); setMobileOpen(false); }}
      aria-current={location.pathname === path ? "page" : undefined}
      className={`px-5 py-2 rounded-md text-sm md:text-[1.3rem] font-medium transition-colors ${
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
          <button
            onClick={() => navigate("/")}
            aria-label="LaserDesign — на главную"
            className="flex items-center gap-2 shrink-0"
          >
            <img
              src="https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/bucket/b03a7c85-5173-4f53-9720-3654039163f3.png"
              alt="LaserDesign логотип"
              className="h-7 md:h-9 w-auto"
            />
            <img
              src="https://cdn.poehali.dev/files/4982d315-c954-414c-ae74-6dce639d2efc.png"
              alt=""
              aria-hidden="true"
              className="h-4 md:h-5 w-auto brightness-0 invert hidden sm:block"
            />
          </button>

          {/* Десктоп навигация */}
          <nav aria-label="Основная навигация" className="hidden md:flex items-center gap-1">
            {navLink("/", "ГЛАВНАЯ")}
            {navLink("/portfolio", "ПОРТФОЛИО")}
            {navLink("/about", "О НАС")}
          </nav>

          {/* Десктоп контакты */}
          <div className="hidden md:flex items-center gap-3" aria-label="Контакты">
            <span className="px-5 py-2 text-[1.3rem] font-medium text-primary/60" aria-hidden="true">КОНТАКТЫ</span>
            <div className="flex flex-col items-end gap-1 text-sm text-primary/60">
              <a href={`tel:${phone.replace(/\D/g, "").replace(/^8/, "+7")}`} aria-label={`Позвонить: ${phone}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Icon name="Phone" size={13} aria-hidden="true" />
                {phone}
              </a>
              <a href="tg://resolve?domain=laserdesign_39" aria-label="Написать в Telegram @laserdesign_39" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Icon name="Send" size={13} aria-hidden="true" />
                @laserdesign_39
              </a>
              <a href="https://max.ru/laserdesign_39" target="_blank" rel="noopener noreferrer" aria-label="Написать в MAX @laserdesign_39" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={13} aria-hidden="true" />
                @laserdesign_39
              </a>
            </div>
          </div>

          {/* Мобильная правая часть */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="w-9 h-9 flex items-center justify-center rounded-md text-primary/60 hover:text-primary transition-colors"
            >
              <Icon name={mobileOpen ? "X" : "Menu"} size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-card border-t border-border px-4 py-4 flex flex-col gap-1 ${mobileOpen ? "" : "hidden"}`}
        aria-hidden={!mobileOpen}
      >
        <nav aria-label="Мобильная навигация">
          {navLink("/", "ГЛАВНАЯ")}
          {navLink("/portfolio", "ПОРТФОЛИО")}
          {navLink("/about", "О НАС")}
        </nav>
        <div className="border-t border-border mt-2 pt-3 px-5 flex flex-col gap-1.5">
          <p className="text-xs font-medium text-primary/40 uppercase tracking-widest mb-1" aria-hidden="true">Контакты</p>
          <a href={`tel:${phone.replace(/\D/g, "").replace(/^8/, "+7")}`} aria-label={`Позвонить: ${phone}`} className="flex items-center gap-2 text-sm text-primary/70 hover:text-primary transition-colors">
            <Icon name="Phone" size={14} aria-hidden="true" />
            {phone}
          </a>
          <a href="tg://resolve?domain=laserdesign_39" aria-label="Написать в Telegram @laserdesign_39" className="flex items-center gap-2 text-sm text-primary/70 hover:text-primary transition-colors">
            <Icon name="Send" size={14} aria-hidden="true" />
            Telegram: @laserdesign_39
          </a>
          <a href="https://max.ru/laserdesign_39" target="_blank" rel="noopener noreferrer" aria-label="Написать в MAX @laserdesign_39" className="flex items-center gap-2 text-sm text-primary/70 hover:text-primary transition-colors">
            <Icon name="MessageCircle" size={14} aria-hidden="true" />
            MAX: @laserdesign_39
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
