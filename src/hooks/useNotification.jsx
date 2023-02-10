import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

const useNotification = () => {
  const { setMessage, setTypeMessage } = useContext(NotificationContext);

  const setNotification = (message, typeMessage) => {
    setMessage(message);
    setTypeMessage(typeMessage);
  };

  return {
    setNotification,
  };
};

export default useNotification;
