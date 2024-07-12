import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function login() {
  return (
    <div className="min-h-screen bg-white text-black flex justify-center">
      <div className="lg:w-2/3 xl:w-5/12 p-6 sm:p-14">
        <div className="flex flex-col items-center mt-10">
          <img className="w-mx-auto" src="/images/logo.png" alt="" />
        </div>
        <div className="mt-10 flex flex-col items-center">
          <div className="w-full flex flex-col mt-8">
            <h1 className="mb-8 text-orange-300 font-bold text-2xl">Login</h1>
            <div>
              <label className="font-bold mb-2">Email or Mobile</label>
              <input
                type="text"
                placeholder="Enter registered email or mobile"
                className="w-full p-4 rounded-lg mb-4 border"
              ></input>
              <label className="font-bold mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full p-4 rounded-lg mb-4 border"
              ></input>
            </div>
            <div className="flex flex-col items-end mt-2">
              <a className="text-sm font-semibold" href="">
                FORGOT PASSWORD?
              </a>
            </div>

            <button className=" mt-5 border bg-orange-300 font-bold p-3 rounded-lg">
              SUBMIT
            </button>

            <div className="flex flex-col items-center mt-20">
                <h1>Not have an account? <Link className="text-blue-700 underline" href={""}>Register Here</Link></h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-orange-100 text-center hidden lg:flex">
        <img className="m-20 ml-40 mt-25" src="/images/Group 80.png" alt="" />
      </div>
    </div>
  );
}
