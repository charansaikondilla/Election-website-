
import React from 'react';

const LightbulbIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a7.5 7.5 0 01-7.5 0c-1.42 0-2.8 1.12-2.8 2.553v1.65a.75.75 0 001.5 0v-1.65l.008-.007a7.5 7.5 0 017.484 0l.008.007v1.65a.75.75 0 001.5 0v-1.65c0-1.433-1.38-2.553-2.8-2.553zM12 3a.75.75 0 00-.75.75v.008A5.25 5.25 0 0012 15a5.25 5.25 0 00.75-11.242V3.75A.75.75 0 0012 3z"
    />
  </svg>
);

export default LightbulbIcon;
