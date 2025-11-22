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

        {/* Top photo */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <Image
            src="/campaigns/IMG_3505.jpg" // Waseda University photo
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
            I’m a novelist. I write fiction but I post pretty much anything here, including essays, book reviews, and miscellaneous thoughts on writing. My novella <em>The Slow Death of Nozomi</em> was shortlisted for the <strong>Black Spring Press: Best of the Bottom Drawer Prize</strong> in 2021. Some of my favourite writers include William S. Burroughs and Haruki Murakami. I hold an MA with Distinction in Creative Writing from the University of Kent under the supervision of Scarlett Thomas.
          </p>
          <p>
            I am currently seeking publication for <strong>The Paper Sheep</strong>, a high-octane pastiche of Philip Marlowe-style detective fiction infused with elements of magic realism. By combining the fantastical with literary substance, it appeals to readers who want intellectually engaging yet boundary-pushing stories in the hardboiled noir genre. Think James Ellroy – forced into a smoky bar with Haruki Murakami.
          </p>
          <blockquote className="italic pl-4 border-l-4 border-[#3E2D19]">
            “Your humour is sharp and strange in the best way: sometimes dark, sometimes playful, and it consistently pulls the reader into your offbeat vision. The sheer imagination on display here is impressive, and it gives the work a strong and memorable identity.”
            <br />— Scarlett Thomas, author of <em>The End of Mr Y</em> and <em>Sleepwalkers</em>
          </blockquote>
        </div>

        {/* Substack Section */}
        <div className="p-6 rounded-lg shadow-md text-center" style={{ backgroundColor: "#FFEECF" }}>
          <h2 className="text-xl font-bold mb-2">Read My Work</h2>
          <p className="mb-4">
            You can read <strong>The Slow Death of Nozomi</strong> in full — along with fiction, essays, book reviews, and writing notes — on my Substack:
          </p>
          <Link
            href="https://adamleighpond.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold hover:opacity-80 block mb-1"
          >
            Visit My Substack →
          </Link>
          <Link
            href="https://adamleighpond.substack.com/p/the-slow-death-of-nozomi"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold hover:opacity-80 block"
          >
            Read The Slow Death of Nozomi →
          </Link>
        </div>

        {/* Blog Logo */}
        <div className="text-center">
          <Image
            src="/campaigns/assets_task_01jxyxmh8dezwttyxp8vfqy8fb_1750163222_img_2.jpg" // Optic Nerve logo
            alt="Optic Nerve blog logo"
            width={500}
            height={300}
            className="mx-auto w-64 h-auto mb-4"
          />
          <Link
            href="https://adamleighpond.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg underline hover:opacity-80"
          >
            Visit Optic Nerve on Substack
          </Link>
        </div>

        {/* Contact */}
        <p className="text-center text-sm">
          <Link
            href="mailto:adamleighpond@gmail.com"
            className="underline hover:opacity-80"
          >
            adamleighpond@gmail.com
          </Link>
        </p>

        {/* Social / Links */}
        <div className="flex justify-center gap-4 mt-4">
          <Link
            href="https://adamleighpond.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
          >
            Substack Newsletter
          </Link>
          <Link
            href="https://www.linkedin.com/in/adam-pond-a94556176/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-lg"
          >
            LinkedIn ↗
          </Link>
        </div>

        {/* Bottom Image */}
        <div className="rounded-lg overflow-hidden shadow-md mt-6">
          <Image
            src="/campaigns/1735635536533.jpg"
            alt="Painting with viewer"
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </div>

      </div>
    </main>
  );
}
