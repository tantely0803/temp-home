import { LuUser } from "react-icons/lu";
import { fetchProfileImage } from "@/utils/actions";

export default async function UserIcon() {
  const profilImage = await fetchProfileImage();
  if (profilImage) {
    return (
      <img src={profilImage} className="w-6 h-6 rounded-full object-cover" />
    );
  } else {
    return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />;
  }
}
