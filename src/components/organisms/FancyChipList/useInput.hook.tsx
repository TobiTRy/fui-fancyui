
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useInput = (initialValue: string) => {
  const [value, setValue] = React.useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
}
