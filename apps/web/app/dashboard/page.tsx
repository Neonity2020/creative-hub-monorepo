"use client";

import React, { useState } from 'react';
import {
  Home,
  Wand2,
  Image as ImageIcon,
  Users,
  History,
  Search,
  Mic,
  Video,
  Crop,
  Zap,
  Grid,
  MoreHorizontal,
  Bell,
  LayoutTemplate,
  ChevronDown
} from 'lucide-react';
import { Button } from "@workspace/ui/components/button"
import Link from 'next/link';
import { ToolCard } from '../../components/dashboard/toolcard';
import { CreationCard } from '../../components/dashboard/creation-card';
import { InspirationCard } from '../../components/dashboard/inspiration-card';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="h-screen bg-[#FDFCF8] text-stone-900 font-sans overflow-hidden flex">

      {/* Sidebar - Collapsed on mobile, visible on lg */}
      <aside className="w-64 bg-white border-r border-stone-200 hidden lg:flex flex-col justify-between py-6 px-4 h-full">
        <div>
          <Link href="/" className="flex items-center gap-2 px-2 mb-8 text-stone-900 font-display font-bold text-xl">
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
            <Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-stone-100 text-stone-900 rounded-lg">
              <Home size={18} />
              Home
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-lg transition-colors">
              <Wand2 size={18} />
              AI Suite
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-lg transition-colors">
              <Search size={18} />
              Stock
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-lg transition-colors">
              <Users size={18} />
              Community
            </Link>
          </nav>

          <div className="mt-8">
            <h4 className="px-3 text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Pinned</h4>
            <nav className="space-y-1">
              <Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-lg transition-colors">
                <ImageIcon size={18} />
                Image Generator
              </Link>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-lg transition-colors">
                <Video size={18} />
                Video Generator
              </Link>
            </nav>
          </div>
        </div>

        <div className="space-y-1">
          <Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-lg transition-colors">
            <History size={18} />
            History
          </Link>
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
}
