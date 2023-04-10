import { useState } from 'react';
import './App.css';
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'

function App() {
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

  const [lang, setLang] = useState("tr-TR")
  return (
    <div className="App">
      <IntlProvider messages={messages[lang]}>
        <FormattedMessage id='title'/>
        <p>
        <FormattedMessage id='description'/>
        </p>
        <div>
          <button onClick={() => setLang("tr-TR")}>TR</button>
          <button onClick={() => setLang("en-US")}>EN</button>
        </div>
      </IntlProvider>
    </div>
  );
}

export default App;
