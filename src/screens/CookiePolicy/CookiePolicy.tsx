import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { SEOHead } from '../../components/SEOHead';
import FluidGlassBackground from '../../components/FluidGlassBackground';
import { MainNavbar } from '../../components/ui/main-navbar';

export const CookiePolicy = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full bg-transparent relative min-h-screen">
      <SEOHead 
        title={t('cookie.title')}
        description={t('cookie.description')}
      />
      <FluidGlassBackground mode="lens" isScrolled={false} />
      
      {/* Header */}
      <MainNavbar />
      
      <div className="relative z-10 flex-1">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <div className="bg-black/80 backdrop-blur-lg border border-white/10 rounded-lg p-8 md:p-12">
            <h1 className="text-white font-font-h-1 text-font-h-1 mb-8">
              {t('cookie.title')}
            </h1>
            
            <div className="text-white/90 font-font-body text-font-body space-y-6 leading-relaxed">
              <p className="text-sm text-white/70 mb-8">
                {t('cookie.effective_date')}: 25/04/2024
              </p>

              <p>
                {t('cookie.intro')}
              </p>

              <section>
                <h2 className="text-white font-font-h-2 text-font-h-2 mb-4 mt-8">
                  {t('cookie.section1.title')}
                </h2>
                <p>
                  {t('cookie.section1.content')}
                </p>
              </section>

              <section>
                <h2 className="text-white font-font-h-2 text-font-h-2 mb-4 mt-8">
                  {t('cookie.section2.title')}
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('cookie.section2.necessary')}</li>
                  <li>{t('cookie.section2.analytics')}</li>
                  <li>{t('cookie.section2.preference')}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-white font-font-h-2 text-font-h-2 mb-4 mt-8">
                  {t('cookie.section3.title')}
                </h2>
                <p className="mb-4">
                  {t('cookie.section3.intro')}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('cookie.section3.operate')}</li>
                  <li>{t('cookie.section3.understand')}</li>
                  <li>{t('cookie.section3.improve')}</li>
                </ul>
                <p className="mt-4">
                  {t('cookie.section3.consent')}
                </p>
              </section>

              <section>
                <h2 className="text-white font-font-h-2 text-font-h-2 mb-4 mt-8">
                  {t('cookie.section4.title')}
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('cookie.section4.banner')}</li>
                  <li>{t('cookie.section4.browser')}</li>
                  <li>{t('cookie.section4.info')}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-white font-font-h-2 text-font-h-2 mb-4 mt-8">
                  {t('cookie.section5.title')}
                </h2>
                <p className="mb-4">
                  {t('cookie.section5.intro')}
                </p>
                <p className="font-semibold">
                  {t('cookie.section5.email')}: info@easywayeurope.com
                </p>
              </section>
            </div>
            
            {/* Back Button */}
            <div className="mt-12 text-center">
              <button
                onClick={() => navigate('/')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-font-body text-font-body font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {t('cookie.back_button')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 