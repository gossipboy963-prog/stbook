import React, { useEffect, useRef } from 'react';
import { IndicatorItem } from '../types';
import { X, BookOpen, TrendingUp, TrendingDown, GitCommit, Link, AlertTriangle, Compass, Heart, ChevronUp } from 'lucide-react';

interface Props {
  item: IndicatorItem;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const IndicatorCard: React.FC<Props> = ({ item, onClose, isFavorite, onToggleFavorite }) => {
  const { content } = item;
  const scrollRef = useRef<HTMLDivElement>(null);

  // Focus trap could be implemented here for full accessibility
  // For now, we ensure escape key works
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-6 md:p-10 bg-stone-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-paper-50 w-full h-full sm:h-auto sm:max-w-4xl sm:max-h-[90vh] rounded-none sm:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col relative animate-in zoom-in-95 slide-in-from-bottom-5 duration-300 border-0 sm:border border-stone-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="card-title"
      >
        
        {/* Header - Sticky */}
        <div className="px-6 py-5 md:px-10 md:py-6 border-b border-stone-200 bg-white/95 backdrop-blur-sm flex justify-between items-start shrink-0 sticky top-0 z-10 shadow-sm">
          <div className="pr-4">
            <div className="text-sm font-bold tracking-wider text-stone-500 uppercase mb-2 flex flex-wrap items-center gap-2">
              <span className="bg-stone-100 text-stone-600 px-3 py-1 rounded-lg">{item.stepName}</span>
            </div>
            <h2 id="card-title" className="text-2xl md:text-4xl font-display font-bold text-ink-900 leading-tight">
              {item.title}
            </h2>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={onToggleFavorite}
              className={`p-3 rounded-full transition-all border ${isFavorite ? 'bg-rose-50 text-rose-600 border-rose-200' : 'bg-white text-stone-400 border-stone-200 hover:bg-stone-50 hover:text-stone-600'}`}
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart size={24} fill={isFavorite ? "currentColor" : "none"} />
            </button>
            <button 
              onClick={onClose} 
              className="p-3 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 hover:scale-105 transition-all"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div ref={scrollRef} className="overflow-y-auto flex-1 p-6 md:p-10 space-y-10 no-scrollbar scroll-smooth bg-[#fafaf9]">
          
          {/* 1. Definition */}
          <section>
            <h3 className="flex items-center gap-3 text-xl font-bold text-stone-800 mb-4">
              <div className="p-2 bg-white rounded-xl shadow-sm border border-stone-100 text-stone-700">
                <BookOpen size={24} />
              </div>
              開宗明義
            </h3>
            <p className="text-lg md:text-xl text-stone-700 leading-loose bg-white p-6 md:p-8 rounded-3xl border border-stone-100 shadow-sm">
              {content.definition}
            </p>
          </section>

          {/* 2. Behavior */}
          <section>
            <h3 className="flex items-center gap-3 text-xl font-bold text-stone-800 mb-4">
              <span className="text-2xl p-2 bg-white rounded-xl shadow-sm border border-stone-100 flex items-center justify-center w-10 h-10">👀</span> 
              市場在做什麼？
            </h3>
            <div className="text-lg md:text-xl text-stone-700 leading-loose pl-6 border-l-[6px] border-stone-300 py-1">
              {content.marketBehavior}
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* 3. Rising */}
            <section className="bg-stone-100/60 p-6 md:p-8 rounded-[2rem]">
              <h3 className="flex items-center gap-3 text-lg font-bold text-zen-green mb-5">
                <div className="p-1.5 bg-white rounded-lg shadow-sm">
                  <TrendingUp size={20} />
                </div>
                指標上升時...
              </h3>
              <ul className="space-y-4">
                {content.whenRising.map((text, i) => (
                  <li key={i} className="flex gap-3 text-[17px] text-stone-700 leading-relaxed">
                    <span className="text-zen-green font-bold text-xl mt-[-2px]">•</span>
                    {text}
                  </li>
                ))}
              </ul>
            </section>

