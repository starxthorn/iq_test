"use client";
import React from "react";
import Button from "./Button";
import { useSession } from "next-auth/react";

const Hero = () => {
  const session = useSession();
  return (
    <>
      <section className="bg-violet-500 w-full h-[35vh] text-white flex items-center justify-center text-center">
        <div className="w-auto px-4">
          <h1 className="lg:text-6xl text-2xl font-bold">
            Test Your Self using IQ Test
          </h1>
          <p className="lg:mt-5 mt-3 lg:w-[60vw] leading-relaxed lg:text-xl text-md">
            We can also learn how our intelligence has the potential to change
            the world for the better.
          </p>
          {session.data === null ? (
            <>
              <Button
                text="Login"
                buttonStyles="bg-white text-black rounded-md px-5 py-2 hover:opacity-80 mt-4"
              />
            </>
          ) : (
            <>
              <h1 className="mt-4 font-semibold text-xl">{`Welcome, ${session.data?.user?.name}`}</h1>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Hero;
