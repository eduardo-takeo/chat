import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Chat from "./pages/Chat";

import { SessionProvider } from "./hooks/useSession";
import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SessionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="chat" element={<Chat />}>
            <Route path=":room" element={<Chat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SessionProvider>
  </React.StrictMode>
);
