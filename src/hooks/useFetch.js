import { useEffect, useState } from "react";

function useFetch(url) {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);
  useEffect(() => {
    let abortController = new AbortController();
    let signal = abortController.signal;
    setLoading(true); //Its show loading before fetching
    fetch(url, { signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
        setLoading(false); //its hide loading after fetching
      })
      .catch((e) => {
        setError(e.message);
      });

    //clean function
    return () => {
      //to prevent memory leak if we was destroyed while data fetching
      abortController.abort();
    };
  }, [url]);
  return { data, loading, error }; //every time we use useFetch fun.. data,loading state will go on..
}

export default useFetch;
