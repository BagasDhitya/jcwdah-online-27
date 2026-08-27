// Props => blue print dari objek yang ada didalam component ini
// -> name, age

interface UserIdentityProps {
  name: string;
  age: number;
}

export default function ReusableText({ name, age }: UserIdentityProps) {
  return (
    <div
      style={{
        border: 1,
        borderColor: "black",
        borderRadius: 5,
        padding: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        gap: 5,
        backgroundColor: "blue",
        color: "white",
        marginTop: 5,
      }}
    >
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}
