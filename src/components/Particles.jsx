import React, { useCallback }  from 'react'
import Particles from "react-tsparticles"
import { loadFull } from 'tsparticles';
import particless from './config/parti-config';

export const Parti = () => {
    const particlesInit = useCallback((engine) => {
        loadFull(engine);
      }, []);
  return (
    <div>
        <Particles
        options={particless}
        init={particlesInit}
        />
    </div>
  )
}
