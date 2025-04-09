"use client";

import { toogleFavoriteAction } from "@/utils/actions";
import FormContainer from "../form/FormContainer";
import { usePathname } from "next/navigation";
import { CardSignInButton, CardSubmitButton } from "../form/Buttons";

type FavoriteToggleFormProps = {
  propertyId: string;
  favoriteId: string | null;
};

export default function FavoriteToggleForm({
  propertyId,
  favoriteId,
}: FavoriteToggleFormProps) {
  const pathname = usePathname();
  const toogleAction = toogleFavoriteAction.bind(null, {
    propertyId,
    favoriteId,
    pathname,
  });
  return (
    <FormContainer action={toogleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
}
