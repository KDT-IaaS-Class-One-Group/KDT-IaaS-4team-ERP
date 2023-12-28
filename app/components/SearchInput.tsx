interface SearchInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput({ placeholder, value, onChange }: SearchInputProps) {
  return (
    <input
      type='text'
      value={value}
      onChange={onChange}
      className='p-2 border border-gray-300 rounded'
      placeholder={placeholder}
    />
  );
}

export default SearchInput;
