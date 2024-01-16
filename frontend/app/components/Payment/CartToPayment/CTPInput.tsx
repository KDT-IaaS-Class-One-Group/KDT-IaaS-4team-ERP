


interface CTPInputProps {
  InputName: string;
  inputPlaceholder: string;
  listName: string;
  liClassName: string;
}
/**
 * CartToPayment 컴포넌트를 위한 입력 필드를 렌더링합니다.
 *
 * @param {Object} props - 컴포넌트 props입니다.
 * @param {string} props.InputName - 입력 필드의 이름입니다.
 * @param {string} props.inputPlaceholder - 입력 필드의 플레이스홀더 텍스트입니다.
 * @param {string} props.listName - 리스트의 이름입니다.
 * @param {string} props.liClassName - 리스트 아이템의 클래스 이름입니다.
 * @returns {JSX.Element} 렌더링된 입력 필드입니다.
 */
export default function CTPInput({ InputName, inputPlaceholder, listName, liClassName }: CTPInputProps) {
  return (
    <li className={liClassName}>
      <p>{`${listName} : `}</p>
      <input type="text" name={InputName} placeholder={inputPlaceholder} id={InputName} />
    </li>
  );
}