import React, { useState, useEffect } from 'react';
import { Menu, X, Car, History, Wrench, Smartphone, Mail, Phone, MapPin, Github, Instagram, Facebook, Globe } from 'lucide-react';

interface Translation {
  nav: {
    home: string;
    history: string;
    services: string;
    products: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
  };
  history: {
    title: string;
    subtitle: string;
    content1: string;
    content2: string;
    experience: string;
    projects: string;
    cardTitle: string;
    cardContent: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  products: {
    title: string;
    subtitle: string;
    app: {
      title: string;
      description: string;
      features: string[];
    };
    database: {
      title: string;
      description: string;
      features: string[];
    };
    cta: string;
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    location: string;
    footer: string;
  };
}

const translations: Record<string, Translation> = {
  pt: {
    nav: {
      home: 'Início',
      history: 'História',
      services: 'Serviços',
      products: 'Produtos',
      contact: 'Contato'
    },
    hero: {
      title: 'AleMarco Raridades',
      subtitle: 'Sua paixão por carros clássicos encontra aqui o conhecimento, os serviços e as soluções digitais que preservam a história automotiva brasileira.',
      cta1: 'Conheça Nossa História',
      cta2: 'Nossos Serviços'
    },
    history: {
      title: 'Nossa História',
      subtitle: 'Uma Paixão Que Virou Missão',
      content1: 'A AleMarco Raridades nasceu da paixão genuína por carros clássicos e da necessidade de preservar a rica história automotiva brasileira. Nossa jornada começou com a curiosidade de entender cada detalhe, cada linha e cada história por trás dos automóveis que marcaram época.',
      content2: 'Ao longo dos anos, desenvolvemos expertise não apenas em restauração e manutenção, mas também em documentação histórica e soluções digitais que aproximam colecionadores e entusiastas do universo dos carros clássicos.',
      experience: 'Anos de Experiência',
      projects: 'Projetos Realizados',
      cardTitle: 'Tradição e Inovação',
      cardContent: 'Combinamos técnicas tradicionais de restauração com tecnologias modernas para oferecer soluções completas aos nossos clientes.'
    },
    services: {
      title: 'Nossos Serviços',
      subtitle: 'Oferecemos uma gama completa de serviços especializados para preservar e valorizar carros clássicos',
      items: [
        {
          title: 'Restauração Completa',
          description: 'Restauração autêntica respeitando características originais e história do veículo.'
        },
        {
          title: 'Manutenção Preventiva',
          description: 'Cuidados regulares para manter seu clássico em perfeitas condições de funcionamento.'
        },
        {
          title: 'Consultoria Técnica',
          description: 'Orientação especializada para compra, venda e avaliação de carros clássicos.'
        },
        {
          title: 'Documentação Histórica',
          description: 'Pesquisa e registro da história do seu veículo para certificação de autenticidade.'
        },
        {
          title: 'Peças Originais',
          description: 'Localização e fornecimento de peças originais ou reproduzidas com fidelidade.'
        },
        {
          title: 'Avaliação Técnica',
          description: 'Laudos técnicos detalhados para seguros, vendas e certificação de valor.'
        }
      ]
    },
    products: {
      title: 'Produtos Digitais',
      subtitle: 'Soluções digitais inovadoras para conectar entusiastas e preservar a história automotiva',
      app: {
        title: 'Apps Especializados',
        description: 'Desenvolvemos aplicativos móveis que facilitam a vida de colecionadores e entusiastas, oferecendo ferramentas para catalogação, manutenção e networking.',
        features: [
          'Catálogo digital de veículos',
          'Agenda de manutenção',
          'Comunidade de colecionadores'
        ]
      },
      database: {
        title: 'Base de Dados Histórica',
        description: 'Mantemos uma extensa base de dados com informações históricas, especificações técnicas e documentação de carros clássicos brasileiros e importados.',
        features: [
          'Fichas técnicas detalhadas',
          'História de produção',
          'Galeria de imagens históricas'
        ]
      },
      cta: 'Conheça Nossos Produtos'
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Pronto para começar seu projeto? Entre em contato e descubra como podemos ajudar',
      phone: 'Telefone',
      email: 'Email',
      location: 'Localização',
      footer: '© 2025 AleMarco Raridades. Todos os direitos reservados.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      history: 'History',
      services: 'Services',
      products: 'Products',
      contact: 'Contact'
    },
    hero: {
      title: 'AleMarco Raridades',
      subtitle: 'Your passion for classic cars finds here the knowledge, services and digital solutions that preserve Brazilian automotive history.',
      cta1: 'Learn Our History',
      cta2: 'Our Services'
    },
    history: {
      title: 'Our History',
      subtitle: 'A Passion That Became a Mission',
      content1: 'AleMarco Raridades was born from a genuine passion for classic cars and the need to preserve Brazil\'s rich automotive history. Our journey began with curiosity to understand every detail, every line and every story behind the automobiles that marked an era.',
      content2: 'Over the years, we have developed expertise not only in restoration and maintenance, but also in historical documentation and digital solutions that bring collectors and enthusiasts closer to the world of classic cars.',
      experience: 'Years of Experience',
      projects: 'Completed Projects',
      cardTitle: 'Tradition and Innovation',
      cardContent: 'We combine traditional restoration techniques with modern technologies to offer complete solutions to our clients.'
    },
    services: {
      title: 'Our Services',
      subtitle: 'We offer a complete range of specialized services to preserve and enhance classic cars',
      items: [
        {
          title: 'Complete Restoration',
          description: 'Authentic restoration respecting original characteristics and vehicle history.'
        },
        {
          title: 'Preventive Maintenance',
          description: 'Regular care to keep your classic in perfect working condition.'
        },
        {
          title: 'Technical Consulting',
          description: 'Specialized guidance for buying, selling and evaluating classic cars.'
        },
        {
          title: 'Historical Documentation',
          description: 'Research and recording of your vehicle\'s history for authenticity certification.'
        },
        {
          title: 'Original Parts',
          description: 'Location and supply of original or faithfully reproduced parts.'
        },
        {
          title: 'Technical Evaluation',
          description: 'Detailed technical reports for insurance, sales and value certification.'
        }
      ]
    },
    products: {
      title: 'Digital Products',
      subtitle: 'Innovative digital solutions to connect enthusiasts and preserve automotive history',
      app: {
        title: 'Specialized Apps',
        description: 'We develop mobile applications that make life easier for collectors and enthusiasts, offering tools for cataloging, maintenance and networking.',
        features: [
          'Digital vehicle catalog',
          'Maintenance schedule',
          'Collectors community'
        ]
      },
      database: {
        title: 'Historical Database',
        description: 'We maintain an extensive database with historical information, technical specifications and documentation of Brazilian and imported classic cars.',
        features: [
          'Detailed technical sheets',
          'Production history',
          'Historical image gallery'
        ]
      },
      cta: 'Discover Our Products'
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Ready to start your project? Contact us and discover how we can help',
      phone: 'Phone',
      email: 'Email',
      location: 'Location',
      footer: '© 2025 AleMarco Raridades. All rights reserved.'
    }
  }
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'history', 'services', 'products', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 transition-all duration-300 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-red-600 to-red-700 p-2 rounded-xl shadow-lg">
                <Car className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="font-bold text-2xl bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                  AleMarco
                </span>
                <span className="font-light text-xl text-gray-700 ml-1">Raridades</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: t.nav.home },
                { id: 'history', label: t.nav.history },
                { id: 'services', label: t.nav.services },
                { id: 'products', label: t.nav.products },
                { id: 'contact', label: t.nav.contact }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-red-600 to-red-700 shadow-lg'
                      : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-300"
              >
                <Globe className="h-4 w-4" />
                <span>{language.toUpperCase()}</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium text-gray-700 hover:text-red-600"
              >
                <Globe className="h-4 w-4" />
                <span>{language.toUpperCase()}</span>
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-red-600 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-amber-100">
                {[
                  { id: 'home', label: t.nav.home },
                  { id: 'history', label: t.nav.history },
                  { id: 'services', label: t.nav.services },
                  { id: 'products', label: t.nav.products },
                  { id: 'contact', label: t.nav.contact }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium w-full text-left transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-white bg-gradient-to-r from-red-600 to-red-700'
                        : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 to-orange-100/30"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="mb-12">
              <div className="inline-block p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-amber-200">
                <div className="bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-2xl shadow-lg mb-6">
                  <Car className="h-20 w-20 text-white mx-auto" />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                    {t.hero.title.split(' ')[0]}
                  </span>
                  <span className="text-gray-800 ml-4">
                    {t.hero.title.split(' ')[1]}
                  </span>
                </h1>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('history')}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                {t.hero.cta1}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="bg-white text-red-600 border-2 border-red-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-red-600 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                {t.hero.cta2}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 to-orange-50/50"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-block p-4 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-lg mb-6">
              <History className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.history.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900">{t.history.subtitle}</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t.history.content1}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t.history.content2}
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl">
                  <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">15+</div>
                  <div className="text-gray-600 font-medium">{t.history.experience}</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl">
                  <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">500+</div>
                  <div className="text-gray-600 font-medium">{t.history.projects}</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-10 shadow-2xl">
              <div className="aspect-square bg-white/80 backdrop-blur-sm rounded-2xl mb-8 flex items-center justify-center shadow-lg">
                <Car className="h-32 w-32 text-red-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">{t.history.cardTitle}</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t.history.cardContent}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-stone-100 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block p-4 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-lg mb-6">
              <Wrench className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.services.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.items.map((service, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-amber-100"
              >
                <div className="text-5xl mb-6">
                  {['🔧', '🛠️', '📋', '📚', '⚙️', '🔍'][index]}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/30 to-orange-50/30"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-block p-4 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-lg mb-6">
              <Smartphone className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.products.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {t.products.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-10 rounded-3xl shadow-2xl border border-red-100">
              <div className="bg-white p-6 rounded-2xl inline-block mb-8 shadow-lg">
                <Smartphone className="h-12 w-12 text-red-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{t.products.app.title}</h3>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                {t.products.app.description}
              </p>
              <ul className="space-y-4 text-gray-700">
                {t.products.app.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-r from-red-600 to-red-700 rounded-full mr-4"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-3xl shadow-2xl border border-blue-100">
              <div className="bg-white p-6 rounded-2xl inline-block mb-8 shadow-lg">
                <History className="h-12 w-12 text-red-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{t.products.database.title}</h3>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                {t.products.database.description}
              </p>
              <ul className="space-y-4 text-gray-700">
                {t.products.database.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-r from-red-600 to-red-700 rounded-full mr-4"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              {t.products.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/20"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-block p-4 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-lg mb-6">
              <Mail className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.contact.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-orange-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-2xl inline-block mb-8 shadow-xl">
                <Phone className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.contact.phone}</h3>
              <p className="text-gray-300 text-lg">+55 (11) 99999-9999</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-2xl inline-block mb-8 shadow-xl">
                <Mail className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.contact.email}</h3>
              <p className="text-gray-300 text-lg">contato@alemarcoraridades.com</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-2xl inline-block mb-8 shadow-xl">
                <MapPin className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.contact.location}</h3>
              <p className="text-gray-300 text-lg">São Paulo, SP - Brasil</p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-12 mt-16">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-6 md:mb-0">
                <div className="bg-gradient-to-br from-red-600 to-red-700 p-2 rounded-xl">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <div>
                  <span className="font-bold text-2xl bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    AleMarco
                  </span>
                  <span className="font-light text-xl text-gray-300 ml-1">Raridades</span>
                </div>
              </div>
              
              <div className="flex space-x-8">
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300 transform hover:scale-110">
                  <Instagram className="h-7 w-7" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300 transform hover:scale-110">
                  <Facebook className="h-7 w-7" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300 transform hover:scale-110">
                  <Github className="h-7 w-7" />
                </a>
              </div>
            </div>
            
            <div className="text-center mt-12 pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-lg">
                {t.contact.footer} | 
                <span className="ml-2 text-red-400">www.alemarcoraridades.com</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;