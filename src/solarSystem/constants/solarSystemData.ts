const AU = 149597870; // 1AU = 149,597,870km
const EARTH_SIZE = 12742; // 지구 지름 12,742km
const SCALE = EARTH_SIZE; // SCALE 값을 지구 지름으로 설정

function getOrbitalScale(celestialType: "PLANET" | "SATELLITE"): number {
  let scale = SCALE * 3;

  if (celestialType === "SATELLITE") {
    scale = SCALE;
  }

  return scale;
}

function genSolarSystemData(
  radius: number,
  semiMajorAxis: number,
  eccentricity: number,
  period: number,
  celestialType: "PLANET" | "SATELLITE"
) {
  return {
    radius: (radius * EARTH_SIZE) / SCALE,
    orbit: {
      a: semiMajorAxis * (AU / getOrbitalScale(celestialType)),
      e: eccentricity,
      periodRatio: period,
    },
    celestialType: celestialType,
  };
}

export const SOLAR_SYSTEM = {
  sun: genSolarSystemData(109, 0, 0, 0, "PLANET"),
  mercury: genSolarSystemData(0.38, 0.387, 0.2056, 87.97, "PLANET"),
  venus: genSolarSystemData(0.95, 0.723, 0.0067, 224.7, "PLANET"),
  earth: genSolarSystemData(1, 1.0, 0.0167, 365.25, "PLANET"),
  mars: genSolarSystemData(0.53, 1.524, 0.0934, 687.0, "PLANET"),
  jupiter: genSolarSystemData(11, 5.204, 0.0487, 4331.6, "PLANET"),
  saturn: genSolarSystemData(9, 9.537, 0.0541, 10759.2, "PLANET"),
  uranus: genSolarSystemData(4, 19.19, 0.0471, 30685.4, "PLANET"),
  neptune: genSolarSystemData(3.9, 30.07, 0.0085, 60190.0, "PLANET"),

  // 위성
  moon: genSolarSystemData(0.273, 0.00257, 0.0549, 27.3, "SATELLITE"),
  phobos: genSolarSystemData(0.00028, 0.000063, 0.0151, 0.31891, "SATELLITE"),
  deimos: genSolarSystemData(0.00018, 0.000157, 0.0002, 1.26244, "SATELLITE"),
  io: genSolarSystemData(0.286, 0.00282, 0.0041, 1.769, "SATELLITE"),
  europa: genSolarSystemData(0.245, 0.00449, 0.009, 3.551, "SATELLITE"),
  ganymede: genSolarSystemData(0.413, 0.00716, 0.0013, 7.155, "SATELLITE"),
  callisto: genSolarSystemData(0.378, 0.01258, 0.007, 16.69, "SATELLITE"),
  titan: genSolarSystemData(0.404, 0.00817, 0.0288, 15.945, "SATELLITE"),
  enceladus: genSolarSystemData(0.039, 0.00159, 0.0047, 1.37, "SATELLITE"),
  mimas: genSolarSystemData(0.031, 0.00124, 0.0196, 0.942, "SATELLITE"),
  dione: genSolarSystemData(0.088, 0.00252, 0.0022, 2.737, "SATELLITE"),
  rhea: genSolarSystemData(0.122, 0.00352, 0.001, 4.518, "SATELLITE"),
  tethys: genSolarSystemData(0.083, 0.00197, 0.0001, 1.888, "SATELLITE"),
  iapetus: genSolarSystemData(0.115, 0.02381, 0.0286, 79.33, "SATELLITE"),
  miranda: genSolarSystemData(0.033, 0.00087, 0.0013, 1.413, "SATELLITE"),
  ariel: genSolarSystemData(0.09, 0.00128, 0.0012, 2.52, "SATELLITE"),
  umbriel: genSolarSystemData(0.084, 0.00178, 0.0039, 4.144, "SATELLITE"),
  titania: genSolarSystemData(0.123, 0.00291, 0.0011, 8.706, "SATELLITE"),
  oberon: genSolarSystemData(0.119, 0.0039, 0.0014, 13.46, "SATELLITE"),
  triton: genSolarSystemData(0.212, 0.00237, 0.0, 5.877, "SATELLITE"),
  nereid: genSolarSystemData(0.014, 0.03685, 0.7507, 360.13, "SATELLITE"),
  proteus: genSolarSystemData(0.04, 0.00078, 0.0005, 1.122, "SATELLITE"),
} as const;
