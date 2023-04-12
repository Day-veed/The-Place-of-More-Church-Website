import { useInView } from "react-intersection-observer";
import { useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export const useScroll = (thresh = 0.4) => {
    const controls = useAnimationControls();
    const [element, view] = useInView({ threshold: thresh });

    useEffect(() => {
        if(view) {
            controls.start("show");
        } else {
            controls.start("hidden");
        }
      }, [view])
    
    return [element, controls];
}