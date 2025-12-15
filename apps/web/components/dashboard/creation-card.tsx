import Image from 'next/image';

interface CreationCardProps {
  imageId?: number;
  imagePath?: string;
  title: string;
  date: string;
}

export function CreationCard({ imageId, imagePath, title, date }: CreationCardProps) {
  const imageSrc = imagePath ? imagePath : `https://picsum.photos/id/${imageId}/400/300`;

  return (
    <div className="min-w-[280px] bg-white rounded-xl border border-stone-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
      <div className="h-40 overflow-hidden relative">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-stone-900 truncate">{title}</h3>
        <p className="text-xs text-stone-400 mt-1">{date}</p>
      </div>
    </div>
  );
}