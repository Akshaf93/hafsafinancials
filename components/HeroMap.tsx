"use client";

// Preserved original global coordinates aligned with your SVG map
const LOCATIONS = [
  { name: "United States", top: 40, left: 22, align: "bottom" },
  { name: "Canada", top: 15, left: 20, align: "top" },
  { name: "United Kingdom", top: 22, left: 47, align: "top" },
  { name: "UAE", top: 50, left: 63, align: "bottom" },
  { name: "Saudi Arabia", top: 36, left: 60, align: "top" },
  { name: "Pakistan", top: 32, left: 67, align: "top" },
  { name: "Australia", top: 65, left: 85, align: "top" },
  { name: "New Zealand", top: 75, left: 94, align: "top" },
];

export default function HeroMap() {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none select-none">
      {LOCATIONS.map((loc, i) => (
        <div
          key={loc.name}
          className="absolute flex flex-col items-center animate-map-dot group"
          style={{ 
            top: `${loc.top}%`, 
            left: `${loc.left}%`,
            animationDelay: `${600 + (i * 150)}ms` 
          }}
        >
          {/* TOP ALIGNED LABEL */}
          {loc.align === 'top' && (
            <div className="flex flex-col items-center mb-1.5 transition-transform duration-300">
              <div className="bg-[#050505]/80 backdrop-blur-md px-2 py-0.5 text-[#FDFCF0]/90 text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.15em] rounded-sm border border-[#FDFCF0]/10 shadow-xl whitespace-nowrap">
                {loc.name}
              </div>
              <div className="w-[1px] h-3 md:h-4 bg-gradient-to-b from-[#E5D095]/80 to-transparent" />
            </div>
          )}

          {/* TELEMETRY NODE (Glowing Dot) */}
          <div className="relative flex items-center justify-center">
            {/* Outer radar pulse */}
            <div className="absolute w-4 h-4 rounded-full bg-[#E5D095]/20 animate-ping" style={{ animationDuration: '3s', animationDelay: `${i * 200}ms` }} />
            {/* Inner glow */}
            <div className="absolute w-2.5 h-2.5 rounded-full bg-[#E5D095]/40 blur-[1px]" />
            {/* Solid core */}
            <div className="relative w-1.5 h-1.5 rounded-full bg-[#E5D095] border border-[#050505] shadow-[0_0_8px_#E5D095]" />
          </div>

          {/* BOTTOM ALIGNED LABEL */}
          {loc.align === 'bottom' && (
            <div className="flex flex-col items-center mt-1.5 transition-transform duration-300">
              <div className="w-[1px] h-3 md:h-4 bg-gradient-to-t from-[#E5D095]/80 to-transparent" />
              <div className="bg-[#050505]/80 backdrop-blur-md px-2 py-0.5 text-[#FDFCF0]/90 text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.15em] rounded-sm border border-[#FDFCF0]/10 shadow-xl whitespace-nowrap">
                {loc.name}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}