import { Icon, Spin } from "@gravity-ui/uikit";
import { TriangleRight } from "@gravity-ui/icons";
type Props = {
  size: number;
};
export default function Spinner({ size }: Props) {
  return (
    <Icon size={size} data={TriangleRight} className="animate-spin-slow" />
  );
}
