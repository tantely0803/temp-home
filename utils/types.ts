export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

export type PropertyCardprops = {
  image: string;
  id: string;
  name: string;
  tagline: string;
  country: string;
  price: number;
};
