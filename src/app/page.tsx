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

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>
            Using Vercel SDK to create a chat bot.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>RA</AvatarFallback>
              <AvatarImage src="https://github.com/nikurida.png" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-800 ">Humano:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptates veniam numquam omnis, impedit tenetur, ex facilis nam
              quibusdam eos quam laborum, est illum dolores ipsum assumenda
              laudantium! Eligendi, magnam.
            </p>
          </div>
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>RA</AvatarFallback>
              <AvatarImage src="https://pbs.twimg.com/media/Cbx-oKvW8AACd-D.jpg" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-800 ">Humano:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptates veniam numquam omnis, impedit tenetur, ex facilis nam
              quibusdam eos quam laborum, est illum dolores ipsum assumenda
              laudantium! Eligendi, magnam.
            </p>
          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="How can I help you?" />
          <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
