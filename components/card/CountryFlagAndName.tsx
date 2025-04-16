import { findCountryByCode } from "@/utils/coutries";

export default function CountryFlagAndName({
  countryCode,
}: {
  countryCode: string;
}) {
  const validCountry = findCountryByCode(countryCode)!;

  const countryName =
    validCountry.name.length > 20
      ? `${validCountry?.name.substring(0, 20)}...`
      : validCountry?.name;
  return (
    <span className="flex justify-between items-center gap-2 text-sm">
      <img
        src={validCountry.urlflag}
        alt={validCountry.name}
        className="w-6 h-4"
      />{" "}
      {countryName}
    </span>
  );
}
