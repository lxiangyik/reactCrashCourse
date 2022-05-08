import React from "react";
import { useState } from "react";

export const Message = () => {
    //message(left) is to put the default value, setmessage(right) is to put the new value after user make changes)
  const [message, setMessage] = useState("Welcome visitor")
  return (
    <div>
      <h1> {message}</h1>
       {/* rmb the syntax */}
      <button onClick={() => setMessage('Thank you for subscribing! :)') }>Subscribe</button>
      <button onClick={() => setMessage('Feel free to subscribe again :(') }>Unsubscribe</button>
      <button onClick={() => setMessage('Reseted, welcome visitor') }>Reset</button>
    </div>
  );
};
