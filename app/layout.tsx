export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}>
        <Header />           {/* Header stays */}
        <div className="pt-16">
          {children}         {/* page.tsx content is injected here automatically */}
        </div>
        <Footer />           {/* Footer stays */}
      </body>
    </html>
  );
}
