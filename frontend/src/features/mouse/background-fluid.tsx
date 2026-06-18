import { Canvas } from '@react-three/fiber';
import { EffectComposer } from '@react-three/postprocessing';
import { Fluid } from '@whatisjery/react-fluid-distortion'; // or 'react-fluid-distortion'

export function BackgroundFluid() {
  return (
    <Canvas
      gl={{ alpha: true }}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      <EffectComposer>
        <Fluid
            showBackground={false}
            rainbow={true}
            intensity={3}                 // 0–10 → mid-high, lively but not insane
            force={1.1}                   // 0–20 → good “splatter” without being messy
            // distortion={1.1}              // 0–2 → a bit of warping, still readable
            radius={0.10}                 // 0.01–1 → medium size splashes
            // curl={8}                      // 0–50 → some nice curls but not stormy
            // swirl={12}                    // 0–20 → visible swirls, not too crazy
            velocityDissipation={0.985}   // 0–1 → motion lingers briefly then fades
            densityDissipation={0.96}   // 0–1 → color trails that fade smoothly
            // pressure={0.82}               // 0–1 → feels smooth, not too stiff
        />
      </EffectComposer>
    </Canvas>
  );
}

// Globe control interface
