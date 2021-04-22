import express, { request, response } from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import path from 'path';

import './database';
import { routes } from './routes';

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require('ejs').renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
})

const http = createServer(app);// Criando protocolo HTTP;
const io = new Server(http);// Criando protocolo de websocket

io.on("connection", (Socket: Socket) => {
  console.log("Se conectou", Socket.id);
})

app.use(express.json());

app.use(routes);

http.listen(3333, () => console.log("Server is running on port 3333!"));