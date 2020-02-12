import React, { useEffect, useState } from "react";
import { getChatLog } from "./service";
import Layout from "./components/Layout";
import Chat from "./components/Chat";
import Message from "./components/Message";
import Loader from "./components/Loader";
import { memoDate } from "./utils/utils";

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

  const addBreakLine = memoDate();

  const messages = data.map(m => {
    return (
      <React.Fragment key={m.messageId}>
        <Message msg={m} />
        {addBreakLine(m.timestamp)}
      </React.Fragment>
    );
  });

  return <Layout>{isLoading ? <Loader /> : <Chat>{messages}</Chat>}</Layout>;
}

export default App;
