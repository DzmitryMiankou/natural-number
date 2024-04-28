import { useState, useEffect } from "react";

export const useResize = (): { width: number } => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: UIEvent) =>
      setWidth((event.target as Window).innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return {
    width,
  };
};
