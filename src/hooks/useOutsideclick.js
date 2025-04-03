import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();
  useEffect(
    function () {/* yaha pai yeh compulsary hai javascript ka code */
      function handleClick(e) {
        if (ref.current && !ref.current.contains(
          e.target)) {
            handler();/* handler mai waha value passin kar diya gaya hai */
          }
      }

      document.addEventListener("click", handleClick, 
        listenCapturing);
      
      return () => document.removeEventListener
      ("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;/*jo yaha return karenge hook ko call karne time pai destructure kar sakte hai*/
}