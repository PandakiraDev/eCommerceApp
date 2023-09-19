import Link from "next/link";
import { ProductCounter } from "@/components/atoms/ProductCounter";
import { TestServer } from "@/components/atoms/TestServer";

export default async function Page() {
  return (
    <div>
      <Link href="/test2" className="hover:underline">
        przejdz do test2
      </Link>
      <ProductCounter>
        <TestServer />
      </ProductCounter>
      Page 1
    </div>
  );
}
