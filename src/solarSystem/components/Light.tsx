function Light(): JSX.Element {
  return (
    <>
      <ambientLight intensity={0.5} />
      <hemisphereLight args={["white", "lightblue", 0.6]} />
      <pointLight
        position={[0, 0, 0]} // 태양의 위치
        intensity={2} // 빛의 강도
        distance={200} // 빛의 최대 거리
        decay={2} // 빛의 감쇠 정도
        castShadow={true} // 그림자 활성화
      />
    </>
  );
}
export default Light;
