import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [contactsOpen, setContactsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setContactsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 shrink-0"
          >
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

          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => navigate("/")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === "/"
                  ? "text-primary"
                  : "text-primary/60 hover:text-primary"
              }`}
            >
              ГЛАВНАЯ
            </button>
            <button
              onClick={() => navigate("/portfolio")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === "/portfolio"
                  ? "text-primary"
                  : "text-primary/60 hover:text-primary"
              }`}
            >
              ПОРТФОЛИО
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setContactsOpen((v) => !v)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium text-primary/60 hover:text-primary transition-colors"
              >
                КОНТАКТЫ
                <Icon name="ChevronDown" size={14} className={`transition-transform duration-200 ${contactsOpen ? "rotate-180" : ""}`} />
              </button>

              {contactsOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-card border border-border rounded-xl shadow-xl overflow-hidden">
                  <a
                    href="tel:+79217114353"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-primary/10 transition-colors"
                    onClick={() => setContactsOpen(false)}
                  >
                    <div className="w-7 h-7 flex items-center justify-center rounded-full bg-primary/10">
                      <Icon name="Phone" size={13} className="text-primary" />
                    </div>
                    <span className="text-sm text-foreground">+7 921 711-43-53</span>
                  </a>
                  <a
                    href="https://max.ru/join/a4_5L5pExpVEy3qxjuE6RPyHUMtvbq-6MzLIhrts1PM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-primary/10 transition-colors"
                    onClick={() => setContactsOpen(false)}
                  >
                    <div className="w-7 h-7 flex items-center justify-center rounded-full bg-primary/10">
                      <img
                        src="https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/bucket/640062df-fa08-4f48-85a8-94d3426300fa.png"
                        alt="Max"
                        className="w-3.5 h-3.5"
                      />
                    </div>
                    <span className="text-sm text-foreground">Max — @LaserDesign</span>
                  </a>
                  <a
                    href="https://www.instagram.com/laserdesign_39/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-primary/10 transition-colors"
                    onClick={() => setContactsOpen(false)}
                  >
                    <div className="w-7 h-7 flex items-center justify-center rounded-full bg-primary/10">
                      <Icon name="Instagram" size={13} className="text-primary" />
                    </div>
                    <span className="text-sm text-foreground">@laserdesign_39</span>
                  </a>
                </div>
              )}
            </div>

            <a
              href="https://max.ru/join/a4_5L5pExpVEy3qxjuE6RPyHUMtvbq-6MzLIhrts1PM"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Заказать расчёт
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
