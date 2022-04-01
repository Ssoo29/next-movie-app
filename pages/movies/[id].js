import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  return <div>{router.query.title || "Loading..."}</div>;
}
