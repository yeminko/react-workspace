import { useContext, useRef } from "react";
import { AppContext } from "./ThemedApp";

interface FormProps {
  add: (content: string, name: string) => void;
}

export default function Form({ add }: FormProps) {
  const { mode } = useContext(AppContext);
  const contentRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
        background: mode === "dark" ? "#555" : "#def",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        if (contentRef.current && nameRef.current) {
          const content = contentRef.current.value;
          const name = nameRef.current.value;
          add(content, name);
        }
        e.currentTarget.reset();
      }}
    >
      <input
        ref={contentRef}
        type="text"
        placeholder="Content"
        style={{ padding: 5 }}
      />
      <input
        ref={nameRef}
        type="text"
        placeholder="Name"
        style={{ padding: 5 }}
      />
      <button
        type="submit"
        style={{
          padding: 8,
          background: "#0d6efd",
          color: "white",
          border: "0 none",
        }}
      >
        Post
      </button>
    </form>
  );
}
