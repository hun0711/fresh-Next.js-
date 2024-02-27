"use client";

import { useState } from "react";

export default function List() {
  let productList = [
    { name: "Tomatoes", count: 0 },
    { name: "Pasta", count: 0 },
    { name: "Coconut", count: 0 },
  ];

  /*  const countChange = (i, increaseOrDecrease) => {
    let newProductList = [...productList];
    productList[i].count += increaseOrDecrease;
    setPListState(newProductList); // 상태를 갱신
  };
 */
  const countChange = (i, increaseOrDecrease) => {
    setPListState((prev) => {
      const newProductList = [...prev];
      newProductList[i] = { ...prev[i] };
      newProductList[i].count += increaseOrDecrease;
      if (newProductList[i].count < 0) {
        newProductList[i].count = 0;
      }
      return newProductList;
    });
  };

  // 상품목록을 상태로 가지도록 설정
  const [pListState, setPListState] = useState(productList);

  return (
    <div>
      <h4 className="title">상품 목록</h4>
      {pListState.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{a.name} $40</h4>
            <span> {a.count} </span>
            <button
              onClick={() => {
                countChange(i, +1);
              }}
            >
              {" "}
              +{" "}
            </button>
            <button
              onClick={() => {
                countChange(i, -1);
              }}
            >
              {" "}
              -{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
}
