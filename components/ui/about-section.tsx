interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: string[];
}

export function AboutSection({
  title = "About Onawhim",
  subtitle = "",
  description = "Represents the perfect fusion of thoughtful design and spontaneous creativity. Our carefully curated collection of accessories embodies the spirit of living in the moment while maintaining an eye for timeless elegance.",
  features = [
    "Quality craftsmanship with attention to detail", 
    "Designs that inspire confidence and creativity",
    "Sustainable practices and ethical sourcing"
  ]
}: AboutSectionProps) {
  return (
    <section id="about-section" className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent">
                {title}
              </h2>
              <h3 className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-medium font-inter">
                {subtitle}
              </h3>
            </div>
            
            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-inter">
              {description}
            </p>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold font-inter text-neutral-900 dark:text-neutral-100">
                Signature Touch
              </h4>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-700 dark:text-neutral-300 font-inter">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Visual Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://media.discordapp.net/attachments/1387043965714300974/1389930744071196723/Screenshot_2025-07-02_at_18.28.27.png?ex=68666961&is=686517e1&hm=997208553e5e4c7d30fb140cbdae9ff12260c87aa39c66f332f4ddcde7242b37&=&format=webp&quality=lossless&width=1184&height=1492"
                alt="ONAWHIM product showcase"
                className="w-full h-full object-cover aspect-square"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-neutral-900/10 to-neutral-600/10 dark:from-neutral-100/10 dark:to-neutral-400/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-neutral-600/10 to-neutral-900/10 dark:from-neutral-400/10 dark:to-neutral-100/10 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}