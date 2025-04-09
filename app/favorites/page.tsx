import { fetchFavorites } from "@/utils/actions";
import EmptyList from "@/components/home/EmptyList";
import PropertiesList from "@/components/home/PropertiesList";

export default async function Page() {
  const favorites = await fetchFavorites();

  if (favorites.length === 0) {
    return <EmptyList />;
  }

  return <PropertiesList properties={favorites} />;
}
