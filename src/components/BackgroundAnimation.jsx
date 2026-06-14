import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from 'react';
import { loadFull } from "tsparticles";

const Background = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  if (init) {
    return (
      <div className="fixed w-full h-full z-[-1]">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#000000", // Black background for dark theme
              },
              opacity: 1.5, // Slightly transparent background
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  //mode: ["bubble", "repulse","trail"]// Bubble and repulse and effects on hover can be seen independepently but and together
                  //mode:"trail" // Trail effect on however can't be seen together with bubble and repulse has to be independently
                  mode: ["bubble","repulse"], // Bubble and repulse effects on hover
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100, // Repulse distance
                  duration: 0.4,
                },
                bubble: {
                  distance: 150, // Bubble effect distance
                  duration: 2,
                  size: 6, // Size of the bubble effect
                  opacity: 1, // Opacity of the bubble
                  speed: 3, // Speed of the bubble effect
                },
                // trail: {
                //   delay: 0.005,
                //   quantity: 5,
                //   particles: {
                //     color: {
                //       value: "#ff0000"
                //     },
                //     move: {
                //       speed: 2,
                //       direction: "bottom",
                //       outModes: {
                //         default: "destroy"
                //       }
                //     }
                //   }
                // },

              },
            },
            particles: {
              opacity: {
                value: 0.8,
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.3,
                  sync: false
                }
              },  
              color: {
                 value: ["#00FFFF", "#FF00FF", "#FFFFFF"], // cyan, magenta, white, // White particles for glowing effect
              },
              links: {
                color: "#ffffff", // White lines
                distance: 150,
                enable: true,
                opacity: 0.3, // Thin lines
                width: 1,
                blink: true,
                // triangles: {
                //   enable: true,
                //   opacity: 0.05
                // }
              },
              collisions: {
                enable: true,
              },
              // move: {
              //   direction: "none",
              //   enable: true,
              //   outModes: {
              //     default: "bounce",
              //   },
              //   random: true, // Random movement
              //   speed: 1, // Slow movement
              //   straight: false,
              // },
              move: {
                  enable: true,
                  speed: 2,
                  random: true,
                  direction: "none",
                  straight: false,
                  outModes: {
                    default: "bounce"
                  },
                  // attract: {
                  //   enable: true,
                  //   rotateX: 600,
                  //   rotateY: 1200
                  // }
                },

              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 250, // Increased particle concentration
              },
              opacity: {
                value: 2, // Glowing effect
              },
              shape: {
                type: ["circle"], // Variety of shapes "circle", "triangle", "edge", "star"]
              },
              size: {
                value: { min: 1, max: 3 }, // Small particles
                animation: {
                    enable: true,
                    speed: 2,
                    minimumValue: 0.5,
                    sync: false
                  }
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    );
  }

  return <></>;
};

export default Background;
