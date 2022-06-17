import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipeContext = createContext();

const API = "https://chow-backends.herokuapp.com/recipes";

export const RecipeProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API);
      setLoading(false);
      setRecipes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const value = {
    recipes: [recipes, setRecipes],
    loading: [loading, setLoading]
  };

  return (
    <RecipeContext.Provider value={value}>
      {props.children}
    </RecipeContext.Provider>
  );
};
