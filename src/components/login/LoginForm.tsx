import BaseButton from "../common/BaseButton";
import useLoginForm from "./useLoginForm";
import LabeledInput from "./../common/LabeledInput";

export default function LoginForm() {
  const {
    admUserId,
    userPw,
    errors,
    isLoading,
    handleAdmUserIdChange,
    handleUserPwChange,
    handleSubmit,
  } = useLoginForm();

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col min-w-[400px] h-4/5 justify-center gap-12 pt-[150px] pb-[100px]"
    >
      <h1 className="text-heading-1 text-center font-bold">로그인</h1>
      <div className="flex flex-col gap-6">
        <LabeledInput
          id="admUserId"
          label="아이디"
          value={admUserId}
          onChange={handleAdmUserIdChange}
          error={errors.admUserId}
          placeholder="아이디 입력"
          bottomLabel="아이디를 다시 입력해주세요."
        />
        <LabeledInput
          id="password"
          label="비밀번호"
          type="password"
          value={userPw}
          onChange={handleUserPwChange}
          error={errors.userPw}
          placeholder="비밀번호 입력"
          bottomLabel="비밀번호를 다시 입력해주세요."
        />
      </div>
      <BaseButton
        type="submit"
        color="primary"
        size="full"
        isLoading={isLoading}
        disabled={isLoading}
      >
        로그인
      </BaseButton>
    </form>
  );
}
