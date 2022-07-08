import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const PORT = 3000;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("send-message", (message) => {
    console.log(message);
  });
});

httpServer.listen(PORT, (req, res) => {
  console.log(`socket opened at port ${PORT}`);
});
