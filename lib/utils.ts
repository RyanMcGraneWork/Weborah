import { clsx, type ClassValue } from "clsx";

// Simple utility that combines class names without advanced merging
// In a production app, you might want to use the full tailwind-merge
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
