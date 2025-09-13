import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/img/e403c4d6-fbab-46c3-89d5-0dd69fe12f23.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-university/90 to-university/70 z-10" />
        
        <div className="container mx-auto px-6 z-20 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
            День абитуриента <br />
            <span className="text-accent-red">СПбГУ</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8 text-lg">
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={20} />
              <span>27 сентября</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={20} />
              <span>Санкт-Петербург</span>
            </div>
          </div>
          
          <p className="text-xl mb-4 max-w-4xl mx-auto">
            Университетская наб., д. 7/9, здание Двенадцати коллегий
          </p>
          <p className="text-lg mb-8 opacity-90">
            (вход с Менделеевской линии, д. 2)
          </p>
          
          <Button 
            size="lg" 
            className="bg-accent-red hover:bg-accent-red/90 text-white px-8 py-4 text-lg font-semibold animate-pulse-glow"
          >
            <Icon name="UserPlus" size={20} className="mr-2" />
            Регистрация
          </Button>
        </div>
      </section>

      {/* Why Visit Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold font-heading mb-6 text-university">
              ПОЧЕМУ СТОИТ ПОСЕТИТЬ ДЕНЬ АБИТУРИЕНТА СПбГУ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              В сентябре в Университете пройдет масштабное мероприятие для поступающих на программы всех уровней образования, 
              родителей абитуриентов, участников интеллектуальных соревнований, проводимых СПбГУ, и иностранных граждан, 
              желающих ознакомиться с образовательными возможностями СПбГУ — День абитуриента Санкт-Петербургского государственного университета.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 font-heading">Ответы на вопросы</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="animate-scale-in hover-lift group cursor-pointer">
              <CardHeader>
                <Icon name="HelpCircle" size={48} className="text-university mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="font-heading group-hover:text-university transition-colors">Ответы на вопросы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Расскажем об образовательных программах, реализуемых в СПбГУ, преимуществах обучения и особенностях приема.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-scale-in hover-lift group cursor-pointer">
              <CardHeader>
                <Icon name="BookOpen" size={48} className="text-success mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="font-heading group-hover:text-success transition-colors">Информация об обучении</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Получите информацию о дополнительных образовательных программах, олимпиадах и конкурсах, научной деятельности, общежитиях и стипендиях.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-scale-in hover-lift group cursor-pointer">
              <CardHeader>
                <Icon name="Users" size={48} className="text-accent-red mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="font-heading group-hover:text-accent-red transition-colors">Мастер-классы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  В рамках Дня абитуриента пройдет профориентационный мастер-класс от Психологической клиники СПбГУ.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-scale-in hover-lift group cursor-pointer">
              <CardHeader>
                <Icon name="Globe" size={48} className="text-university mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="font-heading group-hover:text-university transition-colors">Для иностранных поступающих</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Иностранным поступающим расскажем об алгоритме поступления в СПбГУ, механизме работы с сайтом и личным кабинетом.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 animate-fade-in">
            <CardHeader>
              <Icon name="Building" size={48} className="text-university mb-4" />
              <CardTitle className="font-heading text-2xl">Экскурсии по музеям СПбГУ</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                На протяжении 300 лет Университет собирает, хранит и создает культурные, научные и исторические ценности, 
                познакомиться с которыми вы сможете во время знакомства с музейными коллекциями СПбГУ.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 font-heading text-university">ПРОГРАММА МЕРОПРИЯТИЯ</h2>
          <div className="text-center mb-12">
            <Badge variant="outline" className="text-lg px-4 py-2 mb-2">27 сентября</Badge>
            <p className="text-muted-foreground">
              Санкт-Петербург, Университетская наб., д.7/9, здание Двенадцати коллегий
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <Badge className="bg-university text-white shrink-0">11:00-13:00</Badge>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">День открытых дверей СУНЦ СПбГУ (Академической гимназии имени Д. К. Фаддеева)</h3>
                    <p className="text-muted-foreground mb-2">Актовый зал</p>
                    <p className="text-sm">Презентация «Образовательные программы основного общего и среднего общего образования СУНЦ Санкт-Петербургского государственного университета»</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <Badge className="bg-success text-white w-fit">12:00 и 13:30</Badge>
                    <h3 className="font-semibold">Лекторий «Мир на квантовом уровне»</h3>
                    <p className="text-muted-foreground text-sm">Аудитория 2053</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <Badge className="bg-accent-red text-white w-fit">12:00 и 15:00</Badge>
                    <h3 className="font-semibold">Деловая игра «Бизнес-баланс»</h3>
                    <p className="text-muted-foreground text-sm">Аудитория 3011</p>
                    <p className="text-xs">Ведущий: Иванов Андрей Сергеевич</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-university/5">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <Badge className="bg-university text-white shrink-0">12:00-17:00</Badge>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-4">Выставочная сессия (стенды)</h3>
                    <p className="text-muted-foreground mb-4">Коридор здания Двенадцати коллегий</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      <span>• Бакалавриат и специалитет</span>
                      <span>• Магистратура и аспирантура</span>
                      <span>• Среднее профессиональное образование</span>
                      <span>• Общее образование</span>
                      <span>• Прием иностранных граждан</span>
                      <span>• Дополнительные программы</span>
                      <span>• Олимпиады и конкурсы</span>
                      <span>• Наука в СПбГУ</span>
                      <span>• Общежития, стипендии</span>
                      <span>• Военный учебный центр</span>
                      <span>• Передовая инженерная школа</span>
                      <span>• Онлайн-школы СПбГУ</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-university">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Badge className="bg-university text-white text-lg px-4 py-2">14:00-14:30</Badge>
                  <h3 className="font-semibold text-xl mt-4 mb-2">Преимущества обучения в СПбГУ</h3>
                  <p className="text-muted-foreground">Актовый зал</p>
                  <p className="text-sm mt-2">Приветственное слово и. о. первого проректора по молодежной политике и организации приема Александра Вячеславовича Бабича</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <Badge className="bg-accent-red text-white shrink-0">14:30-15:50</Badge>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Особенности приема в СПбГУ</h3>
                    <p className="text-muted-foreground mb-2">Актовый зал</p>
                    <p className="text-sm mb-2">Выступление заместителя первого проректора Александра Леоновича Хуршудяна</p>
                    <p className="text-xs text-success">• Презентация особенностей приема • Ответы на вопросы</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Badge className="bg-orange-500 text-white w-fit mb-4">15:50-16:00</Badge>
                  <h3 className="font-semibold">Презентация Яндекс Образование</h3>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Badge className="bg-purple-500 text-white w-fit mb-4">16:00-17:00</Badge>
                  <h3 className="font-semibold">Профориентационный мастер-класс</h3>
                  <p className="text-muted-foreground text-sm">от Психологической клиники СПбГУ</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button size="lg" className="bg-accent-red hover:bg-accent-red/90 text-white">
                <Icon name="UserPlus" size={20} className="mr-2" />
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Online Streams */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">ОНЛАЙН-ТРАНСЛЯЦИИ</h2>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button variant="outline" size="lg" className="border-university text-university hover:bg-university hover:text-white">
              <Icon name="Video" size={20} className="mr-2" />
              Онлайн-трансляция Дня абитуриента
            </Button>
            <Button variant="outline" size="lg" className="border-success text-success hover:bg-success hover:text-white">
              <Icon name="Video" size={20} className="mr-2" />
              Онлайн-трансляция Дня открытых дверей Академической гимназии
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-university text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 font-heading">СПбГУ В ЦИФРАХ</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold mb-2">90,2</div>
              <p className="text-sm opacity-90">средний балл ЕГЭ первокурсников</p>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-sm opacity-90">вузов-партнеров по всему миру</p>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold mb-2">7 млн</div>
              <p className="text-sm opacity-90">изданий в фонде Научной библиотеки</p>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold mb-2">5 000+</div>
              <p className="text-sm opacity-90">научно-педагогических работников</p>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold mb-2">30</div>
              <p className="text-sm opacity-90">спортивных объектов</p>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold mb-2">1600+</div>
              <p className="text-sm opacity-90">договоров о практической подготовке</p>
            </div>
          </div>
        </div>
      </section>

      {/* Useful Links */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">ПОЛЕЗНЫЕ ССЫЛКИ ДЛЯ АБИТУРИЕНТОВ</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "КАТАЛОГ ОБРАЗОВАТЕЛЬНЫХ ПРОГРАММ", icon: "BookOpen" },
              { title: "ПОДГОТОВКА К ЕГЭ", icon: "GraduationCap" },
              { title: "ДОПОЛНИТЕЛЬНЫЕ ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ", icon: "Plus" },
              { title: "ОНЛАЙН-КУРСЫ СПбГУ", icon: "Monitor" },
              { title: "УПРАВЛЕНИЕ ПО ОРГАНИЗАЦИИ СПОРТИВНОЙ ДЕЯТЕЛЬНОСТИ", icon: "Trophy" },
              { title: "НАУЧНЫЙ ПАРК СПбГУ", icon: "Microscope" },
              { title: "ГАЙД СТУДЕНТА СПбГУ", icon: "Map" }
            ].map((link, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <Icon name={link.icon} size={48} className="text-university mb-4 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-sm">{link.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get There */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">КАК ДОБРАТЬСЯ</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Bus" size={24} className="text-university" />
                  На общественном транспорте
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  От метро «Василеостровская» и «Спортивная» на автобусе № 24, 
                  троллейбусе № 28 до остановки «Университет».
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Car" size={24} className="text-accent-red" />
                  На автомобиле
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">
                  Санкт-Петербург, Университетская наб., д.7/9, 
                  здание Двенадцати коллегий
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Точка на карте: 59.943 180, 30.297 433
                </p>
                <p className="text-xs text-muted-foreground">
                  * Трансфер до площадки проведения Дня абитуриента не предоставляется.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-university text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">СПбГУ</h3>
            
            <div className="flex justify-center gap-6 mb-8">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
            
            <Separator className="bg-white/20 mb-6" />
            
            <p className="text-sm opacity-75">
              © 2024 Санкт-Петербургский государственный университет
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}