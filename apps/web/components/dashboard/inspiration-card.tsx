import Image from 'next/image';
import { Plus } from 'lucide-react';

interface InspirationCardProps {
  imageId: number;
  heightClass: string;
}

export function InspirationCard({ imageId, heightClass }: InspirationCardProps) {
  // Use deterministic height based on imageId to avoid hydration mismatch
  const height = imageId % 2 === 0 ? 800 : 600;

  return (
    <div className={`relative rounded-2xl overflow-hidden mb-6 group cursor-pointer ${heightClass}`}>
      <Image
        src={`https://picsum.photos/id/${imageId}/600/${height}`}
        alt="Inspiration"
        width={600}
        height={height}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
         <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 overflow-hidden">
                 <Image
                   src={`https://picsum.photos/id/${imageId + 50}/100/100`}
                   alt="Artist"
                   width={100}
                   height={100}
                   className="w-full h-full object-cover"
                 />
              </div>
              <span className="text-white text-sm font-medium">@artist_{imageId}</span>
            </div>
            <button className="w-8 h-8 rounded-full bg-white text-stone-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
              <Plus size={16} />
            </button>
         </div>
      </div>
    </div>
  );
}