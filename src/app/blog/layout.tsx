import React from 'react';

const BlogLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="pt-32">
      {children}
    </div>
  );
};

export default BlogLayout;