# react-native-turbo

React Native Framework for Turbo apps

## Installation

```sh
npm install react-native-turbo
```

## Usage

```js
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
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
