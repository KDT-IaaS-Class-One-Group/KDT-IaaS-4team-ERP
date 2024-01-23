export interface CTPInputProps {
  InputName: string;
  inputPlaceholder: string;
  listName: string;
  liClassName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
