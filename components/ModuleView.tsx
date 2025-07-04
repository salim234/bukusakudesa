
import React, { useState, useEffect, useCallback } from 'react';
import { marked } from 'marked';
import { Module } from '../types.ts';
import { generateLearningContent, generateDraftExample } from '../services/geminiService.ts';
import Spinner from './Spinner.tsx';
import DraftModal from './DraftModal.tsx';

interface ModuleViewProps {
  module: Module;
  onBack: () => void;
  onStartQuiz: (quizId: string) => void;
  isFavorite: boolean;
  onToggleFavorite: (moduleId: string) => void;
}

const ErrorDisplay: React.FC<{ message: string; onRetry: () => void }> = ({ message, onRetry }) => (
    <div className="text-center text-red-600 bg-red-50 p-6 rounded-lg border border-red-200 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="font-semibold">Terjadi Kesalahan</p>
        </div>
        <p className="text-sm">{message.replace('Error:', '').trim()}</p>
        <button 
            onClick={onRetry} 
            className="bg-red-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-colors"
        >
            Coba Lagi
        </button>
    </div>
);

const StarIcon: React.FC<{ isFavorite: boolean, className?: string }> = ({ isFavorite, className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M10 2.15l1.98 4.015 4.42.645-3.2 3.12.755 4.405L10 12.325l-3.955 2.01.755-4.405-3.2-3.12 4.42-.645L10 2.15z"
      clipRule="evenodd"
      className={`transition-colors duration-200 ${isFavorite ? 'text-amber-300' : 'text-white'}`}
    />
  </svg>
);


const ModuleView: React.FC<ModuleViewProps> = ({ module, onBack, onStartQuiz, isFavorite, onToggleFavorite }) => {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [isDraftModalOpen, setIsDraftModalOpen] = useState(false);
  const [draftContent, setDraftContent] = useState('');
  const [rawDraftContent, setRawDraftContent] = useState(''); 
  const [isDraftLoading, setIsDraftLoading] = useState(false);
  const [draftError, setDraftError] = useState<string | null>(null);

  const fetchContent = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const generatedContent = await generateLearningContent(module.prompt);
      if (generatedContent.startsWith('Error:')) {
          throw new Error(generatedContent);
      }
      const html = marked.parse(generatedContent || '');
      setContent(html as string);
    } catch (err) {
      setError((err as Error).message || 'Gagal memuat konten. Silakan coba lagi.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [module.prompt]);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  const handleGenerateDraft = async () => {
    setIsDraftModalOpen(true);
    setIsDraftLoading(true);
    setDraftContent('');
    setRawDraftContent('');
    setDraftError(null);
    try {
      const generatedDraft = await generateDraftExample(module.draftPrompt);
       if (generatedDraft.startsWith('Error:')) {
          throw new Error(generatedDraft);
      }
      setRawDraftContent(generatedDraft); 
      const html = marked.parse(generatedDraft || '');
      setDraftContent(html as string);
    } catch (err) {
      const errorMessage = (err as Error).message || 'Gagal membuat draf. Silakan coba lagi.';
      setDraftError(errorMessage);
      console.error(err);
    } finally {
      setIsDraftLoading(false);
    }
  };

  return (
    <>
      <div className="w-full max-w-6xl mx-auto p-4 md:p-6 animate-fade-in">
        <header className="flex items-center mb-6">
          <button
            onClick={onBack}
            className="p-2 rounded-full hover:bg-slate-200 transition-colors mr-2 md:mr-4"
            aria-label="Kembali"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 p-3 rounded-full shadow-md hidden sm:flex">
                {module.icon}
            </div>
            <h1 className="text-xl md:text-3xl font-bold text-slate-800">{module.title}</h1>
          </div>
        </header>

        <div className="md:grid md:grid-cols-3 md:gap-8">
            <main className="md:col-span-2 bg-white rounded-xl shadow-lg p-6 md:p-8">
                {isLoading && <Spinner />}
                {error && <ErrorDisplay message={error} onRetry={fetchContent} />}
                {!isLoading && !error && (
                    <article className="prose prose-slate max-w-none prose-h2:font-semibold prose-h2:text-slate-700 prose-h3:text-slate-600 prose-a:text-blue-600 hover:prose-a:text-blue-700">
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                    </article>
                )}
            </main>

            <aside className="md:col-span-1 mt-6 md:mt-0">
                <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
                    <h2 className="text-lg font-bold text-slate-800 mb-2">Tentang Modul Ini</h2>
                    <p className="text-slate-600 text-sm mb-6">{module.description}</p>
                    <div className="flex flex-col gap-3">
                         <button 
                            onClick={() => onToggleFavorite(module.id)}
                            className={`w-full flex items-center justify-center gap-2 font-semibold px-4 py-3 rounded-lg shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                                isFavorite 
                                ? 'bg-amber-500 hover:bg-amber-600 text-white focus:ring-amber-500' 
                                : 'bg-slate-700 hover:bg-slate-800 text-white focus:ring-slate-600'
                            }`}
                        >
                            <StarIcon isFavorite={isFavorite} />
                            {isFavorite ? 'Hapus dari Favorit' : 'Tambah ke Favorit'}
                        </button>
                        <button 
                            onClick={() => onStartQuiz(module.quizId)}
                            className="w-full flex items-center justify-center gap-2 bg-teal-500 text-white font-semibold px-4 py-3 rounded-lg shadow-md hover:bg-teal-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5l-3 6a1 1 0 00.867 1.5h6a1 1 0 00.867-1.5l-3-6A1 1 0 0010 7zm0 4a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                            Mulai Kuis
                        </button>
                        <button 
                            onClick={handleGenerateDraft}
                            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-4 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2-2H4a2 2 0 01-2-2v-4z" />
                            </svg>
                            Buat Contoh Draf
                        </button>
                    </div>
                </div>
            </aside>
        </div>
      </div>

      <DraftModal
        isOpen={isDraftModalOpen}
        onClose={() => setIsDraftModalOpen(false)}
        title={`Contoh Draf: ${module.title}`}
        isLoading={isDraftLoading}
        content={draftContent}
        rawContent={rawDraftContent}
        error={draftError}
        onRetry={handleGenerateDraft}
      />
    </>
  );
};

export default ModuleView;
