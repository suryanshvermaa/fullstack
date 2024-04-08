import styles from "../register/style.module.css";
import { ImOmega } from "react-icons/im";
import Image from "next/image";
import Education from "../register/education.png";
import { FcGoogle } from "react-icons/fc";

const login = () => {
  return (
    <>
      <div className={` h-[100vh] w-[100vw]  blur-md ${styles.svImage} `}></div>
      <div
        className={`h-[100%] w-[100%] opacity-[27%] bg-white ${styles.position}`}
      >
        <div className={`w-[58%] h-[100%] bg-[#FF3707] ${styles.rightlogin}   `}></div>
      </div>
      {/* main content */}

      <div className={` ${styles.position} `}>
        {" "}
        <div className={`h-[80px] flex flex-row  ml-20  `}>
          <ImOmega className="mt-6 h-[60px] w-[55.26px] " color={"red"} />
          <div className=" ml-5 mt-2">
            <h1 className="text-[60px] text-[#484848] font-semibold">mega</h1>
          </div>
        </div>
    
               <div className="w-[40%] ml-20 flex items-center justify-center"> <div className="mt-[70px] mr-20 w-[40%] flex flex-col justify-start">
          <label htmlFor="Email " className="text-[20px] text-[#484848] ">Email</label>
          <input type="text" className="bg-transparent border-[#929292] border-[2px] w-[365px] h-[40px] rounded-md p-3 text-[#929292]" placeholder="Enter email here" />

         
          <label htmlFor="Password" className="text-[20px] mt-9 text-[#484848]">Password</label>
          <input type="password" className="bg-transparent border-[#929292] border-[2px] w-[365px] h-[40px] rounded-md p-3 text-[#929292]"  placeholder="Enter your password here" />

          <button className="w-[365px] h-[40px] bg-[#FF3707] rounded-full mt-[90px] flex justify-center items-center font-bold text-[20px] text-white">
              Sign Up
            </button>
            <button className="w-[365px] h-[40px] bg-transparent border-[#929292] border-[2px] rounded-full mt-4 flex justify-center items-center font-bold text-[15px] text-[#929292]">
            <FcGoogle className="h-[30px] w-[30px] mr-3" />
              Sign Up with google
            </button>

           <div className="w-[365px] flex justify-center  h-[30px] mt-5">
            
            <p className=" font-light text-[#929292] text-[18px] inline ">Do you have an account?<span className="font-light text-[#FF3707] inline ">Log in</span></p>
            
           </div>
        </div></div>

      </div>
      <div className={`w-[60%]  ${styles.positionSide}`}>
        <div className={`h-[80px] flex flex-col  mr-20 items-end `}>
          <div className="flex flex-row justify-end">
            <div className="  mt-2">
              <h1 className="text-[30px] mt-3 text-[#484848] font-semibold">
                Sign in
              </h1>
            </div>
            <ImOmega
              className="mt-6 ml-0 h-[30px] w-[55.26px] "
              color={"red"}
            />
          </div>
          <p className="text-[#484848] ">Sign in with best plateform</p>
        </div>
        
       <div className="ml-[300px] h-[50%] w-[60vw] mt-[50px] mr-20">
          <div className="h-[50%] w-auto flex flex-col h-[50vh] leading-normal mr-20 ">
            <div className="flex flex-row w-[60vw]">
              <Image src={Education} className="h-[100px]  w-[120px] " />
              <div className="text-[60px]  text-[#484848] font-bold ">
                Learn with
              </div>
             
            </div>
            <div className="mt-2 text-[60px] text-[#FF3707] font-bold">
              Omega
            </div>
            <div className="mt-5">
              <p className="text-[#484848]">
                Dive into the modern world learn from <br /> best teachers
              </p>
            </div>
            <button className="w-[27vw] h-[9vh] bg-[#FF3707] rounded-full mt-6 flex justify-center items-center font-bold text-[26px] text-white">
              Get Started
            </button>
            <button className="w-[27vw] h-[9vh] bg-transparent border-[#FF3707] border-[2px] rounded-full mt-6 flex justify-center items-center font-bold text-[26px] text-[#FF3707]">
              Log In
            </button>
          </div>
        
        
        </div> 
       
      </div>
    </>
  );
};
export default login;
