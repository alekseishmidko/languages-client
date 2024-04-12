import { ArrowShapeTurnUpLeft } from "@gravity-ui/icons";
import { Icon } from "@gravity-ui/uikit";
import { useRouter } from "next/navigation";
export default function BackButton() {
  const router = useRouter();
  return (
    <div
      className="absolute left-6 top-20 cursor-pointer"
      onClick={() => router.back()}
    >
      <Icon size={18} data={ArrowShapeTurnUpLeft} />
    </div>
  );
}
