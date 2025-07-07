"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Edit,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Moon,
  Plus,
  Search,
  Star,
  Twitter,
  X,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function CervejarioLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <Plus className="h-8 w-8" />,
      title: "Cadastro Simples",
      description:
        "Adicione facilmente novas cervejas ao seu catálogo pessoal com informações detalhadas.",
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Busca Inteligente",
      description:
        "Encontre rapidamente cervejas por nome, cervejaria ou local de consumo.",
    },
    {
      icon: <Edit className="h-8 w-8" />,
      title: "Edição Completa",
      description:
        "Edite e atualize as informações das suas cervejas a qualquer momento.",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Sistema de Avaliação",
      description:
        "Avalie suas cervejas e mantenha um registro das suas favoritas.",
    },
    {
      icon: <Moon className="h-8 w-8" />,
      title: "Tema Escuro/Claro",
      description:
        "Alterne entre temas claro e escuro para uma experiência personalizada.",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Localização",
      description:
        "Registre onde você consumiu cada cerveja e crie memórias especiais.",
    },
  ];

  const testimonials = [
    {
      name: "João Silva",
      text: "Finalmente posso lembrar de todas as cervejas que já experimentei! O Cervejário é perfeito para quem ama descobrir novos sabores.",
      rating: 5,
    },
    {
      name: "Maria Santos",
      text: "A interface é linda e muito fácil de usar. Adoro poder pesquisar por cervejaria e ver meu histórico completo.",
      rating: 5,
    },
    {
      name: "Pedro Costa",
      text: "Excelente app! O tema escuro é perfeito para usar à noite, e a função de busca é muito rápida.",
      rating: 5,
    },
  ];

  return (
    <>
      <Head>
        <title>Cervejário</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/logo-icon.png"
                  alt="Cervejário Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span className="text-2xl font-bold text-amber-800">
                  Cervejário
                </span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-amber-800 hover:text-amber-600 font-medium"
                >
                  Início
                </button>
                <button
                  onClick={() => scrollToSection("funcionalidades")}
                  className="text-amber-800 hover:text-amber-600 font-medium"
                >
                  Funcionalidades
                </button>
                <button
                  onClick={() => scrollToSection("screenshots")}
                  className="text-amber-800 hover:text-amber-600 font-medium"
                >
                  Screenshots
                </button>
                <button
                  onClick={() => scrollToSection("download")}
                  className="text-amber-800 hover:text-amber-600 font-medium"
                >
                  Download
                </button>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-amber-800 hover:text-amber-600 font-medium"
                >
                  Contato
                </button>
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <nav className="md:hidden mt-4 pb-4 border-t border-amber-200 pt-4">
                <div className="flex flex-col space-y-4">
                  <button
                    onClick={() => scrollToSection("inicio")}
                    className="text-amber-800 hover:text-amber-600 font-medium text-left"
                  >
                    Início
                  </button>
                  <button
                    onClick={() => scrollToSection("funcionalidades")}
                    className="text-amber-800 hover:text-amber-600 font-medium text-left"
                  >
                    Funcionalidades
                  </button>
                  <button
                    onClick={() => scrollToSection("screenshots")}
                    className="text-amber-800 hover:text-amber-600 font-medium text-left"
                  >
                    Screenshots
                  </button>
                  <button
                    onClick={() => scrollToSection("download")}
                    className="text-amber-800 hover:text-amber-600 font-medium text-left"
                  >
                    Download
                  </button>
                  <button
                    onClick={() => scrollToSection("contato")}
                    className="text-amber-800 hover:text-amber-600 font-medium text-left"
                  >
                    Contato
                  </button>
                </div>
              </nav>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section id="inicio" className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-bold text-amber-900 mb-4">
                  Seu catálogo pessoal de cervejas
                </h1>
                <p className="text-2xl lg:text-3xl font-semibold text-amber-600 mb-6 italic">
                  "Você bebe. O Cervejário lembra."
                </p>
                <p className="text-xl text-amber-700 mb-8 leading-relaxed">
                  Registre, organize e descubra todas as cervejas que você já
                  experimentou. Nunca mais esqueça daquela cerveja especial!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                  <a
                    href="https://play.google.com/store/apps/details?id=br.app.cervejario"
                    className="transition-transform hover:scale-105"
                  >
                    <Image
                      src="/images/google-play-badge.png"
                      alt="Disponível no Google Play"
                      width={200}
                      height={60}
                      className="h-14 w-auto"
                    />
                  </a>
                  <a
                    href="https://apps.apple.com/us/app/cervej%C3%A1rio/id6748159175"
                    className="transition-transform hover:scale-105"
                  >
                    <Image
                      src="/images/app-store-badge.png"
                      alt="Download na App Store"
                      width={200}
                      height={60}
                      className="h-14 w-auto"
                    />
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-3xl blur-3xl opacity-20 scale-110"></div>
                  <Image
                    src="/images/app-screenshot-1.png"
                    alt="Cervejário App Screenshot"
                    width={300}
                    height={600}
                    className="relative rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="funcionalidades" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-amber-900 mb-4">
                Funcionalidades Principais
              </h2>
              <p className="text-2xl font-semibold text-amber-600 mb-4 italic">
                "Você bebe. O Cervejário lembra."
              </p>
              <p className="text-xl text-amber-700 max-w-2xl mx-auto">
                Descubra todas as ferramentas que tornam o Cervejário o melhor
                app para catalogar suas cervejas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-amber-200 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-600 rounded-full mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-amber-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-amber-700">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section
          id="screenshots"
          className="py-20 bg-gradient-to-b from-amber-50 to-orange-50"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-amber-900 mb-4">
                Veja o App em Ação
              </h2>
              <p className="text-xl text-amber-700 max-w-2xl mx-auto">
                Interface intuitiva e design moderno para a melhor experiência
                do usuário
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <Image
                  src="/images/app-screenshot-1.png"
                  alt="Lista de Cervejas"
                  width={300}
                  height={600}
                  className="rounded-3xl shadow-2xl mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-amber-900 mb-2">
                  Lista de Cervejas
                </h3>
                <p className="text-amber-700">
                  Visualize todas as suas cervejas cadastradas com busca
                  inteligente
                </p>
              </div>
              <div className="text-center">
                <Image
                  src="/images/app-screenshot-2.png"
                  alt="Detalhes da Cerveja"
                  width={300}
                  height={600}
                  className="rounded-3xl shadow-2xl mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-amber-900 mb-2">
                  Detalhes Completos
                </h3>
                <p className="text-amber-700">
                  Informações detalhadas de cada cerveja com foto e avaliação
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-amber-900 mb-4">
                O que nossos usuários dizem
              </h2>
              <p className="text-xl text-amber-700 max-w-2xl mx-auto">
                Junte-se a milhares de usuários que já descobriram o prazer de
                catalogar cervejas
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-amber-200">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-amber-700 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <p className="font-semibold text-amber-900">
                      {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section
          id="download"
          className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Pronto para começar?
            </h2>
            <p className="text-2xl font-semibold mb-4 opacity-95 italic">
              "Você bebe. O Cervejário lembra."
            </p>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Baixe o Cervejário agora e comece a catalogar suas cervejas
              favoritas. É grátis e fácil de usar!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://play.google.com/store/apps/details?id=br.app.cervejario"
                className="transition-transform hover:scale-105"
              >
                <Image
                  src="/images/google-play-badge.png"
                  alt="Disponível no Google Play"
                  width={240}
                  height={72}
                  className="h-16 w-auto"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/cervej%C3%A1rio/id6748159175"
                className="transition-transform hover:scale-105"
              >
                <Image
                  src="/images/app-store-badge.png"
                  alt="Download na App Store"
                  width={240}
                  height={72}
                  className="h-16 w-auto"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contato" className="bg-amber-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src="/images/logo-icon.png"
                    alt="Cervejário Logo"
                    width={32}
                    height={32}
                    className="rounded"
                  />
                  <span className="text-2xl font-bold">Cervejário</span>
                </div>
                <p className="text-amber-200 mb-4">
                  Você bebe. O Cervejário lembra.
                </p>
                <p className="text-amber-300 text-sm">
                  O melhor aplicativo para catalogar suas cervejas favoritas e
                  criar memórias especiais.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Links Rápidos</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => scrollToSection("inicio")}
                    className="block text-amber-200 hover:text-white text-left"
                  >
                    Início
                  </button>
                  <button
                    onClick={() => scrollToSection("funcionalidades")}
                    className="block text-amber-200 hover:text-white text-left"
                  >
                    Funcionalidades
                  </button>
                  <button
                    onClick={() => scrollToSection("screenshots")}
                    className="block text-amber-200 hover:text-white text-left"
                  >
                    Screenshots
                  </button>
                  <button
                    onClick={() => scrollToSection("download")}
                    className="block text-amber-200 hover:text-white text-left"
                  >
                    Download
                  </button>
                  <button
                    onClick={() => window.open("/privacy-policy", "_blank")}
                    className="block text-amber-200 hover:text-white text-left"
                  >
                    Política de Privacidade
                  </button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Contato</h3>
                <div className="space-y-2">
                  <p className="text-amber-200 flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    roger.brusa@bol.com.br
                  </p>
                  {/* <div className="flex space-x-4 mt-4">
                    <Link href="#" className="text-amber-200 hover:text-white">
                      <Facebook className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-amber-200 hover:text-white">
                      <Twitter className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-amber-200 hover:text-white">
                      <Instagram className="h-5 w-5" />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="border-t border-amber-800 mt-8 pt-8 text-center">
              <p className="text-amber-300 text-sm">
                © 2025 Cervejário. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
