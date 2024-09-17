const SCALE_SUN = 2;
const SCALE_ORBIT = 500000; // 궤도 긴반지름을 더 크게 축소
const SCALE_PLANET = 1; // 행성 크기를 덜 축소
const AU = 149597870; // 1AU = 149,597,870km

function genSolarSystemData(
  radius: number,
  semiMajorAxis: number,
  eccentricity: number
) {
  return {
    radius: radius / SCALE_PLANET, // 행성 크기를 약간 줄임
    orbit: {
      a: (semiMajorAxis * AU) / SCALE_ORBIT, // 궤도 긴반지름을 크게 축소
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
};
