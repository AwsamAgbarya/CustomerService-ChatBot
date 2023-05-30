import ChatMessage from "./ChatMessage";
import React, { useState } from "react";
import TextArea from "./WritingArea";

// Move Style to Css file when done debugging
const chatStyle = {
  height: "918px",
  overflow: "auto"
}

function Chat() {
  // State chats to store all the text messages saved on the screen
  const [chats,setChat] = useState<any[]>([])
  const [LastMsgId,setMsg] = useState(0)

  // Function handleNewMsg triggered by writingArea to update the chats with the new request and response
  const handleNewMsg = (text:string, timeDate:Date, question:boolean):number=>{
    let time = timeDate.getHours() + ":" + timeDate.getMinutes();
    setChat(chats => [...chats,{text,time,question,LastMsgId}])
    setMsg(LastMsgId => LastMsgId+1)
    return LastMsgId
  }

  // Finalizes the div by adding all the messages
  return <>
      <div style={chatStyle}>
        {chats.length > 0 ? chats.map((chat: { text: string; time: string; question: boolean; LastMsgId:number}) => 
        <ChatMessage text={chat.text} time={chat.time} question={chat.question} id={chat.LastMsgId} />) : "No message history"}
      </div>
      <TextArea onAddedMessage={handleNewMsg} />
    </>;
}

export default Chat;


