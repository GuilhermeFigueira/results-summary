interface SkillProps {
	category: string;
	score: number;
	icon: string;
	color: string;
}

export default function Skill({ category, score, icon, color }: SkillProps) {
	return (
		<div
			className={`flex justify-between bg-${color} bg-opacity-10 p-3 rounded-xl`}
		>
			<div className="flex">
				<img src={`/icon-${icon}.svg`} alt={`${category} icon`} />
				<div className={`text-${color} px-2`}>{category}</div>
			</div>
			<div className="text-blue-dark font-extrabold">
				{score} <span className="font-medium opacity-70">/100</span>
			</div>
		</div>
	);
}
