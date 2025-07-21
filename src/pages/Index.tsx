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
      <header className="bg-gray-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="Clock" size={16} className="text-blue-400" />
                <span>09:00-18:00 в будние дни</span>
              </div>
              <div className="text-sm">info@alpvertikal.ru</div>
              <div className="text-lg font-semibold">+7 (495) 774-09-18</div>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 px-6">
              Перезвоните мне
            </Button>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold">
              VERT<span className="text-blue-400">|</span>CAL
            </div>
            <nav className="flex space-x-8">
              <a href="#services" className="hover:text-blue-400 transition-colors">Услуги</a>
              <a href="#prices" className="hover:text-blue-400 transition-colors">Цены</a>
              <a href="#works" className="hover:text-blue-400 transition-colors">Наши работы</a>
              <a href="#blog" className="hover:text-blue-400 transition-colors">Блог</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">О нас</a>
              <a href="#testimonials" className="hover:text-blue-400 transition-colors">Отзывы</a>
              <a href="#contacts" className="hover:text-blue-400 transition-colors">Контакты</a>
            </nav>
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Icon name="Send" size={16} className="text-white" />
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Icon name="Users" size={16} className="text-white" />
              </div>
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Icon name="Phone" size={16} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Team */}
      <section className="relative min-h-screen bg-gradient-to-r from-gray-800 to-gray-700" style={{
        backgroundImage: `url('https://cdn.poehali.dev/files/d4d647a7-42e2-4c34-8dfa-fa59839865ca.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-6">
                Работаем только с юрлицами
              </h1>
              <p className="text-xl mb-6 text-gray-300">по безналичному расчету</p>
              
              <div className="mb-8">
                <div className="text-3xl font-bold mb-2">25 лет на рынке</div>
                <p className="text-gray-300">Москвы и Московской обл.</p>
              </div>
            </div>
            
            <div className="text-white">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Член СРО</h2>
                <p className="text-gray-300 mb-6">ассоциации строителей России</p>
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {[1,2,3,4,5,6,7,8].map((i) => (
                  <div key={i} className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face`} 
                      alt={`Сотрудник ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price List */}
      <section id="prices" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Прайс-лист</h2>
            <Button variant="link" className="text-blue-500 text-lg">
              Скачать прайс-лист (.xls)
            </Button>
          </div>

          <Card className="overflow-hidden">
            <div className="bg-gray-600 text-white">
              <div className="grid grid-cols-3 gap-4 p-6">
                <div className="font-semibold">Наименование услуги</div>
                <div className="font-semibold">Стоимость от (руб.)</div>
                <div className="font-semibold">Ед. изм.</div>
              </div>
            </div>
            
            <CardContent className="p-0">
              {[
                { service: "Устранение течи кровли", price: "3 500", unit: "шт." },
                { service: "Ремонт кровли из металлочерепицы", price: "500", unit: "м²" },
                { service: "Ремонт фальцевой кровли", price: "800", unit: "м²", tooltip: "Ремонт фальц крыши при помощи заплат или замены элементов. Экстренный ремонт с использованием рулонных материалов." },
                { service: "Ремонт мембранной кровли", price: "100", unit: "м²" },
                { service: "Латочный ремонт плоской (мягкой) кровли", price: "150", unit: "м²" },
                { service: "Ремонт черепичной кровли", price: "200", unit: "м²" },
                { service: "Гидроизоляция кровли", price: "150", unit: "м²" }
              ].map((item, index) => (
                <div key={index} className={`grid grid-cols-3 gap-4 p-6 border-b ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                  <div className="flex items-center">
                    {item.service}
                    {item.tooltip && (
                      <div className="ml-2 relative group">
                        <Icon name="Info" size={16} className="text-gray-400" />
                        <div className="absolute left-0 top-6 bg-gray-800 text-white p-3 rounded-lg w-64 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                          {item.tooltip}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="font-semibold">{item.price} ₽</div>
                  <div className="text-gray-600">{item.unit}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Этапы получения услуг</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "Phone", title: "Свяжитесь с нами удобным вам способом", step: "1" },
              { icon: "Headphones", title: "Наш сотрудник ответит на ваш звонок или запрос", step: "2" },
              { icon: "FileText", title: "Уточнит необходимую информацию", step: "3" },
              { icon: "Users", title: "В удобное для ва время приедет менеджер", step: "4" },
              { icon: "Calculator", title: "Оценит стоимость и составит план", step: "5" },
              { icon: "Link", title: "Альпинисты приступят к заданию", step: "6" },
              { icon: "Handshake", title: "Сдача выполненных работ", step: "7" },
              { icon: "CreditCard", title: "Оплата после подписания акта", step: "8" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={step.icon} size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-500 mb-2">{step.step}.</div>
                <p className="text-gray-600">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Work Section */}
      <section id="works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/e040df27-b46f-487a-9a36-d667ab1bbfc6.png" 
                alt="Проведение работ"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Проведение работ</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Уже не первый год мы спасаем крыши от снега, льда и других неприятностей, которые могут 
                  привести к протечкам и повреждениям. Наши промышленные альпинисты знают все тонкости 
                  работы на высоте и используют только современное оборудование, поэтому вы можете 
                  смело доверить нам свою кровлю.
                </p>
                <p>
                  Мы стремимся не просто убрать наледь или снег, но и сделать всё максимально безопасно — 
                  как для вас, так и для ваших соседей.
                </p>
                <p>
                  Мы ценим ваше время и всегда подстраиваемся под ваш график. Какая бы ни была у вас кровля — 
                  со сложной архитектурой, крутыми уклонами или нестандартными материалами, — мы найдем к ней 
                  идеальный подход. Мы согласуем все детали и сроки заранее, чтобы вы точно знали, когда и как 
                  будут выполняться работы. С нами вы избавитесь от снега, наледи и любых сюрпризов в виде...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наша команда</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Профессиональные альпинисты с многолетним опытом работы на высоте
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Алексей Петров",
                position: "Главный альпинист",
                experience: "15 лет опыта",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
              },
              {
                name: "Михаил Сидоров",
                position: "Альпинист-универсал",
                experience: "12 лет опыта",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
              },
              {
                name: "Дмитрий Иванов",
                position: "Специалист по кровлям",
                experience: "10 лет опыта",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
              },
              {
                name: "Сергей Коновалов",
                position: "Мастер фасадных работ",
                experience: "8 лет опыта",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face"
              }
            ].map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-500 font-medium mb-1">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">Что говорят о нас наши клиенты</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "ООО 'Стройком'",
                position: "Генеральный директор",
                text: "Отличная работа! Быстро, качественно и по разумной цене. Рекомендуем всем!",
                rating: 5
              },
              {
                name: "УК 'Комфорт'",
                position: "Технический директор",  
                text: "Сотрудничаем уже 3 года. Всегда выполняют работы в срок и с гарантией качества.",
                rating: 5
              },
              {
                name: "ЖСК 'Новый дом'",
                position: "Председатель правления",
                text: "Профессиональный подход к делу. Альпинисты вежливые и аккуратные. Спасибо!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Icon 
                        key={star} 
                        name="Star" 
                        size={20} 
                        className={`${star <= testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.position}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Сертификаты и грамоты</h2>
            <p className="text-xl text-gray-600">Наши достижения и квалификация</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Сертификат СРО",
              "Лицензия МЧС",
              "ISO 9001:2015",
              "Благодарность мэра Москвы"
            ].map((cert, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center p-6">
                    <Icon name="Award" size={48} className="text-blue-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900">{cert}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши гарантии</h2>
            <p className="text-xl text-gray-600">Мы несем полную ответственность за качество наших услуг</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Shield",
                title: "Страхование работ",
                description: "Все работы застрахованы на сумму до 5 млн рублей"
              },
              {
                icon: "Clock",
                title: "Гарантия 2 года",
                description: "Предоставляем письменную гарантию на все виды работ"
              },
              {
                icon: "FileCheck",
                title: "Документооборот",
                description: "Работаем только по договору с актами выполненных работ"
              },
              {
                icon: "Users",
                title: "Квалифицированные кадры",
                description: "Все сотрудники имеют соответствующие допуски и сертификаты"
              },
              {
                icon: "Wrench",
                title: "Современное оборудование",
                description: "Используем только сертифицированное альпинистское снаряжение"
              },
              {
                icon: "Phone",
                title: "Круглосуточная поддержка",
                description: "Аварийная служба работает 24/7 для экстренных случаев"
              }
            ].map((guarantee, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={guarantee.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{guarantee.title}</h3>
                <p className="text-gray-600">{guarantee.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacts" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Получите бесплатную консультацию по номеру
              </h2>
              <div className="text-4xl font-bold text-blue-500 mb-6 underline">
                +7 (495) 774-09-18
              </div>
              <p className="text-gray-600 mb-8">
                Или оставьте заявку, и наш менеджер свяжется с вами
              </p>

              <Card className="p-6">
                <form className="space-y-4">
                  <Input placeholder="Имя" className="border-gray-200" />
                  <Input placeholder="E-mail" className="border-gray-200" />
                  <Input placeholder="Телефон" className="border-gray-200" />
                  
                  <div className="text-sm text-gray-500 leading-relaxed">
                    Нажимая кнопку, Вы даете согласие с{" "}
                    <a href="#" className="text-blue-500 underline">политикой конфиденциальности</a>
                    {" "}и принимаете{" "}
                    <a href="#" className="text-blue-500 underline">пользовательское соглашение</a>
                  </div>
                  
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 py-3">
                    Перезвоните мне
                  </Button>
                </form>
              </Card>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://cdn.poehali.dev/files/eeba03d0-c8e4-4b00-8844-28c4bfccf83f.png"
                alt="Альпинистское снаряжение"
                className="max-w-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">VERT<span className="text-blue-400">|</span>CAL</h3>
              <p className="text-gray-300 leading-relaxed">
                Профессиональные услуги промышленного альпинизма в Москве и области. 
                Работаем с 1999 года.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Ремонт кровли</li>
                <li>Мытье фасадов</li>
                <li>Покрасочные работы</li>
                <li>Герметизация швов</li>
                <li>Установка рекламы</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-300">
                <li>О компании</li>
                <li>Наши работы</li>
                <li>Сертификаты</li>
                <li>Вакансии</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <p>+7 (495) 774-09-18</p>
                <p>info@alpvertikal.ru</p>
                <p>г. Москва, ул. Высотная, 25</p>
                <p>БЦ "Вертикаль", офис 501</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 flex justify-between items-center">
            <p className="text-gray-400">&copy; 2024 VERTICAL. Все права защищены.</p>
            <div className="flex space-x-4">
              <Badge variant="outline" className="text-gray-300 border-gray-600">СРО</Badge>
              <Badge variant="outline" className="text-gray-300 border-gray-600">25 лет</Badge>
              <Badge variant="outline" className="text-gray-300 border-gray-600">Страховка</Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;