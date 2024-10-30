import axios from "axios";
import { Joke } from "./type/joke";

export const api = axios.create({
  baseURL: "https://official-joke-api.appspot.com/random_ten",
  withCredentials: false,
});

export const fetchJokes = () => {
  let data= [];
  const allJokes = api
    .get("/")
    .then((response) => {
      data =response.data;
      return response.data;
    })
    .catch((err) => {
      console.error(err);
      return [];
    });

  console.log(data);

  return allJokes;
};