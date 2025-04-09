import countries from "world-countries";

export const formattedCoutries = countries.map((item) => {
  return {
    code: item.cca2,
    name: item.name.common,
    flag: item.flag.toString(),
    urlflag: `https://flagcdn.com/w320/${item.cca2.toLowerCase()}.png`,
    location: item.latlng,
    region: item.region,
  };
});

export const findCountryByCode = (code: string) => {
  return formattedCoutries.find((item) => item.code === code);
};
