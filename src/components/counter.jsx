import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const tags = ["tag1"];

  const formCount = () => {
    return count === 0 ? "Ноль" : count;
  };
  const getBageClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  const renderTags = () => {
    if (tags.length === 0) return "Тегов не найдено";
    return tags.map((tag) => <li key={tag}>{tag}</li>);
  };
  const handleIncrment = (productId) => {
    console.log(productId);
    setCount(count + 1);
  };
  const handleDecrement = (productId) => {
    console.log(productId);
    setCount(count - 1);
  };

  return (
    <>
      {tags.length === 0 && "Теги не найдены"}
      {renderTags()}
      <span className={getBageClasses()}>{formCount()}</span>
      <button
        onClick={() => handleIncrment({ id: 1 })}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => handleDecrement({ id: 2 })}
        className = "btn btn-secondary btn-sm"
        disabled = {count <= 0}
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
