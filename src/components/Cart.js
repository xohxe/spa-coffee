export default function ProductDetail({ $target, initialState }) {
  const $productDetail = document.createElement("div");
  $productDetail.className = "ProductDetail";

  $target.appendChild($productDetail);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;

    this.render();
  };

  this.render = () => {
    const { product } = this.state;

    $productDetail.innerHTML = ``;

    this.render();
  };
}
