// you can create your own hooks in this folder and export them like below
// export { default as useGetUser } from "./useGetUser";
import { useLayoutEffect, useState } from "react";

export function useWindowSize() {
    const [size, setSize] = useState({ width: 0, height: 0 });

    // console.log("size: ", size);

    function updateSize() {
        setSize({ width: window.innerWidth, height: window.innerHeight });
    }

    useLayoutEffect(() => {
        window.addEventListener("resize", updateSize);
    }, []);

    const width = size.width;
    const height = size.height;

    return { width, height };
}
