import React from "react";
import { useParams } from "react-router";

import Category from "../../Components/Category/Category";

const CategoryScreen = () => {
  const params = useParams();
  return (
    <div className="w-full my-5">
      <h1 className="text-center text-3xl font-semibold text-dark-green mt-1">
        Best of {params.category}
      </h1>
      <p className="text-center text-base mb-1 text-orange">103 Items</p>
      <div className="grid grid-cols-4 w-10/12 mx-auto">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};

export default CategoryScreen;
