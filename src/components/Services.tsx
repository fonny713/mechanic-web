"use client";

import { motion } from "framer-motion";
import { 
  Car, 
  Cog, 
  Zap, 
  Wrench, 
  Gauge, 
  Fan,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {  const services = [
    {
      icon: Car,
      title: "Wymiana oleju i konserwacja",
      description: "Regularna wymiana oleju i konserwacja zapobiegawcza, aby silnik działał płynnie.",
      features: ["Olej w pełni syntetyczny", "Wymiana filtra", "Kontrola wielopunktowa"],
      price: "Od 199 zł",
    },
    {
      icon: Cog,
      title: "Naprawa silnika",
      description: "Kompleksowa diagnostyka i naprawa silnika od drobnych przeglądów po gruntowne remonty.",
      features: ["Diagnostyka silnika", "Serwis paska rozrządu", "Naprawa uszczelki głowicy"],
      price: "Od 599 zł",
    },
    {
      icon: Zap,
      title: "Serwis hamulców",
      description: "Kompleksowy serwis układu hamulcowego dla zapewnienia bezpieczeństwa na drodze.",
      features: ["Wymiana klocków hamulcowych", "Planowanie tarcz", "Serwis płynu hamulcowego"],
      price: "Od 399 zł",
    },
    {
      icon: Gauge,
      title: "Serwis skrzyni biegów",
      description: "Konserwacja i naprawa skrzyni biegów, aby pojazd płynnie zmieniał biegi.",
      features: ["Płukanie skrzyni biegów", "Wymiana filtra", "Usługi odbudowy"],
      price: "Od 299 zł",
    },
    {
      icon: Fan,
      title: "Klimatyzacja i ogrzewanie",
      description: "Serwis systemu klimatyzacji, aby zapewnić komfort przez cały rok.",
      features: ["Doładowanie klimatyzacji", "Naprawa sprężarki", "Serwis nagrzewnicy"],
      price: "Od 249 zł",
    },
    {
      icon: Wrench,
      title: "Naprawy ogólne",
      description: "Kompleksowe usługi naprawy samochodów dla wszystkich marek i modeli.",
      features: ["Diagnostyka elektryczna", "Naprawa zawieszenia", "Serwis układu wydechowego"],
      price: "Wycena na życzenie",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nasze <span className="text-orange-500">Usługi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferujemy kompleksowe usługi naprawy i konserwacji samochodów z przejrzystymi cenami 
            i wysokiej jakości częściami. Twoja satysfakcja to nasza gwarancja.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-orange-500 font-semibold">{service.price}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>              <Button 
                className="w-full bg-gray-900 hover:bg-orange-500 text-white group-hover:bg-orange-500 transition-all duration-300"
              >
                Dowiedz się więcej
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 text-white">            <h3 className="text-3xl font-bold mb-4">Potrzebujesz niestandardowej usługi?</h3>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Nie widzisz tego, czego szukasz? Zajmujemy się wszystkimi rodzajami napraw i konserwacji samochodów. 
              Skontaktuj się z nami, aby otrzymać spersonalizowaną wycenę.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3"
              >
                Otrzymaj wycenę
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3"
              >
                Zadzwoń teraz
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
