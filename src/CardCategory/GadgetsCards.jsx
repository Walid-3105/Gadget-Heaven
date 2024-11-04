import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./card";

const GadgetsCards = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    if (category) {
      const filterByCategory = [...data].filter(
        (gadget) => gadget.category === category
      );
      setGadgets(filterByCategory);
    } else {
      setGadgets(data.slice(0, 9));
    }
  }, [category, data]);
  return (
    <div className="mb-10">
      <h2 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {gadgets.map((gadget) => (
          <Card key={gadget.product_id} gadget={gadget}></Card>
        ))}
      </h2>
    </div>
  );
};

export default GadgetsCards;
