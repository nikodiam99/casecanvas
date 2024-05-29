import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"
interface PhoneProps extends HTMLAttributes<HTMLDivElement>{ //so we can style the <Phone> like a div
    imgSrc: string
    dark?: boolean
}
const Phone = ({imgSrc, className, dark = false, ...props}: PhoneProps) => {
    return(
    <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)}
    {...props}>
        <img src={dark ? "/phone-template-dark-edges.png": "/phone-template-white-edges.png"} //pass different image depending on dark mode
        className="pointer-events-none z-50 select-none"
        alt="phone image"/>
      <div className="absolute -z-10 inset-0">
        <img className="object-cover" src={imgSrc} alt="overlaying phone image" />
    </div>  
    </div>)
}
export default Phone