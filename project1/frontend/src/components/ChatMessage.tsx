import React from "react";
import { Fragment } from "react";


// Interface to save the structure of the current message
interface Props {
  text:string,
  time:string
  question:boolean
}

// Move styles to Css file when done debugging lmao
const answerStyle = {
  width: "80%",
  height: "20px",
  marginLeft: "50px",
  marginTop: "50px",
  display: "inline"
};
const questionStyle = {
  width: "80%",
  height: "20px",
  marginLeft: "50px",
  marginTop: "50px",
  display: "inline"
};

function ChatMessage(props:Props) {
  // Empty message case
  if (props.text === null || props.text === "") {
    return <></>;
  }
  
  // Display of a message
  return (
    <div style={props.question ? answerStyle : questionStyle}>
      <p className="alert alert-dark">
        <div>
          {props.text}
        </div>
        <div style={{ fontSize: "10px",position:"relative", float: "right" }}>
          {props.time}
        </div>
      </p>
    </div>
  );
}

export default ChatMessage;
