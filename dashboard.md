# Dashboard

```JavaScript

import React, { useState } from 'react';
import { 
  Home, 
  Wand2, 
  Image as ImageIcon, 
  Users, 
  History, 
  Settings, 
  Search, 
  Mic, 
  Video, 
  Crop, 
  Zap,
  Grid,
  MoreHorizontal,
  Bell,
  Plus,
  LayoutTemplate,
  ChevronDown
} from 'lucide-react';
import Button from '../components/UI/Button';
import { Link } from 'react-router-dom';

const ToolCard: React.FC<{ icon: React.ReactNode, label: string, isNew?: boolean }> = ({ icon, label, isNew }) => (
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

const CreationCard: React.FC<{ imageId: number, title: string, date: string }> = ({ imageId, title, date }) => (
  <div className="min-w-[280px] bg-white rounded-xl border border-stone-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
    <div className="h-40 overflow-hidden relative">
      <img src={`https://picsum.photos/id/${imageId}/400/300`} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
    </div>
    <div className="p-4">
      <h3 className="text-sm font-semibold text-stone-900 truncate">{title}</h3>
      <p className="text-xs text-stone-400 mt-1">{date}</p>
    </div>
  </div>
);

const InspirationCard: React.FC<{ imageId: number, heightClass: string }> = ({ imageId, heightClass }) => (
  <div className={`relative rounded-2xl overflow-hidden mb-6 group cursor-pointer ${heightClass}`}>
    <img 
      src={`https://picsum.photos/id/${imageId}/600/${Math.random() > 0.5 ? '800' : '600'}`} 
      alt="Inspiration" 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
       <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 overflow-hidden">
               <img src={`https://picsum.photos/id/${imageId + 50}/100/100`} className="w-full h-full object-cover" />
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

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="flex h-screen bg-[#FDFCF8] text-stone-900 font-sans overflow-hidden">
      
      {/* Sidebar - Collapsed on mobile, visible on lg */}
      <aside className="w-64 bg-white border-r border-stone-200 hidden lg:flex flex-col justify-between py-6 px-4">
        <div>
          <Link to="/" className="flex items-center gap-2 px-2 mb-8 text-stone-900 font-display font-bold text-xl">
             <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white">
                <Zap size={18} fill="currentColor" />
              </div>
              Canvas&Clay
          </Link>

          <div className="mb-8">
            <div className="flex items-center justify-between px-3 mb-2">
               <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">P</div>
                  <span className="text-sm font-semibold">Personal</span>
               </div>
               <ChevronDown size={14} className="text-stone-400" />
            </div>
          </div>

          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-stone-100 text-stone-900 rounded-lg">
              <Home size={18} />
              Home
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-lg transition-colors">
              <Wand2 size={18} />
              AI Suite
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-lg transition-colors">
              <Search size={18} />
              Stock
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-lg transition-colors">
              <Users size={18} />
              Community
            </a>
          </nav>

          <div className="mt-8">
            <h4 className="px-3 text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Pinned</h4>
            <nav className="space-y-1">
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-lg transition-colors">
                <ImageIcon size={18} />
                Image Generator
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-lg transition-colors">
                <Video size={18} />
                Video Generator
              </a>
            </nav>
          </div>
        </div>

        <div className="space-y-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-lg transition-colors">
            <History size={18} />
            History
          </a>
          <div className="pt-4 mt-4 border-t border-stone-100">
             <div className="p-3 bg-stone-50 rounded-xl">
                <p className="text-xs font-semibold text-stone-900 mb-1">Pro Plan</p>
                <p className="text-xs text-stone-500 mb-3">Unlock more features</p>
                <Button size="sm" className="w-full text-xs py-1.5 h-auto">Upgrade</Button>
             </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-[#FDFCF8]/90 backdrop-blur-md border-b border-stone-100 px-8 py-4 flex items-center justify-between">
           <div className="flex-1 max-w-2xl relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
              <input 
                type="text" 
                placeholder="Search assets or start creating..." 
                className="w-full pl-12 pr-12 py-3 bg-stone-100/50 border border-transparent focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 rounded-xl text-sm transition-all outline-none"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                 <button className="p-1 hover:bg-stone-200 rounded text-stone-400"><Mic size={16} /></button>
                 <button className="p-1 hover:bg-stone-200 rounded text-stone-400"><ImageIcon size={16} /></button>
              </div>
           </div>
           
           <div className="flex items-center gap-6 pl-8">
              <span className="text-sm font-medium text-orange-600 cursor-pointer hover:text-orange-700">Pricing</span>
              <div className="relative">
                 <Bell size={20} className="text-stone-600 cursor-pointer hover:text-stone-900" />
                 <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#FDFCF8]"></span>
              </div>
              <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full border-2 border-white shadow-sm cursor-pointer hover:ring-2 hover:ring-orange-200 transition-all"></div>
           </div>
        </header>

        <div className="p-8 max-w-[1600px] mx-auto">
          
          {/* Tool Grid */}
          <section className="mb-12">
            <h2 className="text-xl font-display font-semibold text-stone-900 mb-6">What would you like to create today?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4">
               <ToolCard icon={<Search size={20} />} label="Find stock" />
               <ToolCard icon={<LayoutTemplate size={20} />} label="Templates" isNew />
               <ToolCard icon={<ImageIcon size={20} />} label="Image Gen" />
               <ToolCard icon={<Video size={20} />} label="Video Gen" />
               <ToolCard icon={<Crop size={20} />} label="Editor" />
               <ToolCard icon={<Zap size={20} />} label="Upscaler" />
               <ToolCard icon={<Users size={20} />} label="Assistant" />
               <ToolCard icon={<Grid size={20} />} label="All tools" />
            </div>
          </section>

          {/* Recent Creations */}
          <section className="mb-12">
             <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-display font-semibold text-stone-900">Recent creations</h2>
                  <span className="text-sm text-stone-400 font-medium px-2 py-0.5 bg-stone-100 rounded-md">Personal</span>
                </div>
                
                {/* Filter Chips */}
                <div className="flex items-center gap-2">
                  {['All', 'Images', 'Videos', 'Projects'].map(tab => (
                    <button 
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        activeTab === tab 
                          ? 'bg-stone-900 text-white' 
                          : 'bg-white border border-stone-200 text-stone-600 hover:border-stone-300'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                  <button className="flex items-center gap-1 text-xs font-medium text-stone-500 hover:text-stone-900 ml-4">
                    View all <MoreHorizontal size={14} />
                  </button>
                </div>
             </div>

             <div className="flex gap-6 overflow-x-auto pb-6 -mx-8 px-8 scrollbar-hide">
                <CreationCard imageId={10} title="Cyberpunk Street" date="Nov 8, 2024" />
                <CreationCard imageId={11} title="Natural Portrait" date="Nov 8, 2024" />
                <CreationCard imageId={12} title="Abstract Shapes" date="Nov 7, 2024" />
                <CreationCard imageId={13} title="Product Shot" date="Oct 30, 2024" />
                <CreationCard imageId={14} title="Mountain Landscape" date="Oct 28, 2024" />
             </div>
          </section>

          {/* Inspiration Feed (Masonry) */}
          <section>
             <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-display font-semibold text-stone-900">Get inspired</h2>
                <div className="flex items-center gap-2">
                   <button className="text-sm font-medium text-stone-500 hover:text-stone-900">Community</button>
                   <span className="text-stone-300">|</span>
                   <button className="text-sm font-medium text-stone-400 hover:text-stone-900">Templates</button>
                </div>
             </div>
             
             <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
               <InspirationCard imageId={100} heightClass="h-96" />
               <InspirationCard imageId={101} heightClass="h-64" />
               <InspirationCard imageId={102} heightClass="h-80" />
               <InspirationCard imageId={103} heightClass="h-72" />
               <InspirationCard imageId={104} heightClass="h-[400px]" />
               <InspirationCard imageId={106} heightClass="h-64" />
               <InspirationCard imageId={107} heightClass="h-96" />
               <InspirationCard imageId={108} heightClass="h-72" />
             </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;

```
