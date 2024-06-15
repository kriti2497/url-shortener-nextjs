import { nanoid } from "nanoid";
import prismaClient from "@/prisma/db";
import { url_links } from "@prisma/client";

export const getAllUrls = async () => {
  const data = await prismaClient.url_links.findMany({
    select: {
      fullUrl: true,
    },
  });
  return data;
};

export const createNewUrl = async (url: any) => {
  let regex =
    /^(?:http|https?):\/\/(?:(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}|(?:\d{1,3}\.){3}\d{1,3})(?::\d+)?(?:\/\S*)?$/i;
  if (!url) {
    throw Error("Please enter url");
  }
  if (!regex.test(url)) {
    throw Error("Please enter valid url ex: https://www.example.com");
  }

  const urlExists = await prismaClient.url_links.findFirst({
    where: {
      fullUrl: url,
    },
  });

  if (urlExists) {
    return {
      msg: "Url created",
      shortUrl: process.env.DOMAIN + urlExists.shortUrl,
    };
  }

  const shortUrl = nanoid(7);
  const obj = {
    fullUrl: url,
    shortUrl,
    clicks: 0,
  };
  const data = await prismaClient.url_links.create({ data: obj as url_links });

  return { msg: "Url created", shortUrl: process.env.DOMAIN + shortUrl };
};

export const getUrlByShortId = async (id: string) => {
  const datafullUrl = await prismaClient.url_links.findFirst({
    where: {
      shortUrl: id,
    },
  });

  return datafullUrl;
};
