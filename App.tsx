import React, { useState, useMemo, useEffect } from 'react';
import { tradingData } from './data';
import { IndicatorItem, StepCategory } from './types';
import IndicatorCard from './components/IndicatorCard';
import { Search, BookOpen, Heart, Clock, ChevronRight, Menu, X, ArrowRight } from 'lucide-react';

// --- Local Storage Hook ---
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };
  return [storedValue, setValue] as const;
}

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<IndicatorItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all');
  const [favorites, setFavorites] = useLocalStorage<string[]>('zen-favorites', []);
  const [recentIds, setRecentIds] = useLocalStorage<string[]>('zen-recents', []);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // --- Helpers ---
  const allItems = useMemo(() => tradingData.flatMap(cat => cat.items), []);

  const filteredItems = useMemo(() => {
    let items = allItems;
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'favorites') {
        items = items.filter(i => favorites.includes(i.id));
      } else {
        items = items.filter(i => i.stepId === selectedCategory);
      }
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      items = items.filter(i => 
        i.title.toLowerCase().includes(q) || 
        i.stepName.toLowerCase().includes(q) ||
        i.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    return items;
  }, [allItems, selectedCategory, searchQuery, favorites]);

  const recentItems = useMemo(() => {
    return recentIds.map(id => allItems.find(i => i.id === id)).filter(Boolean) as IndicatorItem[];
  }, [recentIds, allItems]);

  const handleOpenItem = (item: IndicatorItem) => {
    setSelectedItem(item);
    // Add to recents (unique, max 5)
    setRecentIds(prev => {
      const newRecents = [item.id, ...prev.filter(id => id !== item.id)].slice(0, 5);
      return newRecents;
    });
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-paper-50 flex flex-col md:flex-row font-sans text-ink-900">
      
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white/80 backdrop-blur-md border-b border-paper-200 sticky top-0 z-20">
        <h1 className="font-display font-bold text-2xl text-ink-900 tracking-tight pl-2">Trading Zen</h1>
        <button 
          onClick={toggleSidebar} 
          className="p-3 text-ink-800 rounded-full hover:bg-stone-100 active:bg-stone-200 transition-colors"
          aria-label="Toggle Menu"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Overlay (Mobile) */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-20 md:hidden animate-in fade-in duration-200"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-30 w-72 bg-white border-r border-paper-200 transform transition-transform duration-300 ease-out shadow-2xl md:shadow-none
        md:relative md:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 h-full overflow-y-auto no-scrollbar">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="hidden md:block font-display font-bold text-3xl text-ink-900 tracking-tight">Trading Zen</h1>
              <p className="text-sm text-stone-500 font-medium mt-1">行為金融翻譯機</p>
            </div>
            {/* Mobile Close Button inside Sidebar */}
            <button 
              onClick={() => setIsSidebarOpen(false)} 
              className="md:hidden p-2 text-stone-500 rounded-full hover:bg-stone-100"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="space-y-2">
            <button 
              onClick={() => { setSelectedCategory('all'); setIsSidebarOpen(false); }}
              className={`w-full text-left px-5 py-4 rounded-2xl transition-all flex items-center gap-4 text-base font-medium group ${selectedCategory === 'all' ? 'bg-stone-900 text-stone-50 shadow-lg shadow-stone-200' : 'text-stone-600 hover:bg-stone-100'}`}
            >
              <BookOpen size={22} className={selectedCategory === 'all' ? 'text-stone-50' : 'text-stone-400 group-hover:text-stone-600'} />
              <span>所有指標百科</span>
            </button>
            <button 
              onClick={() => { setSelectedCategory('favorites'); setIsSidebarOpen(false); }}
              className={`w-full text-left px-5 py-4 rounded-2xl transition-all flex items-center gap-4 text-base font-medium group ${selectedCategory === 'favorites' ? 'bg-rose-50 text-rose-700 shadow-lg shadow-rose-100 border border-rose-100' : 'text-stone-600 hover:bg-stone-100'}`}
            >
              <Heart size={22} className={selectedCategory === 'favorites' ? 'fill-rose-600 text-rose-600' : 'text-stone-400 group-hover:text-stone-600'} />
              <span>我的收藏</span>
            </button>
          </nav>

          <div className="mt-10">
            <h3 className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-4 px-2">交易七步 (Steps)</h3>
            <div className="space-y-2">
              {tradingData.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => { setSelectedCategory(cat.id); setIsSidebarOpen(false); }}
                  className={`w-full text-left px-4 py-3.5 rounded-xl text-base transition-all flex items-center gap-3
                    ${selectedCategory === cat.id 
                      ? 'bg-stone-100 text-stone-900 font-bold shadow-sm' 
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'}
                  `}
                >
                  <span className={`w-3 h-3 rounded-full ${cat.color} shadow-sm`}></span>
                  {cat.subtitle}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 md:p-10 max-w-6xl mx-auto w-full overflow-y-auto h-screen no-scrollbar scroll-smooth">
        
        {/* Search Bar */}
        <div className="relative mb-10 group max-w-2xl mx-auto md:mx-0">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Search className="text-stone-400 group-focus-within:text-stone-600 transition-colors" size={22} />
          </div>
          <input
            type="text"
            placeholder="搜尋行為 (例如：價漲量增、背離)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-6 py-5 bg-white border border-stone-200 rounded-3xl text-xl text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-400 focus:ring-4 focus:ring-stone-100 transition-all shadow-sm hover:shadow-md"
          />
        </div>

        {/* Dashboard View (Recents) */}
        {selectedCategory === 'all' && !searchQuery && recentItems.length > 0 && (
          <div className="mb-12">
            <h2 className="flex items-center gap-2 text-sm font-bold text-stone-400 uppercase tracking-wider mb-5 px-1">
              <Clock size={16} />
              最近閱讀
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {recentItems.map(item => (
                <button 
                  key={item.id}
                  onClick={() => handleOpenItem(item)}
                  className="text-left bg-white p-6 rounded-3xl border border-stone-100 shadow-sm hover:shadow-lg hover:border-stone-200 transition-all hover:-translate-y-1 cursor-pointer group h-full flex flex-col"
                >
                  <div className="flex justify-between items-start mb-3 w-full">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-stone-100 text-stone-600 px-2 py-1 rounded-lg">
                      {item.stepId.toUpperCase()}
                    </span>
                    {favorites.includes(item.id) && <Heart size={18} className="text-rose-500 fill-rose-500" />}
                  </div>
                  <h3 className="font-bold text-lg text-stone-800 group-hover:text-stone-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* List View Header */}
        <div className="mb-8 px-1">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-800 mb-2">
            {selectedCategory === 'all' 
              ? '交易行為百科' 
              : selectedCategory === 'favorites' 
                ? '我的收藏筆記' 
                : tradingData.find(c => c.id === selectedCategory)?.title + ' | ' + tradingData.find(c => c.id === selectedCategory)?.subtitle}
          </h2>
          <p className="text-stone-500 font-medium">
            共 {filteredItems.length} 條行為訊號
          </p>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 ? (
           <div className="text-center py-24 bg-white rounded-[2rem] border-2 border-dashed border-stone-200 mx-auto max-w-2xl">
             <div className="inline-flex p-4 rounded-full bg-stone-50 mb-4">
                <Search className="text-stone-300" size={32}/>
             </div>
             <p className="text-stone-500 text-lg font-medium">找不到相關的訊號</p>
             {selectedCategory === 'favorites' && <p className="text-stone-400 mt-2">點擊卡片右上角的愛心，就能加入收藏。</p>}
           </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 pb-20">
            {filteredItems.map(item => (
              <button 
                key={item.id}
                onClick={() => handleOpenItem(item)}
                className="text-left bg-white p-6 md:p-8 rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-xl hover:translate-y-[-2px] hover:border-stone-200 transition-all group relative overflow-hidden w-full"
              >
                 {/* Decorative left bar */}
                 <div className={`absolute left-0 top-0 bottom-0 w-2 ${tradingData.find(d => d.id === item.stepId)?.color || 'bg-stone-300'}`}></div>

                <div className="flex justify-between items-center pl-4">
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-stone-500 uppercase tracking-wide">
                        {item.stepName}
                      </span>
                      {favorites.includes(item.id) && <Heart size={16} className="text-rose-500 fill-rose-500" />}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-stone-800 group-hover:text-stone-600 transition-colors font-display mb-3">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-sm font-medium text-stone-600 bg-stone-100 px-3 py-1 rounded-lg">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="hidden sm:flex p-3 rounded-full bg-stone-50 text-stone-300 group-hover:bg-stone-800 group-hover:text-stone-50 transition-all duration-300">
                    <ArrowRight size={24} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </main>

      {/* Modal / Detail View */}
      {selectedItem && (
        <IndicatorCard 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
          isFavorite={favorites.includes(selectedItem.id)}
          onToggleFavorite={() => toggleFavorite(selectedItem.id)}
        />
      )}
    </div>
  );
};

export default App;
