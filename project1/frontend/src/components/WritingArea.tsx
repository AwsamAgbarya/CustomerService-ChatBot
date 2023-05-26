import axios from "axios";
import React, { useState } from "react";

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

interface props { onAddedMessage: (text:string,time:string,question:boolean) => void }

//ChatBox to enter text message
function TextArea({onAddedMessage}:props) {

  // useState function to bind message as a changing variable
  const [text,setText] = useState('');

  // Upon typing/Removing a message from the textbox, it changes messages value corrospondingly and logs it
  const handleMessageChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setText(event.target.value);
  };
  
  // Function to handle Send Button clicking
  function handleClick(event:React.FormEvent<HTMLFormElement>) {
    // Prevent initial refreshing of the page
    event.preventDefault()

    // Display the question on the screen
    let curr = new Date()
    onAddedMessage(text, curr.getHours().toString(), true);

    // Sending the message to URL /question via POST method with the data of our message using AXIOS
    axios(
      {
        method: "POST",
        url: "/question/",
        data: 
        {
          type_of_msg: "question",
          content: text
        }
      }
    ).then((response) => 
      {
        let curr = new Date()
        // The response gets added to the screen for the client to see
        onAddedMessage(response.data, curr.getHours().toString(), false);
      }
    );
  }

  // A form for the user to use (TextBox + send button)
  return <>
    <form onSubmit={handleClick}>
      <input style={textStyle} value={text} onChange={handleMessageChange}></input>
      <button type="submit" style={buttonStyle}>Send</button>
    </form>
  </>;
}

export default TextArea;