import axios from "axios";
const BASE_URL = "https://api.exchangerate.host/";

export function getAction(url) {
  return axios
    .get(`${BASE_URL}${url}`)
    .then((response) => response.data)
    .catch((err) => alert("Bir Hata Meydana Geldi"));
}
