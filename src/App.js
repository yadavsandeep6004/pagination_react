import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(1);

  let totaldata = 100;
  let onePageData = 15;
  let totolePage = Math.ceil(totaldata / onePageData);

  function counter(data) {
    if (data === "prev") {
      setCount(count > 1 ? count - 1 : 1);
    } else if (data === "next") {
      setCount(count < totolePage ? count + 1 : totolePage);
    } else {
      setCount(data);
    }
  }

  return (
    <div className="App">
      <h1>Pagination</h1>
      <a href="!#" className="prev" onClick={() => counter("prev")}>
        {" "}
        prev{" "}
      </a>

      {new Array(totolePage).fill("").map((ele, index) => (
        <a
          href="!#"
          key={index}
          className={count === index + 1 ? "active" : ""}
          onClick={() => counter(index + 1)}
        >
          {index + 1}
        </a>
      ))}
      <a href="!#" className="next" onClick={() => counter("next")}>
        {" "}
        next{" "}
      </a>
    </div>
  );
}
