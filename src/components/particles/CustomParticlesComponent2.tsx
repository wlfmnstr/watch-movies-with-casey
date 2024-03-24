import { tsParticles } from "tsparticles-engine";
import type { Engine } from "tsparticles-engine";
import configs from "tsparticles-demo-configs";
import Particles from "react-particles";
import { useCallback } from "react";

const CustomParticlesComponent = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await tsParticles.load({id: "tsparticles", options: configs.basic});
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={configs.basic}
    />
  )
  // return (async () => {
  //   await tsParticles.load({ id: "tsparticles", options: configs.basic });
  // });
};

export default CustomParticlesComponent;