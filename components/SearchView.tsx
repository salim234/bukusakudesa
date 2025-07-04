import React, { useState } from 'react';
import { marked } from 'marked';
import { generateSearchResponse } from '../services/geminiService.ts';
import Spinner from './Spinner.tsx';

const ErrorDisplay: React.FC<{ message: string; onRetry: () => void }> = ({ message, onRetry }) => (
    <div className="text-center text-red-600 bg-red-50 p-6 rounded-lg border border-red-200 flex flex-col items-center gap-4 mt-6">
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

const SearchView: React.FC = () => {
    const [query, setQuery] = useState('');
    const [lastQuery, setLastQuery] = useState('');
    const [result, setResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async (e?: React.FormEvent<HTMLFormElement>) => {
        if (e) e.preventDefault();
        if (!query.trim()) return;

        setIsLoading(true);
        setError(null);
        setResult('');
        setLastQuery(query);

        try {
            const response = await generateSearchResponse(query);
            if(response.startsWith('Error:')) {
                throw new Error(response);
            }
            const html = marked.parse(response || '');
            setResult(html as string);
        } catch (err) {
            setError((err as Error).message || 'Gagal melakukan pencarian.');
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleRetry = () => {
        // No need to setQuery again, just use the lastQuery
        handleSearch();
    }

    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-6 animate-fade-in">
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-slate-800">Pencarian Cerdas</h1>
                <p className="text-slate-600 mt-1">Ajukan pertanyaan apapun terkait tata kelola pemerintahan desa.</p>
            </header>

            <form onSubmit={handleSearch} className="flex gap-2 items-center">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Contoh: Apa saja sumber pendapatan desa?"
                    className="flex-grow w-full px-4 py-3 text-base text-slate-800 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                    aria-label="Kolom pencarian"
                />
                <button
                    type="submit"
                    disabled={isLoading || !query.trim()}
                    className="flex-shrink-0 bg-blue-600 text-white font-semibold px-5 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    )}
                    <span>Cari</span>
                </button>
            </form>

            <main className="mt-8">
                {isLoading && <Spinner />}
                {error && <ErrorDisplay message={error} onRetry={handleRetry} />}
                {result && !error && (
                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                        <article className="prose prose-slate max-w-none">
                            <div dangerouslySetInnerHTML={{ __html: result }} />
                        </article>
                    </div>
                )}
                 {!isLoading && !error && !result && lastQuery && (
                    <div className="text-center p-8 text-slate-500">
                        <p>Tidak ada hasil untuk "{lastQuery}".</p>
                    </div>
                )}
                 {!isLoading && !error && !result && !lastQuery && (
                    <div className="text-center p-8 text-slate-400 border-2 border-dashed rounded-lg mt-8">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-slate-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <p className="font-semibold">Hasil pencarian akan ditampilkan di sini.</p>
                        <p className="text-sm">Mulai dengan mengetik pertanyaan di atas.</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default SearchView;
