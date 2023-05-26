import ChatMessage from "./ChatMessage";
import React, { useState } from "react";
import { Fragment } from "react";
import TextArea from "./WritingArea";

// Move Style to Css file when done debugging
const chatStyle = {
  height: "918px",
  overflow: "auto"
}

function Chat() {

  const [chats,setChat] = useState<any[]>([]);

  const handleNewMsg = (text:string, time:string, question:boolean)=>{
    let temp_arr = chats
    temp_arr.push({text,time,question})
    setChat(temp_arr)
    alert(temp_arr)
  }

  // Finalizes the div by adding all the messages
  return <>
      <div style={chatStyle}>
        {chats.length > 0 ? chats.map(chat => <ChatMessage msg={chat.msg} currDate={chat.currDate} question={chat.question} />) : "No message history"}
      </div>
      <TextArea onAddedMessage={handleNewMsg} />
    </>;
}

export default Chat;
