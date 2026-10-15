import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = 'Bespoke Website Design, Social Media Management, and Bird AI Integration for modern businesses.',
}) => {
  useEffect(() => {
    document.title = /big tech bird/i.test(title) ? title : `${title} — Big Tech Bird`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://bigtechbird.tech${window.location.pathname}`;
  }, [title, description]);

  return null;
};
