import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const language = [
  { code: 'en', language: 'English' },
  { code: 'fr', language: 'French' },
  { code: 'bn', language: 'Bengali' },
  { code: 'ar', language: 'Arabic' },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lngCode) => {
    i18n.changeLanguage(lngCode);
  };

  useEffect(() => {
    console.log(i18n.dir());
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div className="mt-10 text-center bg-gray-700">
      {
        language.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`text-white py-2 px-4 ml-3 rounded-md ${lang.code === i18n.language ? 'bg-gray-950' : 'hover:bg-gray-500'
              }`}
          >
            {lang.language}
          </button>
        ))
      }
    </div>
  );
};
export default LanguageSelector;