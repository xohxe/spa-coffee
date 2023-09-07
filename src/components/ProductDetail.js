import SelectedOptions from "./SelectedOptions.js";

export default function ProductDetail({ $target, initialState }) {
  const $productDetail = document.createElement("div");
  $productDetail.className = "ProductDetail";
  $target.appendChild($productDetail);

  this.state = initialState;
  let selectedOptions = null;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { product } = this.state;

    $productDetail.innerHTML = `
    <img src="${product.imageUrl}">
    <div class="ProductDetail__info">
      <h2>${product.name}</h2>
      <div class="ProductDetail__price">${product.price}원~</div>
      <select>
        <option>선택하세요.</option>
        ${product.productOptions
          .map(
            (option) =>
              `
            <option value="${option.id}" ${
                option.stock === 0 ? "disabled" : ""
              }>${option.stock === 0 ? "(품절)" : ""}${option.name}${
                option.price > 0 ? `(+ ${option.price}원)` : ""
              }</option>
            `
          )
          .join("")}
      </select> 
      <div class="ProductDetail__selectedOptions"></div>
    </div>
    `;

    selectedOptions = new SelectedOptions({
      $target: $productDetail.querySelector(".ProductDetail__selectedOptions"),
      initialState: {
        product: this.state.product,
        selectedOptions: this.state.selectedOptions,
      },
    });
  };
  this.render();


}
