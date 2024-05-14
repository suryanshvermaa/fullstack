import dbConnection from '@/app/dbConnection/dbConnection';
import User from '@/app/dbModels/userModel';
import {NextResponse} from 'next/server';
 
dbConnection();


export async function GET(request){
    try {
        const users=await User.find();
       
        return NextResponse.json(users);
    } catch (error) {
     return   NextResponse.json('err in fetching users')
    }
}