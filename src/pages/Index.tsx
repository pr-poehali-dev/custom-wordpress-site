import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B35] to-[#e55a2b] rounded-lg flex items-center justify-center">
              <Icon name="Mountain" size={24} className="text-white" />
            </div>
            <div className="text-2xl font-bold text-[#2C3E50]">
              ВысотаПро
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-[#FF6B35] transition-all duration-300 font-medium">Услуги</a>
            <a href="#about" className="text-gray-700 hover:text-[#FF6B35] transition-all duration-300 font-medium">О нас</a>
            <a href="#portfolio" className="text-gray-700 hover:text-[#FF6B35] transition-all duration-300 font-medium">Портфолио</a>
            <a href="#contacts" className="text-gray-700 hover:text-[#FF6B35] transition-all duration-300 font-medium">Контакты</a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2">
              <Icon name="Phone" size={16} className="text-[#FF6B35]" />
              <span className="text-sm font-semibold text-[#2C3E50]">+7 (495) 987-65-43</span>
            </div>
            <Button className="bg-gradient-to-r from-[#FF6B35] to-[#e55a2b] hover:from-[#e55a2b] hover:to-[#d14d20] text-white shadow-lg">
              Бесплатная оценка
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-[#2C3E50] via-[#34495e] to-[#FF6B35] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <img 
          src="/img/335cf3c6-317a-4f37-bb64-9502e27bdd3f.jpg" 
          alt="Промышленный альпинист" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
        />
        <div className="relative z-10 text-center text-white max-w-4xl px-4 mt-20">
          <div className="flex items-center justify-center space-x-2 mb-4 animate-fade-in">
            <Badge className="bg-[#FF6B35] text-white px-3 py-1">25+ лет опыта</Badge>
            <Badge className="bg-white/20 text-white px-3 py-1 backdrop-blur-sm">Лицензия СРО</Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.1s'}}>
            Высотные работы<br />
            <span className="text-[#FF6B35]">любой сложности</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in max-w-2xl mx-auto" style={{animationDelay: '0.2s'}}>
            Промышленный альпинизм, ремонт фасадов, кровельные работы с гарантией безопасности
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.3s'}}>
            <Button size="lg" className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white px-8 py-4 text-lg shadow-xl">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#2C3E50] px-8 py-4 text-lg backdrop-blur-sm">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть работы
            </Button>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex space-x-8 text-center text-white">
            <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-gray-300">Завершенных проектов</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.5s'}}>
              <div className="text-3xl font-bold">15</div>
              <div className="text-sm text-gray-300">Лет на рынке</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-gray-300">Аварийная служба</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#FF6B35] text-white mb-4">Наши услуги</Badge>
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4">Профессиональные решения для высотных работ</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выполняем полный спектр работ на высоте с соблюдением всех требований безопасности и качества
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Building2",
                title: "Мытье и очистка фасадов",
                description: "Профессиональная мойка стеклянных, каменных и металлических фасадов",
                price: "от 120 ₽/м²"
              },
              {
                icon: "Hammer",
                title: "Кровельные работы",
                description: "Ремонт, монтаж и обслуживание всех типов кровельных покрытий",
                price: "от 450 ₽/м²"
              },
              {
                icon: "Zap",
                title: "Электромонтажные работы",
                description: "Прокладка кабелей, установка освещения и вентиляционных систем",
                price: "от 800 ₽/точка"
              },
              {
                icon: "Palette",
                title: "Покрасочные работы",
                description: "Антикоррозийная обработка и покраска металлоконструкций",
                price: "от 200 ₽/м²"
              },
              {
                icon: "Shield",
                title: "Герметизация швов",
                description: "Утепление и герметизация межпанельных швов, устранение протечек",
                price: "от 350 ₽/п.м"
              },
              {
                icon: "Search",
                title: "Техническое обследование",
                description: "Диагностика состояния фасадов и несущих конструкций",
                price: "от 50 ₽/м²"
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#FF6B35]/10 to-transparent rounded-bl-3xl"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#e55a2b] rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#2C3E50] group-hover:to-[#34495e] transition-colors duration-300">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#FF6B35] font-bold text-lg">{service.price}</span>
                    <Button variant="ghost" className="text-[#FF6B35] hover:text-[#e55a2b] p-2">
                      <Icon name="ArrowRight" size={20} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#2C3E50] text-white mb-4">Наши работы</Badge>
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4">Примеры выполненных проектов</h2>
            <p className="text-xl text-gray-600">Качество, которое говорит само за себя</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/img/6b1e9bec-51d8-42ea-a896-31cf3aa26a58.jpg",
                title: "Мойка фасада бизнес-центра",
                category: "Очистка фасадов",
                duration: "3 дня"
              },
              {
                image: "/img/df08b5eb-9683-4236-b3fc-c63d8dea5527.jpg", 
                title: "Ремонт кровли жилого комплекса",
                category: "Кровельные работы",
                duration: "2 недели"
              },
              {
                image: "/img/335cf3c6-317a-4f37-bb64-9502e27bdd3f.jpg",
                title: "Покраска металлоконструкций",
                category: "Покрасочные работы", 
                duration: "1 неделя"
              }
            ].map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <Badge className="bg-[#FF6B35] mb-2">{project.category}</Badge>
                      <div className="text-sm">Сроки: {project.duration}</div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-3 group-hover:text-[#FF6B35] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    <span>Завершено успешно</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-8 py-3">
              Смотреть все проекты
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#2C3E50] text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#FF6B35] text-white mb-6">О компании</Badge>
              <h2 className="text-4xl font-bold mb-6">15 лет безупречной работы на высоте</h2>
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <p>
                  <strong className="text-white">ВысотаПро</strong> — ведущая компания в сфере промышленного альпинизма в Москве. 
                  Мы специализируемся на выполнении высотных работ любой сложности с 2009 года.
                </p>
                <p>
                  Наша команда состоит из сертифицированных альпинистов-профессионалов, которые используют 
                  только современное оборудование и следуют строжайшим стандартам безопасности.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#FF6B35]">500+</div>
                    <div className="text-sm">Завершенных объектов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#FF6B35]">0</div>
                    <div className="text-sm">Несчастных случаев</div>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <Button className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white">
                  Наши сертификаты
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#2C3E50]">
                  Команда профессионалов
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FF6B35]/20 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#FF6B35]/10 rounded-full"></div>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 relative z-10">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Icon name="Award" size={32} className="text-[#FF6B35]" />
                    <div>
                      <h4 className="font-semibold">Лицензия СРО</h4>
                      <p className="text-gray-300 text-sm">Член ассоциации строителей России</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon name="Shield" size={32} className="text-[#FF6B35]" />
                    <div>
                      <h4 className="font-semibold">Страхование</h4>
                      <p className="text-gray-300 text-sm">Полная ответственность до 10 млн ₽</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon name="Clock" size={32} className="text-[#FF6B35]" />
                    <div>
                      <h4 className="font-semibold">Гарантия 3 года</h4>
                      <p className="text-gray-300 text-sm">На все выполненные работы</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#FF6B35] text-white mb-4">Контакты</Badge>
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4">Свяжитесь с нами прямо сейчас</h2>
            <p className="text-xl text-gray-600">Консультация и выезд специалиста — бесплатно</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-[#FF6B35] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2C3E50] mb-3">Телефон</h3>
                  <div className="space-y-1">
                    <div className="text-xl font-semibold text-[#FF6B35]">+7 (495) 987-65-43</div>
                    <div className="text-gray-600">Основной номер</div>
                    <div className="text-xl font-semibold text-[#FF6B35]">+7 (925) 333-22-11</div>
                    <div className="text-gray-600">Аварийная служба 24/7</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-[#FF6B35] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2C3E50] mb-3">Email</h3>
                  <div className="space-y-1">
                    <div className="text-[#FF6B35] font-semibold">info@vysotapro.ru</div>
                    <div className="text-gray-600">Общие вопросы</div>
                    <div className="text-[#FF6B35] font-semibold">order@vysotapro.ru</div>
                    <div className="text-gray-600">Заказы и коммерческие предложения</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-[#FF6B35] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2C3E50] mb-3">Офис</h3>
                  <div className="space-y-1">
                    <div className="text-gray-800 font-medium">г. Москва, ул. Высотная, д. 42</div>
                    <div className="text-gray-600">БЦ "Вертикаль", офис 15А</div>
                    <div className="text-gray-600 text-sm">Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 shadow-2xl border-0 bg-white">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Получить расчет стоимости</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Ваше имя *" 
                    className="border-gray-200 focus:border-[#FF6B35] focus:ring-[#FF6B35] h-12"
                  />
                  <Input 
                    placeholder="Телефон *" 
                    className="border-gray-200 focus:border-[#FF6B35] focus:ring-[#FF6B35] h-12"
                  />
                </div>
                <Input 
                  placeholder="Email" 
                  className="border-gray-200 focus:border-[#FF6B35] focus:ring-[#FF6B35] h-12"
                />
                <Textarea 
                  placeholder="Опишите вашу задачу и объем работ..." 
                  rows={4}
                  className="border-gray-200 focus:border-[#FF6B35] focus:ring-[#FF6B35] resize-none"
                />
                <div className="text-xs text-gray-500 leading-relaxed">
                  Отправляя заявку, вы соглашаетесь с{" "}
                  <a href="#" className="text-[#FF6B35] underline hover:no-underline">политикой конфиденциальности</a>
                </div>
                <Button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#e55a2b] hover:from-[#e55a2b] hover:to-[#d14d20] text-white py-4 text-lg shadow-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Получить расчет
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3E50] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B35] to-[#e55a2b] rounded-lg flex items-center justify-center">
                  <Icon name="Mountain" size={24} className="text-white" />
                </div>
                <div className="text-2xl font-bold">ВысотаПро</div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Профессиональные высотные работы в Москве и МО. 
                Безопасность, качество, надежность с 2009 года.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-colors cursor-pointer">
                  <Icon name="Send" size={20} />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-colors cursor-pointer">
                  <Icon name="Phone" size={20} />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-colors cursor-pointer">
                  <Icon name="Mail" size={20} />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-[#FF6B35]">Услуги</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white transition-colors cursor-pointer">Мытье фасадов</li>
                <li className="hover:text-white transition-colors cursor-pointer">Кровельные работы</li>
                <li className="hover:text-white transition-colors cursor-pointer">Покрасочные работы</li>
                <li className="hover:text-white transition-colors cursor-pointer">Герметизация швов</li>
                <li className="hover:text-white transition-colors cursor-pointer">Техническое обследование</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-[#FF6B35]">Компания</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white transition-colors cursor-pointer">О нас</li>
                <li className="hover:text-white transition-colors cursor-pointer">Наши работы</li>
                <li className="hover:text-white transition-colors cursor-pointer">Сертификаты</li>
                <li className="hover:text-white transition-colors cursor-pointer">Отзывы</li>
                <li className="hover:text-white transition-colors cursor-pointer">Вакансии</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-[#FF6B35]">Рабочее время</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Пн-Пт:</span>
                  <span>9:00-18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Суббота:</span>
                  <span>10:00-16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Воскресенье:</span>
                  <span>Выходной</span>
                </div>
                <div className="mt-4 p-3 bg-[#FF6B35]/20 rounded-lg">
                  <div className="text-[#FF6B35] font-semibold text-sm">Аварийная служба</div>
                  <div className="text-sm">Круглосуточно 24/7</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; 2024 ВысотаПро. Все права защищены.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="text-gray-300 border-gray-600 hover:border-[#FF6B35] hover:text-[#FF6B35] transition-colors">
                СРО №12345
              </Badge>
              <Badge variant="outline" className="text-gray-300 border-gray-600 hover:border-[#FF6B35] hover:text-[#FF6B35] transition-colors">
                15 лет на рынке
              </Badge>
              <Badge variant="outline" className="text-gray-300 border-gray-600 hover:border-[#FF6B35] hover:text-[#FF6B35] transition-colors">
                Страховка 10 млн ₽
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;