            {/* 4. Falling */}
            <section className="bg-stone-100/60 p-6 md:p-8 rounded-[2rem]">
              <h3 className="flex items-center gap-3 text-lg font-bold text-zen-red mb-5">
                <div className="p-1.5 bg-white rounded-lg shadow-sm">
                  <TrendingDown size={20} />
                </div>
                指標下降時...
              </h3>
              <ul className="space-y-4">
                {content.whenFalling.map((text, i) => (
                  <li key={i} className="flex gap-3 text-[17px] text-stone-700 leading-relaxed">
                    <span className="text-zen-red font-bold text-xl mt-[-2px]">•</span>
                    {text}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* 5. Divergence */}
          <section>
            <h3 className="flex items-center gap-3 text-xl font-bold text-stone-800 mb-4">
              <div className="p-2 bg-white rounded-xl shadow-sm border border-stone-100 text-stone-700">
                <GitCommit className="rotate-90" size={24} />
              </div>
              轉折與背離
            </h3>
            <div className="bg-amber-50 p-6 md:p-8 rounded-[2rem] border border-amber-100 text-stone-800 text-lg leading-loose">
              <ul className="space-y-3">
                {content.divergence.map((text, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-amber-600 font-bold mt-1">➜</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 6. Combinations */}
          <section>
            <h3 className="flex items-center gap-3 text-xl font-bold text-stone-800 mb-4">
               <div className="p-2 bg-white rounded-xl shadow-sm border border-stone-100 text-stone-700">
                <Link size={24} />
              </div>
              建議搭配
            </h3>
            <div className="bg-white border-2 border-stone-100 p-6 md:p-8 rounded-[2rem] shadow-sm">
              <div className="flex flex-wrap gap-3 mb-4">
                {content.combinations.indicators.map(ind => (
                  <span key={ind} className="px-4 py-2 bg-stone-800 text-stone-50 text-sm md:text-base rounded-full font-medium shadow-md">
                    + {ind}
                  </span>
                ))}
              </div>
              <p className="text-stone-600 text-lg italic leading-relaxed">
                「{content.combinations.reason}」
              </p>
            </div>
          </section>

           {/* 7. Pitfalls */}
           <section>
            <h3 className="flex items-center gap-3 text-xl font-bold text-stone-800 mb-4">
               <div className="p-2 bg-white rounded-xl shadow-sm border border-stone-100 text-rose-600">
                <AlertTriangle size={24} />
              </div>
              容易騙你的時候
            </h3>
            <ul className="grid gap-3">
              {content.pitfalls.map((text, i) => (
                <li key={i} className="flex items-start gap-4 bg-rose-50 p-4 md:p-5 rounded-2xl text-lg text-rose-900 leading-relaxed">
                  <span className="mt-2.5 min-w-[6px] h-[6px] bg-rose-500 rounded-full"></span>
                  {text}
                </li>
              ))}
            </ul>
          </section>

          {/* 8. Usage in Step */}
          <section>
             <h3 className="flex items-center gap-3 text-xl font-bold text-stone-800 mb-4">
               <div className="p-2 bg-white rounded-xl shadow-sm border border-stone-100 text-indigo-600">
                <Compass size={24} />
              </div>
              在 Step 1-7 中怎麼用？
            </h3>
            <div className="bg-indigo-50 border-l-[6px] border-indigo-500 p-6 md:p-8 rounded-r-3xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-bold uppercase tracking-wider bg-indigo-200 text-indigo-800 px-3 py-1 rounded-lg">
                  {content.usageInStep.role}
                </span>
              </div>
              <p className="text-indigo-900 font-medium text-lg md:text-xl leading-relaxed">
                {content.usageInStep.description}
              </p>
            </div>
          </section>

          {/* Coach Note */}
          <div className="mt-8 pt-10 border-t border-stone-200 text-center pb-8">
            <p className="font-display text-xl text-stone-400 italic mb-4">
              交易者備忘 ☕
            </p>
            <p className="text-stone-800 font-medium text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
              「{content.coachNote}」
            </p>
          </div>
          
          <div className="h-4"></div>
        </div>
      </div>
    </div>
  );
};

export default IndicatorCard;