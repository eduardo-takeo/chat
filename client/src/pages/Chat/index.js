import React from "react";

import { Main, Messages } from "./styles";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Button from "../../components/Button";
import socket from "../../services/socket-client";

function Chat() {
  function sendMessage() {
    socket.emit("send-message", "This is a custom message");
  }

  return (
    <Main>
      <Sidebar />
      <Messages>
        <Header />
        <Button onClick={sendMessage} />
      </Messages>
    </Main>
  );
}

export default Chat;
