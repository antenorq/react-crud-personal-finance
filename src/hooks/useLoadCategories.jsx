import { useState, useEffect } from "react";
import useNotification from "../hooks/useNotification";

const useLoadCategories = () => {
  const [categories, setCategories] = useState([]);
  const url_categories = "http://localhost:3000/categories";

  //HOOK Notification
  const { setNotification } = useNotification();

  useEffect(() => {
    const fetchData = async (e) => {
      try {
        const res = await fetch(url_categories);
        const data_categories = await res.json();
        setCategories(data_categories);
      } catch (error) {
        setNotification(
          "SOMETHING WENT WRONG TO LOAD THE CATEGORIES:" + error,
          "error"
        );
      }
    };

    fetchData();
  }, []);

  return categories;
};

export default useLoadCategories;
