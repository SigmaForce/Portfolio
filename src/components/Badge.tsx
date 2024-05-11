import React from "react";

type BadgeProps = {
  tech: string;
};

export const Badge = ({ tech }: BadgeProps) => {
  return (
    <div className="bg-[#0694FE] text-white  rounded-lg px-4 ">{tech} </div>
  );
};
