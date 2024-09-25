import { useControls } from "leva";
import { SOLAR_SYSTEM } from "../constants/solarSystemData";
import { type CelestialRefs } from "../hooks/useCelestialRefs";
import Sun from "../components/Sun";
import {
  Venus,
  Mercury,
  Earth,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune,
  Moon,
  Phobos,
  Deimos,
  Io,
  Europa,
  Ganymede,
  Callisto,
  Titan,
  Enceladus,
  Mimas,
  Dione,
  Rhea,
  Tethys,
  Iapetus,
  Miranda,
  Ariel,
  Umbriel,
  Titania,
  Oberon,
  Triton,
  Nereid,
  Proteus,
} from "../components/CelestialBodyBase";

interface Props {
  planets: CelestialRefs;
  satellites: CelestialRefs;
}

function CelestialBodies({ planets, satellites }: Props) {
  const isSatelliteLabelVisible = useControls("Satellite Label", {
    visible: false,
  });

  return (
    <Sun>
      <Mercury
        ref={planets.mercuryRef}
        position={[SOLAR_SYSTEM.mercury.orbit.a, 0, 0]}
        radius={SOLAR_SYSTEM.mercury.radius}
        color="gray"
        label="mercury"
      ></Mercury>
      <Venus
        ref={planets.venusRef}
        position={[SOLAR_SYSTEM.venus.orbit.a, 0, 0]}
        radius={SOLAR_SYSTEM.venus.radius}
        color="orange"
        label="venus"
      ></Venus>
      <Earth
        ref={planets.earthRef}
        position={[SOLAR_SYSTEM.earth.orbit.a, 0, 0]}
        radius={SOLAR_SYSTEM.earth.radius}
        color="dodgerblue"
        label="earth"
      >
        <Moon
          ref={satellites.moonRef}
          position={[SOLAR_SYSTEM.moon.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.moon.radius}
          color="#C0C0C0"
          label="moon"
          labelVisible={isSatelliteLabelVisible.visible}
        />
      </Earth>
      <Mars
        ref={planets.marsRef}
        position={[SOLAR_SYSTEM.mars.orbit.a, 0, 0]}
        radius={SOLAR_SYSTEM.mars.radius}
        color="lightsalmon"
        label="mars"
      >
        <Phobos
          ref={satellites.phobosRef}
          position={[SOLAR_SYSTEM.phobos.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.phobos.radius}
          color="#7A7A7A"
          label="phobos"
          labelVisible={isSatelliteLabelVisible.visible}
        />
        <Deimos
          ref={satellites.deimosRef}
          position={[SOLAR_SYSTEM.deimos.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.deimos.radius}
          color="#8C8C8C"
          label="deimos"
          labelVisible={isSatelliteLabelVisible.visible}
        />
      </Mars>
      <Jupiter
        ref={planets.jupiterRef}
        position={[SOLAR_SYSTEM.jupiter.orbit.a, 0, 0]}
        radius={SOLAR_SYSTEM.jupiter.radius}
        color="darksalmon"
        label="jupiter"
      >
        <Io
          ref={satellites.ioRef}
          position={[SOLAR_SYSTEM.io.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.io.radius}
          color="#FFD700"
          label="io"
          labelVisible={isSatelliteLabelVisible.visible}
        />
        <Europa
          ref={satellites.europaRef}
          position={[SOLAR_SYSTEM.enceladus.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.europa.radius}
          color="#B0C4DE"
          label="europa"
          labelVisible={isSatelliteLabelVisible.visible}
        />
        <Ganymede
          ref={satellites.ganymedeRef}
          position={[SOLAR_SYSTEM.ganymede.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.ganymede.radius}
          color="#A9A9A9"
          label="ganymede"
          labelVisible={isSatelliteLabelVisible.visible}
        />
        <Callisto
          ref={satellites.callistoRef}
          position={[SOLAR_SYSTEM.callisto.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.callisto.radius}
          color="#808080"
          label="callisto"
          labelVisible={isSatelliteLabelVisible.visible}
        />
      </Jupiter>
      <Saturn
        ref={planets.saturnRef}
        position={[SOLAR_SYSTEM.saturn.orbit.a, 0, 0]}
        radius={SOLAR_SYSTEM.saturn.radius}
        color="tan"
        label="saturn"
      >
        <Titan
          ref={satellites.titanRef}
          position={[SOLAR_SYSTEM.titan.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.titan.radius}
          color="#D2B48C"
          label="titan"
          labelVisible={isSatelliteLabelVisible.visible}
        />
        <Enceladus
          ref={satellites.enceladusRef}
          position={[SOLAR_SYSTEM.enceladus.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.enceladus.radius}
          color="#FFFFFF"
          label="enceladus"
          labelVisible={isSatelliteLabelVisible.visible}
        />
        <Mimas
          ref={satellites.mimasRef}
          position={[SOLAR_SYSTEM.mimas.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.mimas.radius}
          color="#C0C0C0"
          label="mimas"
          labelVisible={isSatelliteLabelVisible.visible}
        />
        <Dione
          ref={satellites.dioneRef}
          position={[SOLAR_SYSTEM.dione.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.dione.radius}
          color="#A9A9A9"
          label="dione"
          labelVisible={isSatelliteLabelVisible.visible}
        />
        <Rhea
          ref={satellites.rheaRef}
          position={[SOLAR_SYSTEM.rhea.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.rhea.radius}
          color="#D3D3D3"
          label="rhea"
          labelVisible={isSatelliteLabelVisible.visible}
        />
        <Tethys
          ref={satellites.tethysRef}
          position={[SOLAR_SYSTEM.tethys.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.tethys.radius}
          color="#F0F8FF"
          label="tethys"
          labelVisible={isSatelliteLabelVisible.visible}
        />
        <Iapetus
          ref={satellites.iapetusRef}
          position={[SOLAR_SYSTEM.iapetus.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.iapetus.radius}
          color="#4B0082"
          label="iapetus"
          labelVisible={isSatelliteLabelVisible.visible}
        />
      </Saturn>
      <Uranus
        ref={planets.uranusRef}
        position={[SOLAR_SYSTEM.uranus.orbit.a, 0, 0]}
        radius={SOLAR_SYSTEM.uranus.radius}
        color="slategray"
        label="uranus"
      >
        <Miranda
          ref={satellites.mirandaRef}
          position={[SOLAR_SYSTEM.miranda.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.miranda.radius}
          color="#D3D3D3"
          label="miranda"
          labelVisible={isSatelliteLabelVisible.visible}
        />
        <Ariel
          ref={satellites.arielRef}
          position={[SOLAR_SYSTEM.ariel.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.ariel.radius}
          color="#B0C4DE"
          label="ariel"
          labelVisible={isSatelliteLabelVisible.visible}
        />
        <Umbriel
          ref={satellites.umbrielRef}
          position={[SOLAR_SYSTEM.umbriel.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.umbriel.radius}
          color="#2F4F4F"
          label="umbriel"
          labelVisible={isSatelliteLabelVisible.visible}
        />
        <Titania
          ref={satellites.titanRef}
          position={[SOLAR_SYSTEM.titania.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.titania.radius}
          color="#A9A9A9"
          label="titania"
          labelVisible={isSatelliteLabelVisible.visible}
        />
        <Oberon
          ref={satellites.oberonRef}
          position={[SOLAR_SYSTEM.oberon.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.oberon.radius}
          color="#778899"
          label="oberon"
          labelVisible={isSatelliteLabelVisible.visible}
        />
      </Uranus>
      <Neptune
        ref={planets.neptuneRef}
        position={[SOLAR_SYSTEM.neptune.orbit.a, 0, 0]}
        radius={SOLAR_SYSTEM.neptune.radius}
        color="azure"
        label="neptune"
      >
        <Triton
          ref={satellites.tritonRef}
          position={[SOLAR_SYSTEM.triton.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.triton.radius}
          color="#ADD8E6"
          label="triton"
          labelVisible={isSatelliteLabelVisible.visible}
        />
        <Nereid
          ref={satellites.nereidRef}
          position={[SOLAR_SYSTEM.nereid.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.nereid.radius}
          color="#B0C4DE"
          label="nereid"
          labelVisible={isSatelliteLabelVisible.visible}
        />
        <Proteus
          ref={satellites.proteusRef}
          position={[SOLAR_SYSTEM.proteus.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.proteus.radius}
          color="#696969"
          label="proteus"
          labelVisible={isSatelliteLabelVisible.visible}
        />
      </Neptune>
    </Sun>
  );
}

export default CelestialBodies;
