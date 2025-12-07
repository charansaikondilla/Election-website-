import React, { useState, useEffect } from 'react';
import type { ProblemType } from '../types';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

export const problemTypes: ProblemType[] = [
  {
    id: 'road',
    title: 'రహదారి సమస్యలు',
    description: 'దెబ్బతిన్న రహదారులు మరియు గుంతలు ప్రమాదాలు మరియు వాహన నష్టానికి కారణమవుతాయి. వాటిని నివేదించడం సురక్షితమైన సమాజం కోసం మరమ్మతులకు ప్రాధాన్యత ఇవ్వడంలో మాకు సహాయపడుతుంది.',
    imageUrl: 'https://i.ibb.co/Jjtt5dS1/road.webp',
    icon: 'car',
  },
  {
    id: 'garbage',
    title: 'చెత్త సమస్యలు',
    description: 'పరిశుభ్రమైన మరియు ఆరోగ్యకరమైన వాతావరణాన్ని నిర్వహించడంలో మాకు సహాయపడటానికి నిండిన డబ్బాలు లేదా అక్రమంగా పారేసిన చెత్తను నివేదించండి.',
    imageUrl: 'https://i.ibb.co/YTPKbrWv/Garbage.webp',
    icon: 'trash',
  },
  {
    id: 'ganapathi',
    title: 'గణపతి పండుగ సమస్యలు',
    description: 'పండుగల సమయంలో ఎదురయ్యే సమస్యలను నివేదించండి. మా సమాజాన్ని శుభ్రంగా మరియు సురక్షితంగా ఉంచడంలో మీ సహకారం అవసరం.',
    imageUrl: 'https://i.ibb.co/mCRM1xFd/ganapthi-photo.webp',
    icon: 'community',
  },
  {
    id: 'drainage',
    title: 'డ్రైనేజీ సమస్యలు',
    description: 'మురికినీటి పారుదల సమస్యలు మరియు అడ్డుపడిన కాలువలను నివేదించండి. మంచి పారుదల వ్యవస్థ ఆరోగ్యకరమైన జీవనానికి అవసరం.',
    imageUrl: 'https://i.ibb.co/PkFMZG4/drainage.webp',
    icon: 'spray-can',
  },
  {
    id: 'bus-stop',
    title: 'బస్ స్టాప్ సమస్యలు',
    description: 'బస్ స్టాండ్ల వద్ద నిర్వహణ సమస్యలు, శుభ్రత లేకపోవడం మరియు సౌకర్యాల కొరతను నివేదించండి. ప్రయాణికుల సౌకర్యం మా ప్రాధాన్యత.',
    imageUrl: 'https://i.ibb.co/PZW7HbHV/bus-stop.webp',
    icon: 'car',
  },
];

interface ProblemsGalleryProps {
  onActiveProblemChange: (problem: ProblemType) => void;
}

const ProblemsGallery: React.FC<ProblemsGalleryProps> = ({ onActiveProblemChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProblem = problemTypes[activeIndex];

  useEffect(() => {
    onActiveProblemChange(activeProblem);
  }, [activeIndex, onActiveProblemChange, activeProblem]);


  const goToPrevious = () => {
    const isFirst = activeIndex === 0;
    const newIndex = isFirst ? problemTypes.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const goToNext = () => {
    const isLast = activeIndex === problemTypes.length - 1;
    const newIndex = isLast ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  return (
    <section>
        <h3 className="text-xl font-bold text-gray-900">వార్డు సమస్యల గ్యాలరీ</h3>
        
        <div className="relative mt-4 w-full h-52">
            <img
                key={activeProblem.id}
                src={activeProblem.imageUrl}
                alt={activeProblem.title}
                className="w-full h-full object-cover rounded-2xl shadow-lg transition-opacity duration-300"
            />
            <button 
                onClick={goToPrevious}
                className="absolute top-1/2 left-3 -translate-y-1/2 p-2 bg-black/40 text-white rounded-full hover:bg-black/60 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Previous problem"
            >
                <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button 
                onClick={goToNext}
                className="absolute top-1/2 right-3 -translate-y-1/2 p-2 bg-black/40 text-white rounded-full hover:bg-black/60 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Next problem"
            >
                <ChevronRightIcon className="w-5 h-5" />
            </button>
        </div>
        
        <div className="pt-8 pb-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900">{activeProblem.title}</h2>
            <p className="mt-2 text-gray-600">
                {activeProblem.description}
            </p>
        </div>
    </section>
  );
};

export default ProblemsGallery;