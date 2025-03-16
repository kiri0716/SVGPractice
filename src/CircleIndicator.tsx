/**
 *  円周率3.14159
 * 848.2293　周長
 * 212.057325 90度
 * 636.171975 270度
 * 106.028662 45度
 *
 * 250,385　縁の下の座標
 * 115,250  円の左側
 * 182.5,317.5 二点の垂直二等分線の接点
 *
 * 385,250  円の右側
 * 317.5,317.5 二点の垂直二等分線の接点
 */
export const CircleIndicator = () => {
  // 監視する仮の値
  const value = 50;

  // 100の箇所を変数化
  const percentage = (value * 2.98) / 4;

  const strokeWidth = 20;
  const radius = 150 - strokeWidth;

  const circumference = 2 * Math.PI * radius;

  const fillColor = value <= 20 || value >= 90 ? "red" : "blue";

  // 円弧の描画する長さをパーセントに基づいて計算
  const dasharray = (circumference * percentage) / 100;
  const dashoffset = circumference - dasharray;
  return (
    <>
      <svg
        width={500}
        height={500}
        viewBox="0 0 500 500"
        xmlns="https://www.w3.org/2000/svg"
      >
        <circle cx={250} cy={250} r={170} fill="lightgreen" />
        <circle cx={250} cy={250} r={140} fill="lightblue" />
        <path
          d="M 115,317.5 A 150,150 0 1,1 385,317.5"
          fill="none"
          stroke="white"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={0}
        />
        <path
          d="M 115,317.5 A 150,150 0 1,1 385,317.5"
          fill="none"
          stroke={fillColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={dashoffset}
        />
        <line x1="250" y1="0" x2="250" y2="250" stroke="red" />
        <rect x="150" y="210" width="200" height="80" fill="white"/>
        <text x="170" y="260" fill={fillColor} fontSize="50" fontWeight="bold">{value}%</text>
        <rect />
      </svg>
    </>
  );
};
