import type { ISourceOptions } from "tsparticles-engine";

const CustomParticlesConfig: ISourceOptions = {
    name: "Image Mask",
    smooth: true,
    interactivity: {
        events: {
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
        }
    },
    particles: {
        bounce: {
            horizontal: {
                random: {
                    enable: true,
                    minimumValue: 100
                },
                value: 1000
            },
            vertical: {
                random: {
                    enable: true,
                    minimumValue: 100
                },
                value: 1000
            }
        },
        move: {
            direction: "outside",
            distance: 5,
            // decay: -0.001,
            // random: true,
            enable: false,
            // vibrate: true,
            speed: .5,
            out_mode: "none",
            gravity: {
                enable: false,
                acceleration: 1,
                inverse: true,
                maxSpeed: 10
            },
            trail: {
                enable: true,
                length: 10,
                fill: {
                    color: "#000000"
                }
                // fillColor: "#1e8b12",
            }

        },

        number: {
            value: 1000,
            // density: {
            //     enable: true,
            //     height: 1000,
            //     width: 1000,
            //     area: 100,
            //     factor: 1000,
            //     value_area: 1000,
            // },
            max: 10000,
            // max: number;
            // value: number;
            // value: 3000,
        },
        shape: {
            type: ["circle"],
        },
        size: {
            value: {
                min: .7,
                max: .9,
            },
        },
        opacity: {
            animation: {
                enable: true,
                startValue: "min",
                mode: "increase",
                minimumValue: 0.9,
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