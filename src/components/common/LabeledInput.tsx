import BaseInput, { BaseInputProps } from "./BaseInput";

/**
 * 라벨이 있는 공통 인풋 컴포넌트
 *
 * - BaseInputProps를 상속해서 구현
 */

interface LabeledInputProps extends BaseInputProps {
  label: string;
  id: string;
}

export default function LabeledInput({
  label,
  id,
  ...props
}: LabeledInputProps) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={id} className="text-content-2 font-semibold">
        {label}
      </label>
      <BaseInput id={id} {...props} />
    </div>
  );
}
