declare global {
  interface Window {
    ym?: (counterId: number, action: string, goalId: string) => void;
    [key: string]: unknown;
  }
}

export function sendYandexConversion(goalId: string) {
  for (const key in window) {
    if (key.indexOf("yaCounter") === 0) {
      const counterId = parseInt(key.replace("yaCounter", ""));
      if (typeof window.ym === "function") {
        window.ym(counterId, "reachGoal", goalId);
      }
    }
  }
}
