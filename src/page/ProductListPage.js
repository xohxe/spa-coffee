import ProductList from "../components/ProductList.js";
import { request } from "../utils/api.js";

export default function ProductListPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "ProductListPage";

  $page.innerHTML = "<h1>상품목록</h1>";

  this.render = () => {
    $target.appendChild($page);
  };

  this.setState = (nextState) => {
    this.state = nextState;
  };

  const fetchProducts = async () => {
    const products = await request("/products");
    this.setState(products);
  };

  const productList = new ProductList({
    $target: $page,
    initalState: this.state,
  });

  fetchProducts();
}
