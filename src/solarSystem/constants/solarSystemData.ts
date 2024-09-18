const SCALE_SUN = 5; // 태양의 크기 1/5
const SCALE_ORBIT = 400000; // 궤도 긴반지름을 400,000배 축소
const SCALE_PLANET = 1; // 행성 크기 비율
const AU = 149597870; // 1AU = 149,597,870km
const EARTH_SIZE = 12742; // 지구 지름 12,742km

function genSolarSystemData(
  radius: number,
  semiMajorAxis: number,
  eccentricity: number
) {
  return {
    radius: radius / SCALE_PLANET,
    orbit: {
      a: (semiMajorAxis * (AU - EARTH_SIZE)) / SCALE_ORBIT,
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
} as const;
