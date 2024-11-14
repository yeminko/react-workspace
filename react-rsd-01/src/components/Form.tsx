import { useRef } from "react";
import { Box, TextField, Button } from "@mui/material";

interface FormProps {
  add: (content: string, author: string) => void;
}

export default function Form({ add }: FormProps) {
  const contentRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (contentRef.current) {
          const content = contentRef.current.value;
          add(content, "Alice");
        }
        e.currentTarget.reset();
      }}
    >
      <Box sx={{ mb: 4, textAlign: "right" }}>
        <TextField
          inputRef={contentRef}
          type="text"
          placeholder="Content"
          fullWidth
          multiline
          sx={{ mb: 1 }}
        />
        <Button variant="contained" type="submit">
          Post
        </Button>
      </Box>
    </form>
  );
}
