import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.9)), url('https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/files/611fed69-21f5-4e81-a580-97c7aa5f6a23.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-tight">
            Искусство Лазерной <br />
            <span className="text-primary font-semibold">Маркировки на Металле</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light">
            Превращаем обычные металлические изделия в <span className="text-primary">статусные сувениры</span> и <span className="text-primary">памятные подарки</span> с безупречной точностью
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90">
              Заказать Расчет
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10">
              Смотреть Портфолио
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <Icon name="ChevronDown" className="text-primary" size={32} />
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Ваш проект — в руках <span className="text-primary font-semibold">лучших</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Высокое качество начинается не с лазера, а с <span className="text-foreground font-medium">дизайнера</span>. 
              Мы — команда, собранная из перфекционистов, художников и инженеров. Наши дизайнеры обладают 
              <span className="text-foreground font-medium"> исключительным чувством стиля</span> и опытом работы с VIP-заказами. 
              Они не просто переносят изображение, они адаптируют его под материал и технологию, гарантируя, 
              что ваш сувенир будет выглядеть <span className="text-primary font-medium">безупречно и статусно</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-background border-border hover:border-primary transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Icon name="Users" className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Команда профессионалов</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Опытные дизайнеры с портфолио премиальных проектов для корпоративных и частных клиентов
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-background border-border hover:border-primary transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Icon name="Sparkles" className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Индивидуальный подход</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Каждый проект уникален — разрабатываем макеты с учетом материала, формы и вашего брендбука
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Наши <span className="text-primary font-semibold">Преимущества</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Исключительность в каждой детали
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6">
                  <Icon name="Crosshair" className="text-primary" size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Непревзойденная Точность</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Премиальное волоконное лазерное оборудование. Точность до 5 микрон (0,005 мм). 
                  Гарантируем безупречную детализацию.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6">
                  <Icon name="Award" className="text-primary" size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Материалы VIP-класса</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Работаем с драгоценными, легированными и сложными металлами. Контроль качества на каждом этапе.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6">
                  <Icon name="Palette" className="text-primary" size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Персональная Разработка</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Каждый VIP-сувенир — уникальный проект. Эксклюзивный макет с учетом всех нюансов металла и формы.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6">
                  <Icon name="Clock" className="text-primary" size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Соблюдение Сроков</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ценим ваше время. Четкие этапы работы и строгий тайминг позволяют выполнять заказы точно в срок.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Эксклюзивные <span className="text-primary font-semibold">Сувениры</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ваша история, выгравированная в металле
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/files/553b7f98-da98-403a-927e-8c40a5aaf1a4.jpg"
                alt="Корпоративные VIP-сувениры"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Корпоративный VIP</h3>
                  <p className="text-muted-foreground">Элитные ручки, флешки, термосы с ювелирной гравировкой логотипа</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/files/7a792eb1-5dff-4dc4-9649-d7e1393cebd6.jpg"
                alt="Памятные подарки"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Памятные подарки</h3>
                  <p className="text-muted-foreground">Часы, зажигалки, жетоны с личными надписями или геральдикой</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/files/611fed69-21f5-4e81-a580-97c7aa5f6a23.jpg"
                alt="Техническая маркировка"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Сложная маркировка</h3>
                  <p className="text-muted-foreground">Шильдики и таблички с идеальной читаемостью серийных номеров</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы специализируемся на создании <span className="text-foreground font-medium">статусных подарков</span> и 
              <span className="text-foreground font-medium"> корпоративных сувениров</span>, которые говорят о высоком положении. 
              От подарочных наборов для партнеров до персональных наград — каждый предмет станет истинным воплощением 
              <span className="text-primary font-medium"> высокого вкуса и внимания к деталям</span>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-background relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/files/7a792eb1-5dff-4dc4-9649-d7e1393cebd6.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light mb-6">
              Обсудите Ваш <br />
              <span className="text-primary font-semibold">Уникальный Проект</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Ваш VIP-сувенир заслуживает индивидуального подхода. Свяжитесь с нами, 
              чтобы обсудить детали и получить расчет от нашего ведущего дизайнера.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-10 py-7 bg-primary text-primary-foreground hover:bg-primary/90">
                <Icon name="Send" className="mr-2" size={20} />
                Заказать Расчет
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-primary text-primary hover:bg-primary/10">
                <Icon name="Image" className="mr-2" size={20} />
                Смотреть Портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Лазерная Маркировка. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="MapPin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
