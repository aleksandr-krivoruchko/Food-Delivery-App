import axios from "axios";

async function fetch(url) {
  const response = await axios.get(url);
  return response.data;
}

export function getData(url, cb) {
  const fetchData = async () => {
    const data = await fetch(url);
    cb(data);
  };
  try {
    fetchData();
  } catch (error) {
    console.error();
  }
}

export async function createOrder(url, obj) {
  const response = await axios.post(url, obj);
  return response;
}
