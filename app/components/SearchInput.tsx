interface SearchInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type='text'
      value={value}
      onChange={onChange}
      className='p-2 border border-gray-300 rounded'
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
