"use client";
import Sidebar from "../components/Sidebar.jsx";
import { FaPhone } from "react-icons/fa6";

const videocall = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-white">
        <Sidebar />

        <div className="w-[80vw] h-full ml-[20vw] bg-[#EFEFEF] flex flex-row items-center ">
        <div className="w-[23vw] ml-[2vh]  h-[98vh] bg-white rounded-t-[7px] flex">
            <div className="w-[19vw] m-[2vw]">
              <h1 className="text-[24px] font-semibold mt-3 font-poppins ml-5 text-slate-700">
                Students
              </h1>

              <div className="bg-[#ABDBEF]  w-[19vw] h-[9vh] rounded-[8px] mt-5 flex flex-row items-center">
                <div className="h-[45px] w-[45px] bg-[#D9D9D9] rounded-[50%] ml-3">
                  {" "}
                </div>
                <div className="flex flex-col ml-3">
                  <p className="font-bold text-[15px] text-slate-700 ">
                    Suryansh Verma
                  </p>
                  <p className="font-light text-[10px] text-slate-700">
                    Student
                  </p>
                </div>
              </div>

              <div className=" w-[19vw] h-[9vh] rounded-[8px] mt-5 flex flex-row items-center">
                <div className="h-[45px] w-[45px] bg-[#D9D9D9] rounded-[50%] ml-3">
                  {" "}
                </div>
                <div className="flex flex-col ml-3">
                  <p className="font-bold text-[15px] text-slate-700">
                    Rishabh
                  </p>
                  <p className="font-light text-[10px] text-slate-700">
                    Student
                  </p>
                </div>
              </div>

              <div className=" w-[19vw] h-[9vh] rounded-[8px] mt-5 flex flex-row items-center">
                <div className="h-[45px] w-[45px] bg-[#D9D9D9] rounded-[50%] ml-3">
                  {" "}
                </div>
                <div className="flex flex-col ml-3">
                  <p className="font-bold text-[15px] text-slate-700">Devesh</p>
                  <p className="font-light text-[10px] text-slate-700">
                    Student
                  </p>
                </div>
              </div>

              <div className=" w-[19vw] h-[9vh] rounded-[8px] mt-5 flex flex-row items-center">
                <div className="h-[45px] w-[45px] bg-[#D9D9D9] rounded-[50%] ml-3">
                  {" "}
                </div>
                <div className="flex flex-col ml-3">
                  <p className="font-bold text-[15px] text-slate-700">Jatin </p>
                  <p className="font-light text-[10px] text-slate-700">
                    Student
                  </p>
                </div>
              </div>

              <div className=" w-[19vw] h-[9vh] rounded-[8px] mt-5 flex flex-row items-center">
                <div className="h-[45px] w-[45px] bg-[#D9D9D9] rounded-[50%] ml-3">
                  {" "}
                </div>
                <div className="flex flex-col ml-3">
                  <p className="font-bold text-[15px] text-slate-700">Palak</p>
                  <p className="font-light text-[10px] text-slate-700">
                    Student
                  </p>
                </div>
              </div>

              <div className=" w-[19vw] h-[9vh] rounded-[8px] mt-5 flex flex-row items-center">
                <div className="h-[45px] w-[45px] bg-[#D9D9D9] rounded-[50%] ml-3">
                  {" "}
                </div>
                <div className="flex flex-col ml-3">
                  <p className="font-bold text-[15px] text-slate-700 ">
                    Real Palak
                  </p>
                  <p className="font-light text-[10px] text-slate-700">
                    Student
                  </p>
                </div>
              </div>

              <div className=" w-[19vw] h-[9vh] rounded-[8px] mt-5 flex flex-row items-center">
                <div className="h-[45px] w-[45px] bg-[#D9D9D9] rounded-[50%] ml-3">
                  {" "}
                </div>
                <div className="flex flex-col ml-3">
                  <p className="font-bold text-[15px]  text-slate-700">
                    Asli Palak
                  </p>
                  <p className="font-light text-[10px] text-slate-700">
                    Student
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[55vw] ml-[2vh]  h-[98vh] rounded-t-[7px] flex flex-col bg-white "> 
            
          <div className="h-[60%]  flex flex-col items-center justify-center">
               
            <div className="bg-[#B1B1B1] h-[110px] w-[110px] rounded-full"></div>
            <p className="text-slate-700 text-[40px] font-semibold inline mt-5 ">Suryansh Verma</p>
            <p className="text-slate-700 text-[30px] font-light inline">  Student</p>
          </div>

          <div className="h-[40%]  flex flex-col  items-center ">
           <button className="bg-[#00FF00] flex flex-row items-center justify-center w-[330px] rounded-[10px] flex flex-row hover:scale-[1.1] duration-500 "> <FaPhone className="h-[35px] w-[35px] bg-transparent mr-6 " color="white"/> <p className="text-[35px] text-white font-bold">Video Call</p></button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default videocall;
