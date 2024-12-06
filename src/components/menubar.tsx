import React from "react";
import { Tooltip } from "./ui/tooltip";
import { buttonStyles } from "./ui/button";
import { Article, GithubLogo, LinkedinLogo, PaperPlaneTilt, Phone } from "@phosphor-icons/react";
import { toast } from "sonner";
import { Separator } from "./ui/separator";
import { useRouter } from "next/navigation";

export default function Menubar() {
  const router = useRouter();

  return (
    <div className="flex items-center gap-1 border border-white rounded-lg p-2 ">
      <div className="hover:scale-150 transition-all ease-in-out duration-300">
      <Tooltip delay={500}>
        <Tooltip.Trigger
          aria-label="Go to Blog page"
          className={buttonStyles({
            appearance: "plain",
            size: "square-petite",
            intent: "primary",
          })}
          onPress={async () => {
            router.push("/blog");
          }}
        >
          <Article className="text-white"/>
        </Tooltip.Trigger>
        <Tooltip.Content>Go to the blog page</Tooltip.Content>
      </Tooltip>
      </div>
      <Separator orientation="vertical" className="h-8" />
      <div className="hover:scale-150 transition-all ease-in-out duration-300">
      <Tooltip delay={500}>
        <Tooltip.Trigger
          aria-label="Call Me"
          className={buttonStyles({
            appearance: "plain",
            size: "square-petite",
            intent: "secondary",
          })}
          onPress={async () => {
            await navigator.clipboard.writeText('0808176488')
            toast.success("Phone number copied to clipboard")
          }}
        >
          <Phone className="text-white"/>
        </Tooltip.Trigger>
        <Tooltip.Content>Copy my phone number</Tooltip.Content>
      </Tooltip>
      </div>
      <div className="hover:scale-150 transition-all ease-in-out duration-300">
      <Tooltip delay={500}>
        <Tooltip.Trigger
          aria-label="Connect My Email"
          className={buttonStyles({
            appearance: "plain",
            size: "square-petite",
            intent: "secondary",
          })}
          onPress={async () => {
            await navigator.clipboard.writeText('puun.pi@gmail.com')
            toast.success("Email copied to clipboard")
          }}
        >
          <PaperPlaneTilt className="text-white"/>
        </Tooltip.Trigger>
        <Tooltip.Content >Copy my Email</Tooltip.Content>
      </Tooltip>
      </div>
      <div className="hover:scale-150 transition-all ease-in-out duration-300">
      <Tooltip delay={500}>
        <Tooltip.Trigger
          aria-label="Connect My Linkedin"
          className={buttonStyles({
            appearance: "plain",
            size: "square-petite",
            intent: "secondary",
          })}
          onPress={() => window.open("https://www.linkedin.com/in/inwpuun/")}
        >
          <LinkedinLogo className="text-white"/>
        </Tooltip.Trigger>
        <Tooltip.Content >Connect to my Github</Tooltip.Content>
      </Tooltip>
      </div>
      <div className="hover:scale-150 transition-all ease-in-out duration-300">
      <Tooltip delay={500}>
        <Tooltip.Trigger
          aria-label="Connect My Github"
          className={buttonStyles({
            appearance: "plain",
            size: "square-petite",
            intent: "secondary",
          })}
          onPress={() => window.open("https://github.com/inwpuun")}
        >
          <GithubLogo className="text-white"/>
        </Tooltip.Trigger>
        <Tooltip.Content >Connect to my Github</Tooltip.Content>
      </Tooltip>
      </div>
    </div>
  );
}
