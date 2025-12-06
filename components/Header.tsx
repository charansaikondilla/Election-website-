
import React from 'react';
import ChevronLeftIcon from './icons/ChevronLeftIcon';

interface HeaderProps {
  title: string;
  subtitle?: string;
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, onBack }) => {
  const isCenteredLayout = !!onBack;

  if (isCenteredLayout) {
    return (
      <header className="relative flex items-center justify-center p-4 bg-white border-b border-gray-200">
        <button
          onClick={onBack}
          className="absolute left-4 p-2 -ml-2 text-gray-700 hover:bg-gray-100 rounded-full"
          aria-label="Go back"
        >
          <ChevronLeftIcon />
        </button>
        <h1 className="text-xl font-bold text-gray-900">{title}</h1>
      </header>
    );
  }

  return (
    <header className="flex items-center p-4 bg-white border-b border-gray-200">
      <button className="p-2 -ml-2 text-gray-700 hover:bg-gray-100 rounded-full">
        <ChevronLeftIcon />
      </button>
      <div className="ml-4">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        {subtitle && <p className="text-gray-500">{subtitle}</p>}
      </div>
    </header>
  );
};

export default Header;
