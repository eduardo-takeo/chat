import S from "./Header.module.scss";

export interface IHeaderProps {
  title: string;
}

export default function Header({ title = "Default Room" }: IHeaderProps) {
  return (
    <header className={S.wrapper}>
      <h1>{title}</h1>
    </header>
  );
}
