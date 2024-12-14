import React, { useState } from "react";

const Blog = ({ blog }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-[#000] ">
      <h1
        onClick={() => setShow(!show)}
        className="rounded-lg cursor-pointer text-[#dad7d4] px-4 py-4 text-[24px] hover:bg-[#ffd01d]"
      >
        {blog.title}
      </h1>
      <div>{show && <p className="text-[#fff]">{blog.content}</p>}</div>
    </div>
  );
};

export default Blog;
