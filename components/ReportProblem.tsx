import React, { useState, useRef } from 'react';
import PhotoIcon from './icons/PhotoIcon';
import XCircleIcon from './icons/XCircleIcon';
import CommunityIcon from './icons/CommunityIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';
import type { ProblemType } from '../types';

interface ReportProblemProps {
  problem: ProblemType;
  onSuccess: () => void;
}

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyTnYcnx0QagPXOLdODllyXasH7iWzUu2X2RIx9C3N77li_I6QY4kzzcAONR0oXubqt/exec';

const MAX_DESC_LENGTH = 500;

const ReportProblem: React.FC<ReportProblemProps> = ({ problem, onSuccess }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    if (text.length <= MAX_DESC_LENGTH) {
      setDescription(text);
    }
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setPhoto(null);
    setPhotoPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === '') {
      alert("దయచేసి మీ పేరును అందించండి.");
      return;
    }
    if (description.trim() === '') {
      alert("దయచేసి సమస్య వివరణను అందించండి.");
      return;
    }

    setIsSubmitting(true);
    
    let photoBase64 = null;
    let photoMimeType = null;
    if (photoPreview) {
      const parts = photoPreview.split(',');
      const mimePart = parts[0].match(/:(.*?);/);
      if(mimePart && mimePart.length > 1) {
          photoMimeType = mimePart[1];
      }
      photoBase64 = parts[1];
    }

    const formData = {
      problemType: problem.title,
      name,
      description,
      photoBase64,
      photoMimeType
    };

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });
      onSuccess();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('సమస్యను సమర్పించడంలో లోపం ఏర్పడింది. దయచేసి మళ్ళీ ప్రయత్నించండి.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">నివేదిక: {problem.title}</h2>
      <div className="space-y-4 bg-white p-4 rounded-lg border border-gray-200/80">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-base font-semibold text-gray-800">మీ పేరు</label>
            <div className="relative mt-2">
               <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition"
                placeholder="మీ పేరు నమోదు చేయండి..."
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="description" className="block text-base font-semibold text-gray-800">సమస్య వివరణ</label>
            <div className="relative mt-2">
              <textarea
                id="description"
                value={description}
                onChange={handleDescriptionChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition"
                placeholder="మీ వార్డులోని సమస్యను వివరించండి..."
              />
              <span className="absolute bottom-2 right-3 text-sm text-gray-400">
                {description.length}/{MAX_DESC_LENGTH}
              </span>
            </div>
          </div>
          
          {photoPreview ? (
            <div className="relative w-full h-40 rounded-lg overflow-hidden">
              <img src={photoPreview} alt="Issue preview" className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={removePhoto}
                className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white hover:bg-black/70"
                aria-label="Remove photo"
              >
                <XCircleIcon className="w-6 h-6" />
              </button>
            </div>
          ) : (
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
                ref={fileInputRef}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition"
              >
                <PhotoIcon className="w-6 h-6" />
                <span>ఫోటో/జోడింపును జోడించండి</span>
              </button>
            </div>
          )}
          
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all text-base disabled:bg-green-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'సమర్పిస్తోంది...' : 'సమస్యను సమర్పించండి'}
          </button>
        </form>
      </div>

      <div className="mt-8 bg-white p-6 rounded-2xl border border-gray-200 text-center">
        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
            <CommunityIcon className="w-9 h-9 text-green-700" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">కనెక్ట్ అయి ఉండండి</h3>
        <p className="mt-2 text-gray-600 max-w-sm mx-auto">
          నవీకరణలను పొందడానికి మరియు స్థానిక సమస్యలను నేరుగా చర్చించడానికి మా సంఘంలో చేరండి.
        </p>
        <a 
          href="https://chat.whatsapp.com/F0sODb8bU62HQZuhNfVnWT" 
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 w-full inline-flex items-center justify-center gap-3 py-3 px-6 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all">
          <WhatsAppIcon className="w-5 h-5"/>
          WhatsApp సంఘంలో చేరండి
        </a>
      </div>
    </section>
  );
};

export default ReportProblem;