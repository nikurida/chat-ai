"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { useChat } from "ai/react";
import { ScrollArea } from "./ui/scroll-area";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[440px]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>
            Using Vercel SDK to create a chat bot.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] w-full pr-4">
            {messages.map((messages) => {
              return (
                <div
                  className="flex gap-3 text-slate-600 text-sm mb-4"
                  key={messages.id}
                >
                  {messages.role == "user" && (
                    <Avatar>
                      <AvatarFallback>RA</AvatarFallback>
                      <AvatarImage src="https://github.com/nikurida.png" />
                    </Avatar>
                  )}

                  {messages.role == "assistant" && (
                    <Avatar>
                      <AvatarFallback>IA</AvatarFallback>
                      <AvatarImage src="https://pbs.twimg.com/media/Cbx-oKvW8AACd-D.jpg" />
                    </Avatar>
                  )}

                  <p className="leading-relaxed">
                    <span className="block font-bold text-slate-800 ">
                      {messages.role == "user" ? "User" : "AI"}
                    </span>
                    {messages.content}
                  </p>
                </div>
              );
            })}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form className="flex gap-2 w-full" onSubmit={handleSubmit}>
            <Input
              placeholder="How can I help you?"
              value={input}
              onChange={handleInputChange}
            />
            <Button type="submit">Send</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
