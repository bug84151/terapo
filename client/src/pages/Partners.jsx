import React from "react";
import { motion } from "motion/react";

const Partners = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="px-10 py-4 bg-[#000] italic"
    >
      <div className="bg-[#000] w-full">
        <div className="font-black text-[#ffd01d] text-[40px] md:text-[80px]">
          OUR SPONSORS
        </div>
        <div className="flex flex-col md:flex-row gap-2 w-full font-black h-[50%] mb-10">
          <img
            src="./sponsors/s2.jpg"
            className="rounded-lg w-full md:w-[50%] "
          />
          <div className="w-full md:w-[50%]">
            <h1 className="text-[1.8rem] md:text-[48px] text-[#dad7d4]">
              GODWIN SMART
            </h1>
            <motion.p
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#dad7d499] text-[1rem] mb-4"
            >
              Godwin Micah Smart is a distinguished physicist, EdTech advocate,
              and gospel musician dedicated to making a positive impact in both
              education and music. Currently pursuing graduate studies at North
              Carolina Central University,
            </motion.p>
            <motion.p
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#dad7d499] text-[1rem] mb-4"
            >
              he is also a research scientist at Duke University. As the founder
              of SMART TUTORS, an EdTech startup, and Schoolarship Hack, an
              initiative to help African students secure fully funded
              scholarships in the USA, Godwin is committed to enhancing
              educational access and quality.
            </motion.p>
            <motion.p
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#dad7d499] text-[1rem] mb-4"
            >
              A celebrated gospel artist, he uses his music to inspire and
              uplift, with his latest single, "Righteousness," sharing the
              profound message of God's love. Godwin’s passion for education,
              youth empowerment, and making a difference shines through his work
              and ministry.
            </motion.p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-2 w-full font-black h-[50%]">
          <img
            src="./sponsors/l5.jpeg"
            className="rounded-lg w-full md:w-[50%] "
          />
          <div className="w-full md:w-[50%]">
            <h1 className="text-[1.8rem] md:text-[48px] text-[#dad7d4]">
              DE HEADSHOTS
            </h1>
            <motion.p
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#dad7d499] text-[1rem] mb-4"
            >
              De Headshot Barbing Salon, located in the heart of Abuja, is the
              city's premier destination for luxury grooming. With a team of
              expert barbers and state-of-the-art facilities, De Headshot
              delivers precision haircuts, stylish fades, and personalized
              grooming experiences to help you look and feel your best.
            </motion.p>
            <motion.p
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#dad7d499] text-[1rem] mb-4"
            >
              Offering only the finest hair care products and exceptional
              service, De Headshot is the go-to choice for those who value
              top-tier grooming in a sophisticated, comfortable setting. Trust
              De Headshot Barbing Salon to elevate your style to celebrity
              status.
            </motion.p>
          </div>
        </div>
      </div>
      <div className="bg-[#000] w-full flex flex-col gap-5">
        <div className="font-black text-[#ffd01d] text-[40px] md:text-[80px]">
          OUR PARTNERS
        </div>
        <div className="grid grid-cols-3 gap-5 w-full bg-[#000] ">
          <img
            src="./sponsors/l5.jpeg"
            className="rounded-lg h-full w-full object-cover"
          />
          <img
            src="./sponsors/s2.jpg"
            className="rounded-lg h-full w-full object-cover"
          />
          <img
            src="./sponsors/l1.jpg"
            className="rounded-lg h-full w-full object-cover"
          />
          <img
            src="./sponsors/l2.JPG"
            className="rounded-lg h-full w-full object-cover"
          />
          <img
            src="./sponsors/l3.png"
            className="rounded-lg h-full w-full object-cover"
          />
          <img
            src="./sponsors/l4.png"
            className="rounded-lg h-full w-full object-cover"
          />
          <img
            src="./sponsors/p1.jpg"
            className="rounded-lg h-full w-full object-cover"
          />
          <img
            src="./sponsors/p2.jpg"
            className="rounded-lg h-full w-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Partners;
