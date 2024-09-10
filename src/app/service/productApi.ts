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

export async function getDetails(id: string): Promise<any> {
  try {
    const data = await axios.get(
      `https://api-pro.teklearner.com/product/v1/get-product-detail?id=${id}`,
    );
    return data.data;
  } catch (error) {
    return error;
  }
}

export async function payOrder(data: {
  product: string;
  quantity: number;
  properties: string[];
}) {
  try {
    if (data) {
      const rq = await axios.post(
        `https://api-pro.teklearner.com/cart/v1/user-add-to-cart`,
        data,
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("access_token")!),
          },
        },
      );
      return rq.data;
    } else {
      throw new Error("Giỏ hàng trống");
    }
  } catch (error) {
    return error;
  }
}
