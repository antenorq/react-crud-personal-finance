import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

const useNotification = () => {
  const { setMessage, setTypeMessage, setLoading, loading } =
    useContext(NotificationContext);

  const setNotification = (message, typeMessage) => {
    setMessage(message);
    setTypeMessage(typeMessage);
  };

  const showLoading = (loading) => {
    setLoading(loading);
  };

  return {
    setNotification,
    showLoading,
    loading,
  };
};

export default useNotification;
