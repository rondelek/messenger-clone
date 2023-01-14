import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: "1538449",
  key: "f47ae8000061a43f4a79",
  secret: process.env.PUSHER_KEY!,
  cluster: "eu",
  useTLS: true,
});

export const clientPusher = new ClientPusher("f47ae8000061a43f4a79", {
  cluster: "eu",
  forceTLS: true,
});
