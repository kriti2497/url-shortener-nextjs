import axios from "axios";

export const urlInstance = axios.create({
  baseURL: "https://clkimvolodimir-kudriachenkov1.p.rapidapi.com/",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "dd0f6e167cmsh2adfba1643cea7ep116069jsnc555905dd98b",
    "X-RapidAPI-Host": "Clkimvolodimir-kudriachenkoV1.p.rapidapi.com",
  },
});
