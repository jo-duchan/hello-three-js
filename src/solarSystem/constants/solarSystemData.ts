const AU = 149597870; // 1AU = 149,597,870km
const EARTH_SIZE = 12742; // 지구의 직경 12,742km
const SCALE = EARTH_SIZE; // SCALE 값을 지구의 직경으로 설정

// 팩토리 함수
function genSolarSystemData(
  diameter: number,
  semiMajorAxis: number,
  eccentricity: number,
  period: number
) {
  return {
    diameter,
    orbit: {
      a: semiMajorAxis,
      e: eccentricity,
      periodRatio: period,
    },
  };
}

// 천체 직격 보정 함수
function getCelestialScale(diameter: number): number {
  return (diameter * EARTH_SIZE * 2) / SCALE;
}

// 궤도 긴반지름 보정 함수
function getOrbitalScale(
  semiMajorAxis: number,
  celestialType: "PLANET" | "SATELLITE"
): number {
  let scale = SCALE * 3;

  if (celestialType === "SATELLITE") {
    scale = SCALE / 2;
  }

  return semiMajorAxis * (AU / scale);
}

export const SOLAR_SYSTEM = {
  sun: genSolarSystemData(getCelestialScale(109), 0, 0, 0),
  mercury: genSolarSystemData(
    getCelestialScale(0.38),
    getOrbitalScale(0.387, "PLANET"),
    0.2056,
    87.97
  ),
  venus: genSolarSystemData(
    getCelestialScale(0.95),
    getOrbitalScale(0.723, "PLANET"),
    0.0067,
    224.7
  ),
  earth: genSolarSystemData(
    getCelestialScale(1),
    getOrbitalScale(1.0, "PLANET"),
    0.0167,
    365.25
  ),
  mars: genSolarSystemData(
    getCelestialScale(0.53),
    getOrbitalScale(1.524, "PLANET"),
    0.0934,
    687.0
  ),
  jupiter: genSolarSystemData(
    getCelestialScale(11),
    getOrbitalScale(5.204, "PLANET"),
    0.0487,
    4331.6
  ),
  saturn: genSolarSystemData(
    getCelestialScale(9),
    getOrbitalScale(9.537, "PLANET"),
    0.0541,
    10759.2
  ),
  uranus: genSolarSystemData(
    getCelestialScale(4),
    getOrbitalScale(19.19, "PLANET"),
    0.0471,
    30685.4
  ),
  neptune: genSolarSystemData(
    getCelestialScale(3.9),
    getOrbitalScale(30.07, "PLANET"),
    0.0085,
    60190.0
  ),

  // 위성
  moon: genSolarSystemData(
    getCelestialScale(0.273),
    getOrbitalScale(0.00257, "SATELLITE"),
    0.0549,
    27.3
  ),
  phobos: genSolarSystemData(
    getCelestialScale(0.00028),
    getOrbitalScale(0.000063, "SATELLITE"),
    0.0151,
    0.31891
  ),
  deimos: genSolarSystemData(
    getCelestialScale(0.00018),
    getOrbitalScale(0.000157, "SATELLITE"),
    0.0002,
    1.26244
  ),
  io: genSolarSystemData(
    getCelestialScale(0.286),
    getOrbitalScale(0.00282, "SATELLITE"),
    0.0041,
    1.769
  ),
  europa: genSolarSystemData(
    getCelestialScale(0.245),
    getOrbitalScale(0.00449, "SATELLITE"),
    0.009,
    3.551
  ),
  ganymede: genSolarSystemData(
    getCelestialScale(0.413),
    getOrbitalScale(0.00716, "SATELLITE"),
    0.0013,
    7.155
  ),
  callisto: genSolarSystemData(
    getCelestialScale(0.378),
    getOrbitalScale(0.01258, "SATELLITE"),
    0.007,
    16.69
  ),
  titan: genSolarSystemData(
    getCelestialScale(0.404),
    getOrbitalScale(0.00817, "SATELLITE"),
    0.0288,
    15.945
  ),
  enceladus: genSolarSystemData(
    getCelestialScale(0.039),
    getOrbitalScale(0.00159, "SATELLITE"),
    0.0047,
    1.37
  ),
  mimas: genSolarSystemData(
    getCelestialScale(0.031),
    getOrbitalScale(0.00124, "SATELLITE"),
    0.0196,
    0.942
  ),
  dione: genSolarSystemData(
    getCelestialScale(0.088),
    getOrbitalScale(0.00252, "SATELLITE"),
    0.0022,
    2.737
  ),
  rhea: genSolarSystemData(
    getCelestialScale(0.122),
    getOrbitalScale(0.00352, "SATELLITE"),
    0.001,
    4.518
  ),
  tethys: genSolarSystemData(
    getCelestialScale(0.083),
    getOrbitalScale(0.00197, "SATELLITE"),
    0.0001,
    1.888
  ),
  iapetus: genSolarSystemData(
    getCelestialScale(0.115),
    getOrbitalScale(0.02381, "SATELLITE"),
    0.0286,
    79.33
  ),
  miranda: genSolarSystemData(
    getCelestialScale(0.033),
    getOrbitalScale(0.00087, "SATELLITE"),
    0.0013,
    1.413
  ),
  ariel: genSolarSystemData(
    getCelestialScale(0.09),
    getOrbitalScale(0.00128, "SATELLITE"),
    0.0012,
    2.52
  ),
  umbriel: genSolarSystemData(
    getCelestialScale(0.084),
    getOrbitalScale(0.00178, "SATELLITE"),
    0.0039,
    4.144
  ),
  titania: genSolarSystemData(
    getCelestialScale(0.123),
    getOrbitalScale(0.00291, "SATELLITE"),
    0.0011,
    8.706
  ),
  oberon: genSolarSystemData(
    getCelestialScale(0.119),
    getOrbitalScale(0.0039, "SATELLITE"),
    0.0014,
    13.46
  ),
  triton: genSolarSystemData(
    getCelestialScale(0.212),
    getOrbitalScale(0.00237, "SATELLITE"),
    0.0,
    5.877
  ),
  nereid: genSolarSystemData(
    getCelestialScale(0.014),
    getOrbitalScale(0.03685, "SATELLITE"),
    0.7507,
    360.13
  ),
  proteus: genSolarSystemData(
    getCelestialScale(0.04),
    getOrbitalScale(0.00078, "SATELLITE"),
    0.0005,
    1.122
  ),
} as const;
