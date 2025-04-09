import { Prisma } from "@prisma/client";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type PriceInputProps = {
  defaultValue?: number;
};

const name = Prisma.PropertyScalarFieldEnum.price; // or const name = 'price'

export default function PriceInput({ defaultValue }: PriceInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Price ($)
      </Label>
      <Input
        id={name}
        type="number"
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
}
