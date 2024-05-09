import spinner from "@/public/spinner.svg";

import Image from "next/image";
type Props = {
  width?: number;
  height?: number;
};

export default function Spinner({ width = 24, height = 24 }: Props) {
  return <Image alt="#" src={spinner} width={width} height={height} />;
}
