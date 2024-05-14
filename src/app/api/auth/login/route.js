import dbConnection from "@/app/dbConnection/dbConnection";
import User from "@/app/dbModels/userModel";
import {NextResponse} from 'next/server';
import jwt from 'jsonwebtoken';

dbConnection();

export async function POST(request){

    try {
        const res=await request.json();
        const {email,password}=res;
        const user=await User.findOne({email});
        const userPassword=await user.password;
        if(userPassword==password){
            const token=await jwt.sign({userId:user._id,username:user.name,category:user.category},'ansh9918028721');
            const res=NextResponse.json({
               message:'success'
            })
            res.cookies.set('authToken',token);
            return res;
        }else{
            return NextResponse.json({
                message:'wrong Password'
            }) 
        }

    } catch (error) {
        return NextResponse.json({
            message:'error in login'
        })
    }
}