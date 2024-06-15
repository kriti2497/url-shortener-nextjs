"use server";

import { createNewUrl, getAllUrls } from "./db.actions";

export const getAllUrlsServer = async () => {
  const data = await getAllUrls();
  return data;
};

export const createUrlServer = async (url: string) => {
  return await createNewUrl(url);
};
