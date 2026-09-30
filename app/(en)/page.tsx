import HomePage from "@/components/HomePage";

export const revalidate = 3600;

export default function Home() {
  return <HomePage lang="en" />;
}
