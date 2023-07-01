import React from "react";

export default function PostLayout({ children }) {
  return (
    <section>
      <div className="content">
        {children}
      </div>
    </section>
  )
}