import S from "./Main.module.scss";

function Main() {
  return (
    <main className={S.wrapper}>
      <div className={S.formBox}>
        <h1>Name</h1>
        <input type="text" />
        <h1>Room</h1>
        <input type="text" />
        <button className={S.enterButton}>Enter</button>
      </div>
    </main>
  );
}

export default Main;
