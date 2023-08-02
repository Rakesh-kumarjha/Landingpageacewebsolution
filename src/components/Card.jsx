import React from "react";
import Services from "./Services";
import {
  CardComponents,
  CardComponents1,
  CardComponents2,
  CardComponents3,
  CardComponents4,
  CardComponents5,
} from "./CardComponents";
export default function Card() {
  return (
    <>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-6 p-6 m-4 ">
        <CardComponents />
        <div className="m-4">
        <CardComponents1 />
        </div >
        <div className="m-4" >
        <CardComponents2 />
        </div>
        <div  className="m-4">
        <CardComponents3 />
        </div>
        <div  className="m-4">
        <CardComponents4 />
        </div>
        <div className="m-4">
        <CardComponents5 />
        </div>
      </div>
    </>
  );
}
