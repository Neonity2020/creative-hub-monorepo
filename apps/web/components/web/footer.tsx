import { Sparkles } from "lucide-react"

export function Footer () {
    return (
        <footer className="border-t border-stone-200 py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-stone-900 font-bold">
                <div className="w-6 h-6 bg-orange-600 rounded flex items-center justify-center text-white">
                    <Sparkles size={14} fill="currentColor" />
                </div>
                Canvas&Clay
            </div>

            <p className="text-stone-500 text-sm">
                A Creation of <a href="https://neonity.cc" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-orange-600 font-medium transition-colors underline underline-offset-4">NEONITY.cc</a>
            </p>

            <p className="text-stone-400 text-sm">© {new Date().getFullYear()} Canvas & Clay Inc. All rights reserved.</p>
            </div>
      </footer>
    )
}