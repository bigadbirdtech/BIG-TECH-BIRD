import { NotFound } from './pages/NotFound';
import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Preloader } from './components/Preloader';
import { NoiseOverlay } from './components/NoiseOverlay';
import { CustomCursor } from './components/CustomCursor';
import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const WebsiteDesign = lazy(() => import('./pages/WebsiteDesign').then(m => ({ default: m.WebsiteDesign })));
const SocialMedia = lazy(() => import('./pages/SocialMedia').then(m => ({ default: m.SocialMedia })));
const AiIntegration = lazy(() => import('./pages/AiIntegration').then(m => ({ default: m.AiIntegration })));
const Work = lazy(() => import('./pages/Work').then(m => ({ default: m.Work })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Terms = lazy(() => import('./pages/Terms').then(m => ({ default: m.Terms })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));

export const App: React.FC = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <Router>
      <SmoothScroll>
        <div className="relative min-h-screen flex flex-col justify-between selection:bg-[#0A0A0A] selection:text-[#FAF8F5]">
          {/* Continuous line-drawing Preloader */}
          {!hasLoaded && <Preloader onComplete={() => setHasLoaded(true)} />}

          {/* Film-grain noise overlay across beige backgrounds */}
          <NoiseOverlay />

          {/* Custom spring cursor with magnetic labels */}
          <CustomCursor />

          {/* Sticky minimal navigation */}
          <Navbar />

          {/* Main Route Content with Page Transitions & Curtain Wipe */}
          <main className="flex-grow w-full">
            <PageTransition>
              <Suspense
                fallback={
                  <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border-2 border-[#0A0A0A] border-t-transparent animate-spin" />
                  </div>
                }
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/website-design" element={<WebsiteDesign />} />
                  <Route path="/social-media" element={<SocialMedia />} />
                  <Route path="/ai-integration" element={<AiIntegration />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </PageTransition>
          </main>

          {/* Minimal footer with animated flapping bird mascot */}
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
};

export default App;

