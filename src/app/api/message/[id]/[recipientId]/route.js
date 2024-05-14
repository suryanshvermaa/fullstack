import Message from '@/app/messageModel/messageModel';
import {NextResponse} from 'next/server';


export async function GET(request,{params}){
    const messageId=await params.id;
    const recipientId=await params.recipientId;
    try {
        const messages=await Message.find({messageId,recipientId});
        console.log(messages);
        return NextResponse.json(messages);
    } catch (error) {
        return NextResponse.json('err in fetching messages');
    }
}