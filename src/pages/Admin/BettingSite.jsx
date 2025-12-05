import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, ExternalLink, FileText, Star, Upload, X } from 'lucide-react';
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { uploadImageToCloudinary } from '../../utils/cloudinaryUpload';
import AdminSidebar from './Sidebar';


const BettingSitesManager = ({ setIsAdminLoggedIn }) => {
  const [sites, setSites] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [isSaving,SetIsSaving]=useState(false)
  
  const [formData, setFormData] = useState({
    name: '',
    logoUrl: '',
    url: '',
    reviewUrl: '',
    rating: '',
    bonusText: '', // The "Center text"
  });

  // Initial Sample Data
  // const sampleData = [
  //   {
  //     id: 1,
  //     name: 'Stake',
  //     logo: '/app5.png', // Placeholder
  //     rating: '5.0',
  //     url: 'https://stake.com',
  //     reviewUrl: '#',
  //     bonusText: 'Prizes up to 83,00,000 INR'
  //   },
  //   {
  //     id: 2,
  //     name: '96.com',
  //     logo: '/app2.png', // Placeholder
  //     rating: '4.0',
  //     url: 'https://96.com',
  //     reviewUrl: '#',
  //     bonusText: '100% Bonus up to $25,000'
  //   }
  // ];

  useEffect(() => {
    // Load betting sites from Firestore with real-time updates
    const q = query(collection(db, 'betting-sites'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const docs = snapshot.docs.map((s) => ({ id: s.id, ...s.data() }));
        setSites(docs);
      },
      (error) => {
        console.error('Failed to load betting sites', error);
        // Fallback to sample data if any
        setSites(sampleData);
      }
    );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Keep local storage as a fallback cache (optional)
    localStorage.setItem('bettingSites', JSON.stringify(sites));
  }, [sites]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, logoUrl: reader.result }));
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
    setImageFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) {
      alert('Admin session expired. Please log in again.');
      return;
    }
    let logoUrl = formData.logoUrl;
    if (imageFile) {
      try {
        const uploadResult = await uploadImageToCloudinary(imageFile);
        logoUrl = uploadResult?.url || logoUrl;
      } catch (err) {
        console.error('Failed to upload image', err);
      }
    }
    const payload = {
      name: formData.name,
      logoUrl,
      url: formData.url,
      reviewUrl: formData.reviewUrl,
      bonusText: formData.bonusText,
      rating: Number(formData.rating) || 0,
      status: 'active',
      user: user.uid,
    };
    if (editId) {
      try {
        await updateDoc(doc(db, 'betting-sites', editId), { ...payload, updatedAt: serverTimestamp() });
      } catch (err) {
        console.error('Failed to update site', err);
      }
      setEditId(null);
    } else {
      try {
        await addDoc(collection(db, 'betting-sites'), { ...payload, createdAt: serverTimestamp() });
      } catch (err) {
        console.error('Failed to add site', err);
      }
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({ name: '', logoUrl: '', url: '', reviewUrl: '', rating: '', bonusText: '' });
    setImagePreview(null);
    setImageFile(null);
    setShowForm(false);
    setEditId(null);
  };

  const handleEdit = (site) => {
    setFormData({
      name: site.name || '',
      logoUrl: site.logoUrl || site.logo || '',
      url: site.url || '',
      reviewUrl: site.reviewUrl || '',
      rating: site.rating || '',
      bonusText: site.bonusText || '',
    });
    setImagePreview(site.logoUrl || site.logo);
    setEditId(site.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this site?')) return;
    try {
      await deleteDoc(doc(db, 'betting-sites', id));
      setSites((prev) => prev.filter((s) => s.id !== id));
    } catch (err) {
      console.error('Failed to delete site', err);
    }
  };

  // Helper to render stars
  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={14} 
            fill={i < Math.floor(rating) ? "currentColor" : "none"} 
            className={i < Math.floor(rating) ? "text-yellow-400" : "text-gray-600"}
          />
        ))}
        <span className="text-white text-sm font-bold ml-1">{rating}</span>
      </div>
    );
  };

  return (
    <div className="flex font-sans bg-[#0a192f] min-h-screen">
      {/* Sidebar integration */}
      <AdminSidebar setIsAdminLoggedIn={setIsAdminLoggedIn} />
      
      <div className="flex-1 ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white">Betting Sites Manager</h1>
              <p className="text-slate-400 mt-1">Manage listings, rankings, and bonuses</p>
            </div>
            <button
              onClick={() => {
                resetForm();
                setShowForm(!showForm);
              }}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 px-6 rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-blue-900/20"
            >
              {showForm ? <X size={20} /> : <Plus size={20} />}
              {showForm ? 'Cancel' : 'Add New Site'}
            </button>
          </div>

          {/* Add/Edit Form */}
          {showForm && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-8 mb-8 animate-fade-in">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                {editId ? <Edit2 size={24} className="text-blue-400" /> : <Plus size={24} className="text-blue-400" />}
                {editId ? 'Edit Betting Site' : 'Add New Betting Site'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-slate-300 font-medium text-sm mb-2">Site Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder-slate-500"
                        placeholder="e.g. Stake"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium text-sm mb-2">Site Link (Visit URL)</label>
                      <div className="relative">
                        <ExternalLink className="absolute left-3 top-3.5 text-slate-500" size={18} />
                        <input
                          type="url"
                          value={formData.url}
                          onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                          required
                          className="w-full pl-10 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 placeholder-slate-500"
                          placeholder="https://..."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium text-sm mb-2">Review Link</label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-3.5 text-slate-500" size={18} />
                        <input
                          type="url"
                          value={formData.reviewUrl}
                          onChange={(e) => setFormData({ ...formData, reviewUrl: e.target.value })}
                          className="w-full pl-10 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 placeholder-slate-500"
                          placeholder="https://..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-slate-300 font-medium text-sm mb-2">Rating (1.0 - 5.0)</label>
                      <div className="relative">
                        <Star className="absolute left-3 top-3.5 text-slate-500" size={18} />
                        <input
                          type="number"
                          min="1"
                          max="5"
                          step="0.1"
                          value={formData.rating}
                          onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                          required
                          className="w-full pl-10 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 placeholder-slate-500"
                          placeholder="4.5"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium text-sm mb-2">Bonus Offer (Center Text)</label>
                      <input
                        type="text"
                        value={formData.bonusText}
                        onChange={(e) => setFormData({ ...formData, bonusText: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 placeholder-slate-500"
                        placeholder="e.g. 100% Bonus up to $100"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium text-sm mb-2">Logo Upload</label>
                      <div className="flex items-center gap-4">
                        <label className="flex-1 cursor-pointer bg-slate-800 border border-dashed border-slate-600 hover:border-blue-500 rounded-lg p-3 flex items-center justify-center gap-2 transition-colors group">
                          <Upload size={20} className="text-slate-400 group-hover:text-blue-400" />
                          <span className="text-slate-400 group-hover:text-blue-400">Choose File</span>
                          <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                        </label>
                        {imagePreview && (
                          <div className="w-12 h-12 bg-white rounded p-1 shrink-0">
                            <img src={imagePreview} alt="Preview" className="w-full h-full object-contain" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className={`flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-blue-900/20${
                      isSaving ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-400 cursor-pointer'
                    }`}
                  >
                    {isSaving?'Saving':editId ? 'Update Listing' : 'Create Listing'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Sites List */}
          <div className="space-y-4">
            {sites.length === 0 && (
              <div className="text-center py-12 bg-slate-900 rounded-xl border border-dashed border-slate-700">
                <p className="text-slate-500">No betting sites found.</p>
              </div>
            )}

            {sites.map((site, index) => (
              <div 
                key={site.id} 
                className="group relative bg-[#111c35] rounded-xl border border-slate-800 p-4 flex flex-col md:flex-row items-center gap-4 md:gap-8 hover:border-blue-500/50 transition-all duration-300 shadow-lg"
              >
                {/* Edit/Delete Buttons (Top Right) - Appears on hover */}
                <div className="absolute top-2 right-2 md:top-4 md:right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30">
                  <button 
                    onClick={() => handleEdit(site)}
                    className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-lg shadow-lg transition-transform hover:scale-110"
                    title="Edit"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button 
                    onClick={() => handleDelete(site.id)}
                    className="bg-red-600 hover:bg-red-500 text-white p-2 rounded-lg shadow-lg transition-transform hover:scale-110"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                {/* Rank Badge */}
                

                <div className="absolute top-0 left-0 bg-[#2563EAff] text-[#0a192f] font-black text-xl px-2 py-1 rounded-tl-2xl rounded-br-2xl z-10 shadow-lg">
                #{index + 1}
              </div>

                {/* Logo Section */}
                <div className="flex-shrink-0 ml-6">
                  <div className="w-20 h-20 bg-white rounded-lg p-2 flex items-center justify-center shadow-inner">
                    {site.logoUrl || site.logo ? (
                      <img src={site.logoUrl || site.logo} alt={site.name} className="max-w-full max-h-full object-contain" />
                    ) : (
                      <span className="text-gray-300 text-xs">No Logo</span>
                    )}
                  </div>
                </div>

                {/* Info Section */}
                <div className="flex-1 text-center md:text-left min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-white truncate">{site.name}</h3>
                    <div className="hidden md:block text-blue-500">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    </div>
                  </div>
                  <div className="mb-2">{renderStars(site.rating)}</div>
                </div>

                {/* Center Bonus Text */}
                <div className="flex-[2] text-center px-4 border-t md:border-t-0 md:border-l md:border-r border-slate-700/50 py-3 md:py-0">
                  <div className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Exclusive Welcome Bonus
                  </div>
                  <div className="text-white font-bold text-lg md:text-xl leading-tight">
                    {site.bonusText || "No active bonus"}
                  </div>
                  <div className="text-slate-500 text-[10px] mt-1">18+ • T&Cs apply • Play Responsibly</div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2 w-full md:w-auto min-w-[160px]">
                  <a 
                    href={site.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 px-4 rounded flex items-center justify-center gap-2 transition-colors text-sm uppercase tracking-wide shadow-lg shadow-blue-900/30"
                  >
                    Visit Site <ExternalLink size={14} />
                  </a>
                  <a 
                    href={site.reviewUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white py-2.5 px-4 rounded flex items-center justify-center gap-2 transition-colors text-sm uppercase tracking-wide"
                  >
                    <FileText size={14} /> Read Review
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default BettingSitesManager;