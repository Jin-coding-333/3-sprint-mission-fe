import ProfileIcon from "@/components/atoms/icons/ProfileIcon";
import cn from "@/utils/cn";

export default function Profile({ className }: { className?: string }) {
  return (
    <div className={cn(ProfileStyle.profile, className)}>
      <ProfileIcon />
      <span className="hidden md:block">김코드</span>
    </div>
  );
}

const ProfileStyle = {
  profile: "flex items-center gap-[6px]",
};
