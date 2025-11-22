'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        backgroundColor: "#FFF6E5", // Pale Substack-like yellow
        color: "#3E2D19",           // Brown text
        fontFamily: "Georgia, serif", // Substack-style serif
      }}
    >
      <div className="max-w-2xl space-y-10 text-center">

        {/* Hero Image */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <Image
            src="/campaigns/IMG_3505.jpeg"
            alt="Adam at Waseda University, Haruki Murakami Library"
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl font-bold">Adam Leigh Pond</h1>

        {/* Bio */}
        <div className="space-y-4 text-lg leading-relaxed">
          <p>
            I’m a novelist. I write fiction but also post essays, book reviews, and miscellaneous thoughts on writing. My novella <em>The Slow Death of Nozomi</em> was shortlisted for the <strong>Black Spring Press: Best of the Bottom Drawer Prize</strong> in 2021. Some of my favourite writers include William S. Burroughs and Haruki Murakami. I hold an MA with Distinction in Creative Writing from the University of Kent.
          </p>
          <p>
            I am currently seeking publication for <strong>The Paper Sheep</strong>, a high-octane pastiche of Philip Marlowe-style detective fiction infused with elements of magic realism. Combining the fantastical with literary substance, it appeals to readers who want intellectually engaging yet boundary-pushing stories in the hardboiled-noir genre — think <strong>James Ellroy</strong> forced into a smoky bar with Haruki Murakami.
          </p>
          <blockquote className="italic pl-4 border-l-4 border-[#3E2D19]">
            “Your humour is sharp and strange in the best way: sometimes dark, sometimes playful, and it consistently pulls the reader into your offbeat vision. The sheer imagination on display here is impressive, and it gives the work a strong and memorable identity.”
            <br />— Scarlett Thomas, author of <em>The End of Mr Y</em> and <em>Sleepwalkers</em>
          </blockquote>
        </div>

        {/* Substack Buttons */}
        <div className="flex flex-col items-center gap-4 text-base">
          <Link
            href="https://adamleighpond.substack.com/p/the-slow-death-of-nozomi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5C3A21] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#422710] transition-colors text-lg w-full md:w-auto text-center"
          >
            Read My Novella in Full
          </Link>
          <Link
            href="https://adamleighpond.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFEECF] text-[#5C3A21] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#FFEBBF] transition-colors text-lg w-full md:w-auto text-center"
          >
            Visit My Substack Blog: Optic Nerve
          </Link>
        </div>

        {/* Optic Nerve Logo */}
        <div className="text-center mt-6">
          <Link
            href="https://adamleighpond.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Image
              src="/campaigns/assets_task_01jxyxmh8dezwttyxp8vfqy8fb_1750163222_img_2.webp"
              alt="Optic Nerve blog logo"
              width={500}
              height={300}
              className="mx-auto w-64 h-auto mb-4 hover:opacity-80 transition-opacity"
            />
          </Link>
          <p className="text-lg underline hover:opacity-80">
            Visit Optic Nerve on Substack
          </p>
        </div>

        {/* Contact */}
        <p className="text-sm text-center mt-4">
