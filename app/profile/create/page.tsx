import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import SubmitButton from "@/components/form/Buttons";
import { createProfileAction } from "@/utils/actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function CreateProfilePage() {
  const user = await currentUser();
  if (user?.privateMetadata.hasProfile) {
    redirect("/");
  }

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">New user</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProfileAction}>
          <div className="grid md:grid-cols-2  gap-4 mt-4">
            <FormInput type="text" name="firstName" label="First Name" />
            <FormInput type="text" name="lastName" label="Last Name" />
            <FormInput type="text" name="userName" label="User Name" />
          </div>
          <SubmitButton size="lg" text="Create Profile" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
