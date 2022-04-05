import React, { useState, useEffect } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevState) => (prevState += 1));
    }, 1000);
    return () =>{
        console.log('UNMOUNT');
        clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    console.log("UPDATE", counter);
  }, [counter]);

  return <div>{counter}</div>;
};
