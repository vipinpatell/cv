import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle, Download } from "lucide-react";
import Link from "next/link";

export const ProfileSidebar = () => {
  return (
    <aside className="lg:col-span-1 flex flex-col gap-8">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
        <Avatar className="h-40 w-40 ring-4 ring-neutral-800 ring-offset-4 ring-offset-neutral-950">
          <AvatarImage src="/profile.jpg" alt="Vipin Patel" />
          <AvatarFallback className="bg-emerald-600 text-2xl font-bold">VP</AvatarFallback>
        </Avatar>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-black tracking-tighter text-white">Vipin Patel</h1>
          <p className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full inline-block">
            Senior Frontend Architect • 9+ Yrs
          </p>
        </div>

        <p className="text-neutral-400 text-sm leading-relaxed font-medium">
          Frontend specialist crafting maintainable UI systems and performant enterprise applications using modern React ecosystems.
        </p>

        <div className="w-full space-y-3 pt-6 border-t border-neutral-800">
          <ContactRow icon={Mail} label="vipinpateler@email.com" />
          <ContactRow icon={Phone} label="+91-9540701111" />
          <ContactRow icon={MapPin} label="Gurugram, India" />
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
          <SocialIcon href="https://linkedin.com/in/vipinpatels" icon={Linkedin} />
          <SocialIcon href="https://github.com/vipinpatell" icon={Github} />
          <SocialIcon href="https://wa.me/919540701111" icon={MessageCircle} />
        </div>

        <Button className="w-full bg-white hover:bg-emerald-500 text-black font-bold py-6 rounded-xl transition-all gap-2" asChild>
          <Link href="/resume.pdf" target="_blank">
            <Download size={18} /> Download CV
          </Link>
        </Button>
      </div>
    </aside>
  );
};

const ContactRow = ({ icon: Icon, label }: { icon: any, label: string }) => (
  <div className="flex items-center gap-3 text-neutral-400 hover:text-neutral-200 transition-colors group">
    <Icon size={16} className="text-emerald-500" />
    <span className="text-xs font-semibold truncate">{label}</span>
  </div>
);

const SocialIcon = ({ href, icon: Icon }: { href: string, icon: any }) => (
  <Link href={href} target="_blank">
    <div className="p-3 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-emerald-500/50 hover:text-emerald-400 transition-all">
      <Icon size={20} />
    </div>
  </Link>
);