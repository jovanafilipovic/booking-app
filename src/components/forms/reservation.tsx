import * as React from "react"

import { Button } from "../button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card"
import { Input } from "../input"
import { Label } from "../label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select"
import TimeDropdown from "../timeDropdown"

export default function Reservation() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Rezervisite odabrani teren</CardTitle>
        <CardDescription>Izaberite odgovarajuce vreme i izvrsite rezervaciju</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Dostupni termini za odabrani datum:</Label>
              <TimeDropdown></TimeDropdown>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Otkazi</Button>
        <Button>Rezervisi</Button>
      </CardFooter>
    </Card>
  )
}
