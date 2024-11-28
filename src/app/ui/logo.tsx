import Image from 'next/image';

export default function PortfolioLogo() {
  return (
    <Image
      src="/logo.png"
      alt="Profile Picture"
      width={150}
      height={100}
      className="rounded-full bg-white border-8 border-x-red-500 shadow-lg"
    />

  );
}