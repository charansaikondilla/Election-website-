import React from 'react';
import type { Representative } from '../types';
import CheckCircleIcon from './icons/CheckCircleIcon';

interface AboutSectionProps {
  representative: Representative;
}

const AboutSection: React.FC<AboutSectionProps> = ({ representative }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900">{representative.name} గురించి</h3>
      <p className="mt-2 text-gray-600">
        {representative.about}
      </p>
      <h4 className="text-lg font-bold text-gray-900 mt-6">ముఖ్య వాగ్దానాలు:</h4>
      <ul className="mt-3 space-y-3">
        {representative.keyPromises.map((promise, index) => (
          <li key={index} className="flex items-start">
            <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600">{promise}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutSection;