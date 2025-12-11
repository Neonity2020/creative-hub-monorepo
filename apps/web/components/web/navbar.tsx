import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import { 
  Search, 
  Sparkles,
} from 'lucide-react';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-stone-100 bg-[#FDFCF8]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="text-2xl font-display font-bold tracking-tight flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white">
                <Sparkles size={18} fill="currentColor" />
              </div>
              Canvas<span className="text-stone-400">&</span>Clay
            </Link>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
              <a href="#" className="hover:text-stone-900 transition-colors">AI Suite</a>
              <a href="#" className="hover:text-stone-900 transition-colors">Stock</a>
              <a href="#" className="hover:text-stone-900 transition-colors">Resources</a>
              <a href="#" className="hover:text-stone-900 transition-colors">Pricing</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center bg-stone-100/50 border border-stone-200 rounded-full px-4 py-2 w-64 focus-within:ring-2 focus-within:ring-orange-500/20 focus-within:border-orange-500 transition-all">
              <Search size={16} className="text-stone-400" />
              <input 
                type="text" 
                placeholder="Search assets..." 
                className="bg-transparent border-none outline-none text-sm ml-2 w-full placeholder:text-stone-400"
              />
            </div>
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Sign in</Button>
            </Link>
            <Link href="/dashboard">
              <Button size="sm">Get started</Button>
            </Link>
          </div>
        </div>
      </nav>
  )
}