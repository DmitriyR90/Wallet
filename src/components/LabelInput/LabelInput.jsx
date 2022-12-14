import { Input, Label, Title } from './LabelInput.styled';

export const LabelInput = ({
  title,
  type,
  name,
  placeholder = null,
  value = '',
  onInput,
  checked,
  onClick,
}) => {
  return (
    <Label>
      <Title>{title}</Title>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onInput}
        checked={checked}
        onClick={onClick}
      />
    </Label>
  );
};
