import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Функция для определения base URL
export function getBaseUrl(): string {
  // В режиме разработки используем относительные пути
  if (import.meta.env.DEV) {
    return '';
  }
  // В продакшене (GitHub Pages) используем /EasyWayEurope/
  return '/EasyWayEurope';
}

// Функция для получения пути к статическим файлам
export function getAssetPath(path: string): string {
  return `${getBaseUrl()}${path}`;
}
