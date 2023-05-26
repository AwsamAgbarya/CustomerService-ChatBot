import axios from "axios";
import React, { useState } from "react";
import { Fragment } from "react";

// Move to css file when done debugging
const textStyle = {
  width: "80%",
  height: "50px",
  padding: "12px 20px",
  boxsizing: "border-box",
  border: "2px solid #ccc",
  borderradius: "4px",
  backgroundcolor: "#f8f8f8",
  fontsize: "16px",
  display: "inline"
}
const buttonStyle = {
  width: "20%",
  backgroundcolor: "#ffffff",
  color: "black",
  padding: "12px 20px",
  border:"none",
  cursor: "pointer",
  opacity: "0.8",
  display: "inline"
}

interface props {
  onAddedMessage: (text:string,time:string,question:boolean) => void 
}

//ChatBox to enter text message
function TextArea(prop:props) {

  // useState function to bind message as a changing variable
  const [message,setMessage] = useState('');

  // Upon typing/Removing a message from the textbox, it changes messages value corrospondingly and logs it
  const handleMessageChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setMessage(event.target.value);
  };
  
  // Function to handle Send Button clicking
  function handleClick() {
    let curr = new Date()
    // logging the message on screen
    prop.onAddedMessage(message, curr.getHours().toString(), true);

    // Sending the message to URL /question via POST method with the data of our message using AXIOS
    axios({
      method: "POST",
      url: "/question/",
      data: {
        type_of_msg: "question",
        content: message
      },
    }).then((response) => {
      let curr = new Date()
      // The response gets added to the screen for the client to see
      prop.onAddedMessage(response.data, curr.getHours().toString(), false);
    });
  }

  // A form for the user to use (TextBox + send button)
  return <>
    <form>
      <input style={textStyle} value={message} onChange={handleMessageChange}></input>
      <button type="submit" style={buttonStyle} onClick={handleClick}>Send</button>
    </form>
  </>;
}

export default TextArea;