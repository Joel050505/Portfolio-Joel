export default function SkillBar({
  label,
  icon,
  percentage,
  barColor = "bg-blue-600",
}) {
  return (
    <div className="w-full mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="flex items-center gap-2">
          {label} {icon}
        </span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`${barColor} h-3 rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
