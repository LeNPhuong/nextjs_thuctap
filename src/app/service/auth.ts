import axios from "axios";

export async function checkemailphone(
  email: string,
  phone: string,
): Promise<boolean | any> {
  try {
    const rqemail = await axios.post(
      "https://api-pro.teklearner.com/auth/v1/check-email",
      { email: email },
    );

    const rqphone = await axios.post(
      "https://api-pro.teklearner.com/auth/v1/check-phone",
      { phone: phone },
    );

    if (rqemail.data.data) {
      return alert("Email đã tồn tại");
    } else if (rqphone.data.data) {
      return alert("Số điện thoại đã tồn tại");
    }

    const rqotp = await axios.post(
      "https://api-pro.teklearner.com/auth/v1/send-otp-email",
      { email: email },
    );

    return true;
  } catch (error) {
    return error;
  }
}

export async function registerUser(data: {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  address: string;
  gender: string;
  otp: string;
}) {
  try {
    const rq = await axios.post(
      "https://api-pro.teklearner.com/auth/v1/register",
      data,
    );
    return true;
  } catch (error) {
    return error;
  }
}

export async function loginUser(email: string, password: string): Promise<any> {
  try {
    const rq = await axios.post(
      "https://api-pro.teklearner.com/auth/v1/login",
      { username: email, password: password },
    );
    return rq.data.data;
  } catch (error) {
    return error;
  }
}
