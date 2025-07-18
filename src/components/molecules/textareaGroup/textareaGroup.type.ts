import { TextareaProps } from "@/components/atoms/field/field.type";

type TextareaType = "inquiry" | "comment" | "productIntro" | "content";

export interface TextareaGroupProps extends TextareaProps {
  type: TextareaType;
}
