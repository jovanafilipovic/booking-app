"use client"

import { Label } from "./label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select"

export default function SportDropdown() {
  return (
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="area">Vrsta sporta: </Label>
            <Select defaultValue="billing">
              <SelectTrigger id="area">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="football">Fudbal</SelectItem>
                <SelectItem value="basketball">Kosarka</SelectItem>
                <SelectItem value="volleyball">Odbojka</SelectItem>
                <SelectItem value="tennis">Tenis</SelectItem>
              </SelectContent>
            </Select>
          </div>
          </div>
  )
}