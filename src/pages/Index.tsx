import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-[#2C3E50]">
            АльпСервис
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-[#FF6B35] transition-colors">Услуги</a>
            <a href="#blog" className="text-gray-700 hover:text-[#FF6B35] transition-colors">Блог</a>
            <a href="#contacts" className="text-gray-700 hover:text-[#FF6B35] transition-colors">Контакты</a>
          </nav>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">+7 (495) 123-45-67</span>
            <Button className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white">
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-[#2C3E50] via-[#34495e] to-[#FF6B35] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <img 
          src="/img/aace79e9-222d-4942-a29b-0a3924555290.jpg" 
          alt="Промышленный альпинизм" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
        />
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Промышленный<br />
            <span className="text-[#FF6B35]">Альпинизм</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Профессиональные высотные работы любой сложности
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white px-8 py-4 text-lg">
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#2C3E50] px-8 py-4 text-lg">
              Наши услуги
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выполняем все виды высотных работ с соблюдением требований безопасности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Building",
                title: "Мытье фасадов",
                description: "Профессиональная очистка стеклянных и каменных фасадов зданий"
              },
              {
                icon: "Wrench",
                title: "Ремонт кровли",
                description: "Устранение протечек, замена покрытий, монтаж водостоков"
              },
              {
                icon: "Zap",
                title: "Электромонтаж",
                description: "Прокладка кабелей, установка освещения на высотных объектах"
              },
              {
                icon: "Paintbrush",
                title: "Покрасочные работы",
                description: "Антикоррозийная обработка и покраска металлоконструкций"
              },
              {
                icon: "Shield",
                title: "Герметизация швов",
                description: "Утепление и герметизация межпанельных швов"
              },
              {
                icon: "Camera",
                title: "Техническое обследование",
                description: "Диагностика состояния фасадов и конструкций"
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2C3E50] transition-colors">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4">Блог</h2>
            <p className="text-xl text-gray-600">Полезные статьи о промышленном альпинизме</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Техника безопасности при высотных работах",
                excerpt: "Основные правила и требования безопасности для альпинистов-промышленников",
                date: "15 января 2024"
              },
              {
                title: "Современное оборудование для альпинизма",
                excerpt: "Обзор новейших технологий и инструментов для высотных работ",
                date: "10 января 2024"
              },
              {
                title: "Мойка фасадов: особенности технологии",
                excerpt: "Детальный разбор процесса очистки различных типов фасадов",
                date: "5 января 2024"
              }
            ].map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-[#2C3E50] to-[#FF6B35] rounded-t-lg"></div>
                <CardContent className="p-6">
                  <div className="text-sm text-[#FF6B35] mb-2">{post.date}</div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-3 group-hover:text-[#FF6B35] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-[#FF6B35] font-medium">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами для консультации</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Телефон</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                  <p className="text-gray-600">+7 (925) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Email</h3>
                  <p className="text-gray-600">info@alpservice.ru</p>
                  <p className="text-gray-600">zakaz@alpservice.ru</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Адрес</h3>
                  <p className="text-gray-600">г. Москва, ул. Промышленная, д. 15</p>
                  <p className="text-gray-600">БЦ "Высота", офис 301</p>
                </div>
              </div>
            </div>

            <Card className="p-8 shadow-lg border-0">
              <h3 className="text-2xl font-semibold text-[#2C3E50] mb-6">Оставить заявку</h3>
              <form className="space-y-6">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    className="border-gray-200 focus:border-[#FF6B35] focus:ring-[#FF6B35]"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Телефон" 
                    className="border-gray-200 focus:border-[#FF6B35] focus:ring-[#FF6B35]"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Email" 
                    className="border-gray-200 focus:border-[#FF6B35] focus:ring-[#FF6B35]"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Опишите задачу" 
                    rows={4}
                    className="border-gray-200 focus:border-[#FF6B35] focus:ring-[#FF6B35]"
                  />
                </div>
                <Button className="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white py-3">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3E50] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">АльпСервис</h3>
              <p className="text-gray-300 leading-relaxed">
                Профессиональные услуги промышленного альпинизма в Москве и области. 
                Работаем с 2010 года.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Мытье фасадов</li>
                <li>Ремонт кровли</li>
                <li>Покрасочные работы</li>
                <li>Герметизация</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <p>+7 (495) 123-45-67</p>
                <p>info@alpservice.ru</p>
                <p>г. Москва, ул. Промышленная, 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 АльпСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;