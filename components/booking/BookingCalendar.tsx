"use client";

import { Calendar } from "../ui/calendar";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { useProperty } from "@/utils/store";
import { toast } from "sonner";

import {
  generateDisabledDates,
  generateDateRange,
  defaultSelected,
  generateBlockedPeriods,
} from "@/utils/calendar";

export default function BookingCalendar() {
  const currentDate = new Date();
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
  const bookings = useProperty((state) => state.bookings);

  const blockedPeriods = generateBlockedPeriods({
    bookings,
    today: currentDate,
  });

  const unvailableDates = generateDisabledDates(blockedPeriods);

  useEffect(() => {
    const selecteRange = generateDateRange(range);
    const isDisabledDateIncluded = selecteRange.some((date) => {
      if (unvailableDates[date]) {
        setRange(defaultSelected);
        toast.info("Some dates are booked. Please select again");
        return true;
      }
      return false;
    });

    useProperty.setState({ range });
  }, [range]);

  return (
    <Calendar
      mode="range"
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
      className="mb-4"
      disabled={blockedPeriods}
    />
  );
}
