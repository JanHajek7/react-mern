import React, { useEffect, useState } from 'react';
import { Message } from '@react-mern/api-interfaces';
import { Button } from '@material-ui/core';

export const App = () => {
  const [m, setMessage] = useState<Message>({
    message: '',
  });

  const kokot = 'ja jsem velký kokot';

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <div>
      <h2 className="title">Já jsem kokot</h2>
      <p> {m.message} </p>
      <Button> {kokot} </Button>
    </div>
  );
};

export default App;
