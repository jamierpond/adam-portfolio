// app/page.tsx
'use client';

import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, ArrowDown } from 'lucide-react'; // Using Github as an example social icon
import { useState, useEffect } from 'react';

// --- Data (Extracted from your PDF) ---
const portfolioData = {
  name: 'ADAM LEIGH POND',
  shortName: 'Adam Pond', // For brevity in footer/header
  title: 'SPEC. PORTFOLIO',
  tagline: 'Crafting Narratives. Building Brands. Evoking Emotion.',
  contact: {
    phone: '+44 7593770183',
    email: 'adamleighpond@gmail.com',
    linkedin: 'https://www.linkedin.com/in/yourprofile', // Replace
    github: 'https://github.com/yourusername', // Replace or remove
  },
  heroSkills: [ // For the animated skills section, if desired and kept minimal
    { text: "Brand Strategy" },
    { text: "Creative Copywriting" },
    { text: "Campaign Conceptualization" },
    { text: "Narrative Development" },
    { text: "Advertising Innovation" },
  ],
  projects: [
    {
      id: 'telegraph',
      title: 'The Telegraph',
      clientConcept: 'Campaign: "Know the unknown knowns."',
      description:
        "Targeting educated, centre-right readers, this campaign leverages the idea of the 'unknown known.' It's a subtle intellectual nudge, reconnecting audiences with implicit truths and fostering a sense of deeper understanding.",
      imageUrl: '/images/telegraph-mockup.jpg', // Replace
      accentColor: 'bg-sky-700', // Example color for visual distinction if needed
      details: [
        "Strategy: Engage discerning readers with nuanced philosophical concepts.",
        "Execution: Utilized mockups of Twitter profiles, billboards, and app interfaces.",
        "Impact: Reinforced The Telegraph's image as a source of insightful journalism."
      ],
    },
    {
      id: 'amex',
      title: 'American Express',
      clientConcept: 'Campaign: "Not just what you expect."',
      description:
        'This campaign promoted the Everyday Cashback Platinum Card to a broad demographic. With a witty and sincere tone, it positioned the card as both accessible and premium, emphasizing its surprising value and benefits.',
      imageUrl: '/images/amex-mockup.jpg', // Replace
      accentColor: 'bg-blue-700',
      details: [
        "Objective: Broaden appeal and highlight cashback benefits.",
        "Narrative Style: Relatable scenarios to showcase everyday card usage.",
        "Outcome: Subverted expectations and reinforced Amex’s commitment to value."
      ],
    },
    {
      id: 'jaeger',
      title: 'Jaeger-LeCoultre',
      clientConcept: 'Conceptual: "It\'s like a door. #ItsADoor"',
      description:
        'A minimalist and intriguing concept designed to spark curiosity and conversation around the Jaeger-LeCoultre brand, using ambiguity and a simple visual to provoke thought.',
      imageUrl: '/images/jaeger-watch.jpg', // Replace
      accentColor: 'bg-neutral-700',
      details: [
        "Approach: Minimalist visual paired with a provocative tagline.",
        "Engagement: Utilized a hashtag to encourage interpretation and dialogue.",
        "Aesthetic: Focus on elegance, mystery, and intellectual appeal."
      ],
    },
    {
      id: 'porsche',
      title: 'Porsche',
      clientConcept: 'Campaign: "Porsche drivers define the limit."',
      description:
        "Acknowledging the thrill of speed, this campaign positions Porsche as the definitive vehicle for those who dare to push boundaries. It echoes the subversive intelligence of classic Porsche advertising with a modern, human touch.",
      imageUrl: '/images/porsche-car.jpg', // Replace
      accentColor: 'bg-red-700',
      details: [
        "Core Idea: Align the driver's desire for speed with the Porsche brand identity.",
        "Tone: Confident, witty, and unapologetically human.",
        "Execution: Included provocative print visuals and a concept for a Spotify audio ad."
      ],
    },
    {
      id: 'monster',
      title: 'Monster Energy',
      clientConcept: 'Campaign: "Rip it."',
      description:
        'A high-voltage call to action that embodies the raw, unfiltered energy of Monster. "Rip it" is about unleashing inner power, whether in sports, gaming, or intense focus sessions, amplified by dynamic visuals and social engagement.',
      imageUrl: '/images/monster-can.jpg', // Replace
      accentColor: 'bg-green-600',
      details: [
        "Brand Essence: Capture raw energy and a call to action.",
        "Visuals: Explosive imagery like a bullet through the can.",
        "Marketing Mix: Video spots, #RipItChallenge, and influencer collaborations."
      ],
    },
  ],
};

