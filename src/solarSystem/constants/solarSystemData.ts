const SCALE_SUN = 5; // 태양의 크기 1/5
const SCALE_ORBIT_PLANET = 300000; // 궤도 긴반지름을 300,000배 축소
const SCALE_ORBIT_SATELLITE = 6000; // 궤도 긴반지름을 6,000배 축소
const AU = 149597870; // 1AU = 149,597,870km
const EARTH_SIZE = 12742; // 지구 지름 12,742km

function getOrbitalScale(celestialType?: "PLANET" | "SATELLITE"): number {
  let scale = SCALE_ORBIT_PLANET;

  if (celestialType === "SATELLITE") {
    scale = SCALE_ORBIT_SATELLITE;
  }

  return scale;
}

function genSolarSystemData(
  radius: number,
  semiMajorAxis: number,
  eccentricity: number,
  celestialType?: "PLANET" | "SATELLITE"
) {
  return {
    radius: radius,
    orbit: {
      a: (semiMajorAxis * (AU - EARTH_SIZE)) / getOrbitalScale(celestialType),
      e: eccentricity,
    },
  };
}

export const SOLAR_SYSTEM = {
  sun: genSolarSystemData(109 / SCALE_SUN, 0, 0),
  mercury: genSolarSystemData(0.38, 0.387, 0.2056),
  venus: genSolarSystemData(0.95, 0.723, 0.0067),
  earth: genSolarSystemData(1, 1.0, 0.0167),
  mars: genSolarSystemData(0.53, 1.524, 0.0934),
  jupiter: genSolarSystemData(11, 5.204, 0.0487),
  saturn: genSolarSystemData(9, 9.537, 0.0541),
  uranus: genSolarSystemData(4, 19.19, 0.0471),
  neptune: genSolarSystemData(3.9, 30.07, 0.0085),

  // 위성
  moon: genSolarSystemData(0.273, 0.00257, 0.0549, "SATELLITE"),
  phobos: genSolarSystemData(0.00028, 0.000063, 0.0151, "SATELLITE"),
  deimos: genSolarSystemData(0.00018, 0.000157, 0.0002, "SATELLITE"),
  io: genSolarSystemData(0.286, 0.00282, 0.0041, "SATELLITE"),
  europa: genSolarSystemData(0.245, 0.00449, 0.009, "SATELLITE"),
  ganymede: genSolarSystemData(0.413, 0.00716, 0.0013, "SATELLITE"),
  callisto: genSolarSystemData(0.378, 0.01258, 0.007, "SATELLITE"),
  titan: genSolarSystemData(0.404, 0.00817, 0.0288, "SATELLITE"),
  enceladus: genSolarSystemData(0.039, 0.00159, 0.0047, "SATELLITE"),
  mimas: genSolarSystemData(0.031, 0.00124, 0.0196, "SATELLITE"),
  dione: genSolarSystemData(0.088, 0.00252, 0.0022, "SATELLITE"),
  rhea: genSolarSystemData(0.122, 0.00352, 0.001, "SATELLITE"),
  tethys: genSolarSystemData(0.083, 0.00197, 0.0001, "SATELLITE"),
  iapetus: genSolarSystemData(0.115, 0.02381, 0.0286, "SATELLITE"),
  miranda: genSolarSystemData(0.033, 0.00087, 0.0013, "SATELLITE"),
  ariel: genSolarSystemData(0.09, 0.00128, 0.0012, "SATELLITE"),
  umbriel: genSolarSystemData(0.084, 0.00178, 0.0039, "SATELLITE"),
  titania: genSolarSystemData(0.123, 0.00291, 0.0011, "SATELLITE"),
  oberon: genSolarSystemData(0.119, 0.0039, 0.0014, "SATELLITE"),
  triton: genSolarSystemData(0.212, 0.00237, 0.0, "SATELLITE"),
  nereid: genSolarSystemData(0.014, 0.03685, 0.7507, "SATELLITE"),
  proteus: genSolarSystemData(0.04, 0.00078, 0.0005, "SATELLITE"),
} as const;
