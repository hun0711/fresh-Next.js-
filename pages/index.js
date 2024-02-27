import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h4 className="title">애플 후레쉬</h4>
      <p className="title-sub">by Hunsolo</p>
    </div>
  );
}
