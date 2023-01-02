import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipeContext = createContext();

export const RecipeProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://api.jsonbin.io/v3/b/63b2666a15ab31599e29eeae");
      setLoading(false);
      setRecipes(response.data.record.recipes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipes();

    // eslint-disable-next-line
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
