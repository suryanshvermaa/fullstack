import { NextResponse } from "next/server";
import dbConnection from "@/app/dbConnection/dbConnection.js";
import User from "@/app/dbModels/userModel.js";

dbConnection();

export async function POST(request) {
  try {
    const res = await request.json();
    const {
      otp,
      email,
      category,
      username,
      qualifications,
      profilePic,
      phoneNumber,
    } = res;
    console.log(res);

    const user = await User.findOne({ email });
    if (user.otp == otp) {
      user.category = category;
      user.username = username;
      user.qualifications = qualifications;
      user.profilePic = profilePic;
      user.phoneNumber = phoneNumber;
      await user.save();
      return NextResponse.json({
        message: "registration successful",
      });
    }else{
        
            return NextResponse.json({
                error:'server error '
              })
    }
  } catch (error) {
    return NextResponse.json({
      error: "server error ",
    });
  }
}
