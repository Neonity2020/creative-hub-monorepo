interface ToolCardProps {
  icon: React.ReactNode;
  label: string;
  isNew?: boolean;
}

export function ToolCard({ icon, label, isNew }: ToolCardProps) {
  return (
    <button className="flex flex-col items-center justify-center gap-3 p-6 bg-white rounded-xl border border-stone-100 shadow-sm hover:shadow-md hover:border-orange-200 hover:-translate-y-1 transition-all group w-full h-40">
      <div className="w-12 h-12 rounded-full bg-stone-50 text-stone-600 group-hover:bg-orange-50 group-hover:text-orange-600 flex items-center justify-center transition-colors">
        {icon}
      </div>
      <span className="text-sm font-medium text-stone-700 group-hover:text-stone-900">{label}</span>
      {isNew && (
        <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">New</span>
      )}
    </button>
  );
}