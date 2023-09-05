export default function ProductList({ $target, initalState }) {
  const $productList = document.createElement("ul");
  $target.appendChild($productList);

  this.state = initalState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!this.state) {
      return;
    }

    $productList.innerHTML = "hi";
    // $productList.innerHTML = `
    // ${this.state
    //   .map(
    //     (product) =>
    //       `
    //         <li class="Product">
    //             <img src="${product.imageUrl}"/>
    //             <div class="Product__info">
    //                 <div>${product.name}</div>
    //                 <div>${product.price}</div>
    //             </div>
    //         </li>
    //     `
    //   )
    //   .join("")}`;
  };

  this.render();
}
