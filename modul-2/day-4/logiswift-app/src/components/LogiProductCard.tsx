import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface LogiProductProps {
  title: string;
  description: string;
}

export default function LogiProductCard({
  title,
  description,
}: LogiProductProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-indigo-600">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
