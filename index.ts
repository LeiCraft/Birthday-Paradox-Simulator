
export class BirthdayParadox {
  static probability(persons: number): number {
    if (persons <= 1) return 0;
    if (persons > 365) return 1;

    let logSum = 0;

    for (let i = 0; i < persons; i++) {
      logSum += Math.log(365 - i) - Math.log(365);
    }

    const allDifferent = Math.exp(logSum);
    return 1 - allDifferent;
  }
}

const persons = parseInt(process.argv[2] as string);
if (!isFinite(persons)) {
  console.error("Persons Arg must be specified");
  process.exit(1);
}
const result = BirthdayParadox.probability(persons) * 100;
console.log("Probability for", persons, "Persons:", result.toFixed(2) + "%");
