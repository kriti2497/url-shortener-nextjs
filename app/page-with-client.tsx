"use client";

import { useEffect, useState } from "react";

import BoostLinks from "../components/BoostLinks";
import Hero from "../components/Hero";
import MainUrlDiv from "../components/MainUrlDiv";
import Statistics from "../components/Statistics";
import { getAllUrlsServer } from "@/actions/server.actions";

export default function Home() {
  const [data, setData] = useState<{ fullUrl: string }[]>([]);

  useEffect(() => {
    getAllUrlsServer().then((res) => setData(res));
  }, []);
  // const urlData = await getAllUrls();

  return (
    <div>
      {data.map((url) => (
        <p>{url.fullUrl}</p>
      ))}
      {/* <Hero /> */}
      {/* <MainUrlDiv /> */}
      {/* <Statistics />
      <BoostLinks /> */}
    </div>
  );
}
