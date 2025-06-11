import React from "react";

/**
 * Renders the provided children without modification.
 *
 * Use this component to wrap content that should be rendered on all pages.
 *
 * @param children - The elements or components to render.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
