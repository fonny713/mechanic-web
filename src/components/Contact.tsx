"use client";

import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail,
  Car,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {  const contactInfo = [
    {
      icon: MapPin,
      title: "Odwiedź nasz warsztat",
      details: ["ul. Główna 123", "Warszawa, 00-001"],
      action: "Uzyskaj wskazówki",
    },
    {
      icon: Phone,
      title: "Zadzwoń do nas",
      details: ["(22) 123-4567", "Linia awaryjna 24/7"],
      action: "Zadzwoń teraz",
    },
    {
      icon: Clock,
      title: "Godziny otwarcia",
      details: ["Pon-Pt: 7:00 - 18:00", "Sob: 8:00 - 16:00", "Niedz: Zamknięte"],
      action: null,
    },
    {
      icon: Mail,
      title: "Wyślij e-mail",
      details: ["info@proautoserwis.pl", "wyceny@proautoserwis.pl"],
      action: "Wyślij e-mail",
    },
  ];
  const services = [
    "Wymiana oleju",
    "Serwis hamulców",
    "Naprawa silnika",
    "Skrzynia biegów",
    "Serwis klimatyzacji",
    "Elektryka",
    "Inne",
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skontaktuj się <span className="text-orange-500">z nami</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Gotowy, aby umówić się na serwis? Skontaktuj się z nami już dziś, aby otrzymać ekspercką opiekę 
            nad samochodem i przejrzyste ceny.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8">Informacje kontaktowe</h3>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-300">{detail}</p>
                    ))}
                    {info.action && (
                      <Button 
                        className="mt-3 bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                        size="sm"
                      >
                        {info.action}
                      </Button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Emergency Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 p-6 bg-orange-500/10 border border-orange-500/20 rounded-2xl"
            >
              <div className="flex items-center mb-3">
                <Car className="w-6 h-6 text-orange-500 mr-3" />                <h4 className="text-lg font-semibold">Serwis awaryjny</h4>
              </div>
              <p className="text-gray-300">
                Awaria pojazdu? Oferujemy całodobową pomoc drogową w sytuacjach awaryjnych. 
                Zadzwoń na naszą linię awaryjną, aby uzyskać natychmiastową pomoc.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >            <h3 className="text-2xl font-bold mb-8">Umów serwis</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Imię</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Jan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Nazwisko</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Kowalski"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Telefon</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="(22) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">E-mail</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="jan@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Marka i model pojazdu</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Honda Civic"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Rok</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="2020"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Potrzebna usługa</label>
                <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option value="">Wybierz usługę</option>
                  {services.map((service, index) => (
                    <option key={index} value={service.toLowerCase()}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>              <div>
                <label className="block text-sm font-medium mb-2">Dodatkowe szczegóły</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Opisz wszelkie objawy lub problemy, które doświadczasz..."
                ></textarea>
              </div>

              <Button 
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Umów serwis
              </Button>
            </form>

            <p className="text-sm text-gray-400 mt-4 text-center">
              Skontaktujemy się z Tobą w ciągu 24 godzin, aby potwierdzić wizytę.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
