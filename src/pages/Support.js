import React from 'react';
import HeroSupport from '../components/HeroSupport';
import { useTranslation } from 'react-i18next';

const Support = () => {
    const { t } = useTranslation();

    return (
        <div>
            <HeroSupport />
            <div className="container mx-auto p-6">
                <section className="faq-section mb-8">
                    <h2 className="text-2xl font-bold mb-4">{t('faq')}</h2>
                    <div className="faq-item mb-4">
                        <h3 className="text-xl font-semibold">{t('faq1_question')}</h3>
                        <p>{t('faq1_answer')}</p>
                    </div>
                    <div className="faq-item mb-4">
                        <h3 className="text-xl font-semibold">{t('faq2_question')}</h3>
                        <p>{t('faq2_answer')}</p>
                    </div>
                    {/* Add more FAQ items as needed */}
                </section>
                <section className="contact-info mb-8">
                    <h2 className="text-2xl font-bold mb-4">{t('contact_info')}</h2>
                    <p>{t('address')}</p>
                    <p>{t('phone')}</p>
                    <p>{t('email')}</p>
                </section>
                <section className="support-form">
                    <h2 className="text-2xl font-bold mb-4">{t('support_form')}</h2>
                    <form className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="name">{t('name')}</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder={t('enter_name')}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="email">{t('email')}</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder={t('enter_email')}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="message">{t('message')}</label>
                            <textarea
                                id="message"
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder={t('enter_message')}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                        >
                            {t('submit')}
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Support;
