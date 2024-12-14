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
  isError?: boolean; // 에러 여부
  className?: string; // 추가 클래스
  bottomLabel?: string; // 에러 발생 시 메시지지
}

const BaseInput = memo(function BaseInput({
  inputSize = "full",
  isError = false,
  bottomLabel,
  className,
  ...props
}: BaseInputProps) {
  const inputStyles = useMemo(() => {
    const colorStyles = isError
      ? INPUT_COLOR_STYLES.error // 에러
      : INPUT_COLOR_STYLES.default; // 기본
    return `${BASE_INPUT_STYLES} ${INPUT_SIZE_STYLES[inputSize]} ${colorStyles} ${
      className || ""
    }`;
  }, [inputSize, isError, className]);

  const bottomLabelStyles = isError
    ? "text-error text-base mt-1"
    : "text-gray text-base mt-1";

  return (
    <div className="flex flex-col">
      <input
        className={`${inputStyles} focus:outline-none focus:${INPUT_COLOR_STYLES.focus}`}
        {...props}
      />
      {bottomLabel && <span className={bottomLabelStyles}>{bottomLabel}</span>}
    </div>
  );
});

export default BaseInput;
