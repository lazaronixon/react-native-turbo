import * as React from 'react';
import Turbo from 'react-native-turbo';

export default function App() {
  React.useEffect(() => {
    Turbo.addEventListener('turboVisit', handleVisit);
    Turbo.addEventListener('turboError', handleError);
    Turbo.startSingleScreenApp({ url: 'https://turbo-native-demo.glitch.me' });
  }, []);

  function handleVisit(data) {
    Turbo.visit({ url: data.url.absoluteString, action: data.action });
  }

  function handleError(data) {
    console.log(data);
  }

  return null;
}
