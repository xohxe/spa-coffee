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

  // 옵션 추가 이벤트
  $productDetail.addEventListener("change", (e) => {
    // select 태그일 때,
    if (e.target.tagName === "SELECT") {
      const selectedOptionId = parseInt(e.target.value);
      const { product, selectedOptions } = this.state;
      // 현재 선택한 옵션
      const option = product.productOptions.find(
        (option) => option.id === selectedOptionId
      );
      // 이미 선택된 옵션인지 확인(중복방지)
      const selectedOption = selectedOptions.find(
        (selectedOption) => selectedOption.optionId === selectedOptionId
      );

      // 옵션 추가
      if (option && !selectedOption) {
        const nextSelectedOptions = [
          ...selectedOptions,
          {
            productId: product.id,
            optionId: option.id,
            optionName: option.name,
            optionPrice: option.price,
            quantity: 1,
          },
        ];
        this.setState({
            ...this.state,
            selectedOptions: nextSelectedOptions
        })
      }
    }
  });
}
