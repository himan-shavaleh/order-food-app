import View from "./View";
class categoriesView extends View {
  _parentElement = document.querySelector("#category");
  _generateMarkup() {
    this._clear();
    let markup = "";
    this._data.forEach((category) => {
      const html = `<a href="#" class="category">
          <img src="${category.strCategoryThumb}" alt="category ${category.strCategory}" >
        <p class="category-name">${category.strCategory}</p>
       </a>`;
      markup += html;
    });
    return markup;
  }
}
export default new categoriesView();
