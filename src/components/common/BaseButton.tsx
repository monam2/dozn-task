import { ButtonHTMLAttributes, memo, useMemo } from "react";
import Spinner from "./Spinner";
import {
  BASE_BUTTON_STYLES,
  BUTTON_SIZE_STYLES,
  BUTTON_VARIANT_STYLES,
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from "./buttonStyles";

/**
 * 공통 버튼 컴포넌트
 *
 * - 사이즈, variant, 색상, 로딩 여부, 비활성여부, 추가 스타일, 버튼 핸들러
 * - props가 같으면 리렌더링 방지
 */

export interface BaseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color: ButtonColor;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const BaseButton = memo(function BaseButton({
  size = "md",
  variant = "filled",
  color,
  isLoading,
  disabled,
  className,
  children,
  onClick,
  ...props
}: BaseButtonProps) {
  const buttonStyles = useMemo(() => {
    const loadingStyles = isLoading ? "cursor-wait" : "";
    return `${BASE_BUTTON_STYLES} ${BUTTON_SIZE_STYLES[size]} ${BUTTON_VARIANT_STYLES[variant][color]} ${loadingStyles} ${
      className || ""
    }`;
  }, [size, isLoading, className]);

  // 스피너 색상을 버튼 색상에 따라 달라지게 하기 위함
  const spinnerColor = (clr: ButtonColor) => {
    switch (clr) {
      case "primary":
        return "white";
      case "gray":
        return "primary";
      case "error":
        return "white";
      default:
        return "white";
    }
  };

  return (
    <button
      disabled={disabled || isLoading}
      className={buttonStyles}
      onClick={onClick}
      {...props}
    >
      {isLoading ? (
        <div className="text-xs">
          <Spinner color={spinnerColor(color)} />
        </div>
      ) : (
        children
      )}
    </button>
  );
});

export default BaseButton;
