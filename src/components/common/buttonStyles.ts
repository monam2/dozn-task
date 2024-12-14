/**
 * 공통 버튼 컴포넌트 스타일 관리
 *
 * - Octover 사이트의 버튼과 비슷하게 설정
 */

export type ButtonSize = "sm" | "md" | "lg" | "xl" | "full"; // 사이즈
export type ButtonVariant = "filled" | "outlined"; // 버튼 fill 여부
export type ButtonColor = "primary" | "gray" | "error"; //색상

/** 기본 버튼 스타일 */
export const BASE_BUTTON_STYLES = `
  flex
  items-center
  justify-center
  rounded-[10px]
  font-semibold
  transition-all
  duration-200
  disabled:opacity-50
  disabled:cursor-not-allowed
  gap-2
`;

/** 버튼 크기 및 텍스트 사이즈 */
export const BUTTON_SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "h-[35px] w-[72px] px-4 text-base",
  md: "h-[40px] w-[96px] px-6 text-lg",
  lg: "h-[50px] w-[184px] px-8 text-xl",
  xl: "h-[50px] w-[300px] px-12 text-2xl",
  full: "h-[50px] w-full px-12 text-2xl",
};

/** fill 여부 및 색상 */
export const BUTTON_VARIANT_STYLES: Record<
  ButtonVariant,
  Record<ButtonColor, string>
> = {
  filled: {
    primary:
      "bg-primary text-white hover:bg-primary-hover active:bg-primary-hover",
    gray: "bg-gray-50 text-black hover:bg-gray active:bg-gray",
    error: "bg-error text-white hover:bg-red-[#b80c14] active:bg-red-[#b80c14]",
  },
  outlined: {
    primary:
      "bg-white text-primary border border-1 border-primary hover:bg-primary-hover hover:text-white active:bg-primary-hover active:text-white",
    gray: "bg-white text-gray border border-1  border-gray hover:bg-gray-500 hover:text-white active:bg-gray-500 active:text-white",
    error:
      "bg-white text-error border border-1 border-error hover:bg-error hover:text-white active:bg-error active:text-white",
  },
};
