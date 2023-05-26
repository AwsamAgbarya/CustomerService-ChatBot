import ChatMessage from "./ChatMessage";
import React, { useState } from "react";
import { Fragment } from "react";
import TextArea from "./WritingArea";
import axios from "axios";

// Move Style to Css file when done debugging
const chatStyle = {
  height: "918px",
  overflow: "auto"
}

function Chat() {

  const [chats,setChat] = useState<any[]>([])

  const handleNewMsg = (text:string, time:string, question:boolean)=>{
    setChat(chats => [...chats,{text,time,question}])
  }

  // Finalizes the div by adding all the messages
  return <>
      <div style={chatStyle}>
        {chats.length > 0 ? chats.map((chat: { text: string; time: string; question: boolean; }) => <ChatMessage text={chat.text} time={chat.time} question={chat.question} />) : "No message history"}
      </div>
      <TextArea onAddedMessage={handleNewMsg} />
    </>;
}

export default Chat;
function useEffect(arg0: () => void) {
  throw new Error("Function not implemented.");
}

