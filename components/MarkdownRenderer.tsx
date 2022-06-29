import { ReactNode } from 'react';

interface MarkdownRendererProps {
  children: ReactNode;
}

const MarkdownRenderer = ({ children }: MarkdownRendererProps) => {
  return (
    <div className="w-3/4 mx-auto text-neutral-300 prose prose-invert prose-p:my-3 prose-headings:my-6">
      {children}
    </div>
  );
};

export default MarkdownRenderer;
