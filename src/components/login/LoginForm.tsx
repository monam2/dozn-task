import { FormEvent } from "react";
import BaseInput from "../common/BaseInput";
import BaseButton from "../common/BaseButton";

export default function LoginForm() {
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("first");
  };

  return (
    <form
      onSubmit={(e) => submitHandler(e)}
      className="flex flex-col min-w-[400px] h-4/5 justify-center gap-12 pt-[150px] pb-[100px]"
    >
      <h1 className="text-heading-1 text-center font-bold text-black">
        로그인
      </h1>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <label
            htmlFor="id"
            className="text-content-2 font-semibold text-black"
          >
            아이디
          </label>
          <BaseInput
            placeholder="아이디 입력"
            bottomLabel="아이디를 확인해주세요."
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="id"
            className="text-content-2 font-semibold text-black"
          >
            비밀번호
          </label>
          <BaseInput
            type="password"
            placeholder="비밀번호 입력"
            bottomLabel="비밀번호가 일치하지 않습니다."
          />
        </div>
      </div>
      <BaseButton color="primary" size="full">
        로그인
      </BaseButton>
    </form>
  );
}
