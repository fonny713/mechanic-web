"use client";

import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Twitter
} from "lucide-react";

export default function Footer() {  const quickLinks = [
    { href: "#home", label: "Strona główna" },
    { href: "#services", label: "Usługi" },
    { href: "#about", label: "O nas" },
    { href: "#contact", label: "Kontakt" },
  ];
  const services = [
    "Wymiana oleju",
    "Serwis hamulców",
    "Naprawa silnika",
    "Skrzynia biegów",
    "Serwis klimatyzacji",
    "Elektryka",
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">PA</span>
              </div>              <span className="text-xl font-bold">ProAuto Serwis</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Twój zaufany warsztat samochodowy z ponad 20-letnim doświadczeniem. 
              Świadczymy wysokiej jakości usługi i uczciwe ceny dla wszystkich potrzeb Twojego pojazdu.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Szybkie linki</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nasze usługi</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href="#services"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>            <h3 className="text-lg font-semibold mb-6">Informacje kontaktowe</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>ul. Główna 123</p>
                  <p>Warszawa, 00-001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <p className="text-gray-400">(22) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <p className="text-gray-400">info@proautoserwis.pl</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Pon-Pt: 7:00 - 18:00</p>
                  <p>Sob: 8:00 - 16:00</p>
                  <p>Niedz: Zamknięte</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 ProAuto Serwis. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-orange-500 transition-colors duration-200">
                Polityka prywatności
              </Link>
              <Link href="#" className="hover:text-orange-500 transition-colors duration-200">
                Warunki świadczenia usług
              </Link>
              <Link href="#" className="hover:text-orange-500 transition-colors duration-200">
                Gwarancja
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
