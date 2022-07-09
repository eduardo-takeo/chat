import S from "./Button.module.scss";

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
}

export default function Button({ children, ...props }: IButtonProps) {
  return (
    <button className={S.wrapper} {...props}>
      {children}
    </button>
  );
}
