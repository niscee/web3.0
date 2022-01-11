import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import Loader from "./Loader";

const features = [
  "Reliability",
  "Security",
  "Ethereum",
  "Web 3.0",
  "Low Fees",
  "Blockchain",
];

// input fields.
const Input = ({ placeholder, name, type, value, handleChange }) => {
  return (
    <input
      placeholder={placeholder}
      name={name}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="my-2 w-full rounded-sm p-3 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
  );
};

const Welcome = () => {
  // connecting to metamask.
  const connectWalletHandler = () => {
    alert("how are you man?");
  };

  // send ether.
  const handleSubmit = () => {
    alert("submitted.");
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex md:flex-row flex-col items-center justify-between md:p-20 px-4 py-12">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white py-1 text-gradient">
            Transfer Crypto <br /> wherever you want
          </h1>
          <p className="text-left mt-5 text-white md:w-9/12 w-11/12 text-base">
            Buy or sell crypto whenever, wherever on this platform. Best site{" "}
            for crypto transaction
          </p>
          <button
            type="button"
            onClick={connectWalletHandler}
            className="w-44 items-center my-5
             bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>

          <div className="my-10 p-2 md:w-9/12 w-11/12 grid md:grid-cols-3 grid-cols-2">
            {features.map((feature) => {
              return (
                <div className="text-white text-center text-base white-glassmorphism p-2 font-semibold drop-shadow-md m-2 hover:scale-[0.9] hover:bg-[#2546bd]">
                  {feature}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mt-10 md:mt-0">
          <div
            className="p-3 justify-end items-start flex flex-col rounded-xl h-40 sm:w-72 w-full my-5 
          eth-card white-glassmorpism"
          >
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={21} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  0xasdasa......fashd
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 h-auto sm:w-96 w-full flex flex-col justify-start items-start blue-glassmorphism">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={() => {}}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="text"
              handleChange={() => {}}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={() => {}}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={() => {}}
            />

            <div className="h-[1px] w-full bg-gray-400 my-2"></div>
            {true ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
              >
                Send now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
