import React from "react";

export default function BlogLayout({ children, meta }) {
  return (
    <main>
      <section>
        {children}
      </section>
    </main>
  )
}