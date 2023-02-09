import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

const Message = () => {
  const { setMessage, setTypeMessage } = useContext(NotificationContext);

  return {
    setMessage: (message) => setMessage(message),
    setTypeMessage: (typeMessage) => setTypeMessage(typeMessage),
  };
};

export default Message;
