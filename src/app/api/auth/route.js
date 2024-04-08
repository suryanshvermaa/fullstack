import { NextResponse } from 'next/server'
import dbConnection from '@/app/dbConnection/dbConnection.js'; 
import User from '@/app/dbModels/userModel.js';
import otpGenAndSend from './mail.js';

dbConnection();

export async function POST(request) {
  const res=await request.json();
  try {

    const user=new User(res);
    
    const otp=await otpGenAndSend(res.email);
    user.otp=otp;
    await user.save();

    return NextResponse.json({
        message:'succces'
    },
);

  } catch (error) {
   return NextResponse.json('erroe')
  }
}