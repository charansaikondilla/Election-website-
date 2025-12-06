import React, { useState, useEffect } from 'react';
import type { ProblemType } from '../types';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

export const problemTypes: ProblemType[] = [
  {
    id: 'potholes',
    title: 'గుంతలు & రహదారి నష్టం',
    description: 'దెబ్బతిన్న రహదారులు ప్రమాదాలు మరియు వాహన నష్టానికి కారణమవుతాయి. వాటిని నివేదించడం సురక్షితమైన సమాజం కోసం మరమ్మతులకు ప్రాధాన్యత ఇవ్వడంలో మాకు సహాయపడుతుంది.',
    imageUrl: 'https://i.imgur.com/WGYyS8k.jpeg',
    icon: 'car',
  },
  {
    id: 'street-light',
    title: 'విరిగిన వీధి దీపం',
    description: 'రాత్రిపూట మా వీధులు సురక్షితంగా మరియు బాగా వెలిగి ఉండేలా చూసుకోవడానికి విరిగిన లేదా మినుకుమినుకుమనే వీధి దీపాలను నివేదించండి.',
    imageUrl: 'https://images.unsplash.com/photo-1617093264423-c14479e0a3e8?auto=format&fit=crop&w=400',
    icon: 'lightbulb',
  },
  {
    id: 'graffiti',
    title: 'గ్రాఫిటీ & వాండలిజం',
    description: 'ప్రభుత్వ లేదా ప్రైవేట్ ఆస్తిపై గ్రాఫిటీని నివేదించడం ద్వారా మా సమాజాన్ని శుభ్రంగా మరియు అందంగా ఉంచడంలో సహాయపడండి.',
    imageUrl: 'https://images.unsplash.com/photo-1528731708512-646942851141?auto=format&fit=crop&w=400',
    icon: 'spray-can',
  },
   {
    id: 'trash',
    title: 'చెత్త & అక్రమ డంపింగ్',
    description: 'పరిశుభ్రమైన మరియు ఆరోగ్యకరమైన వాతావరణాన్ని నిర్వహించడంలో మాకు సహాయపడటానికి నిండిన డబ్బాలు లేదా అక్రమంగా పారేసిన చెత్తను నివేదించండి.',
    imageUrl: 'https://images.unsplash.com/photo-1611284446346-d5b4a895b682?auto=format&fit=crop&w=400',
    icon: 'trash',
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