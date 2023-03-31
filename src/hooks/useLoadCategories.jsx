import { useState, useEffect, useContext } from "react";
import useNotification from "../hooks/useNotification";
import { AuthContext } from "../context/AuthContext";

const useLoadCategories = (formType) => {
  const [categories, setCategories] = useState([]);
  var url_categories;

  const { user } = useContext(AuthContext);

  //I KNOW I NEED REFACTORE IT TO PUT IN A GLOBAL CONTEXT
  const devEnv = process.env.NODE_ENV !== "production";
  const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;

  if (formType === "income") {
    url_categories =
      (devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL) +
      "/categories?category_type=1&user_id=" +
      user.id;
  }
  if (formType === "expense") {
    url_categories =
      (devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL) +
      "/categories?category_type=2&user_id=" +
      user.id;
  }
  if (formType === "all") {
    url_categories =
      (devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL) +
      "/categories?user_id=" +
      user.id;
  }

  //HOOK Notification
  const { setNotification, showLoading } = useNotification();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (e) => {
    //START LOADING
    showLoading(true);

    try {
      const res = await fetch(url_categories);
      const data_categories = await res.json();
      setCategories(data_categories);

      if (data_categories.length === 0 && formType != "all") {
        setNotification(
          "REGISTER SOME CATEGORY FOR: " + formType + ". GO TO CATEGORY PAGE",
          "error"
        );
      }

      //END LOADING
      showLoading(false);
    } catch (error) {
      setNotification(
        "SOMETHING WENT WRONG TO LOAD THE CATEGORIES:" + error,
        "error"
      );
    }
  };

  return categories;
};

export default useLoadCategories;
