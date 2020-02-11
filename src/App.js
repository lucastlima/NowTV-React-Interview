import React, { useEffect } from "react";
import { getChatLog } from "./service";

console.log();

function App() {
  useEffect(() => {
    const getData = async () => {
      const data = await getChatLog();
      console.log(data);
    };
    getData();
  }, []);

  return <h1>Hello</h1>;
}

export default App;
