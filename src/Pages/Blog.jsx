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

const Blog = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const blogPosts = [
  //   {
  //     id: 1,
  //     title:
  //       "Stylish woman in summer outfit isolated posing in fashion trend isolated",
  //     excerpt:
  //       "In this captivating scene, a stylish woman stands poised against a pristine backdrop, capturing the essence of summer's allure. Bathed in the gentle sunlight, she emanates an air of confidence and sophistication. Her attire, a harmonious blend of contemporary trends and timeless elegance, perfectly epitomizes the vibrant spirit of the season.",
  //     readTime: "5 min read",
  //     comments: 23,
  //     image: "bg-gradient-to-br from-orange-100 to-orange-200",
  //   },
  //   {
  //     id: 2,
  //     title: "woman with a blonde hair in a bonnet hood dressed on her head",
  //     excerpt: "",
  //     image: "bg-gradient-to-br from-purple-400 to-purple-600",
  //   },
  //   {
  //     id: 3,
  //     title: "Aptitude Smartwatch Women Men",
  //     excerpt:
  //       "It seems like you've mentioned 'Aptitude Smartwatch Women Men'. However, as of my last knowledge update in September 2023, I don't have specific...",
  //     readTime: "3 min read",
  //     comments: 45,
  //     image: "bg-gradient-to-br from-gray-100 to-gray-300",
  //   },
  //   {
  //     id: 4,
  //     title: "Anker 325 power bank",
  //     excerpt:
  //       "Anker 325 power bank, 20000mAh external battery PowerIQ technology USB-C port, enormous energy density, compatible with iPhone, Samsung Galaxy iPad and more...",
  //     readTime: "4 min read",
  //     comments: 12,
  //     image: "bg-gradient-to-br from-amber-100 to-amber-200",
  //   },
  //   {
  //     id: 5,
  //     title: "Stylish young man out in town",
  //     excerpt:
  //       "In the heart of the bustling city, a stylish young man emerges into the urban landscape with an air of contemporary confidence. He ensembles effortlessly captures the essence of city chic...",
  //     readTime: "6 min read",
  //     comments: 31,
  //     image: "bg-gradient-to-br from-blue-100 to-blue-200",
  //   },
  // ];

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
            <nav className="hidden md:flex space-x-8">
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
                className="md:hidden"
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
          <div className="md:hidden bg-white border-t border-gray-200">
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
      <section className="h-[80vh] bg-gradient-to-br from-purple-300 via-purple-400 to-purple-500 p-8 flex ">
        <div className="max-w-4xl w-full translate-x-[10rem] translate-y-[5rem]">
          {/* Main Card */}
          <div className="bg-purple-400 bg-opacity-50 backdrop-blur-sm rounded-lg p-8">
            {/* Header Section */}
            <div className="flex items-start gap-4 mb-6">
              <button className="text-white hover:text-purple-100 transition-colors">
                <Bookmark size={24} />
              </button>
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-white mb-4">
                  STUNNING BAREFOOTED
                  <br />
                  WOMAN OF 2023
                </h1>
                <p className="text-white text-sm leading-relaxed mb-6 max-w-xl">
                  IN THE HEART OF A CHIC URBAN STUDIO, THE ATMOSPHERE BUZZED
                  WITH EXCITEMENT AS A TRENDY FUR COAT TOOK CENTER STAGE DURING
                  A VIBRANT PHOTOSHOOT.
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-white text-xs mb-6">
                  <span className="flex flex-row gap-2 items-center">
                    <Clock3 width={15} /> 20 July, 2023
                  </span>
                  <span>
                    <Heart width={15} className="fill-gray-400" />{" "}
                  </span>
                  <span>830</span>
                  <span>
                    {" "}
                    <Bookmark width={15} className="fill-gray-400" />{" "}
                  </span>
                  <span>14</span>
                </div>

                {/* Read More Button */}
                <button className="flex items-center gap-2 text-white border border-white px-6 py-2 rounded hover:bg-white hover:text-purple-400 transition-all">
                  READ MORE
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Bottom Section - Articles */}
            <div className="border-t border-yellow-400 pt-6 mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Article 1 */}
                <div>
                  <div className="w-12 h-1 bg-yellow-400 mb-3"></div>
                  <h3 className="text-white font-bold text-sm mb-2">
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
                  <h3 className="text-white font-bold text-sm mb-2">
                    SUSTAINABLE FASHION
                  </h3>
                  <p className="text-white text-xs leading-relaxed">
                    DISCOVER THE GROWING IMPORTANCE OF SUSTAINABLE FASHION AND
                    ITS IMPACT ON THE ENVIRONMENT.
                  </p>
                </div>

                {/* Article 3 */}
                <div>
                  <div className="w-12 h-1 bg-yellow-400 mb-3"></div>
                  <h3 className="text-white font-bold text-sm mb-2">
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
      <section className="w-full min-h-screen flex flex-col pl-24 pt-12  ">
        <div className="w-full h-[100%] flex flex-col">
          <div className="Cards flex flex-col  items-center justify-center w-[100%] h-[100%]">
            <div className="CardsTop items-center justify-center w-[50%] h-[100%] ">
              <div className="left w-full sm:w-[90%] md:w-[90%] lg:w-[60%] h-auto lg:h-[90%] flex flex-col sm:flex-row rounded-lg lg:rounded-none overflow-hidden">
                <div
                  className="flex flex-col gap-2 sm:gap-3 md:gap-4 w-full sm:w-[90%] h-auto sm:h-[100%] justify-center items-center font-bold py-8 sm:py-6 md:py-8 px-4 sm:px-2 md:px-4"
                  style={{ backgroundColor: "rgb(189,32,217,0.91)" }}
                >
                  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] w-full sm:w-[270px] h-[auto] text-white leading-tight sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[46px] text-center sm:text-left">
                    The Pinky <br /> Barbie Edition
                  </h1>
                  <h6 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[26px] text-white leading-5 sm:leading-6 md:leading-7 lg:leading-8 xl:leading-[36px] font-normal text-center sm:text-left sm:-translate-x-2 md:-translate-x-4 lg:-translate-x-6">
                    Lets play dress up
                  </h6>
                  <p
                    to="Allproduct"
                    className="underline cursor-pointer text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] text-white font-normal text-center sm:text-left sm:mr-8 md:mr-16 lg:mr-20 xl:mr-24 leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[40px] hover:no-underline transition-all"
                  >
                    Explore all Categoty
                  </p>
                </div>
                <div
                  className="w-full sm:w-[90%] min-h-[304px] min-w- sm:h-[100%] "
                  style={{ backgroundColor: "rgb(160,191,47,0.89)" }}
                ></div>
              </div>
            </div>
            <div className="CardsBottom"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default memo(Blog);
