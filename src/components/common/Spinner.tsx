import { memo } from "react";
import SyncLoader from "react-spinners/SyncLoader";

/**
 * 로딩 스피너 컴포넌트
 *
 * - 사이즈, 색상을 받아서 렌더링
 * - propr가 바뀌지 않으면 리렌더링 방지
 */

type Size = "sm" | "md" | "lg";
type Color = "white" | "primary";

const SPINNER_SIZE: Record<string, number> = {
  sm: 8,
  md: 16,
  lg: 24,
};

const SPINNER_COLOR: Record<string, string> = {
  white: "#ffffff",
  primary: "#007AFE",
};

interface SpinnerProps {
  color: Color;
  size?: Size;
}

export default memo(function Spinner({
  color = "white",
  size = "sm",
}: SpinnerProps) {
  return (
    <SyncLoader
      color={SPINNER_COLOR[color]}
      size={SPINNER_SIZE[size]}
      speedMultiplier={0.8}
    />
  );
});
