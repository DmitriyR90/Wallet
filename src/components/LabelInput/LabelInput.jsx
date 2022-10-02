import { Input, Label, Title } from './LabelInput.styled';

export const LabelInput = ({
  title,
  type,
  name,
  placeholder = null,
  value = '',
}) => {
  return (
    <Label>
      <Title>{title}</Title>
      <Input type={type} name={name} placeholder={placeholder} value={value} />
    </Label>
  );
};
