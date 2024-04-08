import dbConnection from "@/app/dbConnection/dbConnection";
import User from "@/app/dbModels/userModel";
import {NextResponse} from 'next/server';
import jwt from 'jsonwebtoken';

dbConnection();
export async function POST(request){
    try {
        const res=await request.json();
        const email=res.email;
        const otp=res.otp;
        const user=await User.findOne({email});
        const userOtp=await user.otp;
        if(userOtp==otp){
            user.otp='';
            await user.save();
            const token=await jwt.sign({userId:user._id},'ansh9918028721');
            const res=NextResponse.json({
               message:'success'
            })
            res.cookies.set('authToken',token);
            return res;
        }else{
            return NextResponse.json({
                error:'wrong OTP'
            })
        }
       
        
    } catch (error) {
        return NextResponse.json({
            error:'wrong OTP'
        })
    }
}