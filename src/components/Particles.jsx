import React, { useCallback }  from 'react'
import Particles from "react-tsparticles"
import { loadFull } from 'tsparticles';

export const Parti = ({parti}) => {
    const particlesInit = useCallback((engine) => {
        loadFull(engine);
      }, []);
  return (
    <div>
        <Particles
        options={parti}
        init={particlesInit}
        />
    </div>
  )
}
