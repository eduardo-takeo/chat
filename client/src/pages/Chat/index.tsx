import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";

import S from "./Chat.module.scss";

export default function Chat() {
  return (
    <main className={S.wrapper}>
      <Header title="Chat.io" />

      <section>Messages go here</section>

      <div className={S.bottomBarWrapper}>
        <Input placeholder="Insert message here" />
        <Button>Send</Button>
      </div>
    </main>
  );
}
