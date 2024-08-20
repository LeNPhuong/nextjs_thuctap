import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const UserCard: React.FC<{}> = () => {
  return (
    <div className="absolute bottom-[15px] right-[15px]">
      <div className="flex flex-row gap-[5px]">
        {Array.from({ length: 2 }, (_, e) => (
          <span key={e} className="text-[28px] text-black">
            <FaRegUserCircle />
          </span>
        ))}
      </div>
    </div>
  );
};

export default UserCard;
