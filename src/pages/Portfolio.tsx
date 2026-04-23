import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const items = [
  { src: "https://cdn.poehali.dev/files/09a1225c-196e-4a02-baf8-3af34e48ea79.png", alt: "Брелок с логотипом BMW", title: "Премиум брелоки", desc: "Металлические брелоки с корпоративной символикой" },
  { src: "https://cdn.poehali.dev/files/fb10245e-cbb2-4151-a89f-5d3f7dda2dcf.JPG", alt: "Технические шильдики", title: "Технические таблички", desc: "Шильдики с VIN-номерами и техническими данными" },
  { src: "https://cdn.poehali.dev/files/f07e09e4-132c-41f1-8fa1-14f720a7eb22.png", alt: "Гравировка на камне", title: "Гравировка на камне", desc: "Художественная гравировка на натуральных материалах" },
  { src: "https://cdn.poehali.dev/files/3e7289b1-1a60-45d4-b257-b70bf7c0aa31.JPG", alt: "Портреты на металле", title: "Художественные портреты", desc: "Фотореалистичные портреты на металлических пластинах" },
  { src: "https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/files/09cc1db6-e0d1-4b3b-be90-e912300e8891.jpg", alt: "Корпоративные VIP-сувениры", title: "Корпоративный VIP", desc: "Элитные наборы с ювелирной гравировкой логотипа" },
  { src: "https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/files/2f689d2c-2df6-49fd-8408-5a41c2e90d50.jpg", alt: "Памятные подарки", title: "Памятные подарки", desc: "Зажигалки и аксессуары с личной гравировкой" },
  { src: "https://cdn.poehali.dev/files/66466256-19a5-4c2a-b6ff-f5238d500d4e.png", alt: "Брелок Alfa Romeo", title: "Автомобильные брелоки", desc: "Эксклюзивные брелоки с логотипами автобрендов" },
  { src: "https://cdn.poehali.dev/files/1a3f3f9f-482f-4496-8a8b-c8be1d839cbe.png", alt: "Шильдик BMW M", title: "Именные шильдики", desc: "Персонализированные таблички с логотипами" },
  { src: "https://cdn.poehali.dev/files/dfaab186-b4e5-4186-bb98-81319bc33251.JPG", alt: "Гравировка на бутылке водки", title: "Подарочные бутылки", desc: "Персональная гравировка на металлических ёмкостях" },
  { src: "https://cdn.poehali.dev/files/5aea554c-9cc2-4280-8e41-a9cdc3c03858.JPG", alt: "Гравировка на ноже", title: "Гравировка на инструментах", desc: "Персонализация ножей и других изделий" },
  { src: "https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/bucket/4aae7efe-bd32-4414-b93b-3d472262a29f.JPG", alt: "Гравировка на кожаных изделиях", title: "Гравировка на кожаных изделиях", desc: "Персонализация кошельков, обложек и кожаных аксессуаров" },
  { src: "https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/bucket/318bfa15-5f1c-40ef-bea5-74648240283b.JPG", alt: "Адресник для питомца", title: "Адресники для питомцев", desc: "Именные жетоны с гравировкой для кошек и собак" },
  { src: "https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/bucket/bf47f743-c606-4cec-86a6-34e73c9e0e7a.JPG", alt: "Гравировка на ручке", title: "Именные ручки", desc: "Гравировка имён и инициалов на фирменных ручках" },
  { src: "https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/bucket/6fca8fd2-8251-46ff-bc6a-1b635ecec22a.JPG", alt: "Подарочная табличка", title: "Подарочные таблички", desc: "Латунные пластины с персональными надписями для подарков" },
  { src: "https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/bucket/7ae9c76c-2ea5-45b3-b944-3f20f4dd0ebc.JPG", alt: "Художественная гравировка на термосе", title: "Гравировка на термосе", desc: "Художественная иллюстрация на металлическом термосе" },
];

const Portfolio = () => {
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i! + 1) % items.length);
      if (e.key === "ArrowLeft") setLightbox((i) => (i! - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="pt-20 md:pt-28 pb-24 md:pb-24 bg-card">
        <div className="container mx-auto px-4">

          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-6xl mb-4 md:mb-6">
              Наше <span className="text-primary">Портфолио</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры наших работ — от корпоративных сувениров до художественных портретов
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 max-w-7xl mx-auto">
            {items.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setLightbox(i)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-56 sm:h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-3 md:p-6">
                  <div>
                    <h3 className="text-sm sm:text-lg md:text-2xl font-semibold mb-1 md:mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm hidden sm:block">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-background/60 rounded-full p-2 md:p-3">
                    <Icon name="ZoomIn" size={22} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-16 max-w-4xl mx-auto text-center">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
              Мы специализируемся на создании <span className="text-foreground font-medium">статусных подарков</span> и{" "}
              <span className="text-foreground font-medium">корпоративных сувениров</span>, которые говорят о высоком положении.
              От подарочных наборов для партнеров до персональных наград — каждый предмет станет истинным воплощением{" "}
              <span className="text-primary font-medium">высокого вкуса и внимания к деталям</span>.
            </p>
            <Button size="lg" className="text-base md:text-lg px-7 md:px-10 py-5 md:py-7 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="https://max.ru/join/a4_5L5pExpVEy3qxjuE6RPyHUMtvbq-6MzLIhrts1PM" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <img src="https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/bucket/59c821b6-54a1-4b83-b1f9-483cfbde17e0.png" alt="Max" className="w-5 h-5 mr-2" />
                Заказать Расчет
              </a>
            </Button>
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
            onClick={() => setLightbox(null)}
          >
            <Icon name="X" size={20} />
          </button>

          <button
            className="absolute left-3 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + items.length) % items.length); }}
          >
            <Icon name="ChevronLeft" size={24} />
          </button>

          <div className="flex flex-col items-center max-w-4xl mx-auto px-4 sm:px-8 md:px-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={items[lightbox].src}
              alt={items[lightbox].alt}
              className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-3 md:mt-4 text-center">
              <h3 className="text-base md:text-xl font-semibold text-white">{items[lightbox].title}</h3>
              <p className="text-white/60 mt-1 text-sm">{items[lightbox].desc}</p>
              <p className="text-white/30 text-xs md:text-sm mt-2">{lightbox + 1} / {items.length}</p>
            </div>
          </div>

          <button
            className="absolute right-3 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % items.length); }}
          >
            <Icon name="ChevronRight" size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;