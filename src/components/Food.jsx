import React, { useState } from "react";
import { data } from "../data/data.js";

const Food = () => {
  const [foods, setFoods] = useState(data);

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h2 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h2>
      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700 mb-2">Filter Type</p>
          <div className="flex flex-wrap gap-2 mb-2">
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300"
              onClick={() => setFoods(data)}
            >
              All
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300"
              onClick={() => filterType("burger")}
            >
              Burgers
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300"
              onClick={() => filterType("pizza")}
            >
              Pizza
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300"
              onClick={() => filterType("salad")}
            >
              Salads
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300"
              onClick={() => filterType("chicken")}
            >
              Chicken
            </button>
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700 mb-2">Filter Price</p>
          <div className="flex flex-wrap gap-2 mb-2">
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300" onClick={() => filterPrice("50$")}>
              50$
            </button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300" onClick={() => filterPrice("100$")}>
              100$
            </button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300" onClick={() => filterPrice("120$")}>
              120$
            </button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300" onClick={() => filterPrice("150$")}>
              150$
            </button>
          </div>
        </div>
      </div>

      {/* Food Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg hover:scale-105 duration-300 rounded-lg"
          >
            <img
              className="w-full h-[200px] object-cover rounded-t-lg"
              src={item.image}
              alt={item.name}
            />
            <div className="flex justify-between px-2 py-4">
              <span className="font-bold">{item.name}</span>
              <span className="block bg-orange-500 text-white p-1 rounded-full">
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
