
import React, { useState } from 'react';
import { Profile } from '../types.ts';

interface ProfileViewProps {
    profile: Profile;
    onUpdateProfile: (newProfile: Profile) => void;
    favoritesCount: number;
    onResetData: () => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({ profile, onUpdateProfile, favoritesCount, onResetData }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState<Profile>(profile);
    const [showResetConfirm, setShowResetConfirm] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        onUpdateProfile(formData);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setFormData(profile);
        setIsEditing(false);
    };
    
    const handleReset = () => {
        onResetData();
        setShowResetConfirm(false);
    }

    return (
        <div className="w-full max-w-2xl mx-auto p-4 md:p-6 animate-fade-in">
            <header className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-slate-800">Profil Pengguna</h1>
                {!isEditing && (
                    <button 
                        onClick={() => setIsEditing(true)}
                        className="flex items-center gap-2 bg-slate-200 text-slate-700 font-semibold px-4 py-2 rounded-lg hover:bg-slate-300 transition-colors"
                    >
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                        </svg>
                        Edit
                    </button>
                )}
            </header>
            
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                {isEditing ? (
                    <form onSubmit={handleSave} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nama</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-3 py-2 text-slate-800 bg-white border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="village" className="block text-sm font-medium text-slate-700 mb-1">Nama Desa</label>
                            <input type="text" id="village" name="village" value={formData.village} onChange={handleInputChange} className="w-full px-3 py-2 text-slate-800 bg-white border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div className="flex justify-end gap-3 pt-4">
                            <button type="button" onClick={handleCancel} className="bg-slate-200 text-slate-800 font-semibold px-4 py-2 rounded-lg hover:bg-slate-300">Batal</button>
                            <button type="submit" className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700">Simpan</button>
                        </div>
                    </form>
                ) : (
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm text-slate-500">Nama</p>
                            <p className="text-lg font-semibold text-slate-800">{profile.name}</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">Desa</p>
                            <p className="text-lg font-semibold text-slate-800">{profile.village}</p>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-bold text-slate-700 mb-4">Statistik Belajar</h2>
                 <div className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-4">
                    <div className="bg-amber-100 text-amber-600 p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm text-slate-500">Modul Disimpan</p>
                        <p className="text-lg font-bold text-slate-800">{favoritesCount} Modul</p>
                    </div>
                 </div>
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-bold text-slate-700 mb-4">Pengaturan Aplikasi</h2>
                 <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="font-semibold text-slate-800">Reset Data Aplikasi</h3>
                            <p className="text-sm text-slate-500">Menghapus semua data (profil & favorit). Aksi ini tidak dapat dibatalkan.</p>
                        </div>
                        <button 
                            onClick={() => setShowResetConfirm(true)}
                            className="bg-red-100 text-red-700 font-semibold px-4 py-2 rounded-lg hover:bg-red-200 transition-colors flex-shrink-0"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>
            
            {showResetConfirm && (
                 <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 animate-fade-in-fast">
                     <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm w-full">
                         <h3 className="text-lg font-bold text-slate-800">Anda Yakin?</h3>
                         <p className="text-slate-600 mt-2 mb-6">Semua data favorit dan profil yang tersimpan di perangkat ini akan dihapus permanen.</p>
                         <div className="flex justify-end gap-3">
                            <button onClick={() => setShowResetConfirm(false)} className="bg-slate-200 text-slate-800 font-semibold px-4 py-2 rounded-lg hover:bg-slate-300">Batal</button>
                            <button onClick={handleReset} className="bg-red-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-700">Ya, Reset Data</button>
                         </div>
                     </div>
                 </div>
            )}
        </div>
    );
};

export default ProfileView;
