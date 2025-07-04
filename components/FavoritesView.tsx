
import React from 'react';
import { Module } from '../types.ts';
import ModuleCard from './ModuleCard.tsx';

interface FavoritesViewProps {
    favoriteModules: Module[];
    favorites: string[]; 
    onSelectModule: (module: Module) => void;
    onToggleFavorite: (moduleId: string) => void;
}

const FavoritesView: React.FC<FavoritesViewProps> = ({ favoriteModules, favorites, onSelectModule, onToggleFavorite }) => {
    return (
        <div className="w-full max-w-6xl mx-auto p-4 md:p-6 animate-fade-in">
            <header className="mb-8 md:mb-10">
                <h2 className="text-3xl font-bold text-slate-800">Modul Favorit Anda</h2>
                <p className="mt-2 text-lg text-slate-600">Akses cepat ke materi yang Anda simpan.</p>
            </header>
            
            {favoriteModules.length > 0 ? (
                <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoriteModules.map((module) => (
                        <ModuleCard 
                            key={module.id} 
                            module={module}
                            isFavorite={favorites.includes(module.id)}
                            onClick={() => onSelectModule(module)}
                            onToggleFavorite={onToggleFavorite}
                        />
                    ))}
                </main>
            ) : (
                <div className="text-center p-12 bg-white rounded-2xl shadow-lg border-2 border-dashed">
                    <div className="flex justify-center items-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-700">Belum Ada Favorit</h3>
                    <p className="text-slate-500 mt-2">Anda belum menyimpan modul apa pun. Ketuk ikon bintang (⭐) pada modul mana pun untuk menambahkannya ke sini.</p>
                </div>
            )}
        </div>
    );
};

export default FavoritesView;
