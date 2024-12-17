import React from "react";

const About = () => {
  return (
    <div className="bg-[#000] w-full px-10 py-5">
      <div className="font-black text-[#ffd01d] text-[24px] text-center md:text-[48px]">
        WHO WE ARE
      </div>
      <div className="flex w-full font-black">
        <div className="hidden md:block w-[50%]"></div>
        <div className="w-full md:w-[50%] text-center md:text-left flex flex-col justify-center items-center">
          <h1 className="text-[1.8rem]md:text-[48px] text-[#dad7d4]">
            WE HELP PEOPLE DISCOVER THEIR TRUE SELVES.
          </h1>
          <p className="text-[#dad7d499] text-[1rem]">
            At Terapo, we are dedicated to supporting mental wellness and
            empowering individuals of all ages to lead healthier, more
            fulfilling lives. Through our professional therapy services, we help
            clients navigate life's challenges, build emotional resilience, and
            unlock their full potential. Whether you're seeking counseling for
            personal growth or support through difficult times, Terapo provides
            a safe, compassionate space to foster healing and mental well-being.
            In addition to our therapy services, Our School and Skill program is
            a life-changing initiative aimed at providing free education and
            skills training to children and teens who cannot afford formal
            schooling. Through this outreach, we offer mentorship, academic
            support, and vocational training to help underserved youth build
            essential skills, opening doors to brighter futures and greater
            opportunities. At Terapo, we believe that mental wellness and
            education go hand in hand in shaping strong, resilient individuals
            and communities. Whether you're seeking mental health support or
            passionate about empowering the next generation through School and
            Skill, we are here to help create lasting, positive change. Join us
            in building a better tomorrow, one mind at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
