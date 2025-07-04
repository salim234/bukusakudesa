
import React from 'react';
import { Module } from '../types.ts';

const StarIcon: React.FC<{ isFavorite: boolean }> = ({ isFavorite }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M10 2.15l1.98 4.015 4.42.645-3.2 3.12.755 4.405L10 12.325l-3.955 2.01.755-4.405-3.2-3.12 4.42-.645L10 2.15z"
      clipRule="evenodd"
      className={`transition-colors duration-200 ${isFavorite ? 'text-amber-400' : 'text-slate-300'}`}
    />
  </svg>
);


interface ModuleCardProps {
    module: Module;
    isFavorite: boolean;
    onClick: () => void;
    onToggleFavorite: (moduleId: string) => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, isFavorite, onClick, onToggleFavorite }) => {

    const handleFavoriteClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent card's onClick from firing
        onToggleFavorite(module.id);
    };

    return (
        <div
          onClick={onClick}
          className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 cursor-pointer flex flex-col justify-between hover:-translate-y-1 border border-transparent hover:border-blue-500"
        >
          <div>
            <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-blue-600 mb-4 shadow-lg">
                {module.icon}
            </div>
            <h3 className="font-bold text-slate-800 text-lg mb-2">{module.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{module.description}</p>
          </div>
           <button 
                onClick={handleFavoriteClick}
                className="absolute top-4 right-4 p-1 rounded-full bg-white/70 backdrop-blur-sm hover:bg-slate-100 transition-colors"
                aria-label={isFavorite ? 'Hapus dari favorit' : 'Tambah ke favorit'}
            >
                <StarIcon isFavorite={isFavorite} />
            </button>
        </div>
    );
};
export default ModuleCard;
