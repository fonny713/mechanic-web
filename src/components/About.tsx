"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Award, 
  Clock, 
  Shield,
  CheckCircle2,
  Star
} from "lucide-react";

export default function About() {  const stats = [
    { icon: Users, value: "20+", label: "Lat doświadczenia" },
    { icon: Award, value: "5000+", label: "Obsłużonych aut" },
    { icon: Clock, value: "24/7", label: "Serwis awaryjny" },
    { icon: Shield, value: "100%", label: "Wskaźnik satysfakcji" },
  ];
  const features = [
    "Certyfikowani mechanicy ASE",
    "Najnowocześniejszy sprzęt",
    "Wysokiej jakości części OEM i aftermarket",
    "Kompleksowe przeglądy pojazdu",
    "Przejrzyste ceny",
    "Pisemne gwarancje na wszystkie prace",
  ];
  const reviews = [
    {
      name: "Anna Kowalska",
      rating: 5,
      text: "Wspaniała obsługa! Szybko zdiagnozowali problem z hamulcami i naprawili go w uczciwej cenie. Gorąco polecam!",
    },
    {
      name: "Michał Nowak",
      rating: 5,
      text: "Profesjonalni i uczciwi. Wszystko jasno wytłumaczyli i nie próbowali sprzedać niepotrzebnych usług.",
    },
    {
      name: "Katarzyna Wiśniewska",
      rating: 5,
      text: "Korzystam z ich usług od 3 lat. Zawsze wysokiej jakości praca i świetna obsługa klienta.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dlaczego <span className="text-orange-500">ProAuto Serwis</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Z ponad dwudziestoletnim doświadczeniem zbudowaliśmy naszą reputację na wysokiej jakości 
            wykonawstwie, uczciwych cenach i wyjątkowej obsłudze klienta.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Workshop Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="relative h-96 rounded-3xl overflow-hidden">
            {/* Placeholder for workshop image */}
            <div className="w-full h-full bg-gradient-to-r from-gray-800 to-gray-900 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-xl">Nasz profesjonalny warsztat</p>
                </div>
              </div>
            </div>
            <img 
              src="/images/workshop-interior.jpg" 
              alt="ProAuto Serwis workshop interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Nowoczesny warsztat</h3>
              <p className="text-gray-200">Wyposażony w najnowszy sprzęt diagnostyczny</p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Nasza historia
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Założony w 2004 roku, ProAuto Serwis rozpoczynał jako mały warsztat rodzinny z prostą misją: 
                świadczyć uczciwe, niezawodne usługi motoryzacyjne dla naszej społeczności. To, co zaczęło się 
                od zaledwie dwóch mechaników, przekształciło się w zaufany kompleksowy zakład napraw.
              </p>
              <p>
                Wierzymy w traktowanie każdego klienta jak rodzinę, a każdego pojazdu jak naszego własnego. 
                Nasz zespół certyfikowanych mechaników ASE łączy dziesięciolecia doświadczenia z najnowszą 
                technologią diagnostyczną, aby zapewnić Twojemu pojazdowi najlepszą możliwą opiekę.
              </p>
              <p>
                Niezależnie od tego, czy prowadzisz zupełnie nowy luksusowy pojazd, czy zaufany samochód 
                rodzinny z przebiegiem 300 000 km, do każdej pracy podchodzimy z taką samą dbałością 
                o szczegóły i zaangażowaniem w jakość.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Co nas wyróżnia
            </h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center"
                >
                  <CheckCircle2 className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 p-6 bg-gray-50 rounded-2xl"
            >              <h4 className="text-xl font-semibold text-gray-900 mb-3">Nasza obietnica</h4>
              <p className="text-gray-600">
                Stoimy za każdą naprawą z kompleksowymi gwarancjami i 100% gwarancją satysfakcji. 
                Jeśli nie jesteś w pełni zadowolony z naszej pracy, naprawimy to.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Customer Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            Co mówią nasi klienci
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                <h4 className="font-semibold text-gray-900">{review.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
