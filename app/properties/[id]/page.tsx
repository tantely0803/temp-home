import { fetchPropertyDetails, findExistingReview } from "@/utils/actions";
import { redirect } from "next/navigation";
import BreadCrumbs from "@/components/properties/BreadCrumbs";
import FavoriteToggleButton from "@/components/card/FavoriteToggleButton";
import ShareButton from "@/components/properties/ShareButton";
import ImageContainer from "@/components/properties/ImageContainer";
import PropertyRating from "@/components/card/PropertyRating";
import PropertyDetails from "@/components/properties/PropertyDetails";
import UserInfo from "@/components/properties/UserInfo";
import { Separator } from "@/components/ui/separator";
import Descrition from "@/components/properties/Description";
import Amenities from "@/components/properties/Amenities";
import DynamicMap from "@/components/properties/DynamicMap";
import { DynamicBookingWrapper } from "@/components/properties/DynamicBookingWrapper";
import SubmitReview from "@/components/reviews/SubmitReview";
import PropertyReviews from "@/components/reviews/PropertyReviews";
import { auth } from "@clerk/nextjs/server";

export default async function PropertiesDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const property = await fetchPropertyDetails(id);
  if (!property) redirect("/");

  const { baths, bedrooms, beds, guests } = property;
  const details = { baths, bedrooms, beds, guests };
  const firstName = property.profile.firstName;
  const profileImage = property.profile.profileImage;

  const { userId } = await auth();
  const isNotOwner = property.profile.clerkId !== userId;
  const reviewDoesNotExist =
    userId && isNotOwner && !(await findExistingReview(userId, property.id));

  return (
    <section>
      <BreadCrumbs name={property.name} />
      <header className="flex justify-between items-center mt-4">
        <h1 className="text-4xl font-bold capitalize">{property.tagline}</h1>
        <div className="flex items-center gap-x-4">
          <ShareButton name={property.name} propertyId={property.id} />
          <FavoriteToggleButton propertyId={property.id} />
        </div>
      </header>
      <ImageContainer mainImage={property.image} name={property.name} />
      <section className="lg:grid lg:grid-cols-12 gap-x-12 mt-12">
        <div className="lg:col-span-8">
          <div className="flex gap-x-4 items-center">
            <h1 className="text-xl font-bold">{property.name}</h1>
            <PropertyRating inPage propertyId={property.id} />
          </div>
          <PropertyDetails details={details} />
          <UserInfo profile={{ firstName, profileImage }} />
          <Separator className="mt-4" />
          <Descrition descrition={property.description} />
          <Amenities amenities={property.amenities} />
          <DynamicMap country={property.country} />
        </div>
        <div className="lg:col-span-4 flex flex-col items-center">
          <DynamicBookingWrapper
            propertyId={property.id}
            price={property.price}
            bookings={property.bookings}
          />
        </div>
      </section>
      {reviewDoesNotExist && <SubmitReview propertyId={property.id} />}
      <PropertyReviews propertyId={property.id} />
    </section>
  );
}
