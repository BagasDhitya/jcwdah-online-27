interface HeaderProfileProps {
  name: string;
  role: string;
}

export default function HeaderProfile({ name, role }: HeaderProfileProps) {
  return (
    <div className="header-profile">
      <h1 className="header-name">{name}</h1>
      <p className="header-role">{role}</p>
    </div>
  );
}
