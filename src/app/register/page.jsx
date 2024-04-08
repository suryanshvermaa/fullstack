"use client"
import styles from "./style.module.css";
import { ImOmega } from "react-icons/im";
import Image from "next/image";
import Education from "./education.png";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import axios from "axios";
import { getStorage, ref,uploadBytes } from "firebase/storage";
import app from "../firebaseConfigurations/firebase";



const register = () => {
    
   const [email,setEmail]=useState('suryanshv.ug23.ee@nitp.ac.in');
   const [password,setPassword]=useState('');
   const [name,setName]=useState('');
   const [otp,setOtp]=useState('');
   const [category,setCategory]=useState('teacher');
   const [username,setUsername]=useState('');
   const [qualifications,setQualifications]=useState('');
   const [profilePic,setProfilePic]=useState('');
   const [phoneNumber,setPhoneNumber]=useState(null);


   //checking
//    const storage = getStorage(app);
  
// const pathReference = ref(storage, '{suryanshv.ug23.ee@nitp.ac.in/1712588936464}');
// console.log(pathReference)
   console.log(document.cookie);




   const storeInFirebaseStorage=()=>{
    const filename=`{${email}/${Date.now()}}`
    
    const storage = getStorage(app);
    const storageRef = ref(storage, filename);
    uploadBytes(storageRef, profilePic).then((snapshot) => {
      console.log(snapshot);
    }), 
    (error) => {
       console.log('download unsuccessful')
    }, 
    () => {
      
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        const url=downloadURL;
        console.log('File available at', downloadURL);
       
      });
    }

    return filename;
  
   }

   const handleSignUp=async()=>{
    try {
      const userData={
        email,
        password,
        name
      };

      const res=await axios.post('http://localhost:3000/api/auth',userData);

      console.log(res);
      setScreen('otp');
    } catch (error) {
      console.log('err');
    }
 

   }

   const handleOtp=async()=>{
    try {
      const userData={
        email,
        otp,
      };
      const res=await axios.post('http://localhost:3000/api/auth/otpauth',userData);

      console.log(res);
      if(res.data.message=='success'){
        setScreen('information');
      }else{
        alert('Wrong OTP!!!!');
      }
    
      
    } catch (error) {
      console.log('err');
    }
    
   }

   const handleSubmit=async()=>{
    try {

      const profilePicA= await storeInFirebaseStorage()
      const userData={
        email,
        category,
        username,
        qualifications,
        profilePic:profilePicA,
        phoneNumber
      };
      
      const res=await axios.post('http://localhost:3000/api/auth/otpauth/information',userData);

      console.log(userData);
    
    } catch (error) {
      console.log('err');
    }
   }



  const setScreen=(screen)=>{

    setCurrPage(screen);
  }


  const [currPage,setCurrPage]=useState('information');
  return (
    <>
      <div className={` h-[100vh] w-[100vw]  blur-md ${styles.svImage} `}></div>
      <div
        className={`h-[100%] w-[100%] opacity-[27%] bg-white ${styles.position}`}
      >
        <div className={`w-[58%] h-[100%] bg-[#FF3707]    `}></div>
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
        <div className="ml-20 h-[50%] w-auto mt-[10vh]">
          <div className="h-[50%] w-auto leading-normal ">
            <div className="flex ">
              <div className="text-[60px] text-[#484848] font-bold ">
                Learn with
              </div>
              <Image src={Education} className="h-[100px] w-[120px] ml-10 " />
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
      <div className={`w-[35%]  ${styles.positionSide}`}>
        <div className={`h-[80px] flex flex-col  mr-20 items-end `}>
          <div className="flex flex-row justify-end">
            <div className="  mt-2">
              <h1 className="text-[30px] mt-3 text-[#484848] font-semibold">
                Sign Up
              </h1>
            </div>
            <ImOmega
              className="mt-6 ml-0 h-[30px] w-[55.26px] "
              color={"red"}
            />
          </div>
          <p className="text-[#484848] ">Sign up with best plateform</p>
        </div>
        
        {
          currPage=='signup' ? <div className="mt-[70px] mr-20 w-[40%] flex flex-col justify-start">
               <label htmlFor="Email " className="text-[20px] text-[#484848] ">Email</label>
          <input type="text" className="bg-transparent border-[#929292] border-[2px] w-[365px] h-[40px] rounded-md p-3 text-[#929292]" placeholder="Enter email here" onChange={(e)=>setEmail(e.target.value)} />

          <label htmlFor="Name " className="text-[20px] mt-5 text-[#484848] ">Name</label>
          <input type="text" className="bg-transparent border-[#929292] border-[2px] w-[365px] h-[40px] rounded-md p-3 text-[#929292]" placeholder="Enter your name here" onChange={(e)=>setName(e.target.value)}/>

          <label htmlFor="Password" className="text-[20px] mt-5 text-[#484848]">Password</label>
          <input type="password" className="bg-transparent border-[#929292] border-[2px] w-[365px] h-[40px] rounded-md p-3 text-[#929292]"  placeholder="Enter your password here" onChange={(e)=>setPassword(e.target.value)}/>

          <button className="w-[365px] h-[40px] bg-[#FF3707] rounded-full mt-8 flex justify-center items-center font-bold text-[20px] text-white" onClick={()=>handleSignUp()}>
              Sign Up
            </button>
            <button className="w-[365px] h-[40px] bg-transparent border-[#929292] border-[2px] rounded-full mt-4 flex justify-center items-center font-bold text-[15px] text-[#929292]">
            <FcGoogle className="h-[30px] w-[30px] mr-3" />
              Sign Up with google
            </button>

           <div className="w-[365px] flex justify-center  h-[30px] mt-5">
            
            <p className=" font-light text-[#929292] text-[18px] inline ">Do you have an account?<span className="font-light text-[#FF3707] inline ">Log in</span></p>
            
           </div>
        </div>: currPage=='otp' ? <div className="mt-[70px] mr-20 w-[40%] flex flex-col  ">
         <div className="flex flex-col w-[30vw] items-center">
         <h1 className="text-[38px] font-bold text-center ">Verify Your Email</h1>
          <p className="text-[20px] font-light">Check your email</p>
         </div>
        <input type="number" className="bg-transparent border-[#929292] border-[2px] w-[365px] h-[40px] rounded-md p-3 mt-[70px] ml-3 text-[#929292]" placeholder="Enter OTP here..." onChange={(e)=>setOtp(e.target.value)}/>
        <button className="w-[365px] h-[50px] bg-[#FF3707] rounded-full mt-8 flex justify-center items-center font-bold text-[20px] ml-3 mt-20 text-white" onClick={()=>handleOtp()}>
              Verify
            </button>
       </div>
       :  <div className="mt-[50px] mr-20 w-[40%] flex flex-col justify-start">
             
             <label htmlFor="Category " className="text-[20px] text-[#484848] ">Category</label>
             <select name="category"  className="bg-transparent border-[#929292] border-[2px] w-[365px] h-[40px] rounded-md  text-[#929292]"  defaultValue={'student'} onChange={(e)=>setCategory(e.target.value)}>
              <option value="teacher" className="bg-transparent  w-[365px] h-[40px] rounded-md p-3 ">Teacher</option>
              <option value="student" className="bg-transparent  w-[365px] h-[40px] rounded-md p-3 ">Student</option>
             </select>
                
              <label htmlFor="username" className="text-[20px] text-[#484848] mt-2 ">Username</label>
          <input type="text" className="bg-transparent border-[#929292] border-[2px] w-[365px] h-[40px]  rounded-md p-3 text-[#929292]" placeholder="Enter your phone number here..."onChange={(e)=>setUsername(e.target.value)} />

          <label htmlFor="qualifications" className="text-[20px] text-[#484848] mt-2 ">Qualifications</label>
          <input type="text" className="bg-transparent border-[#929292] border-[2px] w-[365px] h-[40px]  rounded-md p-3 text-[#929292]" placeholder="Enter your qualifications..." onChange={(e)=>setQualifications(e.target.value)}/>

          <label htmlFor="profilePicture" className={`text-[20px] text-[#484848] mt-2 `}>Profile Picture</label>
          <input type="file" className={`  rounded-md  text-[#929292] ${styles.customFileInput}`}  onChange={(e)=>setProfilePic(e.target.files[0])}/>

              <label htmlFor="phone number" className={`text-[20px] text-[#484848] mt-2  `}>Phone Number</label>
          <input type="number" className="bg-transparent border-[#929292] border-[2px] w-[365px] h-[40px]  rounded-md p-3 text-[#929292]" placeholder="Enter your phone number here..." onChange={(e)=>setPhoneNumber(e.target.value)}/>
          <button className="w-[365px] h-[40px] bg-[#FF3707] rounded-full mt-8 flex justify-center items-center font-bold text-[20px] text-white" onClick={()=>handleSubmit()} >
              Submit
            </button>
          </div>
        }
        
      </div>
    </>
  );
};
export default register;
