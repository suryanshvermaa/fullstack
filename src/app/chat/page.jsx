const { default: Sidebar } = require("../components/Sidebar");
import { GrAttachment } from "react-icons/gr";

const chat = () => {
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
                  <p className="font-bold text-[15px] text-slate-700 ">Suryansh Verma</p>
                  <p className="font-light text-[10px] text-slate-700">Student</p>
                </div>
              </div>

              <div className=" w-[19vw] h-[9vh] rounded-[8px] mt-5 flex flex-row items-center">
                <div className="h-[45px] w-[45px] bg-[#D9D9D9] rounded-[50%] ml-3">
                  {" "}
                </div>
                <div className="flex flex-col ml-3">
                  <p className="font-bold text-[15px] text-slate-700">Rishabh</p>
                  <p className="font-light text-[10px] text-slate-700">Student</p>
                </div>
              </div>

              <div className=" w-[19vw] h-[9vh] rounded-[8px] mt-5 flex flex-row items-center">
                <div className="h-[45px] w-[45px] bg-[#D9D9D9] rounded-[50%] ml-3">
                  {" "}
                </div>
                <div className="flex flex-col ml-3">
                  <p className="font-bold text-[15px] text-slate-700">Devesh</p>
                  <p className="font-light text-[10px] text-slate-700">Student</p>
                </div>
              </div>

              <div className=" w-[19vw] h-[9vh] rounded-[8px] mt-5 flex flex-row items-center">
                <div className="h-[45px] w-[45px] bg-[#D9D9D9] rounded-[50%] ml-3">
                  {" "}
                </div>
                <div className="flex flex-col ml-3">
                  <p className="font-bold text-[15px] text-slate-700">Jatin </p>
                  <p className="font-light text-[10px] text-slate-700">Student</p>
                </div>
              </div>

              <div className=" w-[19vw] h-[9vh] rounded-[8px] mt-5 flex flex-row items-center">
                <div className="h-[45px] w-[45px] bg-[#D9D9D9] rounded-[50%] ml-3">
                  {" "}
                </div>
                <div className="flex flex-col ml-3">
                  <p className="font-bold text-[15px] text-slate-700">Palak</p>
                  <p className="font-light text-[10px] text-slate-700">Student</p>
                </div>
              </div>

              <div className=" w-[19vw] h-[9vh] rounded-[8px] mt-5 flex flex-row items-center">
                <div className="h-[45px] w-[45px] bg-[#D9D9D9] rounded-[50%] ml-3">
                  {" "}
                </div>
                <div className="flex flex-col ml-3">
                  <p className="font-bold text-[15px] text-slate-700 ">Real Palak</p>
                  <p className="font-light text-[10px] text-slate-700">Student</p>
                </div>
              </div>

              <div className=" w-[19vw] h-[9vh] rounded-[8px] mt-5 flex flex-row items-center">
                <div className="h-[45px] w-[45px] bg-[#D9D9D9] rounded-[50%] ml-3">
                  {" "}
                </div>
                <div className="flex flex-col ml-3">
                  <p className="font-bold text-[15px]  text-slate-700">Asli Palak</p>
                  <p className="font-light text-[10px] text-slate-700">Student</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[55vw] ml-[2vh]  h-[98vh] rounded-t-[7px] flex flex-col ">
            <div className="h-[70px] bg-white rounded-t-[7px]">
              <div className="h-[70px] w-[310px] flex flex-row items-center ">
                <div className="h-[45px] w-[45px] bg-[#D9D9D9] rounded-[50%] ml-3">
                  {" "}
                </div>
                <div className="flex flex-col ml-3">
                  <p className="font-bold text-[15px] text-slate-700">Suryansh Verma</p>
                  <p className="font-light text-[10px] text-slate-700">Student</p>
                </div>
              </div>
            </div>
            <div className="h-full mt-1 bg-white">
              <div className="h-[74vh]   flex flex-col" >
                   <div className="bg-[#3F6DEC] relative w-[330px] p-3 px-7 text-white text-[15px] font-poppins mt-2 " style={{left:'26vw',borderTopLeftRadius:'20px',borderTopRightRadius:'20px',borderBottomLeftRadius:'20px'}}> hello hi tata bye !!!!!!</div>

                   <div className="bg-[#D9D9D9]  w-[330px] p-3 text-black text-slate-700 font-poppins mt-4 ml-[5px] px-7" style={{ borderTopLeftRadius:'20px',borderTopRightRadius:'20px',borderBottomRightRadius:'20px'}}> You are cute guy</div>
                   <div className="bg-[#3F6DEC] relative w-[330px] p-3 px-7 text-white text-[15px] font-poppins mt-2 " style={{left:'26vw',borderTopLeftRadius:'20px',borderTopRightRadius:'20px',borderBottomLeftRadius:'20px'}}> hello hi tata bye !!!!!!</div>
              </div>

            
                  
            
              <div
                style={{ position: "fixed", bottom: "2vh" }}
                className="border-[#A4A4A4] border-[2px] h-[10vh] w-[46vw] ml-14 rounded-[15px] flex flex-row items-center"
              >
                <input
                  type="text"
                  className="border-none ml-4 w-[34vw]  focus:border-white focus:border-[2px] active:border-white active:border-[2px] p-3 text-[#B1B1B1]"
                  placeholder="Type message..."
                />
                <GrAttachment
                  className="h-[30px] w-[34px] mr-4"
                  color="#848484"
                />
                <button className="text-[#3F6DEC] bg-[#AEBBE0] p-3 px-4 rounded-[8px]">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default chat;
