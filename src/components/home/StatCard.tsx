import React from "react";

interface StatCardProps {
  icon: string;
  count: string;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ icon, count, label }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="border self-stretch flex min-h-[45px] items-center gap-[5px] overflow-hidden justify-center w-[45px] my-auto px-[11px] py-[15px] rounded-[58px] border-[rgba(255,255,255,0.2)] border-solid">
        <img
          loading="lazy"
          src={icon}
          className="aspect-[0.94] object-contain w-[15px] self-stretch my-auto"
          alt=""
        />
      </div>
      <div className="self-stretch flex flex-col items-stretch text-white justify-center my-auto">
        <div className="text-xl font-semibold leading-10">{count}</div>
        <div className="text-sm font-light">{label}</div>
      </div>
    </div>
  );
};
