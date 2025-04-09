import FormContainer from "@/components/form/FormContainer";
import {
  updateProfileAction,
  fetchProfile,
  updateProfileImageAction,
} from "@/utils/actions";
import FormInput from "@/components/form/FormInput";
import SubmitButton from "@/components/form/Buttons";
import ImageInputContainer from "@/components/form/ImageInputContainer";

export default async function ProfilePage() {
  const profile = await fetchProfile();

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">User profile</h1>
      <div className="border p-8 rounded-md">
        <ImageInputContainer
          image={profile.profilImage}
          name={profile.userName}
          action={updateProfileImageAction}
          text="Update Profile Image"
        />
        <FormContainer action={updateProfileAction}>
          <div className="grid md:grid-cols-2  gap-4 mt-4">
            <FormInput
              type="text"
              name="firstName"
              label="First Name"
              defaultValue={profile.firstName}
            />
            <FormInput
              type="text"
              name="lastName"
              label="Last Name"
              defaultValue={profile.lastName}
            />
            <FormInput
              type="text"
              name="userName"
              label="User Name"
              defaultValue={profile.userName}
            />
          </div>
          <SubmitButton size="lg" text="Update Profile" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
