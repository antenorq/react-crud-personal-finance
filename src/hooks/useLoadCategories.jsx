import { useState, useEffect } from "react";
import useNotification from "../hooks/useNotification";

const useLoadCategories = (formType) => {
  const [categories, setCategories] = useState([]);
  var url_categories;
  if (formType === "income") {
    url_categories = "http://localhost:3000/categories?category_type=1";
  }
  if (formType === "expense") {
    url_categories = "http://localhost:3000/categories?category_type=2";
  }
  if (formType === "all") {
    url_categories = "http://localhost:3000/categories";
  }

  //HOOK Notification
  const { setNotification, showLoading } = useNotification();

  useEffect(() => {
    //START LOADING
    showLoading(true);

    const fetchData = async (e) => {
      try {
        const res = await fetch(url_categories);
        const data_categories = await res.json();
        setCategories(data_categories);

        //END LOADING
        showLoading(false);
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
