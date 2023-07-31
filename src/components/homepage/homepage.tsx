"use client"

import DateDropdown from '../dateDropdown';
import TimeDropdown from '../timeDropdown';
import SportDropdown from '../sportDropdown';
import LocationDropdown from '../locationDropdown';
import ObjectCard from '../objectCard';

export default function HomePage() {
  return (
    <>
      <SportDropdown></SportDropdown>
      <LocationDropdown></LocationDropdown>
      <TimeDropdown></TimeDropdown>
      <DateDropdown></DateDropdown>
      <ObjectCard></ObjectCard>

    </>
  )
}
