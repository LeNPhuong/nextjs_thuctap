import UserService from "@/app/component/other/UserService";
import React from "react";
import { FaSquareFacebook, FaSquareGooglePlus, FaSquareInstagram } from "react-icons/fa6";

const LoginWithService = () => {
  return (
    <div className="flexRowV4 gap-[30px]">
      <UserService title="Register with Facebook" icon={<FaSquareFacebook />} refLink="#" />
      <UserService title="Register with Google +" icon={<FaSquareGooglePlus />} refLink="#" />
      <UserService title="Register with Instagram" icon={<FaSquareInstagram />} refLink="#" />
    </div>
  );
};

export default LoginWithService;
