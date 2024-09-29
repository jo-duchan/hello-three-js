// theta (각도) 계산: 공전 주기에 따라 각도가 변화
// 지구의 공전 주기를 기준으로 time을 비율에 맞게 조정
export const getTheta = (time: number, periodRatio: number): number => {
  // 공전 주기를 반영한 각도 계산
  return (time / periodRatio) % (2 * Math.PI);
};

// 케플러의 제1법칙을 기반으로 하여, 이심률에 따라 변하는 타원 궤도 상의 행성 위치를 구하는 함수.
// 이를 통해 태양에 가까워질 때(근일점)와 멀어질 때(원일점)에 따른 거리 변화를 시뮬레이션 가능.
export const getOrbitRadius = (a: number, e: number, theta: number): number => {
  return (a * (1 - e ** 2)) / (1 + e * Math.cos(theta));
};
