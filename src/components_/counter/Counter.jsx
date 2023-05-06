"use client";
import { useEffect, useState } from "react";

export const Counter = ({ time }) => {
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    const x = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(x);
    };
  }, []);


  //TODO do przerobienia. wartosc w timer w milisekundach do przerobienia na sekundy minuty...

  // console.log("timer", timer);
  //
  // let seconds = Math.floor(timer / 1000),
  //   minutes = Math.floor(seconds / 60),
  //   hours = Math.floor(minutes / 60),
  //   days = Math.floor(hours / 24),
  //   months = Math.floor(days / 30),
  //   years = Math.floor(days / 365);
  //
  // seconds %= 60;
  // minutes %= 60;
  // hours %= 24;
  // days %= 30;
  // months %= 12;

  return (
    <div>
      <p>{timer}</p>
      {/*<p>seconds: {seconds}</p>*/}
      {/*<p>minutes: {minutes}</p>*/}
      {/*<p>hours: {hours}</p>*/}
      {/*<p>days: {days}</p>*/}
      {/*<p>months: {months}</p>*/}
      {/*<p>years: {years}</p>*/}
    </div>
  );
};
