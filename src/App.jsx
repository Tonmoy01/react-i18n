import { useTranslation } from "react-i18next";
import LanguageSelector from "./components/LanguageSelector";

const App = () => {
  const { t } = useTranslation();

  const { line1, line2 } = t('description');

  return (
    <div className="container mx-auto">
      <LanguageSelector />
      <h1 className="mt-10 text-3xl font-extrabold text-center text-indigo-400">{t('greeting')}</h1>
      <div className="mt-5 text-center">
        <p className="mb-2 text-xl text-indigo-600">{line1}</p>
        <span className="text-indigo-600 text-md">{line2}</span>
      </div>
    </div>
  );
};
export default App;