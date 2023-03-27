import { useState, useEffect } from "react";
import useNotification from "../hooks/useNotification";

const useLoadCategories = (formType) => {
  const [categories, setCategories] = useState([]);
  var url_categories;

  //I KNOW I NEED REFACTORE IT TO PUT IN A GLOBAL CONTEXT
  const devEnv = process.env.NODE_ENV !== "production";
  const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;

  if (formType === "income") {
    url_categories =
      (devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL) +
      "/categories?category_type=1";
  }
  if (formType === "expense") {
    url_categories =
      (devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL) +
      "/categories?category_type=2";
  }
  if (formType === "all") {
    url_categories =
      (devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL) + "/categories";
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
