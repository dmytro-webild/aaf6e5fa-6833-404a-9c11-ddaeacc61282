"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="largeSmall"
      background="none"
      cardStyle="gradient-bordered"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="MIDNIGHT DIVISION™"
          navItems={[
            { name: "Home", id: "/" },
            { name: "Shop", id: "#products" },
            { name: "About", id: "#about" },
            { name: "Contact", id: "#contact" }
          ]}
          logoSrc="http://img.b2bpic.net/free-vector/antibacterial-logo-template-design_23-2148501963.jpg"
          logoAlt="MIDNIGHT DIVISION logo"
          bottomLeftText="Built For The Culture"
          bottomRightText="MIDNIGHTDIVISION.CO"
        />
      </div>
      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="MIDNIGHT DIVISION"
          description="Luxury streetwear engineered for those obsessed with movement and culture. Built for the streets, inspired by the track."
          background={{"variant":"plain"}}
          tag="APEX PREDATOR"
          buttons={[
            { text: "Shop Now", href: "#products" },
            { text: "Explore The Culture", href: "#about" }
          ]}
          mediaItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/batmobile-car-with-neon-lights_23-2151649964.jpg", imageAlt: "Luxury sports car on a city street at night" },
            { imageSrc: "http://img.b2bpic.net/free-photo/modern-car-driving-city_23-2151674318.jpg", imageAlt: "Driver's perspective in a luxury car at night" },
            { imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-trying-break-into-car_23-2149133089.jpg", imageAlt: "Model wearing a Midnight Division hat in an urban setting at night" },
            { imageSrc: "http://img.b2bpic.net/free-photo/view-car-running-high-speed_23-2150635397.jpg", imageAlt: "Drift car in action at a night racing event" },
            { imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-two-silver-rings-leather-surface_181624-3587.jpg", imageAlt: "Close-up of premium hat embroidery" },
            { imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-close-up-hard-light_1321-498.jpg", imageAlt: "Luxury car in a dark, cinematic garage" }
          ]}
          mediaAnimation="opacity"
        />
      </div>
      <div id="products" data-section="products">
        <ProductCardFour
          title="Exclusive Headwear"
          description="Discover our limited-edition collections. Precision-crafted with premium materials and aggressive aesthetics, each piece is a statement."
          textboxLayout="default"
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          products={[
            { id: "hat-1", name: "Apex Snapback", price: "$85", variant: "Matte Black", imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-fluffy-frame_23-2151862602.jpg", imageAlt: "Matte black snapback hat with wolf embroidery" },
            { id: "hat-2", name: "Oversteer Rope Hat", price: "$90", variant: "Cream & Red", imageSrc: "http://img.b2bpic.net/free-photo/fashionable-fedora-hat-studio_23-2150744033.jpg", imageAlt: "Cream rope hat with racing stripe" },
            { id: "hat-3", name: "No Signal Beanie", price: "$65", variant: "Dark Charcoal", imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-assortment-with-warm-clothes-shoes_23-2148312047.jpg", imageAlt: "Dark charcoal embroidered beanie with Japanese text" },
            { id: "hat-4", name: "Redline Division", price: "$80", variant: "Silver & Red", imageSrc: "http://img.b2bpic.net/free-photo/mature-woman-posing-studio_176474-72971.jpg", imageAlt: "Silver snapback hat with red racing number" },
            { id: "hat-5", name: "Ghost Lane Trucker", price: "$95", variant: "Matte Black", imageSrc: "http://img.b2bpic.net/free-vector/hand-drawn-cobra-logo_52683-78697.jpg", imageAlt: "apex predator hat snake design" },
            { id: "hat-6", name: "Midnight Run Cap", price: "$75", variant: "Dark Grey", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-girl-sunglasses-leaning-cabriolet-car-door-while-dreamily-looking-camera-with-airport-background_574295-3239.jpg", imageAlt: "midnight run hat coordinates embroidery" }
          ]}
          useInvertedBackground={false}
        />
      </div>
      <div id="lifestyle-showcase" data-section="lifestyle-showcase">
        <FeatureCardTwentyFour
          title="The Culture Lives Here"
          description="Immerse yourself in the world of Midnight Division. From Tokyo's neon-lit highways to underground car meets, our lifestyle is defined by speed, style, and exclusivity."
          textboxLayout="default"
          animationType="blur-reveal"
          features={[
            { id: "ls-1", title: "Midnight Streets", author: "MIDNIGHT DIVISION", description: "Capturing the raw energy of late-night drives and street racing.", tags: ["Night Driving", "Cinematic"], imageSrc: "http://img.b2bpic.net/free-photo/woman-grey-suit-enjoys-wind-street-new-york-city_8353-1582.jpg", imageAlt: "Person wearing Midnight Division hat in a night city scene" },
            { id: "ls-2", title: "Precision Craft", author: "MIDNIGHT DIVISION", description: "An intimate look at the meticulous embroidery and premium textures.", tags: ["Embroidery", "Quality"], imageSrc: "http://img.b2bpic.net/free-photo/skater-wearing-trucker-hat_23-2149431181.jpg", imageAlt: "Close-up of hat embroidery detail" },
            { id: "ls-3", title: "Engineered Style", author: "MIDNIGHT DIVISION", description: "Where motorsport engineering meets modern minimalist fashion.", tags: ["Motorsport", "Fashion"], imageSrc: "http://img.b2bpic.net/free-photo/man-using-laptop-while-charging-electric-car_107420-94885.jpg", imageAlt: "Sports car engine detail close up dark" }
          ]}
          useInvertedBackground={false}
        />
      </div>
      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="OUR STORY"
          title="Built for the Obsessed."
          description="MIDNIGHT DIVISION™ is a luxury streetwear brand born from the dark, aggressive energy of car culture and the relentless pursuit of speed. We craft exclusive headwear for those who live for the thrill of the night and the roar of the engine."
          subdescription="Our designs blend modern minimalism with racing aesthetics, Japanese influences, and cinematic style. Each piece represents freedom, ambition, and loyalty to the culture."
          icon={Zap}
          imageSrc="http://img.b2bpic.net/free-photo/bright-circular-light-painting-outdoors_23-2149679064.jpg"
          imageAlt="Abstract dark road tunnel representing speed and movement"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>
      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="The Division"
          description="Trusted by icons of speed and style. Our community is built on a shared passion for luxury, performance, and the culture of the night."
          textboxLayout="default"
          names={["DRIVING ESSENTIALS","URBAN RIDERS CLUB","RPM MAGAZINE","JDM ORIGINS","NIGHT OWL GARAGE","APEX COLLECTIVE","OVERSTEER LIFE"]}
          useInvertedBackground={false}
        />
      </div>
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Voices of the Street"
          description="Hear from the community that drives us. Authentic feedback from those who wear Midnight Division."
          textboxLayout="default"
          animationType="depth-3d"
          testimonials={[
            { id: "1", name: "Kenji Tanaka", role: "Drift Enthusiast", testimonial: "The quality is unmatched. Midnight Division hats are essential for my style, on and off the track. The design is so fresh.", imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-african-american-man-posing-outdoors-paris-happy-smile-fashion-style_1321-3388.jpg", imageAlt: "Kenji Tanaka avatar" },
            { id: "2", name: "Marcus \"Apex\" Bell", role: "Streetwear Collector", testimonial: "Finally, a brand that truly understands the blend of luxury fashion and car culture. Every drop is a must-have.", imageSrc: "http://img.b2bpic.net/free-photo/young-friends-having-fun-together_23-2149560757.jpg", imageAlt: "Marcus Bell avatar" },
            { id: "3", name: "Chloe Wong", role: "Automotive Photographer", testimonial: "Midnight Division's aesthetic is perfect for my shoots. It captures the dark, cinematic vibe of the JDM scene perfectly.", imageSrc: "http://img.b2bpic.net/free-vector/glitch-error-404-page-background_23-2148090409.jpg", imageAlt: "Chloe Wong avatar" },
            { id: "4", name: "David Kim", role: "Modified Car Builder", testimonial: "The attention to detail on the embroidery is insane. This isn't just a hat; it's a piece of the culture.", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-young-man-posing-spotlight_23-2151915999.jpg", imageAlt: "luxury fashion male model profile" },
            { id: "5", name: "Sophia Rodriguez", role: "Lifestyle Blogger", testimonial: "Midnight Division perfectly complements my luxury streetwear aesthetic. The quality is phenomenal and the designs are bold.", imageSrc: "http://img.b2bpic.net/free-photo/pop-punk-aesthetic-portrait-woman-posing-inside-building-stairs_23-2149371466.jpg", imageAlt: "streetwear collector young man cool" },
            { id: "6", name: "Ethan White", role: "Underground Racer", testimonial: "Wearing Midnight Division gives me that aggressive edge. It feels exclusive, like you're part of something special.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-stylish-redhead-biker-black-leather-jacket-holds-motorcycle-helmet-posing-studio-isolated-dark-background_613910-5358.jpg", imageAlt: "motorsport enthusiast male portrait" }
          ]}
          useInvertedBackground={false}
        />
      </div>
      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Answers from the Pit Stop"
          sideDescription="Got questions about our gear, shipping, or the Midnight Division lifestyle? We’ve got you covered."
          faqs={[
            { id: "q1", title: "What materials are used in Midnight Division hats?", content: "Our hats are crafted using premium materials, including high-quality cotton twill, durable mesh for trucker hats, and luxurious wool blends. All embroidery is done with precision 3D puff techniques for a superior finish." },
            { id: "q2", title: "Do you offer international shipping?", content: "Yes, we proudly offer international shipping to bring Midnight Division culture to enthusiasts worldwide. Shipping costs and times vary by destination and will be calculated at checkout." },
            { id: "q3", title: "How do I care for my Midnight Division hat?", content: "To maintain the premium quality and intricate embroidery of your hat, we recommend spot cleaning with a mild detergent and air-drying. Avoid machine washing or harsh chemicals." },
            { id: "q4", title: "Are your collections limited edition?", content: "Many of our collections are released in limited quantities to maintain exclusivity and collectibility, aligning with the luxury streetwear ethos. Follow our social media for release announcements." }
          ]}
          faqsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>
      <div id="contact" data-section="contact">
        <ContactText
          text="Join the Division. Connect with us for collaborations, inquiries, or just to share your passion for speed and style."
          animationType="entrance-slide"
          buttons={[
            { text: "Email Us", href: "mailto:info@midnightdivision.co" },
            { text: "Follow On Instagram", href: "https://instagram.com/midnightdivision" }
          ]}
          background={{"variant":"plain"}}
          useInvertedBackground={false}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            { title: "Shop", items: [{ label: "All Hats", href: "#products" }, { label: "New Arrivals", href: "#" }, { label: "Collections", href: "#" }] },
            { title: "MIDNIGHT", items: [{ label: "Our Story", href: "#about" }, { label: "The Culture", href: "#social-proof" }, { label: "FAQs", href: "#faq" }] },
            { title: "Connect", items: [{ label: "Contact Us", href: "#contact" }, { label: "Instagram", href: "https://instagram.com/midnightdivision" }, { label: "TikTok", href: "https://tiktok.com/@midnightdivision" }] }
          ]}
          logoText="MIDNIGHT DIVISION™"
          copyrightText="© 2024 MIDNIGHT DIVISION. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
