import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex items-center justify-center p-6 animate-fade">
      <div className="max-w-xl text-center space-y-6">
        {/* Top image - now bigger one */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <Image
            src="/campaigns/1748162412047.jpg"
            alt="Modern art installation"
            width={800}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Name */}
        <h1 className="text-2xl font-semibold">Adam Leigh Pond</h1>

        {/* Bio */}
        <p className="text-sm leading-relaxed">
          An experienced writer and current MA student in Creative Writing at the University of Kent, I have honed my editorial skills through a combination of academic studies and professional experience. My creative portfolio includes published short stories, and my novella <em>The Slow Death of Nozomi</em> was shortlisted for the <strong>Black Spring Press: Best of the Bottom Drawer Prize</strong> in 2021. Currently seeking publication for novels I have completed as well as serving as an Editor for the University of Kent's peer-reviewed postgraduate journal of literary criticism, <em>Litterae Mentis</em>.
        </p>

        {/* Contact */}
        <p className="text-xs text-gray-500">
          <Link
            href="mailto:adamleighpond@gmail.com"
            className="underline hover:text-black transition-colors"
          >
            adamleighpond@gmail.com
          </Link>
        </p>

        {/* Links */}
        <div className="flex flex-col items-center gap-4 text-sm">
          <Link
            href="https://adamleighpond.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
            aria-label="Adam Leigh Pond Substack newsletter"
          >
            Visit My Substack Newsletter
          </Link>
          <div className="flex gap-4">
            <Link
              href="https://www.linkedin.com/in/adam-pond-a94556176/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
              aria-label="Adam Leigh Pond LinkedIn profile"
            >
              LinkedIn ↗
            </Link>
          </div>
        </div>

        {/* Bottom image - now smaller one */}
        <div className="rounded-lg overflow-hidden shadow-md">
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
