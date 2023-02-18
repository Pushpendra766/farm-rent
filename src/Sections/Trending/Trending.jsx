import React, { useState } from "react";
import Card from "./Card";
const Trending = () => {
  return (
    <div className="">
    <p className="text-center text-2xl font-semibold">Trending</p>
    <div className="mx-auto scroll-smooth hover:scroll-auto py-10 my-10 flex w-50 flex-nowrap items-center  justify-evenly overflow-x-auto">
      <Card lnk="https://images.tractorgyan.com/uploads/26907/63159f84cb1e3_combine-harvester-1.webp"/>
      <Card lnk="https://o.remove.bg/downloads/da270fa2-16d7-4cbc-ae73-77875c672dec/75-758237_tractor-png-transparent-png-removebg-preview.png" scale={true} />
      <Card lnk="https://o.remove.bg/downloads/72cc2100-7688-4ab3-a4ed-de96fe218db3/close-up-seeder-attached-tractor-field_146671-19087-removebg-preview.png"/>
    </div>
  </div>
  );
};



export default Trending;
