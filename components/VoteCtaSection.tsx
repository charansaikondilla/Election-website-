import React from 'react';
import type { Representative } from '../types';

interface VoteCtaSectionProps {
  representative: Representative;
}

const VoteCtaSection: React.FC<VoteCtaSectionProps> = ({ representative }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
      <img
        src={representative.partySymbolUrl}
        alt={`${representative.partyName} Symbol`}
        className="w-48 h-48 mx-auto mb-4 rounded-2xl"
      />
      <h3 className="text-2xl font-bold text-gray-900">
        {representative.partyName} గుర్తుకే మీ ఓటు
      </h3>
      <p className="mt-2 text-gray-600">
        మీ ఓటు ఈ గుర్తుకే.
      </p>
    </div>
  );
};

export default VoteCtaSection;