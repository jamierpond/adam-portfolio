import React from 'react';
import { Playfair_Display } from 'next/font/google';
import Blog from '@/app/components/Blog';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function DavidOgilvyBlog() {
  const blogContent = (
    <>
      <p className="lead mb-8">David Ogilvy, often called "The Father of Advertising," revolutionized the industry with his data-driven approach and timeless wisdom. Here are the most valuable lessons I've learned from studying his work.</p>

      <h2 className={`text-2xl font-semibold mt-8 mb-4 ${playfair.className}`}>1. Research is Everything</h2>
      <p>Ogilvy was obsessed with research. "Advertising people who ignore research are as dangerous as generals who ignore decodes of enemy signals," he famously said. He believed in understanding the product and audience deeply before creating a single ad.</p>

      <h2 className={`text-2xl font-semibold mt-8 mb-4 ${playfair.className}`}>2. The Big Idea Matters</h2>
      <p>Ogilvy insisted that great campaigns are built around a single, compelling idea. "Unless your advertising contains a big idea, it will pass like a ship in the night," he wrote in his book "Ogilvy on Advertising."</p>

      <h2 className={`text-2xl font-semibold mt-8 mb-4 ${playfair.className}`}>3. Headlines Determine Success</h2>
      <p>Ogilvy emphasized that headlines are the most crucial element in advertisements. "On average, five times as many people read the headline as read the body copy. When you have written your headline, you have spent eighty cents out of your dollar."</p>

      <h2 className={`text-2xl font-semibold mt-8 mb-4 ${playfair.className}`}>4. Clarity Trumps Cleverness</h2>
      <p>While creativity matters, Ogilvy valued clarity above all. "Write the way you talk. Naturally," he advised. He believed that confusing or overly clever copy fails to sell products.</p>

      <h2 className={`text-2xl font-semibold mt-8 mb-4 ${playfair.className}`}>5. Long Copy Sells</h2>
      <p>Contrary to popular belief, Ogilvy found that longer copy often outperformed short copy. "The more you tell, the more you sell," he insisted, provided the information is relevant and engaging.</p>

      <h2 className={`text-2xl font-semibold mt-8 mb-4 ${playfair.className}`}>6. Brand Image Is Crucial</h2>
      <p>Ogilvy pioneered the concept of brand image, arguing that every advertisement should contribute to the brand's personality. "Every advertisement should be thought of as a contribution to the complex symbol which is the brand image."</p>

      <h2 className={`text-2xl font-semibold mt-8 mb-4 ${playfair.className}`}>7. Facts Are Persuasive</h2>
      <p>He believed in using facts rather than vague claims. "The consumer isn't a moron; she is your wife," is one of his most famous quotes, emphasizing respect for consumer intelligence.</p>

      <h2 className={`text-2xl font-semibold mt-8 mb-4 ${playfair.className}`}>8. Test Everything</h2>
      <p>Ogilvy was a pioneer in testing advertisements before large-scale rollouts. "Never stop testing, and your advertising will never stop improving," he advised.</p>

      <h2 className={`text-2xl font-semibold mt-8 mb-4 ${playfair.className}`}>9. Professionalism Matters</h2>
      <p>Ogilvy set high standards for the advertising profession. "The pursuit of excellence is less profitable than the pursuit of bigness, but it can be more satisfying," he wrote, emphasizing quality over quantity.</p>

      <h2 className={`text-2xl font-semibold mt-8 mb-4 ${playfair.className}`}>10. Discipline Creates Freedom</h2>
      <p>Perhaps most importantly, Ogilvy taught that creative freedom comes from disciplined thinking and hard work. "Hard work never killed anybody, but why take a chance?" he quipped, while simultaneously demonstrating relentless work ethic.</p>

      <div className="mt-12 border-t pt-6">
        <p className="italic">This blog post explores lessons from David Ogilvy, an advertising pioneer whose principles remain relevant in today's marketing landscape. His data-driven approach combined with a respect for consumers created advertising that not only sold products but built lasting brands.</p>
      </div>
    </>
  );

  return (
    <Blog
      title="The Top 10 Things I Learned Studying David Ogilvy"
      author="Adam Pond"
      lastUpdated="May 14, 2023"
      tags={["Advertising", "Marketing", "Copywriting", "Strategy"]}
      content={blogContent}
    />
  );
}
