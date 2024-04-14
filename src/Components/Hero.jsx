import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { herobag } from "../assets";
// import { heroLinks } from "../constants/index.js";

const Hero = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.org/posts").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="md:grid grid-cols bg-black border-t border-gray-900 py-8  shadow-lg ">
      <div
        className=" text-white px-2 md:px-12 w-full 
    "
        key={data.id}
      >
        <Link to={"/page1"}>
          <img
            src={herobag}
            alt="herobag"
            className="object-cover w-full h-96 cursor-pointer"
          />

          <h6 className="py-3 italic font-semibold text-xs">
            {data.publishedAt}
          </h6>
          <h2 className="text-lg font-bold">{data.title}</h2>

          <p className="py-2 text-sm text-gray-500 pb-8 cursor-pointer">
            {data.content}
          </p>
        </Link>
      </div>
      <div className="md:divide-y divide-gray-900">
        {data.map((data) => (
          <Link to={`/blog/${data.id}`} key={data.id}>
            <div className="small md:hidden">
              <p className="w-full h-48 text-start overflow-clip py-2">
                <span className="italic text-xs text-gray-400 ">
                  April 5, 2024.
                </span>
                {data.title}
              </p>
              <img
                src={data.image}
                alt="guy with bag"
                className="w-full h-48 object-cover rounded-sm cursor-pointer "
              />
            </div>
            {/*  */}
            {/* <div className="hidden md:large" key={data.id}>
              <img
                src={data.image}
                alt="guy with bag"
                className="w-full h-32 object-cover rounded-sm cursor-pointer "
              />
              <p className="w-full h-36 text-start cursor-pointer md:overflow-hidden py-2 ">
                <span className="italic text-xs text-gray-400">
                  April 5, 2024.
                </span>
                {data.title}
              </p>
            </div> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hero;
