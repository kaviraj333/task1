import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const items = useSelector((state) => state.list.items);
  const item = items[id];

  if (!item) return <h2>Item not found</h2>;

  return (
    <div>
      <h2>Item Details</h2>
      <p><strong>Name:</strong> {item.name}</p>
      <p><strong>Size:</strong> {item.size} bytes</p>
    </div>
  );
};

export default DetailPage;
