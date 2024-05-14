"use client"
import Image from 'next/image'
const { default: Sidebar } = require("../components/Sidebar");
import { useEffect, useState } from "react";
import { GrAttachment } from "react-icons/gr";
import { io } from 'socket.io-client';
import { jwtDecode } from 'jwt-decode';
import { getCookie } from 'react-use-cookie';
import axios from 'axios';


const chat = () => {
  

  const selectedUserMessages=[
    {
      _id:'857ouwf',
      sender:'0980990',
      recipient:'9876',
      message:'hi baby'
    },
    {
      _id:'857ouwf',
      sender:'9876',
      recipient:'0980990',
      message:'ha bolo'
    },
    {
      _id:'857ouwf',
      sender:'0980990',
      recipient:'9876',
      message:'hi baby'
    },
    {
      _id:'857ouwf',
      sender:'9876',
      recipient:'0980990',
      message:'hjfshj'
    },
    {
      _id:'857ouwf',
      sender:'0980990',
      recipient:'9876',
      message:'hi baby'
    },
    
  ] 
  const studentsObj=[{
    _id:'786733ghgd',
    name:'Suryansh Verma',
    category:'Student',
    profilePic:'/user.jpg'
  },
  {
    _id:'786733gfd',
    name:'Suryansh Verma',
    category:'Student',
    profilePic:'/user.jpg'
  },
  {
    _id:'7867whwrhgd',
    name:'Suryansh Verma',
    category:'Student',
    profilePic:'/user.jpg'
  },
  {
    _id:'7867ssdgd',
    name:'Suryansh Verma',
    category:'Student',
    profilePic:'/user.jpg'
  },
  {
    _id:'786733sdgd',
    name:'Suryansh Verma',
    category:'Student',
    profilePic:'/user.jpg'
  },
  {
    _id:'78673yhgd',
    name:'Suryansh Verma',
    category:'Student',
    profilePic:"/user.jpg"
  },

]  

  const [selectedStudent,setSelectedStudent]=useState(['']);
  const [messages,setMessages]=useState(selectedUserMessages);
  const [ourUser,setOurUser]=useState('');
  const [inputMessage,setInputMessage]=useState('');
  const [students,setStudents]=useState(studentsObj);
  const [socket,setSocket]=useState('');

   //cookie

   useEffect(()=>{
    async function cookie(){
     try {
      const token =await getCookie('authToken');
      const decoded=await jwtDecode(token);
      setOurUser(decoded);
      console.log(decoded);
      const Url='http://localhost:8000';
      const socket = io(Url);
      setSocket(socket);
      const ourId=ourUser._id;
    socket.emit("userId",ourId);
     } catch (error) {
        console.log('error');
     }
    }
  
     cookie();
   },[]);
  
     
  

 

  useEffect(()=>{
     axios.get('http://localhost:3000/api/users').then((res)=>{
      console.log(res.data)
      setStudents(res.data);
     },[])
     
  },[])


  useEffect(()=>{
     ourUser?._id && axios.get(`http://localhost:3000/api/message/${ourUser._id}/${selectedStudent._id}`).then((res)=>{
      setMessages(res.data);
      console.log(res.data);
    })
  },[selectedStudent]);
//socket implementation 



// useEffect(()=>{
//   const Url='http://localhost:8000';
//   const socket = io(Url);
//   setSocket(socket);
//     try {
  
//   const ourId=ourUser?._id;
// socket.emit("userId",ourId);
// } catch (error) {
//   console.log(error);
// }
// },[]);

    
 

 //messages recieved from server


  socket && socket.on('message',(message)=>{
    setMessages([...messages,message]);
    console.log(message);
  })

   const handleSendMessage=()=>{
   
   if(inputMessage){
    const messageObj={
      sender:ourUser._id,
      recipient:selectedStudent._id,
      message:inputMessage
    };
    socket.emit('message',messageObj);
    setMessages([...messages,{...messageObj,_id:Date.now()}])
    setInputMessage('');
   }
   }

  

  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-white">
        <Sidebar />
        <div className="w-[80vw] h-full ml-[20vw] bg-[#EFEFEF] flex flex-row items-center ">
        <div className="w-[23vw]  ml-[2vh]  h-[98vh] bg-white rounded-t-[7px] flex">
          <div className="w-[23vw]   fixed  h-[98vh] bg-white rounded-t-[7px] flex">
            <div className="w-[19vw] m-[2vw]">
              <h1 className="text-[24px] font-semibold mt-3 font-poppins ml-5 text-slate-700">
                Students
              </h1>

             {
              students.map((student)=>( <div key={student._id} className={` w-[19vw] h-[9vh] rounded-[8px] mt-5 flex flex-row  items-center ${selectedStudent._id==student._id && 'bg-[#ABDBEF]'}` } onClick={()=>setSelectedStudent(student)}>
              <Image src={'/user'} className="h-[45px] w-[45px] bg-[#D9D9D9] rounded-[50%] ml-3" width={45} height={45}/>
                {" "}
              
              <div className="flex flex-col ml-3">
                <p className="font-bold text-[15px] text-slate-700 ">
                 {student.name}
                </p>
                <p className="font-light text-[10px] text-slate-700">
                  {student.category}
                </p>
              </div>
            </div>))
             }

             

            
             

            

             
            </div>
          </div>
          </div>

          <div className="w-[55vw] ml-[2vh]  h-full rounded-[7px]  flex flex-col ">
           
            {
              selectedStudent?._id ?  <div>
                <div className="h-[70px] mt-3 bg-white rounded-t-[7px]">
              <div className="h-[70px] w-[310px] flex flex-row items-center ">
                <div className="h-[45px] w-[45px] bg-[#D9D9D9] rounded-[50%] ml-3">
                  {" "}
                </div>
                <div className="flex flex-col ml-3">
                  <p className="font-bold text-[15px] text-slate-700">
                    {selectedStudent.name}
                  </p>
                  <p className="font-light text-[10px] text-slate-700">
                    {selectedStudent.category}
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[76vh] mt-1 w-[820px]  fixed bg-white"style={{overflow:'scroll',scrollbarWidth:'none'}}>
              <div className="  flex flex-col" >
              

               {
               messages&& messages.map((message)=>(
                  message.sender!=ourUser._id ?  <div
                  className="bg-[#D9D9D9]  w-[330px] p-3 text-black text-slate-700 font-poppins mt-6 ml-[5px] px-7"
                  style={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                    borderBottomRightRadius: "20px",
                  }}
                >
                  {" "}
                  {message.message}
                </div>
                :    <div
                className="bg-[#3F6DEC] relative w-[330px] p-3 px-7  text-white text-[15px] font-poppins mt-6 "
                style={{
                  left: "26vw",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                  borderBottomLeftRadius: "20px",
                }}
              >
                {" "}
               {message.message}
              </div>
                ))
               }
               
              </div>

           
            <div
                style={{ position: "fixed", bottom: "2vh" }}
                className="border-[#A4A4A4] border-[2px] h-[10vh] w-[46vw] ml-14 rounded-[15px] flex flex-row items-center"
              >
                <input
                  type="text"
                  className="border-none ml-4 w-[34vw] bg-transparent  focus:border-white focus:border-[2px] active:border-white active:border-[2px] p-3 text-[#B1B1B1]"
                  placeholder="Type message..."
                  onChange={(e)=>setInputMessage(e.target.value)}
                  value={inputMessage}
                />
                <GrAttachment
                  className="h-[30px] w-[34px] mr-4"
                  color="#848484"
                />
                <button className="text-[#3F6DEC] bg-[#AEBBE0] p-3 px-4 rounded-[8px]" onClick={handleSendMessage}>
                  Send
                </button>
              </div>
            </div>
              </div>
             
              :
              <div className="h-full bg-white rounded-t-[7px] flex justify-center items-center">
                <div className='h-[200px] w-[600px] border-[2px] border-slate-600 flex items-center justify-center rounded-[8px]'> <h1 className='text-[50px] font-bold text-slate-700 font-poppins '> Select Student for Chat</h1></div>
               

              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
};
export default chat;
