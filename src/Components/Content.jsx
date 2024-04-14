import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
// import { contentLinks } from "../constants";

const Content = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.org/posts").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="py-2">
      <div className="px-2 py-4">
        <h6 className="text-xs text-gray-500 uppercase font-roboto font-semibold ">
          Pilhan Editor
        </h6>
      </div>

      <div className="px-4 grid grid-cols-2 md:grid-cols-4 border">
        {data.map((data) => (
          <Link to={`/blog/${data.id}`} className="px-2" key={data.id}>
            <img
              src={data.image}
              alt="content pix "
              className="object-fill w-full h-48  rounded-md "
            />
            <h5 className="text-lg font-semibold text-start">
              <span className="">
                <p className="italic text-sm py-2 text-gray-500">
                  {data.publishedAt}
                </p>
              </span>
              {data.title}
            </h5>
            <p className="text-start text-sm   lg:visible hidden">
              {data.content}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Content;
