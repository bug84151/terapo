import React, { useState } from "react";
import { PaystackButton } from "react-paystack";

const Donation = () => {
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount: amount * 100,
    metaData: {
      name,
      phone,
    },
    publicKey,
    text: "Donate",
    onSuccess: () => alert("Thank You for Your Donation"),
    onClose: () => alert("Are you sure you want to close the transaction?"),
  };

  const styles = {
    input:
      "block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none",
    button: "block w-full px-4 py-2 bg-[#ffd01d] text-[#000] rounded-md",
  };

  return (
    <div className="bg-[#000] h-screen flex justify-center items-center py-5">
      <div className="flex flex-col justify-center items-center gap-4 max-w-md px-4 rounded-lg py-4 font-oswald bg-[#dad7d4]">
        <h1 className="text-center text-[25px] my-4 font-[600]">
          Make Your School & Skill Donations Here.
        </h1>
        <input
          type="email"
          placeholder="Full Name"
          value={name}
          className={styles.input}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Email"
          value={email}
          className={styles.input}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          className={styles.input}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Amount"
          value={amount}
          className={styles.input}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <PaystackButton className={styles.button} {...componentProps} />
      </div>
    </div>
  );
};

export default Donation;
