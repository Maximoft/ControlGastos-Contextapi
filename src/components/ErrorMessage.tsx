import type { ReactNode } from "react"

type ErrorMessageProps = {
  children: ReactNode
}
export default function ErrorMessage({children}: ErrorMessageProps) {
  return (
    
<p className="bg-red-600/50 py-2 text-white font-bold text-sm text-center rounded-lg">
  {children}
</p>
  )
}
