"use client"

import { Button } from "../button"
//import { Icons } from "@/components/icons"
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

export default function CreateAccount() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Registracija</CardTitle>
        <CardDescription>
          Unesite email adresu kako biste kreirali nalog.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline">
            Google nalog
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Ili nastavite sa
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email adresa</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Lozinka</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Registuj se</Button>
      </CardFooter>
    </Card>
  )
}
