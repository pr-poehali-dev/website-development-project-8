import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <Button 
            variant="outline" 
            className="mb-8"
            onClick={() => navigate('/')}
          >
            <Icon name="ArrowLeft" className="mr-2" size={20} />
            Назад на главную
          </Button>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl mb-6">
              Наше <span className="text-primary">Портфолио</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры наших работ — от корпоративных сувениров до художественных портретов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://cdn.poehali.dev/files/09a1225c-196e-4a02-baf8-3af34e48ea79.png"
                alt="Брелок с логотипом BMW"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Премиум брелоки</h3>
                  <p className="text-muted-foreground">Металлические брелоки с корпоративной символикой</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://cdn.poehali.dev/files/fb10245e-cbb2-4151-a89f-5d3f7dda2dcf.JPG"
                alt="Технические шильдики"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Технические таблички</h3>
                  <p className="text-muted-foreground">Шильдики с VIN-номерами и техническими данными</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://cdn.poehali.dev/files/f07e09e4-132c-41f1-8fa1-14f720a7eb22.png"
                alt="Гравировка на камне"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Гравировка на камне</h3>
                  <p className="text-muted-foreground">Художественная гравировка на натуральных материалах</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://cdn.poehali.dev/files/3e7289b1-1a60-45d4-b257-b70bf7c0aa31.JPG"
                alt="Портреты на металле"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Художественные портреты</h3>
                  <p className="text-muted-foreground">Фотореалистичные портреты на металлических пластинах</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/files/09cc1db6-e0d1-4b3b-be90-e912300e8891.jpg"
                alt="Корпоративные VIP-сувениры"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Корпоративный VIP</h3>
                  <p className="text-muted-foreground">Элитные наборы с ювелирной гравировкой логотипа</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://cdn.poehali.dev/projects/b2a4e3f3-5457-4799-aac4-89add7e3503f/files/2f689d2c-2df6-49fd-8408-5a41c2e90d50.jpg"
                alt="Памятные подарки"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Памятные подарки</h3>
                  <p className="text-muted-foreground">Зажигалки и аксессуары с личной гравировкой</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://cdn.poehali.dev/files/66466256-19a5-4c2a-b6ff-f5238d500d4e.png"
                alt="Брелок Alfa Romeo"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Автомобильные брелоки</h3>
                  <p className="text-muted-foreground">Эксклюзивные брелоки с логотипами автобрендов</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://cdn.poehali.dev/files/1a3f3f9f-482f-4496-8a8b-c8be1d839cbe.png"
                alt="Шильдик BMW M"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Именные шильдики</h3>
                  <p className="text-muted-foreground">Персонализированные таблички с логотипами</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://cdn.poehali.dev/files/dfaab186-b4e5-4186-bb98-81319bc33251.JPG"
                alt="Гравировка на бутылке водки"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Подарочные бутылки</h3>
                  <p className="text-muted-foreground">Персональная гравировка на металлических ёмкостях</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://cdn.poehali.dev/files/5aea554c-9cc2-4280-8e41-a9cdc3c03858.JPG"
                alt="Гравировка на ноже"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Гравировка на инструментах</h3>
                  <p className="text-muted-foreground">Персонализация ножей и других изделий</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://cdn.poehali.dev/files/c651b0d5-4352-44f8-95b1-d4751e71832f.JPG"
                alt="Гравировка на ложке"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Столовые приборы</h3>
                  <p className="text-muted-foreground">Художественная гравировка на посуде и приборах</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Мы специализируемся на создании <span className="text-foreground font-medium">статусных подарков</span> и 
              <span className="text-foreground font-medium"> корпоративных сувениров</span>, которые говорят о высоком положении. 
              От подарочных наборов для партнеров до персональных наград — каждый предмет станет истинным воплощением 
              <span className="text-primary font-medium"> высокого вкуса и внимания к деталям</span>.
            </p>
            <Button size="lg" className="text-lg px-10 py-7 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="https://t.me/laserdesign_39" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Icon name="Send" className="mr-2" size={20} />
                Заказать Расчет
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;