// 공전 주기를 계산하는 함수 (케플러의 제3법칙을 사용)
// P^2 = a^3에 의해 공전 주기를 근사, 중력(G)과 태양질량(M)은 고려하지 않는다.
// 행성과 위성을 구분하여 공전 주기를 다르게 계산
export const getPeriod = (
  a: number,
  celestialType: "PLANET" | "SATELLITE"
): number => {
  const period = Math.sqrt(a ** 3); // 행성의 공전 주기 계산

  // 위성의 경우 행성 주위를 도는 공전 주기를 느리게 조정
  if (celestialType === "SATELLITE") {
    return period * 100.0;
  }

  return period; // 행성의 경우 기본 공전 주기 반환
};

// theta (각도) 계산: 공전 주기에 따라 각도가 변화
export const getTheta = (
  time: number,
  a: number,
  celestialType: "PLANET" | "SATELLITE"
): number => {
  const period = getPeriod(a, celestialType);

  return (time / period) % (2 * Math.PI);
};

// 케플러의 제1법칙을 기반으로 하여, 이심률에 따라 변하는 타원 궤도 상의 행성 위치를 구하는 함수.
// 이를 통해 태양에 가까워질 때(근일점)와 멀어질 때(원일점)에 따른 거리 변화를 시뮬레이션 가능.
export const getOrbitRadius = (a: number, e: number, theta: number): number => {
  return (a * (1 - e ** 2)) / (1 + e * Math.cos(theta));
};
