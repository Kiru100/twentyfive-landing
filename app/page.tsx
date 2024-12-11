import LampDemo from "@/components/ui/lamp";
import { Vortex } from "@/components/ui/vortex";
import Image from "next/image";

export default function Home() {
  return (
    <div  className="w-[calc(100%)] mx-auto rounded-md overflow-hidden bg-black">
      <LampDemo/>
    </div>
  );
}
