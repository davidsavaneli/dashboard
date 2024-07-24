import React, { useState, useCallback } from 'react';

type ClickedElements = HTMLElement | HTMLButtonElement | SVGElement | HTMLSpanElement;

function useClickEvent() {
  const [elem, setElem] = useState<ClickedElements | null>(null);

  // set anchor element on click event
  const open = useCallback((event: React.MouseEvent<ClickedElements>) => {
    setElem(event.currentTarget);
  }, []);

  // reset anchor on close
  const close = useCallback(() => {
    setElem(null);
  }, []);

  return [elem, { open, close }] as const;
}

export default useClickEvent;
