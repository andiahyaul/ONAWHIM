"use client"

import { useState, useEffect, FC } from 'react';
import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "@/components/blocks/hero-gallery-scroll-animation"
import { Button } from "@/components/ui/button";
import { TiltedCard } from "@/components/ui/tilted-card";
import { CTASection } from "@/components/ui/cta-section";
import { WhatsAppFloatingButton } from "@/components/ui/whatsapp-floating-button";
import { Footer } from "@/components/ui/footer";
import { AboutSection } from "@/components/ui/about-section";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { ProductModal } from "@/components/ui/product-modal";
import { InstagramFeed } from "@/components/ui/instagram-feed"; 


export default function Home() {
  const IMAGES = [
    "https://images.unsplash.com/photo-1751451476956-b6827798e300?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1751451468324-ee12df5629fd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1751451474786-7f8b3f1e8836?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://media.discordapp.net/attachments/1387043965714300974/1389906952997310474/Screenshot_2025-07-02_at_16.52.38.png?ex=68665338&is=686501b8&hm=4ed84f8d79f374ba0abe594c5c7009385875b04dbd3f645bfdfd9fb4622b0fdf&=&format=webp&quality=lossless&width=1055&height=1305",
    "https://media.discordapp.net/attachments/1387043965714300974/1389906953731444758/Screenshot_2025-07-02_at_16.52.56.png?ex=68665338&is=686501b8&hm=6facf0da01b5fe99caefe9281792e66c4b45164c82d1aa46f9c4c84241dc91ce&=&format=webp&quality=lossless&width=1030&height=1305"
  ];

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const darkMode = mediaQuery.matches;
      setIsDarkMode(darkMode);
      document.documentElement.classList.toggle('dark', darkMode);
    };
    handleChange(); 
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const imageSrcValArr = [
    "https://media.discordapp.net/attachments/1387043965714300974/1389907215606878270/IMG_2435.jpeg?ex=68665377&is=686501f7&hm=87b9751a2bb917872d0f807abd79b2a8f8d079ec0b5a30f8b0b4e0ed16a05ecb&=&format=webp&width=979&height=1305",
    "https://media.discordapp.net/attachments/1387043965714300974/1389907416027758735/IMG_2447.jpeg?ex=686653a7&is=68650227&hm=d682eeff6ec384c0a8363a0ff37ad4641b3a407d65a23c66ff320a99e28e3eab&=&format=webp&width=1305&height=1305",
    "https://media.discordapp.net/attachments/1387043965714300974/1389907416421765161/IMG_2446.jpeg?ex=686653a7&is=68650227&hm=f87ea9ec5054d3a59245f8dd1b0b20bc9fd1ebb9ccc8c6d3c29cf6058051928f&=&format=webp&width=1305&height=1305",
    "https://media.discordapp.net/attachments/1387043965714300974/1389907416807768177/IMG_2445.jpeg?ex=686653a7&is=68650227&hm=b3cbe0f04595c8c047d22f558550bd41860e380f130648ee7be1c3e7e4068e47&=&format=webp&width=1305&height=1305",
    "https://media.discordapp.net/attachments/1387043965714300974/1389907417231265834/IMG_2448.jpeg?ex=686653a7&is=68650227&hm=e899283593ffdb643e20daa4b3c8477a0e799499f3a117682605c2e7220d3771&=&format=webp&width=1305&height=1305",
    "https://media.discordapp.net/attachments/1387043965714300974/1389907417717936178/IMG_9799.jpeg?ex=686653a7&is=68650227&hm=85ac1cf08a167817102cacdc7372ca01213e4e494755276e129e1fc4da2be7d3&=&format=webp&width=979&height=1305"
  ];

  const imageSrcVal = "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58";
  const altTextVal = "";
  const captionTextVal = "";

  // Product data for modal
  const productData = [
    {
      imageSrc: 'https://media.discordapp.net/attachments/1387043965714300974/1389907215606878270/IMG_2435.jpeg?ex=68665377&is=686501f7&hm=87b9751a2bb917872d0f807abd79b2a8f8d079ec0b5a30f8b0b4e0ed16a05ecb&=&format=webp&width=979&height=1305',
      title:'Onawhim Collection #1⁠',
      description: "Discover the perfect blend of style and spontaneity with this carefully curated accessory. Each piece tells a unique story while maintaining our signature aesthetic of modern elegance.",
      category: ""
    },
    {
      imageSrc: "https://media.discordapp.net/attachments/1387043965714300974/1389907416027758735/IMG_2447.jpeg?ex=686653a7&is=68650227&hm=d682eeff6ec384c0a8363a0ff37ad4641b3a407d65a23c66ff320a99e28e3eab&=&format=webp&width=1305&height=1305",
      title:'Onawhim Collection #2',
      description: "Discover the perfect blend of style and spontaneity with this carefully curated accessory. Each piece tells a unique story while maintaining our signature aesthetic of modern elegance.",
      category: ""
    },
    {
      imageSrc: "https://media.discordapp.net/attachments/1387043965714300974/1389907416421765161/IMG_2446.jpeg?ex=686653a7&is=68650227&hm=f87ea9ec5054d3a59245f8dd1b0b20bc9fd1ebb9ccc8c6d3c29cf6058051928f&=&format=webp&width=1305&height=1305",
      title: 'Onawhim Collection #3',
      description: "Discover the perfect blend of style and spontaneity with this carefully curated accessory. Each piece tells a unique story while maintaining our signature aesthetic of modern elegance.",
      category: ""
    },
    {
      imageSrc: "https://media.discordapp.net/attachments/1387043965714300974/1389907416807768177/IMG_2445.jpeg?ex=686653a7&is=68650227&hm=b3cbe0f04595c8c047d22f558550bd41860e380f130648ee7be1c3e7e4068e47&=&format=webp&width=1305&height=1305",
      title: 'Onawhim Collection #4',
      description: "Discover the perfect blend of style and spontaneity with this carefully curated accessory. Each piece tells a unique story while maintaining our signature aesthetic of modern elegance.",
      category: ""
    },
    {
      imageSrc: "https://media.discordapp.net/attachments/1387043965714300974/1389907417231265834/IMG_2448.jpeg?ex=686653a7&is=68650227&hm=e899283593ffdb643e20daa4b3c8477a0e799499f3a117682605c2e7220d3771&=&format=webp&width=1610&height=1610",
      title:' Onawhim Collection #5',
      description: "Discover the perfect blend of style and spontaneity with this carefully curated accessory. Each piece tells a unique story while maintaining our signature aesthetic of modern elegance.",
      category: ""
    },
    {
      imageSrc: "https://media.discordapp.net/attachments/1387043965714300974/1389907417717936178/IMG_9799.jpeg?ex=686653a7&is=68650227&hm=85ac1cf08a167817102cacdc7372ca01213e4e494755276e129e1fc4da2be7d3&=&format=webp&width=1208&height=1610",
      title: 'Onawhim Collection #6',
      description: "Discover the perfect blend of style and spontaneity with this carefully curated accessory. Each piece tells a unique story while maintaining our signature aesthetic of modern elegance.",
      category: ""
    },
  ];

  const handleProductClick = (index: number) => {
    setSelectedProduct(index);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleModalNavigate = (direction: 'prev' | 'next') => {
    if (selectedProduct !== null) {
      if (direction === 'prev') {
        setSelectedProduct(selectedProduct === 0 ? productData.length - 1 : selectedProduct - 1);
      } else {
        setSelectedProduct(selectedProduct === productData.length - 1 ? 0 : selectedProduct + 1);
      }
    }
  };
  const containerHeightVal = "300px";
  const containerWidthVal = "100%";
  const imageHeightVal = "300px"; 
  const imageWidthVal = "100%";  
  const rotateAmplitudeVal = 12;
  const scaleOnHoverVal = 1.15; 
  const showMobileWarningVal = true; 
  const showTooltipVal = true;
  const displayOverlayContentVal = true;

  // Page uses Tailwind's dark: prefix directly
  const pageClasses = "bg-white text-black dark:bg-black dark:text-white";
  
  // Overlay theming using Tailwind's dark: prefix
  const overlayBgGradient = "from-neutral-200/80 to-transparent dark:from-black/80 dark:to-transparent";
  const overlayPrimaryTextColor = "text-black dark:text-white";
  const overlaySecondaryTextColor = 'text-neutral-700 dark:text-neutral-300';

  // Tooltip theming directly using Tailwind classes with dark: prefix
  // This will be passed to TiltedCard's tooltipClassName prop
  const tooltipThemeClassesForProp = "bg-white text-neutral-800 border border-neutral-300 dark:bg-neutral-800 dark:text-neutral-200 dark:border-neutral-700";

  const overlayContentJsx = (
    <div className={`absolute inset-0 flex flex-col justify-end p-4 
                    bg-gradient-to-t ${overlayBgGradient} 
                    rounded-b-[15px]`}> 
      <p className={`text-lg font-semibold ${overlayPrimaryTextColor} drop-shadow-sm`}>
        {altTextVal}
      </p>
      <p className={`text-sm ${overlaySecondaryTextColor} drop-shadow-sm`}>
        {captionTextVal}
      </p>
    </div>
  );

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <main className="min-h-screen pt-20 pb-5">
      <div className="container mx-auto px-4">
        <ContainerScroll id="hero-section" className="h-[350vh]">
          <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
            {IMAGES.map((imageUrl, index) => (
              <BentoCell
                key={index}
                className="overflow-hidden rounded-xl shadow-xl"
              >
                <img
                  className="size-full object-cover object-center"
                  src={imageUrl}
                  alt=""
                />
              </BentoCell>
            ))}
          </BentoGrid>
          
          <ContainerScale className="relative z-10 text-center">
            <h1 className="max-w-xl text-[72px] font-bold tracking-tighter text-white font-chassi">
              Onawhim
            </h1>
          </ContainerScale>
        </ContainerScroll>
        
        <AboutSection />
        
        <section id="product-showcase" className='w-full py-8 lg:py-16 px-4'>
          <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-20 items-start lg:justify-between w-full'>
              <div className='lg:w-1/3 flex flex-col space-y-4 lg:space-y-6'>
                <h2 className='text-3xl md:text-4xl xl:text-5xl font-bold'>The Story Behind the Craft</h2>
                <p className='font-inter text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed'>
                    Every piece is more than just an accessory it's a narrative woven with care, tradition, and creativity. Inspired by cultural motifs and handmade using time-honored techniques.


                </p>
              </div>
              <div className='w-full'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-32'>
              {imageSrcValArr.map((imageUrl, index) => (
                <div key={index} onClick={() => handleProductClick(index)} className="cursor-pointer font-inter w-full lg:max-w-[320px] mx-auto aspect-square flex items-center justify-center">
                  <TiltedCard
                    imageSrc={imageUrl}
                    altText={altTextVal}
                    captionText={`${captionTextVal} - Click to view details`}
                    containerHeight={containerHeightVal}
                    containerWidth={containerWidthVal}
                    imageHeight={imageHeightVal} 
                    imageWidth={imageWidthVal}   
                    rotateAmplitude={rotateAmplitudeVal}
                    scaleOnHover={scaleOnHoverVal}
                    showMobileWarning={showMobileWarningVal}
                    showTooltip={showTooltipVal}
                    displayOverlayContent={displayOverlayContentVal}
                    overlayContent={overlayContentJsx}
                    tooltipClassName={tooltipThemeClassesForProp}
                  />
                </div>
              ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <InstagramFeed />
        
        <div id="cta-section">
          <CTASection />
        </div>
        
      </div>
      <Footer />
      <WhatsAppFloatingButton />
      
      {/* Product Modal */}
      {selectedProduct !== null && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          product={productData[selectedProduct]}
          allProducts={productData}
          currentIndex={selectedProduct}
          onNavigate={handleModalNavigate}
        />
      )}
    </main>
    </>
  );
}
