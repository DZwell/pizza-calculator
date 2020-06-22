export default function calculatePizzasNeeded(
  numberOfPeople,
  slicesPerPerson,
  slicesPerPizza = 8,
) {
  const shouldReturnZero = !numberOfPeople || !slicesPerPerson;
  return shouldReturnZero ? 0 : Math.ceil(numberOfPeople * slicesPerPerson / slicesPerPizza);
}
