import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const SocialIcon = ({children,className}:{
  children: ReactNode
  className?: String
}) => {
  return (
    <div className={cn("hover:bg-main size-7 p-1 flex justify-center items-center hover:text-white rounded-[2px] cursor-pointer",className)}>
      {children}
    </div>
  )
}
export default SocialIcon