import React from "react";
import addNotification from "react-push-notification";

const PushButton = () => {
  const buttonClick = () => {
    addNotification({
      title: "Success",
      subtitle: "Great Job",
      message: "You have entered successfully!",
      theme: "light",
      closeButton: "X",
    });
  };
  return <button onClick={buttonClick}>Submit</button>;
};

export default PushButton;
