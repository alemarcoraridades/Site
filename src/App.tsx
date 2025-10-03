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
import themeColors from './styles/colors';
import fonts from './styles/fonts';
import './styles/typography.css';

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
    <div 
      className="min-h-screen"
      style={{ 
        background: `linear-gradient(135deg, ${themeColors.background} 0%, #E5E7EB 50%, ${themeColors.background} 100%)` 
      }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 transition-all duration-300 border-b border-gray-200">
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
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 font-button-text ${activeSection === item.id ? 'text-white shadow-lg' : 'hover:bg-gray-100'}`}
                  style={{
                    color: activeSection === item.id ? 'white' : themeColors.textSecondary,
                    background: activeSection === item.id 
                      ? `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 100%)`
                      : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.color = themeColors.primary;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.color = themeColors.textSecondary;
                    }
                  }}
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-4 py-2 rounded-full text-sm transition-all duration-300 hover:bg-gray-100 font-button-text"
                style={{
                  color: themeColors.textSecondary
                }}
              >
                <Globe className="h-4 w-4" />
                <span>{language.toUpperCase()}</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 px-3 py-1 rounded-full text-sm"
                style={{ color: themeColors.textSecondary }}
              >
                <Globe className="h-4 w-4" />
                <span>{language.toUpperCase()}</span>
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
                style={{ color: themeColors.textSecondary }}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-200">
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
                    className="block px-4 py-3 rounded-xl w-full text-left transition-all duration-300 font-button-text"
                    style={{
                      color: activeSection === item.id ? 'white' : themeColors.textSecondary,
                      background: activeSection === item.id 
                        ? `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 100%)`
                        : 'transparent'
                    }}
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
        <div 
          className="absolute inset-0"
          style={{ 
            background: `linear-gradient(135deg, rgba(229, 231, 235, 0.3) 0%, ${themeColors.secondary}20 100%)` 
          }}
        ></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="mb-12">
              <div className="inline-block p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200">
                <div 
                  className="p-6 rounded-2xl shadow-lg mb-6"
                  style={{ 
                    background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 100%)` 
                  }}
                >
                  <Car className="h-20 w-20 text-white mx-auto" />
                </div>
                <h1 className="mb-6">
                  <span 
                    className="text-5xl md:text-7xl font-title"
                    style={{
                      background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {t.hero.title.split(' ')[0]}
                  </span>
                  <span 
                    className="text-5xl md:text-7xl ml-4 font-title"
                    style={{
                      color: themeColors.textSecondary
                    }}
                  >
                    {t.hero.title.split(' ')[1]}
                  </span>
                </h1>
              </div>
            </div>
            <p 
              className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-subtitle"
              style={{
                color: themeColors.textSecondary
              }}
            >
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('history')}
                className="px-10 py-4 rounded-full text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-button-text"
                style={{
                  background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 100%)`
                }}
              >
                {t.hero.cta1}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="px-10 py-4 rounded-full border-2 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-button-text"
                style={{
                  backgroundColor: 'white',
                  color: themeColors.primary,
                  borderColor: themeColors.primary
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = themeColors.primary;
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = themeColors.primary;
                }}
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
          <History className="h-16 w-16 mx-auto mb-6" style={{ color: themeColors.primary }} />
          <h2 
            className="mb-6 font-section-title"
            style={{
              color: themeColors.primary
            }}
          >
            {t.history.title}
          </h2>
          <p 
            className="leading-relaxed font-description"
            style={{
              color: themeColors.textSecondary
            }}
          >
            {t.history.content}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="services" 
        className="py-32 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#E5E7EB' }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <Wrench className="h-16 w-16 mx-auto mb-6" style={{ color: themeColors.primary }} />
          <h2 
            className="mb-12 font-section-title"
            style={{
              color: themeColors.primary
            }}
          >
            {t.services.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.services.items.map((service: string, index: number) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition"
              >
                <p 
                  className="font-card-title"
                  style={{
                    color: themeColors.textSecondary
                  }}
                >
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <Smartphone className="h-16 w-16 mx-auto mb-6" style={{ color: themeColors.primary }} />
          <h2 
            className="mb-6 font-section-title"
            style={{
              color: themeColors.primary
            }}
          >
            {t.products.title}
          </h2>
          <p 
            className="leading-relaxed font-description"
            style={{
              color: themeColors.textSecondary
            }}
          >
            {t.products.content}
          </p>
        </div>
      </section>

      {/* AleMarco Classics Section */}
      <section id="classics" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 
            className="mb-6 font-section-title"
            style={{
              color: themeColors.primary
            }}
          >
            AleMarco Classics
          </h2>
          <p 
            className="mb-8 leading-relaxed font-description"
            style={{
              color: themeColors.textSecondary
            }}
          >
            Conheça nossa linha de raridades automotivas e conteúdos exclusivos para
            apaixonados por carros clássicos.
          </p>
          <button
            onClick={() => (window.location.href = language === 'pt' ? '/privacy.html' : '/privacy-en.html')}
            className="px-10 py-4 rounded-full text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-button-text"
            style={{
              background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 100%)`
            }}
          >
            Saiba Mais
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="py-32 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#E5E7EB' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <Mail className="h-16 w-16 mx-auto mb-6" style={{ color: themeColors.primary }} />
          <h2 
            className="mb-6 font-section-title"
            style={{
              color: themeColors.primary
            }}
          >
            {t.contact.title}
          </h2>
          <div className="space-y-4">
            <p className="flex items-center justify-center space-x-2">
              <Mail className="h-5 w-5" style={{ color: themeColors.primary }} />
              <span 
                className="font-description"
                style={{
                  color: themeColors.textSecondary
                }}
              >
                {t.contact.email}
              </span>
            </p>
            <p className="flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" style={{ color: themeColors.primary }} />
              <span 
                className="font-description"
                style={{
                  color: themeColors.textSecondary
                }}
              >
                {t.contact.phone}
              </span>
            </p>
            <p className="flex items-center justify-center space-x-2">
              <MapPin className="h-5 w-5" style={{ color: themeColors.primary }} />
              <span 
                className="font-description"
                style={{
                  color: themeColors.textSecondary
                }}
              >
                {t.contact.address}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p 
            className="font-description"
            style={{
              color: themeColors.textSecondary
            }}
          >
            © {new Date().getFullYear()} AleMarco Raridades
          </p>
          <div className="flex space-x-6">
            <a href="#" className="transition-colors duration-300" style={{ color: themeColors.textSecondary }}>
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="transition-colors duration-300" style={{ color: themeColors.textSecondary }}>
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="transition-colors duration-300" style={{ color: themeColors.textSecondary }}>
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
