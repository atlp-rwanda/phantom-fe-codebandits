import { useState, useEffect } from "react";

const FetchData = (url) => {
  const [data, setdata] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((response) => {
          if (!response.ok) {
            throw Error("could not fetch the data from the database");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setError(null);
          setPending(false);
          setdata(data);
        })
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("Fetch Aborted");
          } else {
            setPending(false);
            setError(error.message);
          }
        });
    }, 10);

    return () => abortCont.abort();
  }, [url]); //this [] reload our application when new things happen
  return { data, isPending, error };
};

export default FetchData;
