import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ListPage = () => {
  const items = useSelector((state) => state.list.items);

  return (
    <div>
      <h2>List of Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={`/detail/${index}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
