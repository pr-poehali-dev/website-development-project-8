import Header from "@/components/Header";
import Icon from "@/components/ui/icon";

const aboutItems = [
  {
    icon: "Layers",
    title: "Универсальность",
    text: "Работаем с металлом (сталь, алюминий, латунь), кожей, пластиком и даже камнем.",
  },
  {
    icon: "RotateCw",
    title: "Любые формы",
    text: "Благодаря поворотному устройству гравируем на цилиндрических поверхностях — от зажигалок и термосов до промышленных труб.",
  },
  {
    icon: "ScanLine",
    title: "Высокая детализация",
    text: "Рабочее поле 300×300 мм позволяет наносить мельчайшие шрифты и сложные логотипы без потери качества.",
  },
  {
    icon: "FileEdit",
    title: "Помощь с макетом",
    text: "Нет готового чертежа? Поможем подготовить файл для гравировки.",
  },
];

const About = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />

    <section className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-10 md:mb-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">О нашей мастерской лазерной маркировки</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Точность.{" "}
            <span className="text-primary">Надёжность.</span>{" "}
            Качество.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Мы специализируемся на глубокой и поверхностной гравировке с использованием оптоволоконного лазера мощностью 30 Вт. В отличие от обычной печати, наша маркировка врезается в материал и остаётся на нём навсегда.
          </p>
        </div>

        <div className="mb-8 md:mb-12">
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-6">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutItems.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 shrink-0 mt-0.5">
                  <Icon name={item.icon as Parameters<typeof Icon>[0]["name"]} size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">{item.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 shrink-0">
            <Icon name="MessageCircle" size={22} className="text-primary" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-foreground mb-1">Готовы обсудить ваш заказ?</p>
            <p className="text-sm text-muted-foreground">Свяжитесь с нами — рассчитаем стоимость и поможем с макетом.</p>
          </div>
          <a
            href="https://max.ru/join/a4_5L5pExpVEy3qxjuE6RPyHUMtvbq-6MzLIhrts1PM"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Заказать расчёт
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default About;
