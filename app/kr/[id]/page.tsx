import { notFound, redirect } from "next/navigation";

import React from "react";
import { getUrlByShortId } from "@/actions/db.actions";

interface UrlPageProps {
  params: {
    id: string;
  };
}

const Page = async ({ params }: UrlPageProps) => {
  const dataUrl = await getUrlByShortId(params.id);

  if (dataUrl) {
    redirect(dataUrl.fullUrl);
  } else {
    notFound();
  }
};

export default Page;
