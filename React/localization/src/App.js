import { useEffect, useState } from 'react';
import './App.css';
import {IntlProvider, FormattedMessage} from 'react-intl'

const messages = {
  "tr-TR" : {
    title: "Merhaba Dünya",
    description: "{count}  Yeni Mesaj"
  },
  "en-US" : {
    title: "Hello World",
    description: "{count} New Messages"
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
        <FormattedMessage id='description' values={{count : 5}}/>
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
