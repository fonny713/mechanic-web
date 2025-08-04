"use client";

import { motion } from "framer-motion";
import { Wrench, Star, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {  const features = [
    { icon: Star, text: "5-gwiazdkowy serwis" },
    { icon: Clock, text: "Szybka realizacja" },
    { icon: Shield, text: "Gwarancja jakości" },
    { icon: Wrench, text: "Eksperci mechanicy" },
  ];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_2px,transparent_2px)] bg-[length:60px_60px]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              Twój zaufany
              <span className="block text-orange-500">Warsztat</span>
              Samochodowy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Profesjonalny serwis i naprawa samochodów z ponad 20-letnim doświadczeniem. 
              Dbamy o to, aby Twój pojazd działał płynnie i bezpiecznie.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
              >
                Umów serwis
              </Button>
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
              >
                Wycena
              </Button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="flex flex-col items-center text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm"
                >
                  <feature.icon className="w-8 h-8 text-orange-500 mb-2" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Car silhouette with animated elements */}
              <div className="w-full h-96 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    rotateY: [0, 10, -10, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-white text-center"
                >
                  <Wrench className="w-24 h-24 mx-auto mb-4" />                  <h3 className="text-2xl font-bold mb-2">Ekspercki Serwis</h3>
                  <p className="text-orange-100">Profesjonalni mechanicy, którym możesz zaufać</p>
                </motion.div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
              >
                <Star className="w-8 h-8 text-orange-500" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Shield className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
