import {
  ArrowRight,
  Play,
  Music,
  Layers,
  MoveRight
} from 'lucide-react';
import { Button } from "@workspace/ui/components/button"
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
    return (
   <>
    {/* Hero Section */}
    <main className="relative pt-20 pb-32 overflow-hidden">
        {/* Subtle orange gradient blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 left-10 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-300/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 right-20 w-[400px] h-[400px] bg-orange-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-semibold mb-8 tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            Introducing Spaces 2.0
            <ArrowRight size={12} />
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-stone-900 mb-6 leading-[1.1]">
            Creative work, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">reimagined.</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            One suite: top AI models, pro editing tools, and stock assets—trusted by 700,000+ creatives to bring their vision to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
            <Link href="/dashboard">
              <Button size="lg" className="group pl-8 pr-6">
                Start Creating Free
                <MoveRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="secondary" size="lg">View Gallery</Button>
            </Link>
          </div>

          {/* Immersive Visual Collage */}
          <div className="relative max-w-6xl mx-auto h-[600px] hidden md:block">
            
            {/* Center: Main Video/Character */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-stone-900 rounded-3xl shadow-2xl overflow-hidden group border-4 border-white ring-1 ring-stone-900/5 transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="https://picsum.photos/id/129/1200/800"
                alt="Main showcase"
                width={1200}
                height={800}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform cursor-pointer">
                    <Play fill="white" className="text-white ml-1" size={32} />
                 </div>
              </div>
              
              {/* Fake Video Timeline */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center justify-between text-white/80 text-xs font-mono mb-2">
                  <span>00:00:00:20</span>
                  <span>00:00:06:11</span>
                </div>
                <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-orange-500 rounded-full relative">
                     <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Top: Product/Fashion */}
            <div className="absolute top-0 left-0 w-72 h-48 bg-white rounded-2xl shadow-xl border border-stone-100 p-2 rotate-[-6deg] hover:rotate-0 transition-transform duration-300 z-0">
               <div className="w-full h-full rounded-xl overflow-hidden relative">
                 <Image src="https://picsum.photos/id/445/400/300" alt="Fashion showcase" width={400} height={300} className="w-full h-full object-cover" />
                 <div className="absolute bottom-2 left-2 flex gap-1">
                    {[99, 101, 102].map((id, i) => (
                        <div key={id} className="w-8 h-8 rounded border-2 border-white overflow-hidden shadow-sm">
                            <Image src={`https://picsum.photos/id/${id}/50/50`} alt={`Thumbnail ${i + 1}`} width={50} height={50} className="w-full h-full object-cover" />
                        </div>
                    ))}
                 </div>
               </div>
            </div>

            {/* Left Bottom: Audio */}
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-stone-900 rounded-3xl shadow-xl overflow-hidden border-4 border-white rotate-[4deg] hover:rotate-0 transition-transform duration-300 z-20">
              <Image src="https://picsum.photos/id/338/400/400" alt="Audio showcase" width={400} height={400} className="w-full h-full object-cover opacity-80" />
              <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent p-4 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                      <Music size={14} className="text-white" />
                   </div>
                   <span className="text-white text-sm font-medium">Jazz Vibes</span>
                </div>
                <div className="flex gap-1 items-end h-8">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="w-1.5 bg-orange-500/80 rounded-full" style={{ height: `${Math.random() * 100}%` }}></div>
                    ))}
                </div>
              </div>
            </div>

            {/* Right: Before/After */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-72 h-80 bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden rotate-[3deg] hover:rotate-0 transition-transform duration-300 z-10 group">
                <div className="relative w-full h-full">
                    <Image src="https://picsum.photos/id/64/400/600" alt="Before/After" width={400} height={600} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 w-1/2 overflow-hidden border-r-2 border-white bg-black/5 backdrop-grayscale">
                         <Image src="https://picsum.photos/id/64/400/600" alt="Before/After grayscale" width={400} height={600} className="absolute top-0 left-0 max-w-none w-[288px] h-full object-cover filter grayscale contrast-125" />
                    </div>
                    <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center top-1/2 -mt-4 cursor-ew-resize">
                        <Layers size={14} className="text-stone-900" />
                    </div>
                </div>
            </div>

          </div>

          {/* Mobile Fallback Visual */}
          <div className="md:hidden mt-12 rounded-2xl overflow-hidden shadow-lg border border-stone-200">
             <Image src="https://picsum.photos/id/129/800/600" alt="Mobile Hero" width={800} height={600} className="w-full h-64 object-cover" />
             <div className="p-6 bg-white text-left">
                <h3 className="font-display font-bold text-lg mb-2">Create without limits</h3>
                <p className="text-stone-500 text-sm">Access powerful tools on any device.</p>
             </div>
          </div>

        </div>
    </main>
   </>

    )
}