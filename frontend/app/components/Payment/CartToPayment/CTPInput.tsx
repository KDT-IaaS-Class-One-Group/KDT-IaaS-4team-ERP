import { CTPInputProps } from "@/interfaces/CartToPayment/CTPInputProps";

/**
 * CartToPayment 컴포넌트를 위한 입력 필드를 렌더링합니다.
 *
 * @param {string} props.InputName - 입력 필드의 이름입니다.
 * @param {string} props.inputPlaceholder - 입력 필드의 플레이스홀더 텍스트입니다.
 * @param {string} props.listName - 리스트의 이름입니다.
 * @param {string} props.liClassName - 리스트 아이템의 클래스 이름입니다.
 * @returns {JSX.Element} 렌더링된 입력 필드입니다.
 */
export default function CTPInput({
  onChange,
  InputName,
  inputPlaceholder,
  listName,
  liClassName,
  ...props
}: CTPInputProps) {
  const liClassNameDefault = `flex justify-between items-center gap-6 w-full ${liClassName}`;
  return (
    <li className={liClassNameDefault}>
      <p className="w-1/4 text-right">{`${listName} : `}</p>
      <input
        className="w-3/4 h-4/5 "
        type="text"
        name={InputName}
        placeholder={inputPlaceholder}
        id={InputName}
        onChange={onChange}
      />
    </li>
  );
}
