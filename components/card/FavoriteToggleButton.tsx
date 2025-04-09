import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/Buttons";
import { fetchFavoriteId } from "@/utils/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";

export default async function FavoriteToggleButton({
  propertyId,
}: {
  propertyId: string;
}) {
  const { userId } = await auth();
  if (!userId) return <CardSignInButton />;

  const favoriteId = await fetchFavoriteId({ propertyId });

  return (
    // <Button size="icon" variant="outline" className="p-2 cursor-pointer">
    //   <FaHeart />
    // </Button>
    <FavoriteToggleForm propertyId={propertyId} favoriteId={favoriteId} />
  );
}
