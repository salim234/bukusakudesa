import React, { useState } from 'react';
import Spinner from './Spinner.tsx';

interface DraftModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  isLoading: boolean;
  content: string;
  rawContent: string;
  error?: string | null;
  onRetry?: () => void;
}

const DraftModal: React.FC<DraftModalProps> = ({ isOpen, onClose, title, isLoading, content, rawContent, error, onRetry }) => {
  const [copyText, setCopyText] = useState('Salin Teks Draf');

  if (!isOpen) return null;

  const handleCopy = async () => {
    if (!rawContent) return;
    try {
      await navigator.clipboard.writeText(rawContent);
      setCopyText('Teks Tersalin!');
      setTimeout(() => setCopyText('Salin Teks Draf'), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setCopyText('Gagal Menyalin');
      setTimeout(() => setCopyText('Salin Teks Draf'), 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 animate-fade-in-fast"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <header className="flex justify-between items-center p-4 border-b border-slate-200 sticky top-0 bg-white rounded-t-2xl z-10">
          <h2 className="text-lg font-bold text-slate-800 truncate pr-4">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors flex-shrink-0"
            aria-label="Tutup"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>
        <main className="p-6 overflow-y-auto">
          {isLoading && <Spinner />}
          {error && onRetry && (
            <div className="text-center text-red-600 bg-red-50 p-6 rounded-lg border border-red-200 flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="font-semibold">Gagal Membuat Draf</p>
                </div>
                <p className="text-sm">{error.replace('Error:', '').trim()}</p>
                <button 
                    onClick={onRetry} 
                    className="bg-red-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-colors"
                >
                    Coba Lagi
                </button>
            </div>
          )}
          {!isLoading && !error && content && (
            <article className="prose prose-slate max-w-none">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </article>
          )}
        </main>
        <footer className="flex flex-col sm:flex-row-reverse gap-3 p-4 border-t border-slate-200 sticky bottom-0 bg-slate-50/95 backdrop-blur-sm rounded-b-2xl">
            <button
                onClick={handleCopy}
                disabled={!rawContent || isLoading || !!error}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                    <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h6a2 2 0 00-2-2H5z" />
                </svg>
                {copyText}
            </button>
            <button
                onClick={onClose}
                className="w-full sm:w-auto bg-transparent text-slate-700 font-semibold py-2 px-4 rounded-lg hover:bg-slate-200 transition-colors"
            >
                Tutup
            </button>
        </footer>
      </div>
    </div>
  );
};

export default DraftModal;
