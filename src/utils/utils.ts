// Interfaces
import { Shared } from "./../interfaces/shared";

// Const
export const currYear = new Date().getFullYear();

// Functions
export function dynamicSuffix(
  category: Shared.Enums.DynamicSuffixCategory,
  value: number,
): string {
  switch (category) {
    case Shared.Enums.DynamicSuffixCategory.YEAR:
      if (value >= 5 && value <= 20) return "лет";
      if (value === 1) return "год";
      if (value > 1 && value <= 4) return "года";
      const lastDigit = value.toString().slice(-1);
      switch (Number(lastDigit)) {
        case 1:
          return "год";
        case 2:
        case 3:
        case 4:
          return "года";
        default:
          return "лет";
      }
  }
}
export function moneyRubFormat(
  value: string | number | null | undefined,
): string {
  if (!value) value = 0;

  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "decimal",
    currency: "BYN",
    minimumFractionDigits: 2,
  });

  return (
    formatter.format(Number(value.toString().replace(/[^\d.-]/g, ""))) + " р."
  );
}
export function srcPrefix(): string {
  return "";
  //return import.meta.env.DEV ? '/src' : ''
}
