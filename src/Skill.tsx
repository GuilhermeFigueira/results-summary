interface SkillProps {
	category: string;
	score: number;
	icon: string;
}

export default function Skill({ category, score, icon }: SkillProps) {
	return (
		<div className="flex justify-between p-3 rounded-xl" id={icon}>
			<div className="flex">
				<img src={`/icon-${icon}.svg`} alt={`${category} icon`} />
				<h1 className="px-2">{category}</h1>
			</div>
			<div className="text-blue-dark font-extrabold">
				{score} <span className="font-medium opacity-70">/100</span>
			</div>
		</div>
	);
}
