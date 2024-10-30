import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Demo } from './Demo';
export default function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await axios.get("https://official-joke-api.appspot.com/random_ten");
        setData(response.data);
      } catch (err) {
        console.error("Error fetching jokes:", err);
        setData([]);
      }
    };
    
    fetchJokes();
  }, []);
console.log(data)
  return (
    <div>
    {data.map((joke)=>(
        <p>{joke.setup} </p>
    ))}
    </div>
  );
}
