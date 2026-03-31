"use client";

import { Suspense } from "react";
import EnquiryContent from "./EnquiryContent";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EnquiryContent />
    </Suspense>
  );
}