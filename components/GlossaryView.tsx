
import React, { useState, useEffect, useMemo } from 'react';
import { getGlossaryTerms } from '../services/geminiService.ts';
import { GlossaryTerm } from '../types.ts';
import Spinner from './Spinner.tsx';

const GlossaryView: React.FC = () => {
    const [terms, setTerms] = useState<GlossaryTerm[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchTerms = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const data = await getGlossaryTerms();
                setTerms(data.sort((a, b) => a.term.localeCompare(b.term)));
            } catch (err) {
                setError((err as Error).message || 'Gagal memuat istilah.');
            } finally {
                setIsLoading(false);
            }
        };
        fetchTerms();
    }, []);

    const filteredTerms = useMemo(() => {
        if (!searchQuery) return terms;
        return terms.filter(term =>
            term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
            term.definition.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, terms]);

    const groupedTerms = useMemo(() => {
        return filteredTerms.reduce((acc: { [key: string]: GlossaryTerm[] }, term) => {
            const firstLetter = term.term[0].toUpperCase();
            if (!acc[firstLetter]) {
                acc[firstLetter] = [];
            }
            acc[firstLetter].push(term);
            return acc;
        }, {});
    }, [filteredTerms]);
    
    const sortedGroups = Object.keys(groupedTerms).sort();

    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-6 animate-fade-in">
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-slate-800">Glosarium Istilah Desa</h1>
                <p className="text-slate-600 mt-1">Kamus praktis untuk istilah dan singkatan dalam pemerintahan desa.</p>
            </header>

            <div className="sticky top-[70px] bg-slate-100/95 backdrop-blur-sm py-3 z-10">
                 <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari istilah atau singkatan (contoh: APBDes, BPD)..."
                    className="w-full px-4 py-3 text-base text-slate-800 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                    aria-label="Cari glosarium"
                />
            </div>
            
            <main className="mt-4">
                {isLoading && <Spinner />}
                {error && <div className="text-center text-red-500 p-6">{error}</div>}
                {!isLoading && !error && sortedGroups.length > 0 && (
                    <div className="space-y-8">
                        {sortedGroups.map(letter => (
                             <div key={letter} className="animate-fade-in-fast">
                                <h2 className="text-2xl font-bold text-blue-600 border-b-2 border-blue-200 pb-2 mb-4 sticky top-[138px] bg-slate-100/95 backdrop-blur-sm">{letter}</h2>
                                <div className="space-y-4">
                                {groupedTerms[letter].map(term => (
                                    <div key={term.term} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                                        <h3 className="font-bold text-slate-900">{term.term}</h3>
                                        <p className="text-slate-600 mt-1 leading-relaxed">{term.definition}</p>
                                    </div>
                                ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                 {!isLoading && !error && filteredTerms.length === 0 && (
                    <div className="text-center p-8 text-slate-500 border-2 border-dashed rounded-lg mt-8">
                        <p className="font-semibold">Istilah tidak ditemukan</p>
                        <p className="text-sm">Coba kata kunci lain atau hapus filter pencarian.</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default GlossaryView;
