import React, { useState, useEffect } from "react";
import { Counter } from "./Counter";

export const PracticeContainer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log("RENDER");
  });
  useEffect(() => {
    console.log("MOUNT");
  }, []);
  useEffect(() => {
    console.log("UPDATE");
  }, [isVisible]);

  return (
    <div>
      <h6> PracticeContainer</h6>
      {isVisible && <Counter /> }
      <div>I AM STATE {JSON.stringify(isVisible).toUpperCase()}</div>
      <button
        onClick={() => {
          setIsVisible((prevState) => !prevState);
        }}
      >
        CLICK!
      </button>
    </div>
  );
};
