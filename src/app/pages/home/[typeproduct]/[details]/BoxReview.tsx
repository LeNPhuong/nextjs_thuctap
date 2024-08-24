import { Btn, Title } from "@/app/component";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import ContentLayoutV2 from "@/app/layout/ContentLayoutV2";
import React from "react";

const BoxReview = () => {
  return (
    <div className="flexRow justify-between items-start">
      <ContentLayoutV2 width="761px">
        <div className="w-full flexRow justify-between items-center mb-[10px]">
          <Title family="font-v1" fontSize="22" fontWeight={500}>
            Reviews ( 1480 )
          </Title>

          <Btn css="max-w-[145px] min-h-[49px] max-h-[49px] text-white text-16">
            WRITE REVIEW
          </Btn>
        </div>
        <div className="flexRow items-center text-[28px] text-black gap-[10px] mb-[30px]">
          <span>
            <FaRegStar />
          </span>
          <p>4 / 5</p>
          <p className="text-16">Average Rating</p>
        </div>

        <div className="flexCol">
          <div className="flexRow items-start font-v1  border-b-[1px] border-rgb-custome-6 mb-[25px]">
            <div className="text-[42px] mr-[10px]">
              <FaRegCircleUser />
            </div>
            <div className="pb-[88px]">
              <Title family="font-v1" fontSize="14" fontWeight={500}>
                Name Surname
              </Title>
              <div className="flexRow gap-[5px] mb-[5px]">
                <span className="text-16">
                  <FaStar />
                </span>
                <span className="text-16">
                  <FaStar />
                </span>
                <span className="text-16">
                  <FaStar />
                </span>
                <span className="text-16">
                  <FaRegStar />
                </span>
                <span className="text-16">
                  <FaRegStar />
                </span>
              </div>
              <p className=" text-12 font-md mb-[15px]">5 September 2018</p>
              <p className=" text-14 font-md mb-[15px]">
                Porta corporis nibh. Adipisci maiores dui torquent porttitor
                wisi necessitatibus lorem perspiciatis repudiandae ad nesciunt
                deleniti facilisi, est orci libero, aspernatur asperiores ornare
                aliquip vehicula? Proident?
              </p>
            </div>
          </div>
          <div className="flexRow items-start font-v1  border-b-[1px] border-rgb-custome-6 mb-[25px]">
            <div className="text-[42px] mr-[10px]">
              <FaRegCircleUser />
            </div>
            <div className="pb-[88px]">
              <Title family="font-v1" fontSize="14" fontWeight={500}>
                Name Surname
              </Title>
              <div className="flexRow gap-[5px] mb-[5px]">
                <span className="text-16">
                  <FaStar />
                </span>
                <span className="text-16">
                  <FaStar />
                </span>
                <span className="text-16">
                  <FaStar />
                </span>
                <span className="text-16">
                  <FaRegStar />
                </span>
                <span className="text-16">
                  <FaRegStar />
                </span>
              </div>
              <p className=" text-12 font-md mb-[15px]">5 September 2018</p>
              <p className=" text-14 font-md mb-[15px]">
                Porta corporis nibh. Adipisci maiores dui torquent porttitor
                wisi necessitatibus lorem perspiciatis repudiandae ad nesciunt
                deleniti facilisi, est orci libero, aspernatur asperiores ornare
                aliquip vehicula? Proident?
              </p>
            </div>
          </div>
          <div className="flexRow items-start font-v1  border-b-[1px] border-rgb-custome-6 mb-[25px]">
            <div className="text-[42px] mr-[10px]">
              <FaRegCircleUser />
            </div>
            <div className="pb-[88px]">
              <Title family="font-v1" fontSize="14" fontWeight={500}>
                Name Surname
              </Title>
              <div className="flexRow gap-[5px] mb-[5px]">
                <span className="text-16">
                  <FaStar />
                </span>
                <span className="text-16">
                  <FaStar />
                </span>
                <span className="text-16">
                  <FaStar />
                </span>
                <span className="text-16">
                  <FaRegStar />
                </span>
                <span className="text-16">
                  <FaRegStar />
                </span>
              </div>
              <p className=" text-12 font-md mb-[15px]">5 September 2018</p>
              <p className=" text-14 font-md mb-[15px]">
                Porta corporis nibh. Adipisci maiores dui torquent porttitor
                wisi necessitatibus lorem perspiciatis repudiandae ad nesciunt
                deleniti facilisi, est orci libero, aspernatur asperiores ornare
                aliquip vehicula? Proident?
              </p>
            </div>
          </div>
        </div>
        <div className="flexRow justify-center text-[16px] font-md underline">View All</div>
      </ContentLayoutV2>
      <ContentLayoutV2 width="344px">
        <Title family="font-v1" fontSize="22" fontWeight={500}>
          Top Reviews
        </Title>
        <div className="pb-[20px]"></div>
        <div className="flexCol">
          <div className="flexRow items-start font-v1  border-b-[1px] border-rgb-custome-6 mb-[25px]">
            <div className="text-[42px] mr-[10px]">
              <FaRegCircleUser />
            </div>
            <div className="pb-[88px]">
              <Title family="font-v1" fontSize="14" fontWeight={500}>
                Name Surname
              </Title>
              <div className="flexRow gap-[5px] mb-[5px]">
                <span className="text-16">
                  <FaStar />
                </span>
                <span className="text-16">
                  <FaStar />
                </span>
                <span className="text-16">
                  <FaStar />
                </span>
                <span className="text-16">
                  <FaRegStar />
                </span>
                <span className="text-16">
                  <FaRegStar />
                </span>
              </div>
              <p className=" text-12 font-md mb-[15px]">5 September 2018</p>
              <p className=" text-14 font-md mb-[15px]">
                Porta corporis nibh. Adipisci maiores dui torquent porttitor
                wisi necessitatibus lorem perspiciatis repudiandae ad nesciunt
                deleniti facilisi, est orci libero, aspernatur asperiores ornare
                aliquip vehicula? Proident?
              </p>
            </div>
          </div>
          <div className="flexRow items-start font-v1  border-b-[1px] border-rgb-custome-6 mb-[25px]">
            <div className="text-[42px] mr-[10px]">
              <FaRegCircleUser />
            </div>
            <div className="pb-[88px]">
              <Title family="font-v1" fontSize="14" fontWeight={500}>
                Name Surname
              </Title>
              <div className="flexRow gap-[5px] mb-[5px]">
                <span className="text-16">
                  <FaStar />
                </span>
                <span className="text-16">
                  <FaStar />
                </span>
                <span className="text-16">
                  <FaStar />
                </span>
                <span className="text-16">
                  <FaRegStar />
                </span>
                <span className="text-16">
                  <FaRegStar />
                </span>
              </div>
              <p className=" text-12 font-md mb-[15px]">5 September 2018</p>
              <p className=" text-14 font-md mb-[15px]">
                Porta corporis nibh. Adipisci maiores dui torquent porttitor
                wisi necessitatibus lorem perspiciatis repudiandae ad nesciunt
                deleniti facilisi, est orci libero, aspernatur asperiores ornare
                aliquip vehicula? Proident?
              </p>
            </div>
          </div>
          <div className="flexRow items-start font-v1  border-b-[1px] border-rgb-custome-6 mb-[25px]">
            <div className="text-[42px] mr-[10px]">
              <FaRegCircleUser />
            </div>
            <div className="pb-[88px]">
              <Title family="font-v1" fontSize="14" fontWeight={500}>
                Name Surname
              </Title>
              <div className="flexRow gap-[5px] mb-[5px]">
                <span className="text-16">
                  <FaStar />
                </span>
                <span className="text-16">
                  <FaStar />
                </span>
                <span className="text-16">
                  <FaStar />
                </span>
                <span className="text-16">
                  <FaRegStar />
                </span>
                <span className="text-16">
                  <FaRegStar />
                </span>
              </div>
              <p className=" text-12 font-md mb-[15px]">5 September 2018</p>
              <p className=" text-14 font-md mb-[15px]">
                Porta corporis nibh. Adipisci maiores dui torquent porttitor
                wisi necessitatibus lorem perspiciatis repudiandae ad nesciunt
                deleniti facilisi, est orci libero, aspernatur asperiores ornare
                aliquip vehicula? Proident?
              </p>
            </div>
          </div>
        </div>
      </ContentLayoutV2>
    </div>
  );
};

export default BoxReview;
