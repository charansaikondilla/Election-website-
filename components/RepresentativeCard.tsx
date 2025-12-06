import React from 'react';
import type { Representative } from '../types';

interface RepresentativeCardProps {
  representative: Representative;
}

const RepresentativeCard: React.FC<RepresentativeCardProps> = ({ representative }) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg h-[85vh]">
      <img
        src={representative.imageUrl}
        alt={representative.name}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col justify-end h-full">
        <div className="flex-grow"></div>
        <div className="text-center">
            <h2 className="text-3xl font-bold">{representative.name}</h2>
            <p className="text-lg opacity-90">{representative.title}</p>
        </div>
        <div className="flex justify-center items-center gap-4 mt-6 text-base font-medium text-white/90">
          <span>గ్రామం: {representative.villageName}</span>
          <div className="w-px h-5 bg-white/50"></div>
          <span>వార్డు నెం: {representative.wardNumber}</span>
        </div>
      </div>
    </div>
  );
};

export default RepresentativeCard;