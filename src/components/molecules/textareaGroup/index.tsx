import Label from "@/components/atoms/field/Label";
import Textarea from "@/components/atoms/field/Textarea";
import { TextareaGroupProps } from "./textareaGroup.type";
import cn from "@/utils/cn";
import { TEXT_AREA_GROUP_TYPE } from "./constant";

export default function TextareaGroup({ type, ...props }: TextareaGroupProps) {
  const { id, ...restProps } = props;

  return (
    <div className={cn("flex flex-col", TEXT_AREA_GROUP_TYPE[type].styleGap)}>
      <Label
        labelText={TEXT_AREA_GROUP_TYPE[type].labelText}
        htmlFor={TEXT_AREA_GROUP_TYPE[type].id}
      />
      <Textarea
        id={TEXT_AREA_GROUP_TYPE[type].id}
        name={TEXT_AREA_GROUP_TYPE[type].id}
        className={TEXT_AREA_GROUP_TYPE[type].styleTextarea}
        placeholder={TEXT_AREA_GROUP_TYPE[type].placeholder}
        {...restProps}
      />
    </div>
  );
}
