"use client";
import { useEffect, useState } from "react";

export const Counter = ({time}) => {
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    const x = setInterval(() => {
      setTimer((prev) => prev - 1000);
    }, 1000);

    return () => {
      clearInterval(x);
    };
  }, []);

  
  const date = new Date(timer);
  let seconds = (date.getSeconds()),
     minutes = (date.getMinutes()),
     hours = (date.getHours()),
     days = (date.getDate() - 1),
     months = (date.getMonth()),
     years = (date.getFullYear() - 1970);

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