import { Icon } from "@gravity-ui/uikit";

import { Star } from "@gravity-ui/icons";
type Props = {
  size: number;
};
export default function Spinner({ size }: Props) {
  return <Icon size={size} data={Star} className="animate-spin-slow " />;
}
