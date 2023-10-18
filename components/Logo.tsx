import Image from "next/image";

const Logo = () => (
  <div className="rounded-lg">
    <Image
      className="rounded-2xl"
      src="/logo.jpeg" // Path to your logo in the public folder
      alt="Your Logo"
      width={100} // Set the width
      height={100} // Set the height (equal to the width to create a circle)
    />
  </div>
);

export default Logo;
