import LinkButton from "@/components/LinkButton";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    //rgb(59 130 246/0.5)

    <main className="flex min-h-screen flex-col items-center pt-[48px] font-mono bg-blue-transparent ">
      <Logo></Logo>
      <div className=" text-center content-center items-center max-w-4xl px-6">
        <div className="text-white content-center text-center py-2 px-8 ">
          <h2 className="font=bold text-xl">GDSC METU</h2>
          <p>Google Developer Student Clubs Middle East Technical University</p>
        </div>
        <div>
          <LinkButton icon={"whatsapp"} title={"WhatsApp"} link={}></LinkButton>
          <LinkButton icon={"whatsapp"} title={"WhatsApp"}></LinkButton>
          <LinkButton icon={"whatsapp"} title={"WhatsApp"}></LinkButton>
          
        </div>
      </div>
    </main>
  );
}
