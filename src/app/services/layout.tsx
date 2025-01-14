import React from 'react';

const ServicesLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      {/* Add any layout-specific components or styles here */}
      {children}
    </div>
  );
};

export default ServicesLayout;