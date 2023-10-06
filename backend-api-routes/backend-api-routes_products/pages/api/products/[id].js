import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  const { id } = request.query;
  const product = getProductById(id);
  if (!product) {
    return "not in stock";
  }
  response.status(200).json(product);
  response.end();
}
