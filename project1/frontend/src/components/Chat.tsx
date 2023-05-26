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
  const [chats,setChat] = useState<any[]>([{text:"xd",time:"8:00",question:true}])


  const handleNewMsg = (text:string, time:string, question:boolean)=>{
    const temp_arr = [...chats,{text,time,question}]
    console.log(chats)
    setChat([...chats,{text,time,question}])
    console.log(chats)
    alert(temp_arr)
  }

  // Finalizes the div by adding all the messages
  return <>
      <div style={chatStyle}>
        {chats.length > 0 ? chats.map(chat => <ChatMessage text={chat.text} time={chat.time} question={chat.question} />) : "No message history"}
      </div>
      <TextArea onAddedMessage={handleNewMsg} />
    </>;
}

export default Chat;
