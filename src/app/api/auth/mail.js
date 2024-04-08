import nodemailer from 'nodemailer';

const otpGenAndSend=async(email)=>{

   const MY_EMAIL="suryanshverma9580@gmail.com"
   const MY_PASSWORD="bohs wcjk lycr itqe"
    const transporter=await nodemailer.createTransport({
       service:'gmail',
       auth:{
           user:MY_EMAIL,
           pass:MY_PASSWORD
       }
    });

    
    //random otp generation
    const randomNumber=Math.random()*1000000;
    let otp=Math.floor(randomNumber).toString();

    if(otp.length!=6){
     const powerFactor=6-otp.length;
    otp*=Math.pow(10,powerFactor);
    }
   
  

    

    const info=await transporter.sendMail({
       from:'suryanshverma9580@gmail.com',
       to:email,
       subject:'Omega Verification !!',
       text:"Omega Verification !!",
       html:`<h2 style="text-align:center;">YOUR OTP for verfication on omega learning  is</h2><h1 style="text-align:center;"><b>${otp}</b></h1>`
    })
    return otp;
}

export default otpGenAndSend;