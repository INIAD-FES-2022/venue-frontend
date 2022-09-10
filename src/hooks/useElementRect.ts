import { useEffect, useState, useCallback } from 'react';

export const useElementRect = (
  ref: React.RefObject<HTMLElement>,
): {
  rect: DOMRect | undefined;
  updateRect: () => void;
} => {
  const [rect, setRect] = useState<DOMRect | undefined>(undefined);

  const updateRect = useCallback(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    } else {
      setRect(undefined);
    }
  }, []);

  useEffect(() => {
    updateRect(); // initial call
  }, []);

  return {
    rect,
    updateRect,
  };
};
