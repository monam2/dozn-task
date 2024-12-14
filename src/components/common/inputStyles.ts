/**
 * 공통 Input 컴포넌트 스타일 관리
 */

// Input 사이즈 타입
export type InputSize = "base" | "full";

// Input 기본 스타일
export const BASE_INPUT_STYLES = `
  w-full
  rounded-[10px]
  border
  border-1
  font-semibold
  text-xl
  px-6
  py-1
`;

// Input 크기 스타일
export const INPUT_SIZE_STYLES: Record<InputSize, string> = {
  base: "h-[50px] w-[300px]",
  full: "h-[50px] w-full",
};

// Input 색상 상태 스타일
export const INPUT_COLOR_STYLES = {
  default: "border-gray-100 text-black",
  focus: "outline-primary outline-2 text-black",
  error: "outline-error outline-2 text-error",
};
