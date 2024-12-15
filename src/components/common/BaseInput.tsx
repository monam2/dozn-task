import { InputHTMLAttributes, memo, useMemo } from "react";
import {
  BASE_INPUT_STYLES,
  INPUT_COLOR_STYLES,
  INPUT_SIZE_STYLES,
  InputSize,
} from "./inputStyles";

/**
 * 공통 Input 컴포넌트
 *
 * - 사이즈, 에러 여부, 추가 스타일, 에러 메시지
 */

export interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: InputSize; // 크기 : HTML 기본 size 속성과 충돌 방지
  error?: string; // 에러 여부 ( 유효성 검증 시 "비밀번호를 확인해 주세요." 와 같이 string으로 준다. )
  className?: string; // 추가 클래스
  bottomLabel?: string; // 에러 발생 시 메시지
  id?: string; // label에 붙일 아이디
}

const BaseInput = memo(function BaseInput({
  inputSize = "full",
  error = "",
  bottomLabel,
  className,
  id,
  ...props
}: BaseInputProps) {
  /** 공통 인풋 컴포넌트 스타일 정의 - default / error  */
  const inputStyles = useMemo(() => {
    const colorStyles = error
      ? INPUT_COLOR_STYLES.error // 에러
      : INPUT_COLOR_STYLES.default; // 기본
    return `${BASE_INPUT_STYLES} ${INPUT_SIZE_STYLES[inputSize]} ${colorStyles} ${
      className || ""
    }`;
  }, [inputSize, error, className]);

  /** 에러 라벨 스타일 정의 */
  const bottomLabelStyles = error
    ? "text-error text-base mt-1"
    : "text-gray text-base mt-1";

  return (
    <div className="flex flex-col">
      <input
        id={id}
        className={`${inputStyles} focus:${INPUT_COLOR_STYLES.focus}`}
        {...props}
      />
      {error && <span className={bottomLabelStyles}>{bottomLabel}</span>}
    </div>
  );
});

export default BaseInput;
