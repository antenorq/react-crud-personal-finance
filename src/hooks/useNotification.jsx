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
    loading === true
      ? setLoading(loading)
      : setTimeout(() => {
          setLoading(loading);
        }, 2000);
  };

  return {
    setNotification,
    showLoading,
    loading,
  };
};

export default useNotification;
