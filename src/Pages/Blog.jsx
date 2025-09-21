import { memo } from "react";
import React, { useState } from "react";
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
} from "lucide-react";

 const  Blog  = ()=> {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title:
        "Stylish woman in summer outfit isolated posing in fashion trend isolated",
      excerpt:
        "In this captivating scene, a stylish woman stands poised against a pristine backdrop, capturing the essence of summer's allure. Bathed in the gentle sunlight, she emanates an air of confidence and sophistication. Her attire, a harmonious blend of contemporary trends and timeless elegance, perfectly epitomizes the vibrant spirit of the season.",
      readTime: "5 min read",
      comments: 23,
      image: "bg-gradient-to-br from-orange-100 to-orange-200",
    },
    {
      id: 2,
      title: "woman with a blonde hair in a bonnet hood dressed on her head",
      excerpt: "",
      image: "bg-gradient-to-br from-purple-400 to-purple-600",
    },
    {
      id: 3,
      title: "Aptitude Smartwatch Women Men",
      excerpt:
        "It seems like you've mentioned 'Aptitude Smartwatch Women Men'. However, as of my last knowledge update in September 2023, I don't have specific...",
      readTime: "3 min read",
      comments: 45,
      image: "bg-gradient-to-br from-gray-100 to-gray-300",
    },
    {
      id: 4,
      title: "Anker 325 power bank",
      excerpt:
        "Anker 325 power bank, 20000mAh external battery PowerIQ technology USB-C port, enormous energy density, compatible with iPhone, Samsung Galaxy iPad and more...",
      readTime: "4 min read",
      comments: 12,
      image: "bg-gradient-to-br from-amber-100 to-amber-200",
    },
    {
      id: 5,
      title: "Stylish young man out in town",
      excerpt:
        "In the heart of the bustling city, a stylish young man emerges into the urban landscape with an air of contemporary confidence. He ensembles effortlessly captures the essence of city chic...",
      readTime: "6 min read",
      comments: 31,
      image: "bg-gradient-to-br from-blue-100 to-blue-200",
    },
  ];

  const categories = [
    { name: "SUSTAINABLE FASHION", color: "text-yellow-600" },
    { name: "THE EVOLUTION OF WORKWEAR", color: "text-blue-600" },
  ];

  const wirelessEarbuds = [
    { id: 1, user: "Nina Marker", role: "Pro Seller", rating: 4.5 },
    { id: 2, user: "Nina Marker", role: "Pro Seller", rating: 4.5 },
    { id: 3, user: "Nina Marker", role: "Pro Seller", rating: 4.5 },
    { id: 4, user: "Nina Marker", role: "Pro Seller", rating: 4.5 },
  ];

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
      <section className="bg-gradient-to-r from-purple-400 to-purple-500 flex flex-row text-white py-16 sm:py-24">
        <div className="max-w-7xl flex flex-row  h-[60vh] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="flex items-center mb-4">
                <Heart className="w-5 h-5 mr-2" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                STUNNING BAREFOOTED
                <br />
                WOMAN OF 2023
              </h1>
              <p className="text-lg sm:text-xl mb-6 text-purple-100 leading-relaxed">
                IN THE HEART OF A CHIC URBAN STUDIO, THE ATMOSPHERE BUZZED WITH
                EXCITEMENT AS A TRENDY FUR COAT TOOK CENTER STAGE DURING A
                VIBRANT PHOTOSHOOT.
              </p>
              <p className="text-sm text-purple-200 mb-6">
                ★ 30.03.2023 ★ 4 days ago
              </p>
              <button className="border border-white px-6 py-3 hover:bg-white hover:text-purple-600 transition-colors font-medium">
                READ MORE →
              </button>
            </div>

            <div className="lg:w-1/2 lg:pl-12">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white bg-opacity-20 p-4 rounded">
                    <h3 className="font-semibold mb-2">SUSTAINABLE FASHION</h3>
                    <p className="text-sm text-purple-100">
                      EXPLORING GARMENTS THAT BLEND ETHICAL PRODUCTION PRACTICES
                      WITH EXCEPTIONAL STYLE, FROM ORGANIC COTTON SHIRTS...
                    </p>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded">
                    <h3 className="font-semibold mb-2">
                      THE EVOLUTION OF WORKWEAR
                    </h3>
                    <p className="text-sm text-purple-100">
                      THIS CHANGE MARKS AN INTERESTING SHIFT FROM A
                      MASCULINE-CENTERED PROFESSIONAL AESTHETIC...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Blog Posts */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Article */}
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-start space-x-6">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      "UNVEILING TIMELESS ELEGANCE: EXPLORING THE ALLURE OF
                      VINTAGE FASHION"
                    </h2>
                    <div className="text-sm text-gray-600 mb-4">
                      <span className="font-medium">
                        The Essence of Time Travel
                      </span>
                    </div>
                    <div className="prose text-gray-600 text-sm leading-relaxed space-y-4">
                      <p>
                        Vintage fashion allows us to transcend eras, stepping
                        into the shoes of those who came before us. Each piece
                        tells a story, offering a glimpse into the cultural and
                        societal norms of its time. From the flapper dresses of
                        the 1920s that embodied the spirit of rebellion to the
                        tailored suits of the 1940s that epitomized
                        sophistication, every era has its signature style
                        waiting to be revived.
                      </p>
                      <p>
                        One of the hallmarks of vintage fashion is the
                        unparalleled craftsmanship that went into creating
                        garments that stood the test of time. In a world where
                        fast fashion often prioritizes quantity over quality,
                        vintage pieces remind us of an era when attention to
                        detail and durability were paramount. The feel of a
                        well-made vintage coat or a testament to the dedication
                        of artisans of yesteryears.
                      </p>
                      <p>
                        <strong>Quality Through Time</strong>
                      </p>
                      <p>
                        Embracing vintage fashion allows us to curate a wardrobe
                        that's uniquely ours. Mixing and matching vintage pieces
                        with contemporary items creates a personal style that
                        defies categorization. From pairing a 1970s bohemian
                        blouse with modern jeans to accessorizing a little black
                        dress with vintage brooches, the possibilities are
                        endless and the results are often strikingly original.
                      </p>
                      <p>
                        <strong>Sustainable Chic</strong>
                      </p>
                      <p>
                        As the world embraces sustainability, vintage fashion
                        takes center stage as a prime example of eco-conscious
                        style. Choosing pre-loved clothing not only reduces the
                        demand for new production but also breathes new life
                        into garments that might otherwise be forgotten. It's a
                        nod to slow fashion, a movement that encourages
                        thoughtful consumption and reduces the impact on the
                        environment.
                      </p>
                    </div>
                  </div>
                  <div className="w-64 flex-shrink-0">
                    <div className="bg-gradient-to-br from-red-400 to-red-500 h-48 rounded mb-4"></div>
                    <div className="space-y-2">
                      <div className="bg-gradient-to-br from-red-400 to-red-500 h-16 rounded"></div>
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-16 rounded"></div>
                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 h-16 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className={`${post.image} h-48 w-full`}></div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 leading-tight">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    {post.readTime && (
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{post.readTime}</span>
                        <span>{post.comments} comments</span>
                      </div>
                    )}
                    <button className="mt-3 text-blue-600 text-sm font-medium hover:text-blue-700">
                      READ MORE →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Wireless Earbuds</h3>
              <div className="space-y-4">
                {wirelessEarbuds.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-3 p-3 bg-blue-50 rounded"
                  >
                    <div className="w-10 h-10 bg-blue-200 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-1">
                        "I've been using the XYZ Wireless Earbuds for a few
                        weeks now, and they've completely..."
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-xs">{item.user}</p>
                          <p className="text-xs text-gray-500">{item.role}</p>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs ml-1">{item.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`block ${category.color} hover:underline font-medium text-sm`}
                  >
                    {category.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default memo(Blog)