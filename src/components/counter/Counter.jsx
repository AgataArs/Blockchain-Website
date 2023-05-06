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


  
  let seconds = Math.floor(timer),
     minutes = Math.floor(seconds / 60),
     hours = Math.floor(minutes / 60),
     days = Math.floor(hours / 24),
     months = Math.floor(days / 30);

   seconds %= 60;
   minutes %= 60;
   hours %= 24;
   days %= 30;
   months %= 12;

  return (
    <div>
    
      <p>seconds: {seconds}</p>
      <p>minutes: {minutes}</p>
      <p>hours: {hours}</p>
      <p>days: {days}</p>
      <p>months: {months}</p>
      
    </div>
  );
};