// --- Minimalist Animated Text Component (Optional, can be replaced with static text) ---
const AnimatedHeroText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const skills = portfolioData.heroSkills;

  useEffect(() => {
    if (skills.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3000); // Slower, more chic pace
    return () => clearInterval(interval);
  }, [skills.length]);

  if (!skills || skills.length === 0) return null;

  return (
    <div className="h-12 md:h-16 relative flex items-center justify-center md:justify-start overflow-hidden"> {/* Ensure height for text visibility */}
      <AnimatePresence mode="wait">
        <motion.span
          key={skills[currentIndex].text}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute text-2xl md:text-3xl font-serifAccent text-brand-accent"
        >
          {skills[currentIndex].text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};


// --- Main Page Component ---
export default function PortfolioPage() {
  const [activeSection] = useState('hero'); // For potential nav highlighting

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ];

  // Variants for Framer Motion
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

   const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "circOut" }
    }
  };


  return (
    <>
      <Head>
        <title>{portfolioData.name} - Creative Portfolio</title>
        <meta name="description" content={`${portfolioData.tagline} Explore the spec portfolio of ${portfolioData.name}.`} />
        <link rel="icon" href="/favicon.ico" /> {/* Create a favicon */}
      </Head>

      {/* Minimalist Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-offwhite/80 backdrop-blur-md">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
          <a href="#hero" className="text-xl font-serifAccent font-semibold text-brand-charcoal hover:text-brand-accent transition-colors">
            {portfolioData.shortName}
          </a>
          <nav className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium text-brand-charcoal hover:text-brand-accent transition-colors ${
                  activeSection === item.id ? 'text-brand-accent font-semibold' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          {/* Basic Mobile Menu (optional, can be expanded) */}
           <div className="md:hidden">
             {/* Placeholder for a very minimal mobile menu icon if needed, or remove */}
           </div>
        </div>
      </header>

      <div className="min-h-screen bg-brand-offwhite text-brand-charcoal font-sans selection:bg-brand-accent selection:text-white">

        {/* Hero Section - Big Horizontal Section */}
        <motion.section
          id="hero"
          className="min-h-screen w-full flex flex-col justify-center items-center text-center md:text-left pt-20 md:pt-0 px-6 md:px-10"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-screen-md">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serifAccent mb-4 md:mb-6"
            >
              {portfolioData.name}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              transition={{delay: 0.2}}
              className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 md:mb-8"
            >
              {portfolioData.tagline}
            </motion.p>
            <AnimatedHeroText /> {/* Optional animated skills */}
             <motion.div
                variants={itemVariants}
                transition={{delay: 0.4}}
                className="mt-10 md:mt-12"
             >
              <a
                href="#projects"
                className="inline-block bg-brand-charcoal text-brand-offwhite px-8 py-3 text-sm font-medium rounded-sm hover:bg-brand-accent hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                View My Work
              </a>
            </motion.div>
          </div>
           <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <a href="#projects" aria-label="Scroll to projects">
              <ArrowDown size={28} className="text-brand-charcoal/50 hover:text-brand-accent transition-colors" />
            </a>
          </motion.div>
        </motion.section>

        {/* Projects Section - Big Horizontal Sections for each project */}
        <section id="projects" className="w-full bg-brand-offwhite py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10 text-center mb-12 md:mb-20">
              <motion.h2
                initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true, amount: 0.5 }}
                className="text-3xl md:text-4xl font-bold font-serifAccent text-brand-charcoal mb-4"
              >
                Selected Works
              </motion.h2>
              <motion.p
                initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true, amount: 0.5 }} transition={{delay: 0.2}}
                className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto"
              >
                A glimpse into conceptual campaigns and strategic brand narratives.
              </motion.p>
          </div>

          <div className="space-y-20 md:space-y-32">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`max-w-screen-lg mx-auto px-6 md:px-10`}
                initial="hidden"
                whileInView="visible"
                variants={sectionVariants}
                viewport={{ once: true, amount: 0.25 }}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}>
                  {/* Image */}
                  <motion.div variants={itemVariants} className="w-full md:w-1/2 aspect-video md:aspect-[4/3] relative shadow-xl rounded-md overflow-hidden bg-brand-lightgray">
                    {project.imageUrl ? (
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 ease-in-out hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">Image Placeholder</div>
                    )}
                  </motion.div>

                  {/* Text Content */}
                  <motion.div variants={itemVariants} transition={{delay:0.2}} className="w-full md:w-1/2 text-left">
                    <h3 className="text-2xl md:text-3xl font-bold font-serifAccent text-brand-charcoal mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-brand-accent mb-4">{project.clientConcept}</p>
                    <p className="text-gray-700 leading-relaxed mb-5 text-base">
                      {project.description}
                    </p>
                    {project.details && project.details.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-brand-charcoal mb-2">Key Aspects:</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {project.details.map((detail, i) => (
                            <li key={i} className="flex">
                              <span className="text-brand-accent mr-2">›</span> {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section - Big Horizontal Section */}
        <motion.section
          id="contact"
          className="w-full bg-gray-100 py-20 md:py-32" // Slightly different bg for separation
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-screen-md mx-auto px-6 md:px-10 text-center">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold font-serifAccent text-brand-charcoal mb-6">
              Let&apos;s Connect
            </motion.h2>
            <motion.p variants={itemVariants} transition={{delay: 0.1}} className="text-lg text-gray-700 mb-10 leading-relaxed">
              Open to discussing creative challenges, new projects, or opportunities to collaborate.
            </motion.p>

            <motion.div variants={itemVariants} transition={{delay: 0.2}} className="space-y-6 text-lg">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="flex items-center justify-center group text-brand-charcoal hover:text-brand-accent transition-colors"
              >
                <Mail size={20} className="mr-3 text-gray-500 group-hover:text-brand-accent transition-colors" />
                <span>{portfolioData.contact.email}</span>
              </a>
              <a
                href={`tel:${portfolioData.contact.phone.replace(/\s/g, '')}`}
                className="flex items-center justify-center group text-brand-charcoal hover:text-brand-accent transition-colors"
              >
                <Phone size={20} className="mr-3 text-gray-500 group-hover:text-brand-accent transition-colors" />
                <span>{portfolioData.contact.phone}</span>
              </a>
            </motion.div>

            <motion.div variants={itemVariants} transition={{delay: 0.3}} className="flex justify-center space-x-6 mt-12">
              {portfolioData.contact.linkedin && (
                <a
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="text-gray-500 hover:text-brand-accent transition-colors"
                >
                  <Linkedin size={28} />
                </a>
              )}
              {portfolioData.contact.github && ( // Assuming GitHub might be relevant, or replace
                <a
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="text-gray-500 hover:text-brand-accent transition-colors"
                >
                  <Github size={28} />
                </a>
              )}
            </motion.div>
          </div>
        </motion.section>

        {/* Minimalist Footer */}
        <footer className="text-center py-10 md:py-16 bg-brand-offwhite border-t border-brand-lightgray">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.
          </p>
           <p className="text-xs text-gray-400 mt-2">
            Designed & Developed with a touch of minimalism.
          </p>
        </footer>
      </div>
    </>
  );
}
