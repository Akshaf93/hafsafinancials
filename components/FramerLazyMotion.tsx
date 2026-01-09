"use client";

import { LazyMotion } from "framer-motion";

// Load features asynchronously to reduce initial bundle size
const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function FramerLazyMotion({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
}