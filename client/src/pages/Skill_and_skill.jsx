import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import Student_card from "../components/Student_card";

const Skill_and_skill = () => {
  const students = [
    {
      Timestamp: "11/27/2024 14:32:22",
      First_Name: "Patience",
      Middle_Name: "Patience",
      Last_Name: "Shaibu",
      Date_of_Birth: "11/18/2000",
      Gender: "Female",
      State_of_Origin: "Kogi",
      Parent_Guardians_Name: "Mrs Mary Shaibu",
      Email: "patienceshaibu84@gmail.com",
      Phone_Number: "07041918584 / 07054645439",
      Home_Address: "Ruga Auta by Yoruba mosque Maraba",
      Empowerment_Choice: "Skill",
      Skill: "Barbing, Hair styling",
      Passport_Photograph: "./passports/29.jpeg",
      Class_Grade: null,
    },
    {
      Timestamp: "12/2/2024 10:40:22",
      First_Name: "Joy",
      Middle_Name: "Goodness",
      Last_Name: "Udeh",
      Date_of_Birth: "7/26/2002",
      Gender: "Female",
      State_of_Origin: "Imo state",
      Parent_Guardians_Name: "Mrs Ngozi Udeh",
      Email: "udehjoy349@gmail.com",
      Phone_Number: "08171578047",
      Home_Address: "27, Buraimoh Alli street, Ladi-lak Lagos",
      Empowerment_Choice: "Skill",
      Skill: null,
      Passport_Photograph: "./passports/28.jpg",
      Class_Grade: null,
    },
    {
      Timestamp: "12/2/2024 14:04:45",
      First_Name: "Williams",
      Middle_Name: "Bright",
      Last_Name: "Olusegun",
      Date_of_Birth: "10/2/2021",
      Gender: "Male",
      State_of_Origin: "Delta",
      Parent_Guardians_Name: "Williams christianah8",
      Email: null,
      Phone_Number: "08107523421",
      Home_Address: "Gbelegbuwa street ijebu-ode Ogun",
      Empowerment_Choice: "School",
      Skill: null,
      Passport_Photograph: "./passports/26.jpg",
      Class_Grade: "Kg2",
    },
    {
      Timestamp: "12/2/2024 14:13:13",
      First_Name: "Idris",
      Middle_Name: "Tolulope",
      Last_Name: "Elizabeth",
      Date_of_Birth: "2/9/2021",
      Gender: "Female",
      State_of_Origin: "Lagos state",
      Parent_Guardians_Name: "Idris Folukemi",
      Email: null,
      Phone_Number: "09042820647",
      Home_Address: "3 awolana street ikoto Ijebu ode Ogun state",
      Empowerment_Choice: "School",
      Skill: null,
      Passport_Photograph: "./passports/25.jpg",
      Class_Grade: "Nur1",
    },
    {
      Timestamp: "12/2/2024 14:32:41",
      First_Name: "Edeh",
      Middle_Name: "Emmanuel",
      Last_Name: "Ebube",
      Date_of_Birth: "5/19/2015",
      Gender: "Male",
      State_of_Origin: "Eboyin",
      Parent_Guardians_Name: "Mr Edeh",
      Email: null,
      Phone_Number: "09166942262",
      Home_Address: "4, Onibada Street ijebu-ode Ogun state",
      Empowerment_Choice: "School",
      Skill: null,
      Passport_Photograph: "./passports/24.jpg",
      Class_Grade: "Basic 3",
    },
    {
      Timestamp: "12/2/2024 14:40:02",
      First_Name: "Adekunle",
      Middle_Name: "Desire",
      Last_Name: "Dorcas",
      Date_of_Birth: "4/19/2017",
      Gender: "Female",
      State_of_Origin: "Ogun state",
      Parent_Guardians_Name: "Adekunle Adebukunla",
      Email: null,
      Phone_Number: "08068827901",
      Home_Address: "63, ijagun road off Ondo road ijebu-ode Ogun State",
      Empowerment_Choice: "School",
      Skill: null,
      Passport_Photograph: "./passports/23.jpg",
      Class_Grade: "Basic 2",
    },
    {
      Timestamp: "12/2/2024 14:44:43",
      First_Name: "Salami",
      Middle_Name: "Ramotullahi",
      Last_Name: "Adesewa",
      Date_of_Birth: "6/29/2016",
      Gender: "Female",
      State_of_Origin: "Ogun State",
      Parent_Guardians_Name: "Salami Alimat",
      Email: null,
      Phone_Number: "08073944990",
      Home_Address: "61, Oguntuga street ijebu-ode",
      Empowerment_Choice: "School",
      Skill: null,
      Passport_Photograph: "./passports/22.jpg",
      Class_Grade: "Basic 3",
    },
    {
      Timestamp: "12/2/2024 14:53:44",
      First_Name: "Balogun",
      Middle_Name: "Iremide",
      Last_Name: "Alameen",
      Date_of_Birth: "3/18/2021",
      Gender: "Male",
      State_of_Origin: "Ogun state",
      Parent_Guardians_Name: "Balogun folashade",
      Email: null,
      Phone_Number: "08052401895",
      Home_Address: "3b, Olukoku odoesa ijebu-ode",
      Empowerment_Choice: "School",
      Skill: null,
      Passport_Photograph: "./passports/21.jpg",
      Class_Grade: "Kg1",
    },
    {
      Timestamp: "12/2/2024 14:57:17",
      First_Name: "Salami",
      Middle_Name: "Azeemat",
      Last_Name: "Ayomiposi",
      Date_of_Birth: "6/10/2020",
      Gender: "Female",
      State_of_Origin: "Ogun State",
      Parent_Guardians_Name: "Salami Alimat",
      Email: null,
      Phone_Number: "08073944990",
      Home_Address: "61, oguntuga street ijebu-ode",
      Empowerment_Choice: "School",
      Skill: null,
      Passport_Photograph: "./passports/20.jpg",
      Class_Grade: "Nur2",
    },
    {
      Timestamp: "12/2/2024 15:01:00",
      First_Name: "Onasanya",
      Middle_Name: "Ezekiel",
      Last_Name: "Oluwatunmininu",
      Date_of_Birth: "12/14/2014",
      Gender: "Male",
      State_of_Origin: "Ogun State",
      Parent_Guardians_Name: "Onasanya Yemisi",
      Email: null,
      Phone_Number: "09035534241",
      Home_Address: "14, odutola street ijebu-ode",
      Empowerment_Choice: "School",
      Skill: null,
      Passport_Photograph: "./passports/19.jpg",
      Class_Grade: "Basic 2",
    },
    {
      Timestamp: "12/2/2024 15:07:13",
      First_Name: "Kadri",
      Middle_Name: "Arike",
      Last_Name: "Suliat",
      Date_of_Birth: "10/4/2021",
      Gender: "Female",
      State_of_Origin: "Ogun State",
      Parent_Guardians_Name: "Ibrahim Rukoyat Ayoka",
      Email: null,
      Phone_Number: "09058469699",
      Home_Address: "46, larebe street ijebu-ode Ogun State",
      Empowerment_Choice: "School",
      Skill: null,
      Passport_Photograph: "./passports/18.jpg",
      Class_Grade: "Kg2",
    },
    {
      Timestamp: "12/2/2024 15:18:06",
      First_Name: "Haruna",
      Middle_Name: "Lateefat",
      Last_Name: "Anjola",
      Date_of_Birth: "2/22/2015",
      Gender: "Female",
      State_of_Origin: "Ogun state",
      Parent_Guardians_Name: "Haruna Wakilat",
      Email: null,
      Phone_Number: "07054117732",
      Home_Address: "5, larebe street ijebu-ode Ogun state",
      Empowerment_Choice: "Both",
      Skill: null,
      Passport_Photograph: "./passports/17.jpg",
      Class_Grade: "Basic 5",
    },
    {
      Timestamp: "12/2/2024 15:29:40",
      First_Name: "Nofiu",
      Middle_Name: "Jesutofunmi",
      Last_Name: "Rukayat",
      Date_of_Birth: "1/29/2015",
      Gender: "Female",
      State_of_Origin: "Ogun state",
      Parent_Guardians_Name: "Nofiu Mutiyat",
      Email: null,
      Phone_Number: "09151033397",
      Home_Address: "86, fidipote street ijebu-ode Ogun state",
      Empowerment_Choice: "Both",
      Skill: null,
      Passport_Photograph: "./passports/30.jpg",
      Class_Grade: "Basic 5",
    },
    {
      Timestamp: "12/2/2024 15:33:55",
      First_Name: "Oyenuga",
      Middle_Name: "Elijah",
      Last_Name: "Tomisin",
      Date_of_Birth: "3/18/2012",
      Gender: "Male",
      State_of_Origin: "Ogun State",
      Parent_Guardians_Name: "oyenuga Bisi",
      Email: null,
      Phone_Number: "08159697289",
      Home_Address: "7Larebe street ijebu-ode Ogun state",
      Empowerment_Choice: "Both",
      Skill: null,
      Passport_Photograph: "./passports/16.jpg",
      Class_Grade: "Basic 4",
    },
    {
      Timestamp: "12/2/2024 15:38:39",
      First_Name: "Obituga",
      Middle_Name: "Firewami",
      Last_Name: "Temidun",
      Date_of_Birth: "3/18/2016",
      Gender: "Female",
      State_of_Origin: "Ogun State",
      Parent_Guardians_Name: "Obituga Adeniyi",
      Email: null,
      Phone_Number: "08151929417",
      Home_Address: "129a Olisa street ijebu-ode Ogun state",
      Empowerment_Choice: "Both",
      Skill: null,
      Passport_Photograph: "./passports/15.jpg",
      Class_Grade: "Basic 4",
    },
    {
      Timestamp: "12/2/2024 15:50:04",
      First_Name: "Oyenuga",
      Middle_Name: "Samuel",
      Last_Name: "Odunlade",
      Date_of_Birth: "9/17/2016",
      Gender: "Male",
      State_of_Origin: "Ogun state",
      Parent_Guardians_Name: "Oyenuga Bisi",
      Email: null,
      Phone_Number: "08159697289",
      Home_Address: "7, Larebe",
      Empowerment_Choice: "Both",
      Skill: null,
      Passport_Photograph: "./passports/14.jpg",
      Class_Grade: "Basic 2",
    },
    {
      Timestamp: "12/2/2024 15:59:01",
      First_Name: "Obituga",
      Middle_Name: "Irenimofe",
      Last_Name: "Daniel",
      Date_of_Birth: "12/8/2018",
      Gender: "Male",
      State_of_Origin: "Ogun State",
      Parent_Guardians_Name: "Obituga Adeniyi",
      Email: null,
      Phone_Number: "08151929470",
      Home_Address: "129a Olisa street ijebu-ode Ogun state",
      Empowerment_Choice: "School",
      Skill: null,
      Passport_Photograph: "./passports/13.jpg",
      Class_Grade: null,
    },
    {
      Timestamp: "12/2/2024 16:03:53",
      First_Name: "Afolayan",
      Middle_Name: "Mercy",
      Last_Name: "Oluwatimilehin",
      Date_of_Birth: "1/30/2015",
      Gender: "Female",
      State_of_Origin: "Ogun state",
      Parent_Guardians_Name: "Mr Afolayan",
      Email: null,
      Phone_Number: "08035727745",
      Home_Address: "6, oshosa Olisa street ijebu-ode Ogun state",
      Empowerment_Choice: "Both",
      Skill: null,
      Passport_Photograph: "./passports/12.jpg",
      Class_Grade: "Basic 3",
    },
    {
      Timestamp: "12/2/2024 16:10:36",
      First_Name: "Adesanya",
      Middle_Name: "Peter",
      Last_Name: "Fisayomi",
      Date_of_Birth: "8/19/2017",
      Gender: "Male",
      State_of_Origin: "Ogun State",
      Parent_Guardians_Name: "Adesanya Alabe",
      Email: null,
      Phone_Number: "08052259173",
      Home_Address: "121 Olisa street ijebu-ode Ogun state",
      Empowerment_Choice: "Both",
      Skill: null,
      Passport_Photograph: "./passports/11.jpg",
      Class_Grade: "Basic 2",
    },
    {
      Timestamp: "12/2/2024 16:18:35",
      First_Name: "Onitilo",
      Middle_Name: "Erisegun",
      Last_Name: "Olorunjedalo",
      Date_of_Birth: "1/24/2019",
      Gender: "Male",
      State_of_Origin: "Ogun state",
      Parent_Guardians_Name: "Mrs Onitilo Arike",
      Email: null,
      Phone_Number: "07069045608",
      Home_Address: "121, Olisa street ijebu-ode Ogun State",
      Empowerment_Choice: "School",
      Skill: null,
      Passport_Photograph: "./passports/10.jpg",
      Class_Grade: "Nur1",
    },
    {
      Timestamp: "12/3/2024 12:14:33",
      First_Name: "Rufus",
      Middle_Name: "Melody",
      Last_Name: "Iremide",
      Date_of_Birth: "4/5/2018",
      Gender: "Female",
      State_of_Origin: "Ondo State",
      Parent_Guardians_Name: "Rufus Oluwole",
      Email: null,
      Phone_Number: "09131094414",
      Home_Address: "Ayan street Ijebu-ode Ogun state",
      Empowerment_Choice: "School",
      Skill: null,
      Passport_Photograph: "./passports/9.jpg",
      Class_Grade: "Basic2",
    },
    {
      Timestamp: "12/3/2024 12:44:02",
      First_Name: "Fasetire",
      Middle_Name: "Oluwasikemi",
      Last_Name: "Elizabeth",
      Date_of_Birth: "5/11/2018",
      Gender: "Female",
      State_of_Origin: "Odun State",
      Parent_Guardians_Name: "Fasetire Babatunde Emmanuel",
      Email: null,
      Phone_Number: "07050373895",
      Home_Address: "6, nobo street off Ondo road isoku ijebu-ode Ogun state",
      Empowerment_Choice: "School",
      Skill: null,
      Passport_Photograph: "./passports/8.jpg",
      Class_Grade: "Basic 1",
    },
    {
      Timestamp: "12/8/2024 17:38:24",
      First_Name: "Samiat",
      Middle_Name: "Esther",
      Last_Name: "Kareem",
      Date_of_Birth: "4/10/2010",
      Gender: "Female",
      State_of_Origin: "Ogun state",
      Parent_Guardians_Name: "Mrs kareem",
      Email: null,
      Phone_Number: "08170889234",
      Home_Address: "29, barley street",
      Empowerment_Choice: "Skill",
      Skill: "Fashion designing",
      Passport_Photograph: null,
      Class_Grade: null,
    },
    {
      Timestamp: "12/4/2024 10:11:44",
      First_Name: "Ramotallahi",
      Middle_Name: "Adesewa",
      Last_Name: "Salami",
      Date_of_Birth: "6/29/2016",
      Gender: "Female",
      State_of_Origin: "Ogun",
      Parent_Guardians_Name: "Mr AbdulAzeez & Mrs Alumat Salami",
      Email: null,
      Phone_Number: "08073944990",
      Home_Address: "61, Oguntuga Street IjebuOde",
      Empowerment_Choice: "School",
      Class_Gade: "Basic three",
      Skill: null,
      Passport_Photograph: "./passports/6.jpeg",
    },
    {
      Timestamp: "12/4/2024 10:13:54",
      First_Name: "Semilore",
      Middle_Name: "Patrick",
      Last_Name: "Salau",
      Date_of_Birth: "4/24/2016",
      Gender: "Male",
      State_of_Origin: "Ogun",
      Parent_Guardians_Name: "Mr Olusegun & Mrs Aderonke Salau",
      Email: null,
      Phone_Number: "08064581275",
      Home_Address: "29, Oguntuga Street IjebuOde",
      Empowerment_Choice: "School",
      Class_Gade: "Basic three",
      Skill: null,
      Passport_Photograph: "./passports/2.jpeg",
    },
    {
      Timestamp: "12/4/2024 10:17:00",
      First_Name: "Ezekiel",
      Middle_Name: "Oluwatumininu",
      Last_Name: "Onasanya",
      Date_of_Birth: "12/14/2014",
      Gender: "Male",
      State_of_Origin: "Ogun",
      Parent_Guardians_Name: "Mr Ayokunle & Mrs Yemisi Onasanya",
      Email: null,
      Phone_Number: "09153352441",
      Home_Address: "14, Odutola street IjebuOde",
      Empowerment_Choice: "School",
      Class_Gade: "Basic three",
      Skill: null,
      Passport_Photograph: "./passports/3.jpeg",
    },
    {
      Timestamp: "12/4/2024 10:19:01",
      First_Name: "Melody",
      Middle_Name: "Iremide",
      Last_Name: "Rufus",
      Date_of_Birth: "4/5/2018",
      Gender: "Female",
      State_of_Origin: "Ogun",
      Parent_Guardians_Name: "Mr Oluwole & Mrs Mercy Rufus",
      Email: null,
      Phone_Number: "09131094414",
      Home_Address: "Ayan street IjebuOde",
      Empowerment_Choice: "School",
      Class_Gade: null,
      Skill: null,
      Passport_Photograph: "./passports/4.jpeg",
    },
    {
      Timestamp: "12/4/2024 10:21:08",
      First_Name: "Lateefat",
      Middle_Name: "Anjola",
      Last_Name: "Haruna",
      Date_of_Birth: "2/22/2015",
      Gender: "Female",
      State_of_Origin: "Ogun",
      Parent_Guardians_Name: "Mr Akeem & Mrs Wakilat Haruna",
      Email: null,
      Phone_Number: "07054117732",
      Home_Address: "5, Larebe street IjebuOde",
      Empowerment_Choice: "School",
      Class_Gade: "Basic five",
      Skill: null,
      Passport_Photograph: "./passports/5.jpeg",
    },
    {
      Timestamp: "12/4/2024 10:44:41",
      First_Name: "Emmanuel",
      Middle_Name: "Martins",
      Last_Name: "Kizito",
      Date_of_Birth: "3/3/2003",
      Gender: "Male",
      State_of_Origin: "Kogi",
      Parent_Guardians_Name: "Mr Emmanuel Omale",
      Email: null,
      Phone_Number: "09072542703 / 09155878095",
      Home_Address: "Angwa Adamu Keffi",
      Empowerment_Choice: "Skill",
      Class_Gade: null,
      Skill: "Barbing & Hairstyling",
      Passport_Photograph: "./passports/1.jpeg",
    },
    {
      Timestamp: "12/4/2024 10:49:53",
      First_Name: "Chibuzor",
      Middle_Name: "Eberechukwu",
      Last_Name: "Samuel",
      Date_of_Birth: "4/25/2000",
      Gender: "Male",
      State_of_Origin: "Imo",
      Parent_Guardians_Name: "Mrs Chioma Eberechukwu",
      Email: null,
      Phone_Number: "07058110687/ 08086679468",
      Home_Address: "Lifecamp Opposite Angwansment",
      Empowerment_Choice: "Skill",
      Class_Gade: null,
      Skill: "Website & App Development",
      Passport_Photograph: "./passports/7.jpeg",
    },
  ];
  const styles = {
    hero: "h-[80vh] bg-[#000] text-[#dad7d4] text-[8vw] flex flex-col justify-center items-center gap-10 font-black font-oswald flex flex-col italic",
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="italic"
    >
      <div className={styles.hero}>
        <div className="flex justify-center items-center gap-8">
          <div>SCHOOL AND SKILL</div>
        </div>
        <div className="text-[#ffd01d] text-3xl font-black">
          EDUCATION FOR EVERY CHILD
        </div>
        <Link to={"./donation"}>
          <div className="w-[200px] h-[80px] bg-[#ffd01d] mt-10 font-black font-oswald rounded-lg text-[#000] text-[30px] flex justify-center items-center">
            DONATE
          </div>
        </Link>
      </div>
      <div className="w-full px-5 md:px-5 text-center md:text-left justify-center items-center bg-[#000]">
        <h1 className="text-[1.8rem]md:text-[48px] text-[#dad7d4] text-center">
          ABOUT THE PROGRAM.
        </h1>
        <motion.p
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-[#dad7d499] text-[1rem] mb-4"
        >
          In Nigeria, millions of children face the challenge of poverty and
          limited access to education and skill acquisition opportunities..
        </motion.p>
        <motion.p
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-[#dad7d499] text-[1rem] mb-4"
        >
          At the Terapo Office, we believe that every child deserves a chance to
          dream, learn, and thrive. The School and Skill a Child Program is our
          bold initiative to support 100 underprivileged children annually by
          funding their schooling and skill training.
        </motion.p>
        <motion.p
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-[#dad7d499] text-[1rem] mb-4"
        >
          Our vision is not just to uplift these children but to raise a
          generation of privileged individuals who will, in turn, empower other
          underprivileged children, creating a ripple effect of hope and
          opportunity.
        </motion.p>
      </div>
      <div className="px-10 py-5 bg-[#000] flex flex-col justify-center items-center pb-28">
        <div className=" w-full flex gap-5 py-5 md:flex-row flex-col">
          <img
            src="./wtm1.jpg"
            className="w-full md:w-[50%] h-full bg-yellow-600 rounded-lg"
          />
          <img
            src="./wtm2.jpg"
            className="w-full md:w-[50%] h-full bg-yellow-600 rounded-lg"
          />
        </div>
        <img
          src="./wtm3.jpg"
          className="w-full lg:h-screen bg-yellow-600 rounded-lg object-cover"
        />
        <div className="w-full flex gap-5 py-5 md:flex-row flex-col">
          <img
            src="./wtm4.jpg"
            className="w-full md:w-[50%] h-full bg-yellow-600 rounded-lg"
          />
          <img
            src="./wtm5.jpg"
            className="w-full md:w-[50%] h-full bg-yellow-600 rounded-lg"
          />
        </div>
        <Link to={"./donation"}>
          <div className="w-[200px] h-[80px] bg-[#ffd01d] mt-10 font-black font-oswald rounded-lg text-[#000] text-[30px] flex justify-center items-center">
            DONATE
          </div>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center bg-[#000] text-[#000]">
        <h1 className="text-[1.8rem] md:text-[48px] text-[#dad7d4]">
          REGISTERED STUDENTS
        </h1>
        <div className="flex flex-col md:grid md:grid-cols-4 gap-5 w-full px-4 py-5">
          {students.map((student) => (
            <Student_card student={student} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skill_and_skill;
