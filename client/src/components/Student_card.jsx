import React from "react";

const Student_card = ({ student }) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-lg bg-[#dad7d4] h-[400px] font-oswald font-black text-[20px]">
      <img src={student.Passport_Photograph} alt="img" className="w-[35%]" />
      <div className="flex flex-col justify-start w-[80%]">
        <div>
          {student.First_Name} {student.Last_Name}
        </div>
        <div>{student.Gender}</div>
        <div>{student.Empowerment_Choice}</div>
        <div>{student.Skill}</div>
      </div>
    </div>
  );
};

export default Student_card;
