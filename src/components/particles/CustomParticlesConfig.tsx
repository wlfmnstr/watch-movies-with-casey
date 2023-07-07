import { start } from "repl";
import type { ISourceOptions } from "tsparticles-engine";

const CustomParticlesConfig: ISourceOptions = {
    name: "Image Mask",
    smooth: true,
    in51teractivity: {
        events: {
            // onHover: {
            //     enable: false,
            //     mode: "bubble",
            //     parallax: {
            //         enable: true,
            //         force: 70,
            //         smooth: 30,
            //     },
            // },
            onClick: {
                enable: false,
                mode: "push",
            },
            onhover: {
                enable: true,
                parallax: {
                    enable: false,
                    force: 60,
                    smooth: 10,
                },
                mode: ["repulse"] //grab bubble repulse push remove
            },
        },
        modes: {
            bubble: {
                distance: 10,
                duration: 0.5,
                size: 10,
                opacity: 0.8,
                color: "#ffffff",
                mix: true,
            },
            repulse: {
                distance: 200,
                speed: 0.05,
                // factor: 50,
                // duration: 40,
            },
            attract: {
                distance: 200,
                duration: 0.4,
            }
        },
    },
    particles: {
        move: {
            direction: "outside",
            distance: 13,
            // decay: -0.001,
            // random: true,
            enable: true,
            speed: 0.4,
            out_mode: "out",
            gravity: {
                enable: false,
                acceleration: 1,
                inverse: true,
                maxSpeed: 1
            }
        },
    
        number: {
            value: 3000
            // max: number;
            // value: number;
            // value: 3000,
        },
        shape: {
            type: ["circle"],
        },
        size: {
            value: {
                min: 1.5,
                max: 3.6,
            },
        },
        opacity: {
            animation: {
                enable: true,
                startValue: "min",
                mode: "increase",
                minimumValue: 0,
                speed: 3,
                count: 1
            }
        }
    },
    canvasMask: {
        enable: true,
        scale: 1.7,
        pixels: {
            filter: "pixelFilter",
        },
        image: {
            src: "/ourflix-red-logo.svg",
            // src: "/cat.jpg"
        },
    },
    background: {
        color: "#000000",
        image: "",
        // position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
    },
    fullScreen: {
        enable: false,
        zIndex: 0,
    }
};

export default CustomParticlesConfig;