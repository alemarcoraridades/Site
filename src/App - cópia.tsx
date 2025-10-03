import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Car,
  History,
  Wrench,
  Smartphone,
  Mail,
  Phone,
  MapPin,
  Github,
  Instagram,
  Facebook,
  Globe
} from 'lucide-react';

// Traduções PT/EN
const translations = {
  pt: {
    nav: {
      home: "Início",
      history: "História",
      services: "Serviços",
      products: "Produtos",
      contact: "Contato",
      classics: "Alemarco Classics",
    },
    hero: {
      title: "Carros Antigos",
      subtitle: "Descubra, avalie e preserve raridades automotivas",
      cta1: "Saiba Mais",
      cta2: "Nossos Serviços",
    },
    history: {
      title: "Nossa História",
      content:
        "Há décadas apaixonados por carros antigos, ajudamos colecionadores e entusiastas a preservar a memória automotiva brasileira.",
    },
    services: {
      title: "Serviços",
      items: [
        "Avaliação de carros antigos",
        "Consultoria para restauração",
        "Compra e venda de raridades",
        "Eventos e exposições",
      ],
    },
    products: {
      title: "Produtos",
      content:
        "Conheça nossos e-books, audiobooks e aplicativos criados para entusiastas e colecionadores.",
    },
    contact: {
      title: "Fale Conosco",
      email: "contato@alemarcoraridades.com",
      phone: "+55 (11) 99999-9999",
      address: "São Paulo - Brasil",
    },
  },
  en: {
    nav: {
      home: "Home",
      history: "History",
      services: "Services",
      products: "Products",
      contact: "Contact",
      classics: "Alemarco Classics",
    },
    hero: {
      title: "Classic Cars",
      subtitle: "Discover, evaluate and preserve automotive rarities",
      cta1: "Learn More",
      cta2: "Our Services",
    },
    history: {
      title: "Our History",
      content:
        "For decades passionate about classic cars, we help collectors and enthusiasts preserve Brazilian automotive heritage.",
    },
    services: {
      title: "Services",
      items: [
        "Classic car appraisal",
        "Restoration consulting",
        "Buying and selling rarities",
        "Events and exhibitions",
      ],
    },
    products: {
      title: "Products",
      content:
        "Check out our e-books, audiobooks and apps created for enthusiasts and collectors.",
    },
    contact: {
      title: "Contact Us",
      email: "contact@alemarcoraridades.com",
      phone: "+1 (555) 123-4567",
      address: "São Paulo - Brazil",
    },
  },
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
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 transition-all duration-300 border-b border-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
                <img
                  src="./src/logo.jpg"
                  alt="AleMarco Raridades"
                  className="h-10 w-auto object-contain"
                />
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
                  className={`px-4 py-2 rounded-full text-sm font-body transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-primary to-accent shadow-lg'
                      : 'text-secondary hover:text-primary hover:bg-muted'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-body text-secondary hover:text-primary hover:bg-muted transition-all duration-300"
              >
                <Globe className="h-4 w-4" />
                <span>{language.toUpperCase()}</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-body text-secondary hover:text-primary"
              >
                <Globe className="h-4 w-4" />
                <span>{language.toUpperCase()}</span>
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-secondary hover:text-primary p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-muted">
                {[
                  { id: 'home', label: t.nav.home },
                  { id: 'history', label: t.nav.history },
                  { id: 'services', label: t.nav.services },
                  { id: 'products', label: t.nav.products },
                  { id: 'contact', label: t.nav.contact },
                  { id: 'classics', label: t.nav.classics }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block px-4 py-3 rounded-xl text-base font-body w-full text-left transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-white bg-gradient-to-r from-primary to-accent'
                        : 'text-secondary hover:text-primary hover:bg-muted'
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
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-accent/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="mb-12">
              <div className="inline-block p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-muted">
                <div className="bg-gradient-to-br from-primary to-accent p-6 rounded-2xl shadow-lg mb-6">
                  <Car className="h-20 w-20 text-white mx-auto" />
                </div>
                <h1 className="text-5xl md:text-7xl font-display mb-6">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t.hero.title.split(' ')[0]}
                  </span>
                  <span className="text-secondary ml-4">
                    {t.hero.title.split(' ')[1]}
                  </span>
                </h1>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-secondary mb-12 max-w-4xl mx-auto leading-relaxed font-body">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('history')}
                className="bg-gradient-to-r from-primary to-accent text-white px-10 py-4 rounded-full font-display text-lg hover:from-primary-dark hover:to-accent-dark transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                {t.hero.cta1}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="bg-white text-primary border-2 border-primary px-10 py-4 rounded-full font-display text-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                {t.hero.cta2}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <History className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-display mb-6 text-primary">{t.history.title}</h2>
          <p className="text-lg text-secondary leading-relaxed font-body">{t.history.content}</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-6xl mx-auto text-center">
          <Wrench className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-display mb-12 text-primary">{t.services.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.services.items.map((service: string, index: number) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-lg border border-muted hover:shadow-xl transition"
              >
                <p className="text-lg font-body text-secondary">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <Smartphone className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-display mb-6 text-primary">{t.products.title}</h2>
          <p className="text-lg text-secondary leading-relaxed font-body">{t.products.content}</p>
        </div>
      </section>


      {/* AleMarco Classics Section */}
      <section id="classics" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-display mb-6 text-primary">AleMarco Classics</h2>
            <p className="text-lg text-secondary leading-relaxed font-body mb-8">
            Conheça nossa linha de raridades automotivas e conteúdos exclusivos para
            apaixonados por carros clássicos.
          </p>
          <button
            onClick={() => (window.location.href = '/privacy.html')}
            className="bg-gradient-to-r from-primary to-accent text-white px-10 py-4 rounded-full font-display text-lg hover:from-primary-dark hover:to-accent-dark transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
          Saiba Mais
          </button>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <Mail className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-display mb-6 text-primary">{t.contact.title}</h2>
          <div className="space-y-4 font-body text-secondary">
            <p className="flex items-center justify-center space-x-2">
              <Mail className="h-5 w-5 text-primary" />
              <span>{t.contact.email}</span>
            </p>
            <p className="flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5 text-primary" />
              <span>{t.contact.phone}</span>
            </p>
            <p className="flex items-center justify-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{t.contact.address}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-muted py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-secondary font-body">© {new Date().getFullYear()} AleMarco Raridades</p>
          <div className="flex space-x-6 text-secondary">
            <a href="#" className="hover:text-primary"><Github className="h-6 w-6" /></a>
            <a href="#" className="hover:text-primary"><Instagram className="h-6 w-6" /></a>
            <a href="#" className="hover:text-primary"><Facebook className="h-6 w-6" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

