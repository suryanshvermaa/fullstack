
"use client"
import { ImOmega } from "react-icons/im";
import { RxDashboard } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";

import { IoChatbubbleOutline } from "react-icons/io5";
import { GrSchedules } from "react-icons/gr";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";
const Sidebar=()=>{

    const [selectedTab, setSelectedTab] = useState("Dashboard");

    const selectingTab = (tab) => {
      setSelectedTab(tab);
    };
    return <>
    
       {/* sidebar component starts */}
       <div className="bg-white border-[#DBD7D7]   border-r-[2px] h-[100vh] w-[20vw]" style={{position:'fixed'}}>
          <div className="h-[100vh] w-[18vh] ml-5">
            <div className={`h-[80px] flex flex-row   `}>
              <ImOmega className="mt-6 h-[30px] w-[35px] " color={"red"} />
              <div className=" ml-1 mt-6">
                <h1 className="text-[25px] text-[#484848] font-semibold">
                  mega
                </h1>
              </div>
            </div>

            <div className="mt-5">
              <div
                className={`h-[8vh] w-[16vw]  rounded-[10px] flex flex-row items-center justify-center text-[#b1b1b1] ${
                  selectedTab == "Dashboard" && "bg-[#FF3707] text-white"
                }`}
                onClick={() => setSelectedTab("Dashboard")}
              >
                <RxDashboard
                  className="h-[30px] mr-3 w-[30px]"
                  color={`${selectedTab == "Dashboard" ? "white" : "#b1b1b1"}`}
                />
                <p className=" font-poppins text-[16px]">Dashboard</p>
              </div>

              <div
                className={`h-[8vh] w-[16vw]  rounded-[10px] flex flex-row items-center mt-6 text-[#b1b1b1] ${
                  selectedTab == "Content" && "bg-[#FF3707] text-white"
                }`}
                onClick={() => setSelectedTab("Content")}
              >
                <IoBagHandleOutline
                  className="h-[30px] mr-3 w-[30px] ml-10"
                  color={`${selectedTab == "Content" ? "white" : "#b1b1b1"}`}
                />
                <p className=" font-poppins text-[16px]">Content</p>
              </div>

              <div
                className={`h-[8vh] w-[16vw]  rounded-[10px] flex flex-row items-center mt-6 text-[#b1b1b1] ${
                  selectedTab == "Chat" && "bg-[#FF3707] text-white"
                } `}
                onClick={() => setSelectedTab("Chat")}
              >
                <IoChatbubbleOutline
                  className="h-[30px] w-[30px] ml-10"
                  color={`${selectedTab == "Chat" ? "white" : "#b1b1b1"}`}
                />
                <p className="font-poppins text-[16px] ml-4 ">Chat</p>
              </div>

              <div
                className={`h-[8vh] w-[16vw]  rounded-[10px] flex flex-row items-center mt-6 text-[#b1b1b1] ${
                  selectedTab == "Schedule" && "bg-[#FF3707] text-white"
                } `}
                onClick={() => setSelectedTab("Schedule")}
              >
                <GrSchedules
                  className="h-[30px] mr-3 w-[30px] ml-10"
                  color={`${selectedTab == "Schedule" ? "white" : "#b1b1b1"}`}
                />
                <p className=" font-poppins text-[16px]">Schedule</p>
              </div>

              <div
                className={`h-[8vh] w-[16vw]  rounded-[10px] flex flex-row items-center mt-6 text-[#b1b1b1] ${
                  selectedTab == "Video Call" && "bg-[#FF3707] text-white"
                }`}
                onClick={() => setSelectedTab("Video Call")}
              >
                <MdOutlineVideoCall
                  className="h-[38px] mr-3 w-[38px] ml-10"
                  color={`${selectedTab == "Video Call" ? "white" : "#b1b1b1"}`}
                />
                <p className=" font-poppins text-[16px]">Video Call</p>
              </div>

              <div
                className={`h-[8vh] w-[16vw]  rounded-[10px] flex flex-row items-center mt-6 text-[#b1b1b1]   ${
                  selectedTab == "Settings" && "bg-[#FF3707] text-white"
                }`}
                onClick={() => setSelectedTab("Settings")}
              >
                <IoSettingsOutline
                  className={`h-[30px] mr-3 w-[30px] ml-10 `}
                  color={`${selectedTab == "Settings" ? "white" : "#b1b1b1"}`}
                />
                <p className=" font-poppins text-[16px]">Settings</p>
              </div>

              <button className=" bg-transparent border-[#FF3707] border-[2px] rounded-full text-[#FF3707] h-[8vh] w-[13vw] ml-4 mt-8 text-[22px] font-bold hover:bg-[#FF3707] hover:text-white">
                Log out
              </button>
            </div>
          </div>
          <div></div>
        </div>

        {/* sidebar component ends here */}</>
}

export default Sidebar;