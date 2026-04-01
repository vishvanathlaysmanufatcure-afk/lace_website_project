import { Suspense } from "react";
import EditProductClient from "./EditProductClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditProductClient />
    </Suspense>
  );
}