import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.9)), url('https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/files/3f21c25b-c0c4-466e-8bff-33c328682074.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in-up">
          <div className="mb-8 flex justify-center">
            <img 
              src="https://cdn.poehali.dev/files/4982d315-c954-414c-ae74-6dce639d2efc.png" 
              alt="LaserDesign" 
              className="h-12 md:h-18 w-auto brightness-0 invert"
            />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight uppercase">
            Искусство Лазерной <br />
            <span className="text-primary">Маркировки на Металле</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light">
            Превращаем обычные металлические изделия в <span className="text-primary">статусные сувениры</span> и <span className="text-primary">памятные подарки</span> с безупречной точностью
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <Icon name="ChevronDown" className="text-primary" size={32} />
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl mb-6">
              Ваш проект — в руках <span className="text-primary">лучших</span>
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
            <h2 className="text-4xl md:text-5xl mb-6">
              Наши <span className="text-primary">Преимущества</span>
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
            <h2 className="text-4xl md:text-5xl mb-6">
              Эксклюзивные <span className="text-primary">Сувениры</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Мы специализируемся на создании <span className="text-foreground font-medium">статусных подарков</span> и 
              <span className="text-foreground font-medium"> корпоративных сувениров</span>, которые говорят о высоком положении. 
              От подарочных наборов для партнеров до персональных наград — каждый предмет станет истинным воплощением 
              <span className="text-primary font-medium"> высокого вкуса и внимания к деталям</span>.
            </p>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10" onClick={() => navigate('/portfolio')}>
              <Icon name="Image" className="mr-2" size={20} />
              Смотреть Портфолио
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">
              Отзывы <span className="text-primary">Клиентов</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас те, кто доверил свои проекты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-card border-border">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Star" className="text-primary fill-primary" size={20} />
                <Icon name="Star" className="text-primary fill-primary" size={20} />
                <Icon name="Star" className="text-primary fill-primary" size={20} />
                <Icon name="Star" className="text-primary fill-primary" size={20} />
                <Icon name="Star" className="text-primary fill-primary" size={20} />
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "Заказывали корпоративные подарки для партнеров. Дизайнеры создали невероятные макеты — 
                каждая деталь проработана идеально. Качество гравировки премиальное, а цены приятно удивили. 
                При таком уровне работы ожидали гораздо дороже!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="User" className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-semibold">Александр М.</p>
                  <p className="text-sm text-muted-foreground">Директор компании</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Star" className="text-primary fill-primary" size={20} />
                <Icon name="Star" className="text-primary fill-primary" size={20} />
                <Icon name="Star" className="text-primary fill-primary" size={20} />
                <Icon name="Star" className="text-primary fill-primary" size={20} />
                <Icon name="Star" className="text-primary fill-primary" size={20} />
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "Нужно было срочно изготовить технические шильдики с VIN-номерами. Сделали за 3 дня вместо обещанной недели! 
                Качество высочайшее, всё читается идеально. Цены демократичные, очень доволен скоростью и профессионализмом."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="User" className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-semibold">Дмитрий К.</p>
                  <p className="text-sm text-muted-foreground">Владелец автосервиса</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Star" className="text-primary fill-primary" size={20} />
                <Icon name="Star" className="text-primary fill-primary" size={20} />
                <Icon name="Star" className="text-primary fill-primary" size={20} />
                <Icon name="Star" className="text-primary fill-primary" size={20} />
                <Icon name="Star" className="text-primary fill-primary" size={20} />
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "Заказывала портреты на металле в подарок родителям. Дизайнер виртуозно обработал фотографии — 
                детализация потрясающая! Сделали за неделю точно в срок. Выглядит очень дорого, а стоимость вполне доступная. 
                Великолепная работа!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="User" className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-semibold">Елена В.</p>
                  <p className="text-sm text-muted-foreground">Частный заказчик</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Star" className="text-primary fill-primary" size={20} />
                <Icon name="Star" className="text-primary fill-primary" size={20} />
                <Icon name="Star" className="text-primary fill-primary" size={20} />
                <Icon name="Star" className="text-primary fill-primary" size={20} />
                <Icon name="Star" className="text-primary fill-primary" size={20} />
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "Заказывал корпоративные подарки для партнёров — визитницы с логотипом компании. 
                Маркировка выполнена безупречно, каждая деталь проработана. Партнёры в восторге от качества! 
                Теперь обращаюсь только сюда для всех представительских сувениров."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="User" className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-semibold">Александр М.</p>
                  <p className="text-sm text-muted-foreground">Директор компании</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Star" className="text-primary fill-primary" size={20} />
                <Icon name="Star" className="text-primary fill-primary" size={20} />
                <Icon name="Star" className="text-primary fill-primary" size={20} />
                <Icon name="Star" className="text-primary fill-primary" size={20} />
                <Icon name="Star" className="text-primary fill-primary" size={20} />
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "Сделали памятные медали для спортивного турнира. Работа выполнена быстро и качественно, 
                дизайн согласовали за день. Участники довольны, медали выглядят статусно и солидно. 
                Рекомендую для организации мероприятий!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="User" className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-semibold">Ирина С.</p>
                  <p className="text-sm text-muted-foreground">Организатор мероприятий</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Star" className="text-primary fill-primary" size={20} />
                <Icon name="Star" className="text-primary fill-primary" size={20} />
                <Icon name="Star" className="text-primary fill-primary" size={20} />
                <Icon name="Star" className="text-primary fill-primary" size={20} />
                <Icon name="Star" className="text-primary fill-primary" size={20} />
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "Заказывал таблички с QR-кодами для выставочного стенда. Всё выполнено идеально — 
                коды читаются без проблем, металл качественный, смотрится современно и технологично. 
                Отличное решение для бизнеса, спасибо за оперативность!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="User" className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-semibold">Сергей П.</p>
                  <p className="text-sm text-muted-foreground">Представитель IT-компании</p>
                </div>
              </div>
            </Card>
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
            <h2 className="text-4xl md:text-6xl mb-6">
              Обсудите Ваш <br />
              <span className="text-primary">Уникальный Проект</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Ваш VIP-сувенир заслуживает индивидуального подхода. Свяжитесь с нами, 
              чтобы обсудить детали и получить расчет от нашего ведущего дизайнера.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-10 py-7 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="https://t.me/laserdesign_39" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Icon name="Send" className="mr-2" size={20} />
                  Заказать Расчет
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-primary text-primary hover:bg-primary/10" onClick={() => navigate('/portfolio')}>
                <Icon name="Image" className="mr-2" size={20} />
                Смотреть Портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-foreground">
              Контакты
            </h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами удобным способом
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Телефон</h3>
              <a href="tel:+79217114353" className="text-muted-foreground hover:text-primary transition-colors">
                +7 921 711-43-53
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Send" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Telegram</h3>
              <a href="https://t.me/laserdesign_39" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                @laserdesign_39
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">E-mail</h3>
              <a href="mailto:laserdesign39@yandex.ru" className="text-muted-foreground hover:text-primary transition-colors break-all text-sm">
                laserdesign39@yandex.ru
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Instagram" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Instagram</h3>
              <a href="https://instagram.com/laserdesign_39" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                @laserdesign_39
              </a>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 LaserDesign. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;