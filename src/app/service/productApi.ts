import axios from "axios";

export async function getProduct(): Promise<any> {
  try {
    const data = await axios.get(
      "https://api-pro.teklearner.com/product/v1/get-list-product",
    );
    return data.data;
  } catch (error) {
    return error;
  }
}
