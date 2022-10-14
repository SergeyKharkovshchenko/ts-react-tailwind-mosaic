import React, { useState } from "react";
import { IIcon } from "../models";

interface IconProps {
  icon: IIcon;
  onClick: (icon: any) => void;
}

export function Icon({ icon, onClick }: IconProps) {
  const [details, setDetails] = useState(false);
  const btnBgClassName = details ? "bg-yellow-400" : "bg-gray-500";
  const btnClasses = ["mt-2 py-2 px-4 border rounded-full", btnBgClassName];

  return (
    <div className="text-center py-2 px-4 flex flex-col items-center mb-2 mx-10 ">
      <img src={icon.image} className="" alt={icon.title} onClick={onClick} />
      <p className="font-bold text-white  mt-2">{icon.subtitle}</p>
      <h2 className="font-bold  my-2"> {icon.title} </h2>
      <button
        className={btnClasses.join(" ")}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? "Hide details" : "Show details"}
      </button>
      {details && (
        <div>
          <p>{icon.description}</p>
        </div>
      )}
    </div>
  );
}
