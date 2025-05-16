import {
  fetchRentalDetails,
  updateProfileImageAction,
  updatePropertyAction,
} from "@/utils/actions";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import CategoriesInput from "@/components/form/CategoriesInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import CoutriesInput from "@/components/form/CountriesInput";
import CounterInput from "@/components/form/CounterInput";
import AmenitiesInput from "@/components/form/AmenitiesInput";
import SubmitButton from "@/components/form/Buttons";
import { redirect, RedirectType } from "next/navigation";
import { type Amenity } from "@/utils/amenities";
import ImageInputContainer from "@/components/form/ImageInputContainer";

export default async function EditRentalPage({
  params,
}: {
  params: { id: string };
}) {
  const property = await fetchRentalDetails(params.id);
  if (!property) redirect("/");
  const defaultAmenities: Amenity[] = JSON.parse(property.amenities);

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Edit property</h1>
      <div className="border p-8 rounded-md">
        <ImageInputContainer
          name={property.name}
          text="Update Image"
          action={updateProfileImageAction}
          image={property.image}
        >
          <input type="hidden" name="id" value={property.id} />
        </ImageInputContainer>
        <FormContainer action={updatePropertyAction}>
          <input type="hidden" name="id" value={property.id} />
          <div className="grid md:grid-cols-2 gap-8 mb-4 mt-8">
            <FormInput
              name="name"
              type="text"
              label="Name (20 limit)"
              defaultValue={property.name}
            />
            <FormInput
              name="tagline"
              type="text"
              label="Tagline (30 limit)"
              defaultValue={property.name}
            />
            <PriceInput defaultValue={property.price} />
            <CategoriesInput defaultValue={property.category} />
            <CoutriesInput defaultValue={property.country} />
          </div>
          <TextAreaInput
            name="Description"
            labelText="Description (10 - 100 words)"
          />
          <h3 className="text-lg mt-8 mb-4  font-medium">
            Accomodation Details
          </h3>
          <CounterInput detail="guests" defaultValue={property.guests} />
          <CounterInput detail="bedrooms" defaultValue={property.bedrooms} />
          <CounterInput detail="beds" defaultValue={property.beds} />
          <CounterInput detail="bahs" defaultValue={property.baths} />
          <h3 className="text-lg mt-10 mb-6 font-medium">Amenities</h3>
          <AmenitiesInput defaultValue={defaultAmenities} />
          <SubmitButton text="edit property" className="mt-12" size="lg" />
        </FormContainer>
      </div>
    </section>
  );
}
