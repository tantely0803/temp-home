import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";
import { Suspense } from "react";
import LoadingCards from "@/components/card/LoadingCards";

export default async function HomePage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
  }) {
  const searchParamsResult =  await searchParams;
  console.log(searchParamsResult);
  return (
    <section>
      <CategoriesList
        category={searchParamsResult.category}
        search={searchParamsResult.search}
      />
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer
          category={searchParamsResult.category}
          search={searchParamsResult.search}
        />
      </Suspense>
    </section>
  );
}
