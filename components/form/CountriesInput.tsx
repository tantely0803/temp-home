import { Label } from "@/components/ui/label";
import { formattedCoutries } from "@/utils/coutries";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const name = "country";

export default function CoutriesInput({
  defaultValue,
}: {
  defaultValue?: string;
}) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Country
      </Label>
      <Select
        defaultValue={defaultValue || formattedCoutries[0].code}
        name={name}
        required
      >
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {formattedCoutries.map((item) => {
            return (
              <SelectItem key={item.code} value={item.code}>
                <span className="flex items-center gap-2">
                  <img src={item.urlflag} alt={item.name} className="w-6 h-4" />
                  {item.name}
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
