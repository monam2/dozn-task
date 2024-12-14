import React from "react";
import BaseButton from "../common/BaseButton";

export default function Header() {
  return (
    <div className="h-[100px] bg-white flex justify-between items-center px-[15px]">
      <h1 className="text-heading-2 text-primary font-sans font-extrabold">
        Octover
      </h1>
      <BaseButton color="primary" size="md">
        로그인
      </BaseButton>
    </div>
  );
}
