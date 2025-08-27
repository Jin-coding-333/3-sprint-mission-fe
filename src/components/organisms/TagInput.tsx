"use client";

import Tag from "@/components/atoms/Tag";
import InputGroup from "@/components/molecules/inputGroup";
import { useState } from "react";

export default function TagInput() {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();

      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }

      setInputValue("");
    }
  };

  return (
    <div className="flex flex-col gap-[14px]">
      <InputGroup 
        type="tag"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        value={inputValue}
      />

      <div className="flex flex-wrap gap-[12px]">
        {tags.map((tag, index) => (
          <Tag
            key={index}
            type="editable"
            text={tag}
            onClickRemoveTag={() => {
              setTags(tags.filter((_, i) => i !== index));
            }}
          />
        ))}
      </div>
    </div>
  );
}
