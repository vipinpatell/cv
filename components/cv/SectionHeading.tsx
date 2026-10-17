import { LucideIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface SectionHeadingProps {
  title: string;
  icon: LucideIcon;
  accentColor?: string;
}

export const SectionHeading = ({ title, icon: Icon, accentColor = "text-emerald-400" }: SectionHeadingProps) => (
  <div className="space-y-4">
    <div className="flex items-center gap-3">
      <div className={`p-2 rounded-lg bg-neutral-900 border border-neutral-800 ${accentColor}`}>
        <Icon size={22} strokeWidth={2.5} />
      </div>
      <h2 className="text-2xl font-black tracking-tight text-neutral-100 uppercase sm:text-3xl">
        {title}
      </h2>
    </div>
    <Separator className="bg-neutral-800" />
  </div>
);