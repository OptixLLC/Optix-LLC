import { useRouter } from 'next/router';
export default function ProjectName() {
  const router = useRouter();
  return (
    <h1>{router.query.name}</h1>
  );
}
