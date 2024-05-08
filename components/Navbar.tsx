"use client";
import React, { useState } from "react";
import Button from "./Button";
import Register from "./Register";
import Login from "./Login";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [islogin, setislogin] = useState<boolean>(false);
  const [isregister, setisregister] = useState<boolean>(false);
  const session = useSession();
  return (
    <>
      <header className="relative w-full">
        <nav className="flex items-center justify-between lg:px-10 px-2 py-4">
          <div>
            <h1 className="lg:text-3xl text-2xl font-bold">
              IQ<span className="text-violet-500">Test</span>
            </h1>
          </div>
          <div>
            {session.data === null ? (
              <>
                <Button
                  clicked={() => setislogin(true)}
                  text="Login"
                  buttonStyles="px-5 py-2 rounded-md hover:opacity-80 bg-violet-500 text-white"
                />
              </>
            ) : (
              <>
                <div className="flex items-center justify-center lg:gap-5 gap-3"> 
                  <h1>{`Welcome,${session.data?.user?.name}`}</h1>
                  <Button
                    text="Sign Out"
                    clicked={() => signOut()}
                    buttonStyles="px-4 py-2 rounded-md hover:opacity-80 bg-violet-500 text-white"
                  />
                </div>
              </>
            )}
          </div>
        </nav>
      </header>
      {islogin && <Login registered={setisregister} loggedin={setislogin} />}
      {isregister && (
        <Register registered={setisregister} loggedin={setislogin} />
      )}
    </>
  );
};

export default Navbar;
