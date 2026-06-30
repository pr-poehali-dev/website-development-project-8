import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { cmsGetContent, cmsGetGallery, type GalleryItem, type CmsContent } from "@/lib/cms";

const Portfolio = () => {
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [content, setContent] = useState<Pick<CmsContent, "portfolio_title" | "portfolio_subtitle"> | null>(null);

  useEffect(() => {
    cmsGetGallery().then(setItems);
    cmsGetContent().then((d) => setContent({ portfolio_title: d.portfolio_title, portfolio_subtitle: d.portfolio_subtitle }));
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i! + 1) % items.length);
      if (e.key === "ArrowLeft") setLightbox((i) => (i! - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, items.length]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
      <section aria-label="Портфолио работ" className="pt-20 md:pt-28 pb-24 md:pb-24 bg-card">
        <div className="container mx-auto px-4">

          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-6xl mb-4 md:mb-6">
              {content?.portfolio_title ?? "Наше"} <span className="text-primary">Портфолио</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              {content?.portfolio_subtitle ?? "Примеры наших работ — от корпоративных сувениров до художественных портретов"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 max-w-7xl mx-auto">
            {items.map((item, i) => (
              <button
                key={item.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer text-left w-full"
                onClick={() => setLightbox(i)}
                aria-label={`Открыть фото: ${item.title}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-56 sm:h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-3 md:p-6" aria-hidden="true">
                  <div>
                    <h3 className="text-sm sm:text-lg md:text-2xl font-semibold mb-1 md:mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm hidden sm:block">{item.desc}</p>
                  </div>
                </div>
                <div className="удалить" aria-hidden="true">
                  <div className="bg-background/60 rounded-full p-2 md:p-3">
                    <Icon name="ZoomIn" size={22} className="text-white" />
                  </div>
                </div>
              </button>
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
                <img src="https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/bucket/59c821b6-54a1-4b83-b1f9-483cfbde17e0.png" alt="" aria-hidden="true" className="w-5 h-5 mr-2" />
                Заказать Расчет
              </a>
            </Button>
          </div>
        </div>
      </section>

      </main>
      {lightbox !== null && items[lightbox] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Просмотр фото: ${items[lightbox].title}`}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Закрыть просмотр"
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
            onClick={() => setLightbox(null)}
          >
            <Icon name="X" size={20} aria-hidden="true" />
          </button>

          <button
            aria-label="Предыдущее фото"
            className="absolute left-3 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + items.length) % items.length); }}
          >
            <Icon name="ChevronLeft" size={24} aria-hidden="true" />
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
              <p className="text-white/30 text-xs md:text-sm mt-2" aria-label={`Фото ${lightbox + 1} из ${items.length}`}>{lightbox + 1} / {items.length}</p>
            </div>
          </div>

          <button
            aria-label="Следующее фото"
            className="absolute right-3 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % items.length); }}
          >
            <Icon name="ChevronRight" size={24} aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;