import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import RepresentativeCard from './components/RepresentativeCard';
import AboutSection from './components/AboutSection';
import ProblemsGallery from './components/ProblemsGallery';
import ReportProblem from './components/ReportProblem';
import SubmissionSuccess from './components/SubmissionSuccess';
import VoteCtaSection from './components/VoteCtaSection';
import type { Representative, ProblemType } from './types';
import { problemTypes } from './components/ProblemsGallery';

const App: React.FC = () => {
  const [view, setView] = useState<'main' | 'success'>('main');
  const [activeProblem, setActiveProblem] = useState<ProblemType>(problemTypes[0]);

  const representativeData: Representative = {
    name: 'కొండిల్ల బుచ్చమ్మ',
    title: 'వార్డు ప్రతినిధి',
    imageUrl: 'https://i.ibb.co/YT3knmz7/nanamma-photo-potrait-web.webp',
    about: 'గత 15 సంవత్సరాలుగా జేన్ ఒక అంకితభావం కలిగిన కమ్యూనిటీ న్యాయవాది, స్థానిక మౌలిక సదుపాయాలు మరియు ప్రజా సేవలను మెరుగుపరచడంపై దృష్టి సారించారు. ఆమె నివాసితులందరికీ సురక్షితమైన, పరిశుభ్రమైన మరియు మరింత శక్తివంతమైన పరిసరాలను పెంపొందించడానికి కట్టుబడి ఉంది.',
    keyPromises: [
      'పార్క్ నిర్వహణను మెరుగుపరచండి మరియు మరిన్ని పచ్చని ప్రదేశాలను సృష్టించండి.',
      'కొత్త ట్రాఫిక్ శాంతపరిచే చర్యలతో రహదారి భద్రతను మెరుగుపరచండి.',
      'వార్డు-స్థాయి నిర్ణయం తీసుకోవడంలో పారదర్శకతను పెంచండి.',
    ],
    partyName: 'గౌను',
    partySymbolUrl: 'https://i.ibb.co/M3JYRZs/gown-symbol.webp',
    wardNumber: '10',
    villageName: 'పెంచికలపేట',
  };

  const handleGoHome = () => {
    setView('main');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleSubmissionSuccess = () => {
    setView('success');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (view === 'success' && activeProblem) {
    return <SubmissionSuccess problem={activeProblem} onReportAnother={handleGoHome} onGoHome={handleGoHome} />;
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans w-full overflow-x-hidden">
      <div className="w-full sm:max-w-md mx-auto bg-white shadow-lg sm:shadow-none min-h-screen">
        <Header title={`వార్డు ${representativeData.wardNumber}`} subtitle={representativeData.villageName} />
        <main className="p-4 space-y-8 pb-8">
          <RepresentativeCard representative={representativeData} />
          <VoteCtaSection representative={representativeData} />
          <AboutSection representative={representativeData} />
          <ProblemsGallery onActiveProblemChange={setActiveProblem} />
          <ReportProblem 
            problem={activeProblem} 
            onSuccess={handleSubmissionSuccess} 
          />
        </main>
      </div>
    </div>
  );
};

export default App;
