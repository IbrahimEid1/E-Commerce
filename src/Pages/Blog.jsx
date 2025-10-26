import { memo } from "react";
import React, { useState } from "react";
import { Bookmark, ArrowRight } from "lucide-react";

import {
  ShoppingCart,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Star,
  Heart,
  User,
  Clock3,
} from "lucide-react";
import ComponentCardsBlog from "../Components/Blog/ComponentCards";
import CardsTop from "../Components/Blog/CardsTop";
import Cardsbtm from "../Components/Blog/Cardsbtm";
import WirelessComment from "../Components/Blog/WirelessComment";
import ArticleComponent from "../Components/Blog/Article";
import Test from "../Components/Blog/Gallery";
import Gallery from "../Components/Blog/Gallery";
import Footer from "../Components/ProductDetails/Footer";
import FooterVisa from "../Components/ProductDetails/FooterVisa";

const Blog = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-6 h-6 text-purple-600" />
              <span className="text-xl font-bold text-gray-900">Luminae</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 font-medium"
              >
                NEWS
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 font-medium"
              >
                FASHION
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 font-medium"
              >
                HEALTH
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 font-medium"
              >
                TECH
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 font-medium"
              >
                ADVICE
              </a>
            </nav>

            {/* Social Icons & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-3">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-600 cursor-pointer" />
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <nav className="px-4 py-4 space-y-3">
              <a
                href="#"
                className="block text-gray-700 hover:text-purple-600 font-medium"
              >
                NEWS
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-purple-600 font-medium"
              >
                FASHION
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-purple-600 font-medium"
              >
                HEALTH
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-purple-600 font-medium"
              >
                TECH
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-purple-600 font-medium"
              >
                ADVICE
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="min-h-[70vh] md:min-h-[75vh] xl:h-[80vh] bg-gradient-to-br from-purple-300 via-purple-400 to-purple-500 p-4 md:p-6 xl:p-8 flex items-start justify-start overflow-hidden">
        <div className="max-w-4xl w-full xl:translate-x-[10rem] xl:translate-y-[5rem]">
          {/* Main Card */}
          <div className="bg-purple-400 bg-opacity-50 backdrop-blur-sm rounded-lg p-4 md:p-6 xl:p-8">
            {/* Header Section */}
            <div className="flex items-start gap-2 md:gap-4 mb-4 md:mb-6">
              <button className="text-white hover:text-purple-100 transition-colors flex-shrink-0">
                <Bookmark className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <div className="flex-1 min-w-0">
                <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-white mb-2 md:mb-4 break-words">
                  STUNNING BAREFOOTED
                  <br />
                  WOMAN OF 2023
                </h1>
                <p className="text-white text-xs md:text-sm leading-relaxed mb-4 md:mb-6 max-w-xl">
                  IN THE HEART OF A CHIC URBAN STUDIO, THE ATMOSPHERE BUZZED
                  WITH EXCITEMENT AS A TRENDY FUR COAT TOOK CENTER STAGE DURING
                  A VIBRANT PHOTOSHOOT.
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-white text-xs mb-4 md:mb-6">
                  <span className="flex flex-row gap-1 md:gap-2 items-center whitespace-nowrap">
                    <Clock3 className="w-3 h-3 md:w-4 md:h-4" /> 20 July, 2023
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 md:w-4 md:h-4 fill-gray-400" />
                    <span>830</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Bookmark className="w-3 h-3 md:w-4 md:h-4 fill-gray-400" />
                    <span>14</span>
                  </span>
                </div>

                {/* Read More Button */}
                <button className="flex items-center gap-2 text-white border border-white px-4 md:px-6 py-2 rounded hover:bg-white hover:text-purple-400 transition-all text-xs md:text-sm whitespace-nowrap">
                  READ MORE
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Bottom Section - Articles */}
            <div className="border-t border-yellow-400 pt-4 md:pt-6 mt-4 md:mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
                {/* Article 1 */}
                <div>
                  <div className="w-12 h-1 bg-yellow-400 mb-3"></div>
                  <h3 className="text-white font-bold text-xs md:text-sm mb-2">
                    FASHION PHOTOGRAPHY
                  </h3>
                  <p className="text-white text-xs leading-relaxed">
                    EXPLORE THE ART OF BARAENOPLEDEL ENT AND IN DEEP CURRENT
                    FASHION TRENDS RENAISSANCE AND TIMELESS GENEVA.
                  </p>
                </div>

                {/* Article 2 */}
                <div>
                  <div className="w-12 h-1 bg-yellow-400 mb-3"></div>
                  <h3 className="text-white font-bold text-xs md:text-sm mb-2">
                    SUSTAINABLE FASHION
                  </h3>
                  <p className="text-white text-xs leading-relaxed">
                    DISCOVER THE GROWING IMPORTANCE OF SUSTAINABLE FASHION AND
                    ITS IMPACT ON THE ENVIRONMENT.
                  </p>
                </div>

                {/* Article 3 */}
                <div className="md:col-span-2 xl:col-span-1">
                  <div className="w-12 h-1 bg-yellow-400 mb-3"></div>
                  <h3 className="text-white font-bold text-xs md:text-sm mb-2">
                    THE EVOLUTION OF WORKWEAR
                  </h3>
                  <p className="text-white text-xs leading-relaxed">
                    SHOWCASE VERSATILE OUTFITS THAT SUIT THEM A BALANCE BETWEEN
                    PROFESSIONALISM AND PERSONAL EXPRESSION.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center min-h-screen py-8 md:py-12">
        <div className="container pt-8 md:pt-[45px] w-full px-4 md:px-6 xl:px-8 flex flex-col xl:flex-row h-auto gap-6 md:gap-8">
          <div className="flex flex-col w-full xl:w-[40%] gap-6 md:gap-8">
            <ComponentCardsBlog />
            <Cardsbtm />
          </div>
          <div className="w-full xl:w-[50%] flex flex-col md:flex-row xl:flex-row gap-6 md:gap-8 xl:justify-between">
            <div className="w-full md:w-1/2 xl:w-auto">
              <CardsTop />
            </div>
            <div className="w-full md:w-1/2 xl:w-auto">
              <WirelessComment />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen px-4 md:px-8 xl:px-16 py-8 md:py-12 flex-col flex justify-start gap-6 md:gap-8">
        <ArticleComponent />
        <Gallery />
        <Footer />
        <FooterVisa />
      </section>
    </div>
  );
};

export default memo(Blog);