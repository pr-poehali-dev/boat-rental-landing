import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const Index = () => {
  const [date, setDate] = useState<Date>();

  const boats = [
    {
      id: 1,
      name: 'Sea Breeze',
      type: 'Премиум яхта',
      capacity: '8 человек',
      price: '15 000 ₽/час',
      description: 'Роскошная яхта для незабываемого морского путешествия',
      image: 'https://cdn.poehali.dev/projects/73a53089-1be4-4230-a65c-7666f7f08e9d/files/d822834e-8dc8-4033-824e-e5bfd1b040c4.jpg',
      features: ['Каюта', 'Кондиционер', 'Музыка', 'Холодильник']
    },
    {
      id: 2,
      name: 'Wave Runner',
      type: 'Скоростной катер',
      capacity: '6 человек',
      price: '10 000 ₽/час',
      description: 'Современный катер для активного отдыха на воде',
      image: 'https://cdn.poehali.dev/projects/73a53089-1be4-4230-a65c-7666f7f08e9d/files/ab59d239-d647-4bb8-ac8a-dedc83b2517c.jpg',
      features: ['GPS', 'Эхолот', 'Радио', 'Навигация']
    },
    {
      id: 3,
      name: 'Ocean Star',
      type: 'Круизная яхта',
      capacity: '12 человек',
      price: '20 000 ₽/час',
      description: 'Идеальна для корпоративных мероприятий и праздников',
      image: 'https://cdn.poehali.dev/projects/73a53089-1be4-4230-a65c-7666f7f08e9d/files/d822834e-8dc8-4033-824e-e5bfd1b040c4.jpg',
      features: ['Палуба', 'Бар', 'Зона отдыха', 'Кухня']
    },
  ];

  const gallery = [
    { id: 1, title: 'Закат в море', image: 'https://cdn.poehali.dev/projects/73a53089-1be4-4230-a65c-7666f7f08e9d/files/56ce1f78-efb4-4932-bb21-87b282206b25.jpg' },
    { id: 2, title: 'Премиум яхта', image: 'https://cdn.poehali.dev/projects/73a53089-1be4-4230-a65c-7666f7f08e9d/files/d822834e-8dc8-4033-824e-e5bfd1b040c4.jpg' },
    { id: 3, title: 'Капитанская каюта', image: 'https://cdn.poehali.dev/projects/73a53089-1be4-4230-a65c-7666f7f08e9d/files/ab59d239-d647-4bb8-ac8a-dedc83b2517c.jpg' },
  ];

  const rates = [
    { type: 'Малый катер (4-6 мест)', hour: '8 000 ₽', halfDay: '35 000 ₽', fullDay: '60 000 ₽' },
    { type: 'Средний катер (6-8 мест)', hour: '12 000 ₽', halfDay: '50 000 ₽', fullDay: '85 000 ₽' },
    { type: 'Премиум яхта (8-12 мест)', hour: '18 000 ₽', halfDay: '75 000 ₽', fullDay: '130 000 ₽' },
    { type: 'Круизная яхта (12+ мест)', hour: '25 000 ₽', halfDay: '100 000 ₽', fullDay: '180 000 ₽' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Anchor" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">AquaRent</span>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors font-medium">
                Главная
              </button>
              <button onClick={() => scrollToSection('catalog')} className="text-foreground hover:text-primary transition-colors font-medium">
                Каталог
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-foreground hover:text-primary transition-colors font-medium">
                Галерея
              </button>
              <button onClick={() => scrollToSection('rates')} className="text-foreground hover:text-primary transition-colors font-medium">
                Тарифы
              </button>
              <button onClick={() => scrollToSection('booking')} className="text-foreground hover:text-primary transition-colors font-medium">
                Бронирование
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors font-medium">
                Контакты
              </button>
            </div>
            <Button onClick={() => scrollToSection('booking')} className="hidden md:block">
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 opacity-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full animate-wave">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor" className="text-primary/30"></path>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Аренда катеров и яхт
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Незабываемые морские приключения в вашем распоряжении
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" onClick={() => scrollToSection('catalog')} className="text-lg px-8 py-6">
                <Icon name="Ship" className="mr-2" size={20} />
                Выбрать катер
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')} className="text-lg px-8 py-6">
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наш флот</h2>
            <p className="text-xl text-muted-foreground">Выберите идеальный катер для вашего путешествия</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boats.map((boat, index) => (
              <Card key={boat.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-video overflow-hidden">
                  <img src={boat.image} alt={boat.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{boat.name}</CardTitle>
                  <CardDescription className="text-base">{boat.type}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{boat.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Users" size={16} />
                    <span>{boat.capacity}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {boat.features.map((feature) => (
                      <span key={feature} className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-2xl font-bold text-primary">{boat.price}</span>
                    <Button onClick={() => scrollToSection('booking')}>
                      Забронировать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Фотогалерея</h2>
            <p className="text-xl text-muted-foreground">Моменты счастья наших клиентов</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div key={item.id} className="group relative overflow-hidden rounded-lg aspect-video animate-fade-in hover:shadow-xl transition-all" style={{ animationDelay: `${index * 0.1}s` }}>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-xl font-semibold p-6">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rates" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифы</h2>
            <p className="text-xl text-muted-foreground">Выгодные условия аренды на любой срок</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="py-4 px-6 text-left font-semibold">Тип катера</th>
                    <th className="py-4 px-6 text-center font-semibold">1 час</th>
                    <th className="py-4 px-6 text-center font-semibold">Полдня (4 часа)</th>
                    <th className="py-4 px-6 text-center font-semibold">Целый день (8 часов)</th>
                  </tr>
                </thead>
                <tbody>
                  {rates.map((rate, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="py-4 px-6 font-medium">{rate.type}</td>
                      <td className="py-4 px-6 text-center">{rate.hour}</td>
                      <td className="py-4 px-6 text-center">{rate.halfDay}</td>
                      <td className="py-4 px-6 text-center">{rate.fullDay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 p-6 bg-accent rounded-lg">
              <div className="flex items-start gap-3">
                <Icon name="Info" className="text-accent-foreground mt-1" size={20} />
                <div className="text-sm text-accent-foreground space-y-2">
                  <p className="font-semibold">Дополнительная информация:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>В стоимость включено: топливо, капитан, страховка</li>
                    <li>Залог: 30% от стоимости аренды</li>
                    <li>Скидка 15% при аренде от 3 дней</li>
                    <li>Возможна аренда с личным капитаном или без</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Бронирование</h2>
            <p className="text-xl text-muted-foreground">Забронируйте катер прямо сейчас</p>
          </div>
          <Card className="max-w-2xl mx-auto shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Форма бронирования</CardTitle>
              <CardDescription>Заполните форму, и мы свяжемся с вами в ближайшее время</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Количество гостей</Label>
                  <Input id="guests" type="number" placeholder="6" min="1" max="20" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Дата начала</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <Icon name="CalendarDays" className="mr-2" size={16} />
                        {date ? format(date, 'PPP', { locale: ru }) : 'Выберите дату'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Длительность</Label>
                  <Input id="duration" placeholder="4 часа" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Комментарий</Label>
                <Input id="message" placeholder="Особые пожелания или вопросы" />
              </div>
              <Button className="w-full" size="lg">
                <Icon name="Send" className="mr-2" size={18} />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами любым удобным способом</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Phone" className="text-primary" size={32} />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">+7 (999) 123-45-67</p>
                <p className="text-sm text-muted-foreground mt-2">Ежедневно с 9:00 до 21:00</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Mail" className="text-primary" size={32} />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">info@aquarent.ru</p>
                <p className="text-sm text-muted-foreground mt-2">Ответим в течение 1 часа</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon name="MapPin" className="text-primary" size={32} />
                </div>
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">г. Сочи, Морской вокзал</p>
                <p className="text-sm text-muted-foreground mt-2">Причал №5</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Card className="max-w-3xl mx-auto bg-primary text-primary-foreground">
              <CardContent className="py-8">
                <h3 className="text-2xl font-bold mb-4">О компании AquaRent</h3>
                <p className="text-lg leading-relaxed opacity-95">
                  Мы предоставляем услуги аренды катеров и яхт уже более 10 лет. Наш флот состоит из современных и комфортабельных судов, 
                  которые регулярно проходят техническое обслуживание. Все капитаны имеют международные сертификаты и большой опыт морских путешествий. 
                  Мы гарантируем безопасность, комфорт и незабываемые впечатления от морских прогулок.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Anchor" size={28} />
                <span className="text-2xl font-bold">AquaRent</span>
              </div>
              <p className="text-secondary-foreground/80">Аренда катеров и яхт премиум-класса для незабываемого отдыха на море</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Быстрые ссылки</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('catalog')} className="block hover:underline text-secondary-foreground/80 hover:text-secondary-foreground">Каталог</button>
                <button onClick={() => scrollToSection('rates')} className="block hover:underline text-secondary-foreground/80 hover:text-secondary-foreground">Тарифы</button>
                <button onClick={() => scrollToSection('booking')} className="block hover:underline text-secondary-foreground/80 hover:text-secondary-foreground">Бронирование</button>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:scale-110 transition-transform">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="hover:scale-110 transition-transform">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="hover:scale-110 transition-transform">
                  <Icon name="Youtube" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/60">
            <p>&copy; 2024 AquaRent. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;