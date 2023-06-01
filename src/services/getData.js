import axios from "axios";
import { toast } from "react-toastify";

export async function fetch(url) {
  const response = await axios.get(url);
  return response.data;
}

export function getData(url, cb) {
  const fetchData = async () => {
    const data = await fetch(url);
    cb(data);
  };
  fetchData();
}

export async function createOrder(url, obj) {
  try {
    const response = await axios.post(url, obj);
    toast.success("Your order has been sent successfully");
    return response;
  } catch (error) {
    toast.error(error.message);
  }
}
