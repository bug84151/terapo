import React, { useState } from "react";
import { motion } from "motion/react";

const Blog = ({ blog }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-[#000] italic">
      <h1
        onClick={() => setShow(!show)}
        className="rounded-lg cursor-pointer text-[#dad7d4] px-4 py-4 text-[24px] hover:bg-[#ffd01d] font-bold"
      >
        {blog.title}
      </h1>
      <div>
        {show && (
          <motion.p
            initial={{ y: -25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#fff]"
          >
            {blog.content}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default Blog;
