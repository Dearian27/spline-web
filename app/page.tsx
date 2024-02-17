import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col h-fit justify-center items-center relative">
      <Navbar />
      <header id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden">
        <div className="w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center md:items-start gap-8">
          <div className="flex flex-col gap-2">            
            <h1 className="text-4xl font-black md:text-8xl">Insightful </h1>
            <h2 className="text-md md:text-2xl">Start growing today!</h2>
            
          </div>
          <p className="max-w-md text-sm md:text-base text-zinc-500">Insightful is an AI-powered sales optimization tool provides data-driven insights to boost sales performance.</p>
        </div>
      </header>
    </main>
  );
}


function Navbar() {
  return (
    <div className="w-full h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center">
      <div className="max-w-7xl w-full  flex items-center justify-between p-4">
        <h6 className="font-bold">Insightful</h6>
        <ul className="flex gap-8">
          <li><Link className="hover:text-fuchsia-500 transition-colors text-xs sm:text-base" href="#home">Home</Link></li>
          <li><Link className="hover:text-fuchsia-500 transition-colors text-xs sm:text-base" href="#about">About</Link></li>
          <li><Link className="hover:text-fuchsia-500 transition-colors text-xs sm:text-base" href="#pricing">Pricing</Link></li>
        </ul>
      </div>
    </div>

  )
}