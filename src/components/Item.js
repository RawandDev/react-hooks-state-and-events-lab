import { useState } from "react";

function Item({ name, category }) {
  const [isAdded, setIsAdded] = useState(false);

  function addToCardHandler() {
    setIsAdded((isAdded) => !isAdded);
  }

  let removeAddCart = isAdded ? "in-cart" : null;

  return (
    <li className={removeAddCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isAdded ? "remove" : "add"} onClick={addToCardHandler}>
        {isAdded ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
