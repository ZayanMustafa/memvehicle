import Link from 'next/link'

export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-white/20 py-6">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            MEM INSPECT
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-12">
        <div className="w-full max-w-md mx-4 border border-white/20 p-10">
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <p className="text-gray-400 mb-8">{subtitle}</p>
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/20 py-6 text-center text-gray-400">
        <div className="container mx-auto px-4">
          © {new Date().getFullYear()} MEM INSPECT. All rights reserved.
        </div>
      </footer>
    </div>
  )
}