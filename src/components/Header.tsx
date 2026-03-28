import { useNavigate, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

          <div className="flex items-center gap-3 md:gap-5">
            <div className="hidden lg:flex items-center gap-4 text-sm text-muted-foreground">
              <a
                href="tel:+79217114353"
                className="flex items-center gap-1.5 hover:text-primary transition-colors font-medium"
              >
                <Icon name="Phone" size={14} className="text-primary" />
                +7 921 711-43-53
              </a>
              <span className="text-border">|</span>
              <a
                href="https://max.ru/join/a4_5L5pExpVEy3qxjuE6RPyHUMtvbq-6MzLIhrts1PM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                <img
                  src="https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/bucket/640062df-fa08-4f48-85a8-94d3426300fa.png"
                  alt="Max"
                  className="w-3.5 h-3.5"
                />
                Max
              </a>
              <a
                href="https://www.instagram.com/laserdesign_39/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                <Icon name="Instagram" size={14} className="text-primary" />
                Instagram
              </a>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="tel:+79217114353"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Icon name="Phone" size={14} className="text-primary" />
              </a>
              <a
                href="https://max.ru/join/a4_5L5pExpVEy3qxjuE6RPyHUMtvbq-6MzLIhrts1PM"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <img
                  src="https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/bucket/640062df-fa08-4f48-85a8-94d3426300fa.png"
                  alt="Max"
                  className="w-4 h-4"
                />
              </a>
              <a
                href="https://www.instagram.com/laserdesign_39/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Icon name="Instagram" size={14} className="text-primary" />
              </a>
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