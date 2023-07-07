import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import CustomParticlesConfig from "./CustomParticlesConfig";
import { loadCanvasMaskPlugin } from "tsparticles-plugin-canvas-mask";
import { loadBubbleShape } from "tsparticles-shape-bubble";
import { loadCurvesPath } from "tsparticles-path-curves";
import { loadEasingBackPlugin } from "tsparticles-plugin-easing-back";
import { loadEasingCircPlugin } from "tsparticles-plugin-easing-circ";
import { loadEasingCubicPlugin } from "tsparticles-plugin-easing-cubic";
import { loadEasingExpoPlugin } from "tsparticles-plugin-easing-expo";
import { loadEasingQuartPlugin } from "tsparticles-plugin-easing-quart";
import { loadEasingQuintPlugin } from "tsparticles-plugin-easing-quint";
import { loadEasingSinePlugin } from "tsparticles-plugin-easing-sine";
import { loadGradientUpdater } from "tsparticles-updater-gradient";
import { loadHeartShape } from "tsparticles-shape-heart";
import { loadHsvColorPlugin } from "tsparticles-plugin-hsv-color";
import { loadInfectionPlugin } from "tsparticles-plugin-infection";
import { loadLightInteraction } from "tsparticles-interaction-light";
import { loadMotionPlugin } from "tsparticles-plugin-motion";
import { loadMultilineTextShape } from "tsparticles-shape-multiline-text";
import { loadOrbitUpdater } from "tsparticles-updater-orbit";
import { loadParticlesRepulseInteraction } from "tsparticles-interaction-particles-repulse";
import { loadPerlinNoisePath } from "tsparticles-path-perlin-noise";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
import { loadPolygonPath } from "tsparticles-path-polygon";
import { loadRoundedRectShape } from "tsparticles-shape-rounded-rect";
import { loadSimplexNoisePath } from "tsparticles-path-simplex-noise";
import { loadSpiralShape } from "tsparticles-shape-spiral";
import NetflixButton from "../buttons/Button";

const CustomParticlesComponent = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
    await loadPolygonMaskPlugin(engine);
    await loadPolygonPath(engine);
    await loadCanvasMaskPlugin(engine);
    await loadBubbleShape(engine);
    await loadCurvesPath(engine);
    await loadEasingBackPlugin();
    await loadEasingCircPlugin();
    await loadEasingCubicPlugin();
    await loadEasingExpoPlugin();
    await loadEasingQuartPlugin();
    await loadEasingQuintPlugin();
    await loadEasingSinePlugin();
    await loadGradientUpdater(engine);
    await loadHeartShape(engine);
    await loadHsvColorPlugin();
    await loadInfectionPlugin(engine);
    await loadLightInteraction(engine);
    await loadMotionPlugin(engine);
    await loadMultilineTextShape(engine);
    await loadOrbitUpdater(engine);
    await loadParticlesRepulseInteraction(engine);
    await loadPerlinNoisePath(engine);
    await loadRoundedRectShape(engine);
    await loadSimplexNoisePath(engine);
    await loadSpiralShape(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={CustomParticlesConfig}
      className="CustomParticlesComponent"
      style={{
        position: "absolute",
        display: "block",
        width: "100%",
        height: "100%",
        zIndex: 1
      }}
    />
  );
};

export default CustomParticlesComponent;