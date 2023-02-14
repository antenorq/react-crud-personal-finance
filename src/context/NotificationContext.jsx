import { createContext, useState } from "react";

export const NotificationContext = createContext();

export const NotificationContextProvider = ({ children }) => {
  const [message, setMessage] = useState(null);
  const [typemessage, setTypeMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <NotificationContext.Provider
      value={{
        message,
        setMessage,
        typemessage,
        setTypeMessage,
        loading,
        setLoading,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
