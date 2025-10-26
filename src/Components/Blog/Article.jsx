const ArticleComponent = () => {
  return (
    <div className="w-full flex justify-center py-6 md:py-10 lg:py-12 px-4 md:px-6 lg:px-8">
      
      <article className="w-full max-w-[90rem] text-gray-700">

        <header className="flex items-start md:items-center mb-6 md:mb-8 lg:mb-10">
          
          <div className="w-1 bg-blue-600 h-8 md:h-10 mr-3 md:mr-4 flex-shrink-0"></div>
          
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide md:tracking-wider text-gray-800 uppercase leading-tight md:leading-snug">
            UNVEILING TIMELESS ELEGANCE: EXPLORING THE ALLURE OF VINTAGE FASHION
          </h1>
        </header>


        <section className="space-y-4 md:space-y-6">
          
          <div>
            <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3">
              The Essence of Time Travel
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              Vintage fashion allows us to transcend eras, stepping into the shoes of those who came before us. Each piece tells a story, offering a glimpse into the cultural and societal norms of its time. From the flapper dresses of the 1920s that embodied the spirit of rebellion to the tailored suits of the 1960s that epitomized sophistication, every era has its signature style waiting to be revived.
            </p>
          </div>

          <div>
            <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3">
              Quality Beyond Compare
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              One of the hallmarks of vintage fashion is the unparalleled craftsmanship that went into creating garments that stood the test of time. In a world where fast fashion often prioritizes quantity over quality, vintage pieces remind us of an era when attention to detail and durability were paramount. The feel of a vintage silk dress or the weight of a hand-sewn coat is a testament to the dedication of artisans of yesteryears.
            </p>
          </div>

          <div>
            <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3">
              Eclectic Personal Style
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              Embracing vintage fashion allows us to curate a wardrobe that's uniquely ours. Mixing and matching vintage pieces with contemporary items creates a personal style that defies categorization. From pairing a 1970s bohemian blouse with modern jeans to accessorizing a little black dress with vintage brooches, the possibilities are endless and the results are often strikingly original.
            </p>
          </div>

          <div>
            <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3">
              Sustainable Chic
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              As the world embraces sustainability, vintage fashion takes center stage as a prime example of eco-conscious style. Choosing pre-loved clothing not only reduces the demand for new production but also breathes new life into garments that might otherwise be forgotten. It's a nod to slow fashion, a movement that encourages thoughtful consumption and reduces the impact on the environment.
            </p>
          </div>
        </section>

      </article>
    </div>
  );
}

export default ArticleComponent;