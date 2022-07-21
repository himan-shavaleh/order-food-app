export default class View {
  _data;
  render(data, render = true) {
    this._data = data;
    console.log(data);
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
    console.log(1233);
  }
  _clear() {
    this._parentElement.inerrHtml = "";
  }
}
