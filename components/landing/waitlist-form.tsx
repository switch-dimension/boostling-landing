"use client"

import { useFormState, useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { joinWaitlist } from "@/app/actions"
import { useEffect, useRef } from "react"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Send } from "lucide-react"

const initialState = {
  message: "",
  success: false,
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold shrink-0 h-11 shadow-md hover:shadow-lg transition-shadow"
      disabled={pending}
      aria-label="Join Waitlist"
    >
      {pending ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Send className="mr-2 h-5 w-5" />}
      {pending ? "Joining..." : "Notify Me"}
    </Button>
  )
}

export function WaitlistForm() {
  const [state, formAction] = useFormState(joinWaitlist, initialState)
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
          className:
            "bg-emerald-500 border-emerald-600 text-white dark:bg-emerald-600 dark:border-emerald-700 dark:text-slate-50",
        })
        formRef.current?.reset()
      } else {
        toast({
          title: "Oops!",
          description: state.message,
          variant: "destructive",
        })
      }
    }
  }, [state, toast])

  return (
    <form
      ref={formRef}
      action={formAction}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto items-start"
    >
      <Input
        type="email"
        name="email"
        placeholder="you@example.com"
        required
        className="flex-grow bg-slate-700/50 border-slate-600 placeholder-slate-400 text-slate-50 focus:ring-emerald-500 focus:border-emerald-500 h-11 text-base rounded-md shadow-sm"
        aria-label="Email address for waitlist"
      />
      <SubmitButton />
    </form>
  )
}
