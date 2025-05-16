import {
  ChartsLoadingContainer,
  StatsLoadingContainer,
} from "@/components/admin/Loading";
import StatsContainer from "@/components/admin/StatsContainer";
import ChartContainer from "@/components/admin/ChartContainer";
import { Suspense } from "react";

export default function AdminPage() {
  return (
    <>
      <Suspense fallback={<StatsLoadingContainer />}>
        <StatsContainer />
      </Suspense>
      <Suspense fallback={<ChartsLoadingContainer />}>
        <ChartContainer />
      </Suspense>
    </>
  );
}
