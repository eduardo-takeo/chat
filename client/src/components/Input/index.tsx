import S from "./Input.module.scss";

export interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {}

export default function Input({ ...props }: IInputProps) {
  return (
    <input type="text" placeholder={props?.placeholder} className={S.wrapper} />
  );
}
