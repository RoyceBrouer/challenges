import React from "react";
import useSWR from "swr";
import Productlist from "@/components/Productlist";

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function productsPage() {
  const { data, error } = useSWR("https://swapi.dev/api/products", fetcher);
  if (error) {
    return <h1>error in dataloading</h1>;
  }
  return <Productlist children={children} products={data} />;
}
