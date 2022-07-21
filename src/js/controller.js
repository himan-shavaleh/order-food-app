import "boxicons";
import * as model from "./model";
import categoriesView from "./views/categoriesView";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

const controlCategoriesResult = async () => {
  await model.loadCategories();
  console.log("q");
  await categoriesView.render(model.state.categories);
};


const init = ()=>{
    controlCategoriesResult();
}
init();