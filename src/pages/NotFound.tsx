import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const NotFound: React.FC = () => {
  // tell search engines this URL is not a page (Vercel also answers unknown paths with dist/404.html and a 404 status)
  useEffect(() => {
    const m = document.createElement('meta');
    m.name = 'robots';
    m.content = 'noindex';
    document.head.appendChild(m);
    return () => m.remove();
  }, []);
  return (
    <div className="grid min-h-screen place-items-center bg-[#0A0A0A] px-6 text-center text-[#FAF8F5]">
      <SEO title="Page not found" />
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-white/50">404</p>
        <h1 className="mt-3 text-4xl font-semibold">We couldn&rsquo;t find that page</h1>
        <p className="mt-3 text-white/60">It may have moved. Try one of these instead.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-semibold">
          <Link to="/" className="rounded-full bg-[#FAF8F5] px-5 py-2.5 text-[#0A0A0A]">Home</Link>
          <Link to="/work" className="rounded-full border border-white/30 px-5 py-2.5">Work</Link>
          <Link to="/contact" className="rounded-full border border-white/30 px-5 py-2.5">Contact</Link>
        </div>
      </div>
    </div>
  );
};
