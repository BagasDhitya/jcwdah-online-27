interface SkillBadgeProps {
  skillName?: string;
}

export default function SkillBadge({ skillName }: SkillBadgeProps) {
  return <span className="skill-badge">{skillName}</span>;
}
