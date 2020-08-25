const setFullAdress = (
  number: number,
  street: string,
  code: number,
  city: string,
  country: string
) => {
  return `${String(number)} ${street}
${code} - ${city.toUpperCase()}
${country.toUpperCase()}`;
};

const setFullFrenchAdress = (
  number: number,
  street: string,
  code: number,
  city: string
) => setFullAdress(number, street, code, city, "france");

console.log(setFullFrenchAdress(1, "cours du gal de gaulle", 75001, "paris"));
