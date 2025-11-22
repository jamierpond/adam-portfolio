'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FFF9E5] text-[#5C3A21] flex items-center justify-center p-6 animate-fade">
      <div className="max-w-3xl text-center space-y-8 font-sans">
        
        {/* Hero Image */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <Image
            src="/campaigns/IMG_3505.jpg" // Waseda University photo
            alt="Adam at Waseda University, Haruki Murakami Library"
            width={800}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Name */}
        <h1 className="text-3xl font-bold">Adam Leigh Pond</h1>

        {/* About / Bio */}
        <p className="text-base leading-relaxed">
          I’m a novelist. I write fiction but I post pretty much anything here, including essays, book reviews, and miscellaneous thoughts on writing. My novella <em>The Slow Death of Nozomi</em> was shortlisted for the <strong>Black Spring Press: Best of the Bottom Drawer Prize</strong> in 2021. Some of my favourite writers include William S. Burroughs and Haruki Murakami. I hold an MA with Distinction in Creative Writing from the University of Kent under the supervision of Scarlett Thomas.
        </p>

        <blockquote className="italic text-sm border-l-4 border-[#5C3A21] pl-4">
          “Your humour is sharp and strange in the best way: sometimes dark, sometimes playful, and it consistently pulls the reader into your offbeat vision. The sheer imagination on display here is impressive, and it gives the work a strong and memorable identity.” – Scarlett Thomas, author of <em>The End of Mr Y</em> and <em>Sleepwalkers</em>
        </blockquote>

        {/* Novella & Substack Links */}
        <div className="flex flex-col items-center gap-4 text-base">
          <Link
            href="https://adamleighpond.substack.com/p/the-slow-death-of-nozomi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-[#5C3A21] px-5 py-3 rounded-lg hover:bg-[#422710] transition-colors font-semibold text-lg"
            aria-label="Read The Slow Death of Nozomi in full on Substack"
          >
            Read My Novella in Full on Substack
          </Link>
          <Link
            href="https://adamleighpond.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5C3A21] underline hover:text-[#422710] transition-colors"
            aria-label="Visit Adam Leigh Pond Substack Blog"
          >
            Visit My Substack Blog: Optic Nerve
          </Link>
        </div>

        {/* Upcoming Novel */}
        <p className="text-base leading-relaxed">
          I am currently seeking publication for <strong>The Paper Sheep</strong>. The novel explores deadly terrorism in a high-octane pastiche of Philip Marlowe-style detective fiction, while using elements of magic realism. Combining the fantastical with literary substance, it will appeal to readers who want intellectually engaging yet boundary-pushing stories in the hardboiled-noir genre – think James Elroy forced into a smoky bar with Haruki Murakami.
        </p>

        {/* Blog Logo */}
        <div className="rounded-lg overflow-hidden shadow-md mt-6">
          <Image
            src="/campaigns/assets_task_01jxyxmh8dezwttyxp8vfqy8fb_1750163222_img_2.jpg" // Optic Nerve logo
            alt="Optic Nerve Blog Logo"
            width={400}
            height={200}
            className="w-full h-auto"
          />
        </div>

        {/* Contact */}
        <p className="text-sm mt-4">
          <Link
            href="mailto:adamleighpond@gmail.com"
            className="underline hover:text-[#422710] transition-colors"
          >
            adamleighpond@gmail.com
          </Link>
        </p>
      </div>
    </main>
  );
}