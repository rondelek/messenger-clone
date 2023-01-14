import { unstable_getServerSession } from "next-auth";
import React from "react";
import { Message } from "../typings";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import { Providers } from "./providers";

export default async function HomePage() {
  const data = await fetch(`${process.env.VERCEL_URL}/api/getMessages`).then(
    (res) => res.json()
  );

  const messages: Message[] = data.messages;
  const session = await unstable_getServerSession();

  return (
    <Providers session={session}>
      <main>
        <MessageList initialMessages={messages} />
        <ChatInput session={session} />
      </main>
    </Providers>
  );
}
