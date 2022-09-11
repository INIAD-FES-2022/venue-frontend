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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateRect(); // initial call
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    rect,
    updateRect,
  };
};
