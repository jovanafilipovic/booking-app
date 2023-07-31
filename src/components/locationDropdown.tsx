"use client"

import { Label } from "./label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select"

export default function LocationDropdown() {
  return (
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="area">Lokacija: </Label>
            <Select defaultValue="billing">
              <SelectTrigger id="area">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="location1">Vracar</SelectItem>
                <SelectItem value="location2">Vozdovac</SelectItem>
                <SelectItem value="location3">Zvezdara</SelectItem>
                <SelectItem value="location4">Stari Grad</SelectItem>
                <SelectItem value="location5">Novi Beograd</SelectItem>
              </SelectContent>
            </Select>
          </div>
          </div>
  )
}