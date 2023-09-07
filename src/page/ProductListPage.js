import ProductList from "../components/ProductList.js";
import { request } from "../api.js";

export default function ProductListPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "ProductListPage";
  $target.appendChild($page);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const fetchProducts = async () => {
    const products = await request("products");
    this.setState(products);
  };

  fetchProducts();

  this.render = () => {
    $page.innerHTML = "<h1>상품목록</h1>";

    new ProductList({
      $target: $page,
      initalState: this.state,
    }).render();
  };
}
