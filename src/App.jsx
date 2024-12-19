import { useEffect } from "react";
import { requests } from "./fetchData";
// Chat
function App() {
  useEffect(() => {
    Promise.allSettled(requests)
      .then((results) => results.forEach((result) => console.log(result)))
      .catch((e) => console.error(e));
  }, []);
  return <></>;
}

export default App;
