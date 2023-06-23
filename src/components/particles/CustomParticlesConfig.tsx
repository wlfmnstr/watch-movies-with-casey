import { start } from "repl";
import type { ISourceOptions } from "tsparticles-engine";

const CustomParticlesConfig: ISourceOptions = {
    name: "Image Mask",
    smooth: true,
    interactivity: {
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
                enable: true,
                mode: "push",
            },
            onhover: {
                enable: true,
                parallax: {
                    enable: false,
                    force: 60,
                    smooth: 10,
                },
                mode: ["bubble"] //grab bubble repulse push remove
            },
        },
        modes: {
            bubble: {
                distance: 50,
                duration: 0.1,
                size: 10,
                opacity: 0.8,
                color: "#ffffff",
                mix: true,
            },
            repulse: {
                // decay: {
                //     value: 0.5,
                // },
                distance: 20,
                speed: 2,
                factor: 50,
                duration: 50,
                value: {
                    min: 1,
                    max: 10,
                }
            },
            attract: {
                distance: 200,
                duration: 0.4,
            }
        },
    },
    emitters: {
        direction: "top",
        life: {
            count: 300,
            duration: 0.001,
            delay: 0.001,
        },
        rate: {
            delay: 0.001,
            quantity: 1,
        },
        size: {
            width: 100,
            height: 0,
        },
        position: {
            random: true,
        },
    },
    particles: {
        move: {
            direction: "outside",
            distance: 13,
            // decay: -0.001,
            // random: true,
            enable: true,
            speed: 0.2,
            out_mode: "out",
            gravity: {
                enable: false,
                acceleration: 1,
                inverse: true,
                maxSpeed: 1
            }
        },
    
        number: {
            value: 6000
            // max: number;
            // value: number;
            // value: 3000,
        },
        shape: {
            type: ["circle"],
        },
        size: {
            value: {
                min: 1,
                max: 3,
            },
        },
        opacity: {
            animation: {
                enable: true,
                startValue: "min",
                mode: "increase",
                minimumValue: 0.1,
                speed: 0.8,
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
};

export default CustomParticlesConfig;