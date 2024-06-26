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
          <LinkButton
            icon={"whatsapp"}
            title={"WhatsApp"}
            link={"https://chat.whatsapp.com/JWP4lxqDups9bSdHvBY6BU"}
          ></LinkButton>
          <LinkButton
            icon={"instagram"}
            title={"Instagram"}
            link={"https://www.instagram.com/gdsc.metu"}
          ></LinkButton>
          <LinkButton
            icon={"google"}
            title={"Google"}
            link={
              "https://gdsc.community.dev/middle-east-technical-university/"
            }
          ></LinkButton>
          <LinkButton
            icon={"discord"}
            title={"Discord"}
            link={"https://discord.com/invite/7pEGCsnfQ9"}
          ></LinkButton>
          <LinkButton
            icon={"linkedin"}
            title={"LinkedIn"}
            link={"https://www.linkedin.com/company/gdsc-metu/"}
          ></LinkButton>
          <LinkButton
            icon={"youtube"}
            title={"YouTube"}
            link={"https://www.youtube.com/channel/UCpEY751BHD4s_Zwc2GDXIbA"}
          ></LinkButton>
        </div>
      </div>
    </main>
  );
}
