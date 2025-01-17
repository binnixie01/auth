"use client"
import {
    Card,
    CardContent,
  
    CardFooter,
    CardHeader,
  } from "@/components/ui/card"
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import BackButton from "./backbutton";
interface CardWrapperProps{
    children:React.ReactNode;
    headerLabel:string;
    backButtonlabel:string;
    backButtonHref:string;
    showSocial?:boolean;
}

const CardWrapper = ({children,headerLabel,backButtonHref,backButtonlabel,showSocial}:CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
        <CardHeader><Header label={headerLabel}/></CardHeader>
       <CardContent>{children}</CardContent>  
       {showSocial && <CardFooter><Social/></CardFooter>}
       <CardFooter><BackButton href={backButtonHref} label={backButtonlabel}/></CardFooter>
    </Card>
  )
}

export default CardWrapper