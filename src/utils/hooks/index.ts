/**
 *  @version 1.0.0
 *  @author Rony cb - Mrvalem
 *  @description hooks complementarios
 */

import { useState, useEffect } from "react";
import throttle from "lodash/throttle";

/**
 * @description useKey es un hook que nos permite comparar la pulsaciones de las teclas.
 * @param key string: especificamos el codigo del teclado a capturar ejemplo: Esc, shift...etc
 * @returns boolean: retorna true si se realizo un match, de lo contrario false
 */

function useKey(key: string): boolean {
  // Keep track of key state
  const [pressed, setPressed] = useState(false);
  // Bind and unbind events
  useEffect(() => {
    // Does an event match the key we're watching?
    const match = (event: any) => key.toLowerCase() === event.key.toLowerCase();
    // Event handlers
    const onDown = (event: any) => {
      if (match(event)) setPressed(true);
    };

    const onUp = (event: any) => {
      if (match(event)) setPressed(false);
    };
    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
    };
  }, [key]);

  return pressed;
}

/**
 * @description useBreakpoint nos permite capturar el tamaño de la pantalla del dispositivo.
 * @returns  @typebreakpoints segun el tamaño de la pantalla xs, sm, md, lg
 */

type breakpoints = "xs" | "sm" | "md" | "lg" | undefined;

const getDeviceConfig = (width: number): breakpoints => {
  if (width < 320) {
    return "xs";
  } else if (width >= 320 && width < 770) {
    return "sm";
  } else if (width >= 770 && width < 1024) {
    return "md";
  } else if (width >= 1024) {
    return "lg";
  }
};

const useBreakpoint = (): breakpoints => {
  const [brkPnt, setBrkPnt] = useState(() =>
    getDeviceConfig(window.innerWidth)
  );

  useEffect(() => {
    const calcInnerWidth = throttle(function() {
      setBrkPnt(getDeviceConfig(window.innerWidth));
    }, 200);
    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, []);

  return brkPnt;
};

// const useAbortableEffect = (
//   effect: (status: { aborted: boolean }) => any,
//   dependencies: any[]
// ) => {
//   const status: { aborted: boolean } = { aborted: false };
//   useEffect(() => {
//     status.aborted = false;
//     // pass the mutable object to the effect callback
//     // store the returned value for cleanup
//     const cleanUpFn = effect(status);
//     // console.log("montaod", status.aborted);
//     return () => {
//       // mutate the object to signal the consumer
//       // this effect is cleaning up
//       status.aborted = true;
//       // console.log("desmontado", status.aborted);
//       if (typeof cleanUpFn === "function") {
//         // run the cleanup function
//         cleanUpFn();
//       }
//     };
//   }, [effect, status, ...dependencies]);
// };

export default useBreakpoint;

export { useKey, useBreakpoint };
