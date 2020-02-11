import React, { useEffect, useState } from 'react';
import { getChatLog } from './service';
import Layout from './components/Layout';
import Chat from './components/Chat';
import Message from './components/Message';
import Loader from './components/Loader';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await getChatLog();
      setData(data);
      setIsLoading(false);
    };
    getData();
  }, []);

  const messages = data.map(m => <Message key={m.messageId} msg={m} />);

  return <Layout>{isLoading ? <Loader /> : <Chat>{messages}</Chat>}</Layout>;
}

export default App;
