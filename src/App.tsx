import React, { useEffect, useState } from 'react';
import './App.scss';
import { updateData } from './store/data';
import { useAppDispatch } from './store/hooks';
import { NavBar } from './modules/navbar';
import { Header } from './modules/header';
import { Reasons } from './modules/reasons';
import { MoreReasons } from './modules/more-reasons';
import { Reviews } from './modules/reviews';
import { VideoReviews } from './modules/video-reviews';
import { Partners } from './modules/partners';
import { PaymentSystems } from './modules/payment-systems';
import { Faq } from './modules/faq';
import { Footer } from './modules/footer';
import { loadText } from './languageConversion';

function App() {
  const [language, setLanguage] = useState<'eng' | null>(null);
  const dispatch = useAppDispatch();

  const addData = (data: {}) => {
    dispatch(updateData(data));
  };

  useEffect(() => {
    const getData = async () => {
      const data = await loadText(language);

      addData(data);
    };

    getData();
  }, [language]);

  return (
    <div className="App">
      <header>
        <NavBar setLanguage={setLanguage} />

        <Header />
      </header>

      <main>
        <Reasons />

        <MoreReasons />

        <Reviews />

        <VideoReviews />

        <Partners />

        <PaymentSystems />

        <Faq />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
