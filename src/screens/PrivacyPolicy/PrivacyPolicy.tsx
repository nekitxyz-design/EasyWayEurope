import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { SEOHead } from '../../components/SEOHead';
import FluidGlassBackground from '../../components/FluidGlassBackground';
import { MainNavbar } from '../../components/ui/main-navbar';
import { trackEvent } from '../../components/AnalyticsProvider';

export const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full bg-transparent relative min-h-screen">
      <SEOHead 
        title={t('privacy.title')}
        description={t('privacy.description')}
      />
      <FluidGlassBackground mode="lens" isScrolled={false} />
      
      {/* Header */}
      <MainNavbar />
      
      <div className="relative z-10 flex-1">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <div className="bg-black/80 backdrop-blur-lg border border-white/10 rounded-lg p-8 md:p-12">
            <h1 className="text-white font-font-h-1 text-font-h-1 mb-8">
              {t('privacy.title')}
            </h1>
            
            <div className="text-white/90 font-font-body text-font-body space-y-6 leading-relaxed">
              <p className="text-sm text-white/70 mb-8">
                {t('privacy.effective_date')}: 25/04/2024
              </p>

              <p>
                {t('privacy.intro')}
              </p>

              <section>
                <h2 className="text-white font-font-h-2 text-font-h-2 mb-4 mt-8">
                  1. {t('privacy.section1.title')}
                </h2>
                <p className="mb-4">
                  {t('privacy.section1.intro')}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('privacy.section1.usage_data')}</li>
                  <li>{t('privacy.section1.device_data')}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-white font-font-h-2 text-font-h-2 mb-4 mt-8">
                  2. {t('privacy.section2.title')}
                </h2>
                <p className="mb-4">
                  {t('privacy.section2.intro')}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('privacy.section2.essential')}</li>
                  <li>{t('privacy.section2.analytics')}</li>
                </ul>
                <p className="mt-4">
                  {t('privacy.section2.consent')}
                </p>
              </section>

              <section>
                <h2 className="text-white font-font-h-2 text-font-h-2 mb-4 mt-8">
                  3. {t('privacy.section3.title')}
                </h2>
                <p className="mb-4">
                  {t('privacy.section3.intro')}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('privacy.section3.google_analytics')}</li>
                  <li>{t('privacy.section3.amplitude')}</li>
                </ul>
                <p className="mt-4">
                  {t('privacy.section3.opt_out')}
                </p>
              </section>

              <section>
                <h2 className="text-white font-font-h-2 text-font-h-2 mb-4 mt-8">
                  4. {t('privacy.section4.title')}
                </h2>
                <p className="mb-4">
                  {t('privacy.section4.intro')}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('privacy.section4.consent')}</li>
                  <li>{t('privacy.section4.legitimate')}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-white font-font-h-2 text-font-h-2 mb-4 mt-8">
                  5. {t('privacy.section5.title')}
                </h2>
                <p>
                  {t('privacy.section5.content')}
                </p>
              </section>

              <section>
                <h2 className="text-white font-font-h-2 text-font-h-2 mb-4 mt-8">
                  6. {t('privacy.section6.title')}
                </h2>
                <p className="mb-4">
                  {t('privacy.section6.intro')}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('privacy.section6.access')}</li>
                  <li>{t('privacy.section6.withdraw')}</li>
                  <li>{t('privacy.section6.object')}</li>
                  <li>{t('privacy.section6.complaint')}</li>
                </ul>
                <p className="mt-4">
                  {t('privacy.section6.contact')}
                </p>
              </section>

              <section>
                <h2 className="text-white font-font-h-2 text-font-h-2 mb-4 mt-8">
                  7. {t('privacy.section7.title')}
                </h2>
                <p>
                  {t('privacy.section7.content')}
                </p>
              </section>

              <section>
                <h2 className="text-white font-font-h-2 text-font-h-2 mb-4 mt-8">
                  8. {t('privacy.section8.title')}
                </h2>
                <p>
                  {t('privacy.section8.content')}
                </p>
              </section>

              <section>
                <h2 className="text-white font-font-h-2 text-font-h-2 mb-4 mt-8">
                  9. {t('privacy.section9.title')}
                </h2>
                <p className="mb-4">
                  {t('privacy.section9.intro')}
                </p>
                <p className="font-semibold">
                  {t('privacy.section9.email')}: info@easywayeurope.com
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
                {t('privacy.back_button')}
              </button>
            </div>
            
            {/* Test Analytics Button */}
            <div className="mt-4 text-center">
              <button
                onClick={() => {
                  trackEvent('test_analytics', { page: 'privacy_policy', action: 'test_click' });
                  alert('Analytics event sent! Check console for details.');
                }}
                className="bg-green-600 hover:bg-green-700 text-white font-font-body text-font-body font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Test Analytics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 