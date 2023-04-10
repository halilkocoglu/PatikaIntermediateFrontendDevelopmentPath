import { useEffect, useState } from 'react';
import './App.css';
import {IntlProvider, FormattedMessage} from 'react-intl'

const messages = {
  "tr-TR" : {
    title: "Merhaba Dünya",
    description: "3 Yeni Mesaj"
  },
  "en-US" : {
    title: "Hello World",
    description: "3 New Messages"
  }
}

function App() {
  const  isLocale = localStorage.getItem('locale') 
  const defaultLocale = isLocale ? isLocale : navigator.language
  const [locale, setLocale] = useState(defaultLocale)

  useEffect(() => {
    localStorage.setItem('locale', locale)
  }, [locale])

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id='title'/>
        <p>
        <FormattedMessage id='description'/>
        </p>
        <div>
          <button onClick={() => setLocale("tr-TR")}>TR</button>
          <button onClick={() => setLocale("en-US")}>EN</button>
        </div>
      </IntlProvider>
    </div>
  );
}

export default App;
