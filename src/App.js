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
  const chatDiv = React.createRef();

  useEffect(() => {
    const getData = async () => {
      const data = await getChatLog();
      setData(data);
      setIsLoading(false);
    };
    getData();
  }, []);

  useEffect(() => {
    if (chatDiv.current) {
      chatDiv.current.scrollIntoView();
    }
  }, [chatDiv]);

  const addBreakLine = memoDate();

  const messages = data.map((m, i) => (
    <React.Fragment key={m.messageId}>
      {addBreakLine(m.timestamp)}
      {console.log(typeof i)}
      <Message msg={m} />
    </React.Fragment>
  ));

  return (
    <Layout>
      {isLoading ? <Loader /> : <Chat ref={chatDiv}>{messages}</Chat>}
    </Layout>
  );
}

export default App;
