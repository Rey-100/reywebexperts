

//page,tsx

"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Check, Phone, Mail, MapPin, MessageCircle, Pause } from "lucide-react";

import { ThreeDMarqueeDemo } from "@/components/ThreeDMarqueeDemo";
import ThreeDMarqueeA  from "@/components/ThreeDMarqueeA";

import MarqueeShowcase from "@/components/MarqueeShowcase";



console.log("DEBUG: MarqueeShowcase import:", typeof MarqueeShowcase, MarqueeShowcase);



const Home = () => {

  const [currentService, setCurrentService] = useState(0);
  const services = ["Sitio Web", "eCommerce", "Software"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [services.length]);

  const serviceSections = [
    {
      title: "Diseño Web",
      subtitle: "profesional en México",
      description: "Tu sitio web no solo debe verse bien. Debe generar impacto.",
      detail: "Creamos sitios que conectan, comunican y elevan el valor de tu marca desde el primer clic. Haz que tu presencia online hable por ti. Con Vexus, impacta desde el inicio.",
      mockupImage: "https://ext.same-assets.com/3445457644/1356649354.svg"
    },
    {
      title: "Desarrollo de",
      subtitle: "E-commerce que vende",
      description: "Convierte visitantes en compradores, todos los días",
      detail: "Diseñamos e-commerce estratégicos, con UX intuitivo y funciones avanzadas. Desde Shopify hasta desarrollos a medida, tu tienda online no solo se verá bien: venderá más.",
      mockupImage: "https://ext.same-assets.com/3445457644/1039390633.svg"
    },
    {
      title: "Programación",
      subtitle: "de Apps y Plataformas Digitales",
      description: "Convierte tu idea en una solución tecnológica rentable",
      detail: "¿Tienes una idea clara? Nosotros la convertimos en producto. Desarrollamos apps móviles y plataformas web con arquitectura sólida, gran experiencia de usuario y escalabilidad real.",
      mockupImage: "https://ext.same-assets.com/3445457644/148478401.svg"
    },
    {
      title: "Marketing Digital",
      subtitle: "en México que Transforma",
      description: "Atracción, conexión y conversión, todo en una estrategia",
      detail: "Creamos estrategias de marketing digital en México que conectan. Desde redes sociales hasta embudos automatizados, llevamos tu mensaje al lugar y momento exacto para convertir más.",
      mockupImage: "https://ext.same-assets.com/3445457644/3849272232.svg"
    },
    {
      title: "SEO",
      subtitle: "y Google Ads para Destacar en Google",
      description: "Aparece donde tus clientes ya te están buscando: en Google",
      detail: "Con estrategias de SEO local y campañas de Google Ads efectivas, llevamos tu marca a lo más alto. Más visibilidad. Más clics. Más ventas. Así de simple.",
      mockupImage: "https://ext.same-assets.com/3445457644/2935893694.svg"
    }
  ];

  const pricingPlans = [
    {
      name: "BÁSICO",
      price: "$8,500",
      subtitle: "Pequeña actividad",
      features: [
        "Diseño de 1 página web a medida.",
        "Incluye 1 landing page (secciones ilimitadas)",
        "Animación básica",
        "Formularios, galería, mapa, chatbot y otros add-ons",
        "Posicionada en los primeros resultados de Google (SEO)",
        "Diseño responsivo multidispositivo (Mobile, Tablet, Desktop)",
        "Código optimizado para velocidad",
        "Soporte y mantenimiento",
        "Tiempo de entrega máximo 7 días hábiles"
      ]
    },
    {
      name: "PLUS",
      price: "$15,000",
      subtitle: "Start-up o Negocio",
      features: [
        "Diseño de 1 página web a medida.",
        "Hasta 5 páginas",
        "Diseño personalizado (UX/UI)",
        "Animación avanzada",
        "Formularios, galería, mapa, chatbot y otros add-ons",
        "Posicionada en los primeros resultados de Google (SEO)",
        "Diseño responsivo multidispositivo (Mobile, Tablet, Desktop)",
        "Código optimizado para velocidad",
        "Soporte y mantenimiento",
        "Tiempo de entrega máximo 12 días hábiles"
      ]
    },
    {
      name: "PROFESIONAL",
      price: "$18,500",
      subtitle: "Corporativo",
      features: [
        "Diseño de 1 página web a medida.",
        "Hasta 10 páginas",
        "Sistema CMS para Blogs",
        "Diseño personalizado (UX/UI)",
        "Animación profesional",
        "Plugins e integraciones avanzadas",
        "Posicionada en los primeros resultados de Google (SEO)",
        "Diseño responsivo multidispositivo (Mobile, Tablet, Desktop)",
        "Código optimizado para velocidad",
        "Soporte y mantenimiento",
        "Tiempo de entrega máximo 15-20 días hábiles"
      ]
    },
    {
      name: "E-COMMERCE",
      price: "$20,000",
      subtitle: "Tienda en Línea",
      features: [
        "Diseño de 1 e-Commerce a medida.",
        "Hasta 100 productos",
        "Sistema CMS para agregar productos con facilidad",
        "Diseño personalizado (UX/UI)",
        "Animación profesional",
        "Plugins e integraciones avanzadas",
        "Posicionada en los primeros resultados de Google (SEO)",
        "Diseño responsivo multidispositivo (Mobile, Tablet, Desktop)",
        "Código optimizado para velocidad",
        "Soporte y mantenimiento",
        "Tiempo de entrega máximo 20 días hábiles"
      ]
    }
  ];

  const faqs = [
    {
      question: "¿Cuál es el proceso para la creación de un sitio web?",
      answer: "Nuestra agencia de desarrollo web sigue un proceso estándar que incluye investigación, diseño, desarrollo, pruebas e implementación."
    },
    {
      question: "¿Estará mi sitio optimizado para todos los dispositivos?",
      answer: "Sí, todos los sitios web que desarrollamos están diseñados para estar optimizados en cualquier dispositivo. Entendemos la importancia de ofrecer una experiencia de usuario fluida en todos los dispositivos."
    },
    {
      question: "¿Puedo actualizar el sitio por mi cuenta?",
      answer: "Sí, podemos construir un sistema de gestión de contenidos (CMS) en tu sitio web que te permitirá realizar cambios fácilmente sin necesidad de tener habilidades técnicas avanzadas."
    },
    {
      question: "¿Mi sitio estará optimizado para los motores de búsqueda?",
      answer: "Sí, construimos sitios web siguiendo las mejores prácticas de SEO para ayudar a mejorar la visibilidad y el posicionamiento en los motores de búsqueda como Google."
    },
    {
      question: "¿Cuánto cuesta un sitio web?",
      answer: "El costo de un sitio web depende de la magnitud del trabajo. Te proporcionaremos un presupuesto detallado después de discutir los términos del proyecto."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
  <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 transform -skew-x-12"></div>
            <span className="text-xl font-bold">vexus</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicios" className="hover:text-green-400 transition">Servicios</a>
            <a href="#nosotros" className="hover:text-green-400 transition">Nosotros</a>
            <a href="#precios" className="hover:text-green-400 transition">Precios</a>
            <a href="#faq" className="hover:text-green-400 transition">FAQ</a>
            <a href="#blog" className="hover:text-green-400 transition">Blog</a>
            <a href="#contacto" className="hover:text-green-400 transition">Contacto</a>
          </nav>

          <div className="flex items-center gap-4">
            <select className="bg-transparent border border-white/20 rounded px-2 py-1 text-sm">
              <option value="mx">MX</option>
              <option value="us">US</option>
            </select>
            <Button className="bg-transparent border border-white/40 hover:bg-white/10 rounded-full">
              Cotizar ahora
            </Button>
          </div>
        </div>
      </header> 
 

{/* Sección de presentación 

<ThreeDMarqueeDemo />

*/}
      



<ThreeDMarqueeA />

<main className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 text-white">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Nuestros Proyectos Destacados
      </h1>
      <MarqueeShowcase />
    </main>



      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-dark"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-4 bg-green-500/20 text-green-400 border-green-500/40">
            Agencia WEB #1 en México
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Impulsa tu negocio con un
          </h1>
          <div className="h-24 md:h-32 flex items-center justify-center">
            <h2 className="text-6xl md:text-8xl font-bold text-gradient">
              {services[currentService]}
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            En Vexus, no solo diseñamos páginas: <strong className="text-white">creamos experiencias digitales</strong> que convierten, inspiran y venden.
            Somos la <strong className="text-white">agencia web y software líder en México</strong>, expertos en sitios personalizados, tiendas en línea poderosas y soluciones digitales a medida que impulsan empresas al siguiente nivel.
          </p>
          <Button className="bg-blue-500 hover:bg-blue-600 rounded-full px-8 py-6 text-lg">
            <MessageCircle className="mr-2 h-5 w-5" />
            Contact Us
          </Button>
          <div className="mt-12 text-sm">
            <span className="text-green-400 text-4xl font-bold">+200</span>
            <p className="text-gray-400 mt-2">Proyectos completados<br />y clientes satisfechos</p>
          </div>
        </div>
        <ChevronDown className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-green-400" size={32} />
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-500/20 text-green-400 border-green-500/40">
              SERVICIOS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Servicios <span className="text-gradient">Web y Software</span> en México<br />
              con Resultados Comprobados
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              En Vexus, transformamos empresas con <strong className="text-white">soluciones digitales</strong> hechas para vender, destacar y crecer.
              Cada proyecto es una estrategia para <strong className="text-white">dominar tu mercado</strong>. Creamos sitios web personalizados y experiencias digitales impactantes, diseñadas para posicionarte donde importa: en la mente de tus clientes.
            </p>
          </div>

          <div className="space-y-20">
            {serviceSections.map((service, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">
                    {index === 0 && <span className="text-gradient-blue">{service.title}</span>}
                    {index === 1 && <span className="text-gradient">{service.title}</span>}
                    {index > 1 && service.title}
                  </h3>
                  <h4 className="text-2xl md:text-3xl font-bold mb-4">{service.subtitle}</h4>
                  <p className="text-lg font-semibold text-white mb-4">{service.description}</p>
                  <p className="text-gray-400">{service.detail}</p>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <Card className="bg-zinc-900 border-zinc-800 p-6 rounded-2xl">
                    <div className="aspect-video bg-zinc-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                      <img src={service.mockupImage} alt={service.title} className="w-full h-full object-contain" />
                      <button className="absolute bottom-4 right-4 bg-white rounded-full p-3 hover:bg-gray-200 transition">
                        <Pause className="w-4 h-4 text-black" />
                      </button>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://ext.same-assets.com/3445457644/1450905273.jpeg"
                alt="Team working"
                className="rounded-2xl grayscale"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-green-500/20 text-green-400 border-green-500/40">
                NOSOTROS
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Quiénes somos?
              </h2>
              <p className="text-gray-400 mb-6">
                En Vexus, somos más que una agencia web y software en México. Somos el aliado estratégico de empresas que quieren crecer. Combinamos diseño, desarrollo y estrategia para crear experiencias digitales memorables que impulsan resultados reales. Desde el primer clic hasta mucho después del lanzamiento, estamos contigo.
              </p>
              <Button className="bg-transparent border border-white hover:bg-white/10 rounded-full">
                Contrátanos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-500/20 text-green-400 border-green-500/40">
              BENEFICIOS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ¿Por qué elegir a Vexus como<br />tu agencia web en México?
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              En Vexus, no solo diseñamos, nos comprometemos con tu éxito. Confía en una agencia web en México que entiende tu visión, la potencia y la convierte en resultados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-zinc-900 border-zinc-800 p-8 rounded-2xl">
              <div className="text-green-400 mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                  <path d="M2 17L12 22L22 17" />
                  <path d="M2 12L12 17L22 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Diseño web que deja huella</h3>
              <p className="text-gray-400">
                En Vexus, cada detalle está pensado para conectar con tu audiencia, reflejar el valor único de tu marca y generar impacto desde el primer clic.
              </p>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 p-8 rounded-2xl">
              <div className="text-green-400 mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 12L11 14L15 10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Soluciones digitales hechas a tu medida</h3>
              <p className="text-gray-400">
                Nada de plantillas genéricas. Desarrollamos soluciones 100% personalizadas, alineadas a tus objetivos, necesidades y presupuesto. Tu negocio es único. Tu sitio también debe serlo.
              </p>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 p-8 rounded-2xl">
              <div className="text-green-400 mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2V22" />
                  <path d="M17 5H9.5C8.11929 5 7 6.11929 7 7.5C7 8.88071 8.11929 10 9.5 10H14.5C15.8807 10 17 11.1193 17 12.5C17 13.8807 15.8807 15 14.5 15H7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Comprometidos con tu crecimiento</h3>
              <p className="text-gray-400">
                Nos involucramos en cada proyecto como si fuera propio. Medimos resultados reales, no promesas vacías. Somos un equipo que va contigo hasta el final.
              </p>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 p-8 rounded-2xl">
              <div className="text-green-400 mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="20" x2="12" y2="10" />
                  <line x1="18" y1="20" x2="18" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="16" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Resultados que se pueden medir y escalar</h3>
              <p className="text-gray-400">
                Aplicamos analítica, SEO y performance marketing para que cada paso esté enfocado en crecer. Tus resultados son nuestra métrica más importante.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-500/20 text-green-400 border-green-500/40">
              PAQUETES WEB
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Elige el paquete que mejor se adapte a ti:
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800 p-6 rounded-2xl">
                <Badge className="mb-3 bg-green-500/20 text-green-400 border-green-500/40 text-xs">
                  {plan.name}
                </Badge>
                <div className="mb-2">
                  <span className="text-xs text-gray-400">A partir de:</span>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 text-sm ml-1">+ IVA</span>
                </div>
                <p className="text-sm text-gray-400 mb-6">{plan.subtitle}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">
                        {feature.includes('Tiempo de entrega máximo') && feature.match(/\d+(-\d+)?/)?.[0] && (
                          <span className="text-green-400 font-semibold">{feature.match(/\d+(-\d+)?/)?.[0]}</span>
                        )}
                        {feature.replace(/\d+(-\d+)?/, '').trim()}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 rounded-full">
                  Comprar
                </Button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  Posibilidad de pago a 6 meses sin intereses.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-500/20 text-green-400 border-green-500/40">
              FAQ
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Preguntas más frecuentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-zinc-800 transition"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-500/20 text-green-400 border-green-500/40">
              CONTÁCTANOS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ¡No esperes más! Agenda una llamada
            </h2>
            <p className="text-gray-400">
              Agenda tu consulta gratuita hoy y descubre cómo podemos <strong className="text-white">impulsar tu negocio</strong> con una página web de alto rendimiento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1" />
                <div>
                  <p className="font-semibold">Guadalajara, México</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-400 mt-1" />
                <div>
                  <a href="tel:+523329203908" className="hover:text-green-400 transition">+52 33 2920 3908</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-400 mt-1" />
                <div>
                  <a href="mailto:contact@vexusagency.com" className="hover:text-green-400 transition">contact@vexusagency.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-green-400 mt-1" />
                <div>
                  <a href="#" className="hover:text-green-400 transition">Whatsapp</a>
                </div>
              </div>
            </div>
            <Card className="bg-zinc-900 border-zinc-800 p-6 rounded-2xl">
              <div className="text-center">
                <p className="text-sm text-gray-400 mb-4">Seleccione un día</p>
                <div className="bg-zinc-800 rounded-lg p-4 aspect-square flex items-center justify-center">
                  <p className="text-gray-500">Calendar Integration</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 transform -skew-x-12"></div>
                <span className="text-xl font-bold">vexus</span>
              </div>
              <p className="text-sm text-gray-400">
                Grupo Vexus Innovación Digital S.A.S. de C.V. es una empresa de desarrollo web y software comprometida a ofrecer servicios profesionales y de alta calidad.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Navegación</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition">Home</a></li>
                <li><a href="#servicios" className="hover:text-green-400 transition">Servicios</a></li>
                <li><a href="#blog" className="hover:text-green-400 transition">Blog</a></li>
                <li><a href="#precios" className="hover:text-green-400 transition">Precios</a></li>
                <li><a href="#faq" className="hover:text-green-400 transition">FAQ</a></li>
                <li><a href="#contacto" className="hover:text-green-400 transition">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Diseño de Páginas Web en:</h3>
              <ul className="space-y-2 text-sm text-gray-400 grid grid-cols-2 gap-2">
                <li><a href="#" className="hover:text-green-400 transition">Guadalajara</a></li>
                <li><a href="#" className="hover:text-green-400 transition">CDMX</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Monterrey</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Cancún</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Puebla</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Querétaro</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">USA Web Pages:</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition">Phoenix, Arizona</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Las Vegas, Nevada</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Houston, Texas</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Los Angeles, California</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-400">
              © 2025 Grupo Vexus Innovación Digital S.A.S. de C.V. | All Rights Reserved
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-green-400 transition">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-green-400 transition">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="#"
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

export default Home;

