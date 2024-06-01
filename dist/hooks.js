"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBoolean = void 0;
const react_1 = require("react");
// /**
//  * hook version of interval timer, should behave the same without
//  * the pesky inconvenience of creating a new timer on each frame render
//  * If the passed delay is null or undefined this is a noop
//  * @return void
//  */
// export function useInterval(callback: () => void, delay: ?number) {
//   const savedCallback = useRef();
//   // Remember the latest callback.
//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);
//   // Set up the interval.
//   useEffect(() => {
//     function tick() {
//       if (savedCallback.current) {
//         savedCallback.current();
//       }
//     }
//     if (delay != null) {
//       const id = setInterval(tick, delay);
//       return () => clearInterval(id);
//     }
//   }, [delay]);
// }
// export function useBackHandler(handler?: () => mixed) {
//   const savedHandler = useRef(null);
//   useEffect(() => {
//     savedHandler.current = handler;
//   }, [handler]);
//   useFocusEffect(
//     useCallback(() => {
//       const eventListener = () => {
//         // There is a problem here; 'hardwareBackPress' requires the function to return "true"
//         // to prevent bubling up of the press event, which we are not enforcing...
//         // eslint-disable-next-line
//         savedHandler.current?.();
//       };
//       BackHandler.addEventListener("hardwareBackPress", eventListener);
//       return () => {
//         BackHandler.removeEventListener("hardwareBackPress", eventListener);
//       };
//       // passing empty dependency array to useCallback ensures focus effect will only run once on mount
//       // and the clean-up function will only run once on unmount as well
//       // wether the internal handler function is correctly updated is another problem
//     }, [])
//   );
// }
function useBoolean(initialVal = false) {
    const [val, setVal] = (0, react_1.useState)(initialVal);
    function setTrue() {
        setVal(true);
    }
    function setFalse() {
        setVal(false);
    }
    function toggle() {
        setVal(!val);
    }
    return [val, setTrue, setFalse, toggle];
}
exports.useBoolean = useBoolean;
// export function usePolling(fn: () => Promise<unknown>, ms: number) {
//   let timeout = useRef<number | null>(null);
//   useFocusEffect(
//     useCallback(() => {
//       const wrapper = () => {
//         fn()
//           .then(() => {
//             timeout.current = setTimeout(() => {
//               wrapper();
//             }, ms);
//           })
//           .catch(() => {
//             timeout.current = setTimeout(() => {
//               wrapper();
//             }, ms);
//           });
//       };
//       wrapper();
//       return () => {
//         if (timeout.current) {
//           clearTimeout(timeout.current);
//         }
//       };
//     }, [fn, ms])
//   );
// }
