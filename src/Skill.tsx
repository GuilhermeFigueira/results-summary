interface SkillProps {
	category: string;
	score: number;
	icon: string;
}

export default function Skill({ category, score, icon }: SkillProps) {
	return (
		<div>
			<div>
				<img src={icon} alt={`${category} icon`} />
			</div>
			<div>{category}</div>
			<div>{score} /100</div>
		</div>
	);
}
