import React from "react";

interface GlassBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassBackground: React.FC<GlassBackgroundProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div 
      className={`bg-[#314199cc] backdrop-blur-[8px] border-b border-white/10 ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(49, 65, 153, 0.8) 0%, rgba(49, 65, 153, 0.6) 100%)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      {children}
    </div>
  );
}; 