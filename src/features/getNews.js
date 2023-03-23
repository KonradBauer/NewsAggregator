import axios from "axios";

const apiKey = "apiKey=80881ac4e46d42dbab5150de145d9be1";
const address = "https://newsapi.org/v2/top-headlines?";

const countryPoland = "country=pl&";
const countryMexico = "country=mx&";
const countryArgentina = "country=ar&";
const countrySingapore = "country=sg&";
const countryThailand = "country=th&";

export const getPolandNews = () =>
  axios.get(`${address}${countryPoland}${apiKey}`).then((response) => response.data);

export const getMexicoNews = () =>
  axios.get(`${address}${countryMexico}${apiKey}`).then((response) => response.data);

export const getArgentinaNews = () =>
  axios.get(`${address}${countryArgentina}${apiKey}`).then((response) => response.data);

export const getSingaporeNews = () =>
  axios.get(`${address}${countrySingapore}${apiKey}`).then((response) => response.data);

export const getThailandNews = () =>
  axios.get(`${address}${countryThailand}${apiKey}`).then((response) => response.data);
