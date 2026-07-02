"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/components/ui/button"
import { Calendar } from "@/shared/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/components/ui/popover"

export function DatePicker() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          data-empty={!date}
          className="w-full justify-start text-left font-normal p-0 data-[empty=true]:text-muted-foreground bg-transparent"
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Fecha</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Calendar className="w-[80vw]" mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  )
}