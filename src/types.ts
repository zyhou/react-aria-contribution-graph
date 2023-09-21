export const colorByLevel = {
  0: "bg-gray-200",
  1: "bg-lime-200",
  2: "bg-green-400",
  3: "bg-green-800",
} as const;

export type ActivityLevel = keyof typeof colorByLevel;
