import { fetchChartsData } from "@/utils/actions";
import Chart from "./Chart";

export default async function ChartContainer() {
  const bookings = await fetchChartsData();
  if (bookings.length < 1) {
    return null;
  }

  return <Chart data={bookings} />;
}
