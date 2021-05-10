import { bff } from '@poc-monorepo/http-config';
import { useEffect, useState } from 'react';

const App = () => {
  const [result, setResult] = useState({});

  useEffect(() => {
    (async () => {
      const response = await bff.get('/');
      setResult(response);
    })();
  }, []);

  if (!result) {
    return <h1>Loading...</h1>;
  }

  return <h1>{result}</h1>;
};

export default App;
