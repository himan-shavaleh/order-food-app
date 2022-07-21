export const state = {
  isLoggedIn: false,
  loggedInUser: null,
  users: [],
  categories: [],
  meals: [],
};

export const loadCategories = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
  );
  const data = await res.json();
  state.categories = data.categories;
  console.log(state);
};
