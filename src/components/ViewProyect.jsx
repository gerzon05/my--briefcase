import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export const ViewProyect = ({title,descrip,img}) => {
  return (
    <figure className="flex flex-wrap rounded-2xl p-1 hover:bg-red-700/50 relative z-10 cursor-pointer">
      <img
        src={img}
        alt=""
        className="w-full sm:w-[160px] object-cover h-[100px] rounded-xl"
      />
      <span className="p-2 w-[230px]">
        <h3 className="text-lg text-green-500 font-lilita font-bold tracking-widest">
          {title}
        </h3>
        <p className="text-white font-Neue tracking-wide">
          {descrip}
        </p>
        <Stack spacing={1}>
          <Rating name="half-rating" defaultValue={3.0} precision={0.5} />
        </Stack>
      </span>
    </figure>
  );
};
