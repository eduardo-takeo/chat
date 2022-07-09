import { useState } from "react";
import { Link } from "react-router-dom";

import { useSession } from "../../hooks/useSession";
import Button from "../../components/Button";

import S from "./Main.module.scss";

function Main() {
  const [username, setUsername] = useState<string>("");
  const [room, setRoom] = useState<string>("");

  const { signIn } = useSession();

  return (
    <main className={S.wrapper}>
      <div className={S.formBox}>
        <h1>Name</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <h1>Room</h1>
        <input
          type="text"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <Link to={`/chat/${room.toLowerCase()}`}>
          <Button onClick={() => signIn(username, room)}>Enter</Button>
        </Link>
      </div>
    </main>
  );
}

export default Main;
