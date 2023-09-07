export default function SelectedOptions({ $target, initialState }) {
  const $component = document.createElement("div");
  $target.appendChild($component);

  this.state = initialState;

  this.getTotalPrice = () => {
    const { product, selectedOptions } = this.state;
    const { price: productPrice } = product;

    return selectedOptions.reduce(
      (acc, option) =>
        acc + (productPrice + option.optionPrice) * option.quantity,
      0
    );
  };
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { product, selectedOptions = [] } = this.state;

    if (product && selectedOptions) {
      $component.innerHTML = `
        <h3>선택된 상품</h3>
        <ul>
        ${selectedOptions.map(
          (selectedOption) =>
            `<li>100개 번들 원
         <div><input type="number" value="10">개</div>
        </li>
        `
        )}
        </ul> 
        <button class="OrderButton">주문하기</button>  
      `;
    }
  };

  this.render();
}
