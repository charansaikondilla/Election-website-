import React, { useEffect, useState } from 'react';
import type { ProblemType } from '../types';
import CheckBadgeIcon from './icons/CheckBadgeIcon';

interface SubmissionSuccessProps {
  problem: ProblemType;
  onReportAnother: () => void;
  onGoHome: () => void;
}

const SubmissionSuccess: React.FC<SubmissionSuccessProps> = ({ problem, onReportAnother, onGoHome }) => {
  const [referenceNumber, setReferenceNumber] = useState('');

  useEffect(() => {
    // Generate a random reference number for display purposes
    const generateRef = () => {
      const timestamp = Date.now().toString().slice(-6);
      const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
      return `WR-${timestamp}-${randomPart}`;
    };
    setReferenceNumber(generateRef());
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="max-w-md mx-auto bg-white flex flex-col h-screen justify-between">
        <main className="flex-grow flex flex-col justify-center items-center text-center p-8">
          <CheckBadgeIcon className="w-20 h-20 text-green-600 mb-6" />
          <h1 className="text-3xl font-bold text-gray-900">సమర్పణ స్వీకరించబడింది!</h1>
          <p className="mt-3 text-gray-600 max-w-sm">
            ధన్యవాదాలు. మీ నివేదిక "{problem.title}" విజయవంతంగా సమర్పించబడింది.
          </p>
          {referenceNumber && (
            <div className="mt-6 bg-gray-100 rounded-lg px-4 py-2">
              <p className="text-sm text-gray-500">సూచన సంఖ్య:</p>
              <p className="font-mono text-gray-800 font-medium">{referenceNumber}</p>
            </div>
          )}
        </main>

        <footer className="p-6 bg-white border-t border-gray-200">
           <button 
              onClick={onReportAnother}
              className="w-full py-3 px-6 bg-green-600 text-white font-semibold rounded-xl shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all text-base">
              మరో సమస్యను నివేదించండి
            </button>
            <button 
              onClick={onGoHome}
              className="w-full mt-3 py-2 text-green-600 font-semibold hover:underline">
              హోమ్‌కు తిరిగి వెళ్ళు
            </button>
        </footer>
      </div>
    </div>
  );
};

export default SubmissionSuccess;