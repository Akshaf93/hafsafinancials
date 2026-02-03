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
    <div className="absolute inset-0 z-20 pointer-events-none">
      {LOCATIONS.map((loc, i) => (
        <div
          key={loc.name}
          // CSS Animation class defined in globals.css
          className="absolute flex flex-col items-center animate-map-dot"
          style={{ 
            top: `${loc.top}%`, 
            left: `${loc.left}%`,
            // Native CSS delay calculation
            animationDelay: `${800 + (i * 100)}ms` 
          }}
        >
          {/* TOP ALIGN */}
          {loc.align === 'top' && (
            <>
              <div className="mb-1 bg-[#050505]/90 border border-[#E5D095]/30 px-2 py-1 text-[#FDFCF0] text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-lg whitespace-nowrap backdrop-blur-sm">
                {loc.name}
              </div>
              <div className="w-[1px] h-6 bg-gradient-to-b from-[#E5D095] to-transparent opacity-50"></div>
            </>
          )}

          {/* DOT */}
          <div className="w-2 h-2 rounded-full bg-[#E5D095] shadow-[0_0_5px_rgba(229,208,149,0.8)] border border-[#050505]"></div>

          {/* BOTTOM ALIGN */}
          {loc.align === 'bottom' && (
            <>
              <div className="w-[1px] h-6 bg-gradient-to-t from-[#E5D095] to-transparent opacity-50"></div>
              <div className="mt-1 bg-[#050505]/90 border border-[#E5D095]/30 px-2 py-1 text-[#FDFCF0] text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-lg whitespace-nowrap backdrop-blur-sm">
                {loc.name}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}