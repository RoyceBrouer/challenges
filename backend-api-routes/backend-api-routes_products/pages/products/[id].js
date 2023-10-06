import { useRouter } from "next/router";
import Product from "@/components/Product";
import useSWR from "swr";
import { fetcher } from ".";

import React from "react";

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(
    `https://swapi.dev/api/products/${id}`,
    fetcher
  );
  if (error) {
    return <h1>error in dataloading</h1>;
  }
  return (
    <ul>
      <Product product={data} />
    </ul>
  );
}
