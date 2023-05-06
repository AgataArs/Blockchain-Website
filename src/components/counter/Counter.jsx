"use client";
import { useEffect, useState } from "react";

export const Counter = ({ time }) => {
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    const x = setInterval(() => {
      setTimer((prev) => prev - 1000);
    }, 1000);

    return () => {
      clearInterval(x);
    };
  }, []);


  
  let seconds = (timer / 1000),
     minutes = (seconds / 60),
     hours = (minutes / 60),
     days = (hours / 24),
     months = (days / 30),
     years = (months / 12);

   seconds %= 60;
   minutes %= 60;
   hours %= 24;
   days %= 30;
   months %= 12;
   years %= 12;

  return (
    <div>
      <p>seconds: {Math.floor(seconds)}</p>
      <p>minutes: {Math.floor(minutes)}</p>
      <p>hours: {Math.floor(hours)}</p>
      <p>days: {Math.floor(days)}</p>
      <p>months: {Math.floor(months)}</p>
      <p>years: {Math.floor(years)}</p>
      
    </div>
  );
};