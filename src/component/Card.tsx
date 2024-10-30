import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Joke } from '../type/joke';
import Demo from './Demo';
export default function Card() {
  const [data, setData] = useState < Joke[]>([]);

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
    { data.length > 0 ? ( data.map((item)=>(
      <p>{item.setup}</p>
        
    ))) : (
      <p>Loading jokes...</p>
    )}
    </div>
  );
}
