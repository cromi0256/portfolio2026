export default function BrainLogo({ className = "w-48 h-48" }: { className?: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-[1.02]">
      <svg
        className={className}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Brain Left Hemisphere - Circuit Lines & Nodes */}
        <path
          d="M 90 35 C 60 35, 35 55, 35 85 C 35 105, 45 120, 45 135 C 45 150, 60 165, 80 165 C 90 165, 95 155, 95 145"
          stroke="#103868"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        <path
          d="M 50 65 L 75 65 L 85 80 L 85 105 L 60 105 L 50 120"
          stroke="#1d5fa6"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M 70 45 L 80 55 L 80 75"
          stroke="#103868"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Nodes (Circles) */}
        <circle cx="80" cy="75" r="4.5" fill="#103868" />
        <circle cx="50" cy="120" r="4.5" fill="#1d5fa6" />
        <circle cx="75" cy="65" r="4" fill="#1d5fa6" />

        {/* Bottom lobes */}
        <path
          d="M 100 170 C 110 185, 125 180, 125 160 L 105 135 L 80 135"
          stroke="#103868"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 120 150 L 150 150 M 120 160 L 155 160"
          stroke="#415a77"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Right Hemisphere & Bar Chart Bars */}
        <path
          d="M 105 35 C 130 35, 160 55, 165 85 C 170 115, 155 135, 155 150"
          stroke="#103868"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Bar Charts (Rising Bars) */}
        <rect x="105" y="75" width="12" height="25" rx="1.5" fill="#2b6cb0" />
        <rect x="122" y="60" width="12" height="40" rx="1.5" fill="#1e4e8c" />
        <rect x="139" y="40" width="13" height="60" rx="1.5" fill="#0f3057" />

        {/* Right Circuit Lines */}
        <path
          d="M 100 115 L 140 115 L 155 95 L 155 80"
          stroke="#1d5fa6"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="155" cy="80" r="4" fill="#1d5fa6" />
        <circle cx="100" cy="115" r="4.5" fill="#1d5fa6" />

        <path
          d="M 115 130 L 145 130"
          stroke="#103868"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="145" cy="130" r="4" fill="#103868" />

        {/* Center Connection Lines */}
        <path
          d="M 95 35 L 105 35"
          stroke="#103868"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
