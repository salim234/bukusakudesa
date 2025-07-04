
import React, { useState, useEffect } from 'react';
import { MODULES } from './constants.tsx';
import BottomNav from './components/BottomNav.tsx';
import ModuleView from './components/ModuleView.tsx';
import SearchView from './components/SearchView.tsx';
import QuizView from './components/QuizView.tsx';
import FavoritesView from './components/FavoritesView.tsx';
import ModuleCard from './components/ModuleCard.tsx';
import GlossaryView from './components/GlossaryView.tsx';
import ProfileView from './components/ProfileView.tsx';
import { Module, ActiveView, Profile } from './types.ts';


const useFavorites = () => {
    const [favorites, setFavorites] = useState<string[]>(() => {
        try {
            const items = window.localStorage.getItem('desa-app-favorites');
            return items ? JSON.parse(items) : [];
        } catch (error) {
            console.error("Error reading favorites from localStorage", error);
            return [];
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem('desa-app-favorites', JSON.stringify(favorites));
        } catch (error) {
            console.error("Error writing favorites to localStorage", error);
        }
    }, [favorites]);

    const toggleFavorite = (moduleId: string) => {
        setFavorites(prev => 
            prev.includes(moduleId)
                ? prev.filter(id => id !== moduleId)
                : [...prev, moduleId]
        );
    };

    return { favorites, toggleFavorite };
};

const useProfile = () => {
    const [profile, setProfile] = useState<Profile>(() => {
        try {
            const item = window.localStorage.getItem('desa-app-profile');
            return item ? JSON.parse(item) : { name: 'Perangkat Desa', village: 'Desa Maju' };
        } catch (error) {
            console.error("Error reading profile from localStorage", error);
            return { name: 'Perangkat Desa', village: 'Desa Maju' };
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem('desa-app-profile', JSON.stringify(profile));
        } catch (error) {
            console.error("Error writing profile to localStorage", error);
        }
    }, [profile]);
    
    const resetData = () => {
        try {
            window.localStorage.removeItem('desa-app-profile');
            window.localStorage.removeItem('desa-app-favorites');
            window.location.reload(); 
        } catch (error) {
             console.error("Error resetting app data", error);
        }
    }

    return { profile, setProfile, resetData };
};


const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [activeQuizId, setActiveQuizId] = useState<string | null>(null);
  const { favorites, toggleFavorite } = useFavorites();
  const { profile, setProfile, resetData } = useProfile();

  const handleSelectModule = (module: Module) => {
    setSelectedModule(module);
    setActiveView('module');
  };

  const handleGoHome = () => {
    setSelectedModule(null);
    setActiveQuizId(null);
    setActiveView('home');
  };
  
  const handleNavChange = (view: ActiveView) => {
      if(view === 'home') {
          handleGoHome();
      } else {
          setActiveView(view);
          setSelectedModule(null);
          setActiveQuizId(null);
      }
  }

  const handleStartQuiz = (quizId: string) => {
      setActiveQuizId(quizId);
  }

  const handleFinishQuiz = () => {
      setActiveQuizId(null);
      if (!selectedModule) {
          handleGoHome();
      }
  }

  const renderContent = () => {
    if (activeQuizId && selectedModule) {
        return <QuizView quizId={activeQuizId} onFinish={handleFinishQuiz} />;
    }
    if (activeView === 'module' && selectedModule) {
      return <ModuleView 
                module={selectedModule} 
                onBack={handleGoHome} 
                onStartQuiz={handleStartQuiz} 
                isFavorite={favorites.includes(selectedModule.id)}
                onToggleFavorite={toggleFavorite}
              />;
    }
    
    if (activeView === 'search') return <SearchView />;
    if (activeView === 'favorites') {
        const favoriteModules = MODULES.filter(m => favorites.includes(m.id));
        return <FavoritesView 
                    favoriteModules={favoriteModules} 
                    favorites={favorites}
                    onSelectModule={handleSelectModule}
                    onToggleFavorite={toggleFavorite}
                />
    }
    if (activeView === 'glossary') return <GlossaryView />;
    if (activeView === 'profile') {
        return <ProfileView
                    profile={profile}
                    onUpdateProfile={setProfile}
                    favoritesCount={favorites.length}
                    onResetData={resetData}
                />;
    }

    // Home view
    return (
      <div className="w-full max-w-6xl mx-auto p-4 md:p-6 animate-fade-in">
        <header className="mb-8 md:mb-10">
          <h2 className="text-4xl font-extrabold text-slate-800 tracking-tight">Selamat Datang!</h2>
          <p className="mt-2 text-lg text-slate-600">Pilih modul di bawah untuk memulai pembelajaran interaktif mengenai tata kelola desa.</p>
        </header>
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES.map((module) => (
            <ModuleCard 
                key={module.id} 
                module={module}
                isFavorite={favorites.includes(module.id)} 
                onClick={() => handleSelectModule(module)}
                onToggleFavorite={toggleFavorite}
            />
          ))}
        </main>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900">
       <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-40">
        <div className="w-full max-w-6xl mx-auto p-4 flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            </div>
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">Aplikasi Pembelajaran Perangkat Desa</h1>
        </div>
      </header>

      <div className="pb-20 md:pb-0"> 
        {renderContent()}
      </div>
      <BottomNav activeView={activeView} setActiveView={handleNavChange} />
    </div>
  );
};

export default App;