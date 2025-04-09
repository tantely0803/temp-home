import { fetchProperties } from "@/utils/actions";
import PropertiesList from "./PropertiesList";
import EmptyList from "./EmptyList";
import type { PropertyCardprops } from "@/utils/types";

export default async function PropertiesContainer({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) {
  const properties: PropertyCardprops[] = await fetchProperties({
    category,
    search,
  });

  if (properties.length === 0) {
    return (
      <EmptyList
        heading="No results"
        message="Try changing or removing some of yur filters"
        btnText="Clear Filters"
      />
    );
  } else {
    return <PropertiesList properties={properties} />;
  }
}
