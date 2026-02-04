import React from 'react';
import { Search, Send, Twitter, Flame, Trophy } from 'lucide-react';
import shrimpImg from './assets/barsik/shrimp.svg';
import dolphinImg from './assets/barsik/dolphin.svg';
import whaleImg from './assets/barsik/whale.svg';
import catImg from './assets/barsik/cat.png';
import LogoImg from './assets/barsik/Logo.png';
import DivImg from './assets/barsik/divider.svg';

const BarsikPage = () => {
    return (
        <div className="min-h-screen relative">

            {/* Background Pattern */}
            <div className="bg-doodles"></div>

            {/* Decorative Paws (Fixed positioning like the design) */}
            <div className="fixed top-20 right-10 text-white/5 text-9xl rotate-12 select-none pointer-events-none">🐾</div>
            <div className="fixed bottom-40 left-10 text-white/5 text-9xl -rotate-12 select-none pointer-events-none">🐾</div>

            {/* ================= NAVBAR ================= */}
            <nav className="relative z-50 w-full max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-barsik-green flex items-center justify-center shadow-[0_0_20px_rgba(0,255,163,0.6)] cursor-pointer">
                        <img src={LogoImg} alt="Logo" className="rounded-full w-full h-full object-cover" />
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative w-full max-w-xs group">
                    <input
                        type="text"
                        placeholder="Check your status"
                        className="w-full bg-[#1a2333] border border-gray-700 rounded-full py-2.5 px-5 pl-12 text-sm text-gray-300 focus:outline-none focus:border-barsik-green focus:ring-1 focus:ring-barsik-green transition-all"
                    />
                    <Search className="absolute left-4 top-3 w-4 h-4 text-gray-500 group-focus-within:text-barsik-green transition-colors" />
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-bold text-gray-400">
                    {['Play', 'How does it work?', 'Audit', 'Burning room'].map((item) => (
                        <a key={item} href="#" className="hover:text-white transition-colors uppercase tracking-wider text-xs md:text-sm whitespace-nowrap">
                            {item}
                        </a>
                    ))}
                    <button className="text-white hover:text-black border-2 border-transparent hover:bg-barsik-green px-6 py-2 rounded-full transition-all text-xs md:text-sm font-bold bg-white/5 hover:scale-105 active:scale-95">
                        Buy Barsik
                    </button>
                </div>
            </nav>

            {/* ================= HERO SECTION ================= */}
            <section className="relative z-10 max-w-6xl mx-auto mt-12 mb-32 px-6 flex flex-col md:flex-row items-center justify-center gap-12">

                {/* Hero Image (Cat in Circle) */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
                    {/* Neon Circle Ring */}
                    <div className="absolute"></div>
                    {/* Masked Image */}
                    <div className="absolute">
                        {/* Use your specific black and white cat image here */}
                        <img src={catImg} alt="Barsik" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
                    </div>
                </div>

                {/* Hero Text */}
                <div className="text-center md:text-left">
                    <h1 className="font-marker text-6xl md:text-8xl mb-2 leading-[1em]">
                        <span className="text-barsik-green drop-shadow-[0_0_10px_rgba(0,255,163,0.5)] leading-[1em]">10X</span> Barsik
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-bold">
                        The easiest way to <span className="text-barsik-green font-extrabold">10X</span> your Barsik
                    </p>
                </div>
            </section>

            {/* ================= CHOOSE YOUR TABLE ================= */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 mb-20">
                <div className="text-center mb-20">
                    <h2 className="font-marker text-3xl md:text-4xl uppercase tracking-wider inline-block relative">
                        Choose Your <span className="text-barsik-green">Barsik</span> Table
                        {/* Swoosh Underline SVG */}
                        <img src={DivImg} className="ml-auto mr-auto w-full max-w-100 mt-10" />
                    </h2>
                </div>

                {/* In your main BarsikPage component, replace the Card Grid with this: */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-end max-w-5xl mx-auto px-4">
                    {/* Shrimp */}
                    <PricingCard
                        title="Shrimp"
                        amount="1 000"
                        // Replace with your 'shrimp-poker.jpg'
                        imgSrc={shrimpImg}
                    />

                    {/* Dolphin (Center) */}
                    <PricingCard
                        title="Dolphin"
                        amount="10 000"
                        isCenter={true}
                        // Replace with your 'dolphin-poker.jpg'
                        imgSrc={dolphinImg}
                    />

                    {/* Whale */}
                    <PricingCard
                        title="Whale"
                        amount="100 000"
                        // Replace with your 'whale-poker.jpg'
                        imgSrc={whaleImg}
                    />
                </div>
            </section>

            {/* ================= HOW DOES IT WORK? ================= */}
            <section className="hdw relative z-10 py-24 backdrop-blur-sm border-t border-white/5">
                <div className="inner">
                    <div className="text-center mb-24">
                        <h2 className="font-montserrat font-black text-5xl md:text-5xl text-barsik-green uppercase drop-shadow-md">
                            How Does It Work?
                        </h2>
                    </div>

                    <div className="max-w-6xl mx-auto px-6 flex flex-col gap-24">

                        {/* ROW 1: Diagram LEFT -> Text RIGHT */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32">

                            {/* Diagram 1: The Circle */}
                            <div className="relative w-[340px] h-[340px] flex-shrink-0">
                                {/* Center Pot */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-barsik-green rounded-full flex flex-col items-center justify-center text-barsik-dark z-20 shadow-[0_0_40px_rgba(0,255,163,0.5)] border-4 border-white">
                                    <div className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-70">Total Pot</div>
                                    <div className="text-xl font-marker leading-none mb-1">100x11</div>
                                    <div className="text-2xl font-black font-nunito">=1100</div>
                                    <div className="text-xs font-bold">$Barsik</div>
                                </div>

                                {/* 11 Orbiting Users */}
                                {[...Array(11)].map((_, i) => {
                                    const angle = (i * 360) / 11 - 90; // Start from top
                                    const radius = 140;
                                    const x = radius * Math.cos((angle * Math.PI) / 180);
                                    const y = radius * Math.sin((angle * Math.PI) / 180);
                                    return (
                                        <React.Fragment key={i}>
                                            {/* Connector Line */}
                                            <div
                                                className="absolute bg-white/20 h-[1px] w-[50px] origin-left z-0"
                                                style={{
                                                    top: `50%`,
                                                    left: `50%`,
                                                    width: `${radius}px`,
                                                    transform: `rotate(${angle}deg)`
                                                }}
                                            />
                                            {/* User Bubble */}
                                            <div
                                                className="absolute w-12 h-12 bg-barsik-card rounded-full border-2 border-white flex items-center justify-center overflow-hidden shadow-lg z-10"
                                                style={{ top: `calc(50% + ${y}px - 24px)`, left: `calc(50% + ${x}px - 24px)` }}
                                            >
                                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=cat${i}`} alt="user" className="w-full h-full p-1" />
                                            </div>
                                        </React.Fragment>
                                    );
                                })}
                            </div>

                            {/* Step 1 Text */}
                            <div className="max-w-sm text-left">
                                <div className="font-marker text-8xl text-barsik-green leading-none mb-4 opacity-90">1</div>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    In every table, <span className="text-barsik-green font-bold">11 people</span> send the same amount of BARSIK to the <span className="text-barsik-green font-bold">"10X BARSIK"</span> app.
                                </p>
                            </div>
                        </div>

                        {/* ROW 2: Text LEFT -> Diagram RIGHT */}
                        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-16 md:gap-32">

                            {/* Step 2 Text */}
                            <div className="max-w-sm text-left">
                                <div className="font-marker text-8xl text-barsik-green leading-none mb-4 opacity-90">2</div>
                                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                    The app then chooses one winner at random.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-gray-400">
                                        <div className="w-2 h-2 bg-barsik-green rounded-full"></div>
                                        <span><span className="text-barsik-green font-bold">10/11</span> of the pot goes to the winner.</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-400">
                                        <div className="w-2 h-2 bg-barsik-green rounded-full"></div>
                                        <span><span className="text-barsik-green font-bold">10x</span> their initial investments.</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-400">
                                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                        <span><span className="text-barsik-green font-bold">1/11</span> is burnt.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Diagram 2: Winner/Burn */}
                            <div className="relative w-[340px] flex flex-col items-center">
                                {/* Main Pot */}
                                <div className="w-40 h-40 bg-barsik-green rounded-full flex flex-col items-center justify-center text-barsik-dark shadow-[0_0_50px_rgba(0,255,163,0.4)] z-20 border-4 border-white mb-8">
                                    <div className="text-[10px] font-black uppercase tracking-widest mb-1">Total Pot</div>
                                    <div className="text-4xl font-marker">1100</div>
                                    <div className="text-sm font-bold">$Barsik</div>
                                </div>

                                {/* Arrows container */}
                                <div className="flex justify-between w-full px-2 relative">
                                    {/* Arrow to Burn (Right) */}
                                    <div className="absolute top-[-20px] right-4 w-20 h-20 border-t-2 border-r-2 border-dashed border-gray-500 rounded-tr-3xl"></div>

                                    {/* Arrow to Winner (Left/Bottom) */}
                                    <div className="absolute top-[-20px] left-10 w-20 h-40 border-l-2 border-b-2 border-dashed border-gray-500 rounded-bl-3xl -z-10"></div>
                                </div>

                                <div className="flex items-start justify-between w-full mt-4">
                                    {/* Winner */}
                                    <div className="flex flex-col items-center -ml-8">
                                        <div className="w-20 h-20 bg-barsik-card rounded-full border-2 border-barsik-green flex items-center justify-center overflow-hidden shadow-lg mb-2">
                                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=winner" alt="winner" className="w-full" />
                                        </div>
                                        <span className="text-xs font-bold text-barsik-green uppercase tracking-widest">Winner</span>
                                    </div>

                                    {/* Burn */}
                                    <div className="flex flex-col items-center -mr-8 -mt-12">
                                        <div className="w-24 h-24 bg-red-900/40 rounded-full border-2 border-red-500 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.4)] mb-2 relative overflow-hidden">
                                            <Flame className="w-12 h-12 text-orange-500 fill-orange-500 animate-pulse" />
                                            <div className="absolute font-black text-white text-[10px] bottom-4">100 $BARSIK</div>
                                        </div>
                                        <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Burnt</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FOOTER ================= */}
            <footer className="py-20 text-center relative z-10 w-full bg-[#080c14] border-t border-white/5">
                <h3 className="font-marker text-2xl uppercase mb-12 tracking-wider">Follow Us</h3>
                <div className="flex justify-center items-center gap-10">
                    <SocialBtn icon={<Send size={24} className="-ml-1 translate-x-0.5" />} color="bg-[#2AABEE]" />
                    <SocialBtn icon={<span className="font-black text-xl font-sans">𝕏</span>} color="bg-black border border-gray-700" />
                    <div className="w-16 h-16 rounded-full bg-barsik-green flex items-center justify-center text-black cursor-pointer hover:scale-110 transition-transform shadow-[0_0_30px_rgba(0,255,163,0.4)]">
                        <img src={LogoImg} className="w-full h-full rounded-full opacity-80" />
                    </div>
                </div>
            </footer>

        </div>
    );
};

// --- Sub-Components ---

// Place this at the bottom of BarsikPage.jsx

const PricingCard = ({ title, amount, imgSrc, isCenter }) => (
    <div className={`
    relative group transition-all duration-500 ease-out
    flex flex-col items-center
    ${isCenter
            ? 'md:-translate-y-12 z-20 opacity-90 hover:opacity-100 hover:scale-105 hover:z-30'
            : 'z-10 opacity-90 hover:opacity-100 hover:scale-105 hover:z-30'
        }
  `}>
        {/* 1. Card Container (Dark background with rounded corners) */}
        <div className="w-full relative cursor-pointer">

            {/* 2. Illustration Area */}
            <div className="w-full h-full relative overflow-hidden bg-[#0a0f18]">
                {/* Vignette Overlay (Dark fade at bottom of image) */}
                <div className="absolute"></div>

                {/* Image */}
                <img
                    src={imgSrc}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
            </div>

            {/* 3. Text Content */}
            <div className="p-6 pt-2 text-center relative z-20 flex flex-col items-center">

                {/* Title: 10x [Name] BARSIK */}
                <h3 className="font-marker text-lg md:text-xl tracking-wide text-white mb-1">
                    <span className="text-gray-400">10x</span> <span className="text-barsik-green">{title}</span> BARSIK
                </h3>

                {/* Subtitle: Small caps text */}
                <p className="text-[14px] font-bold text-gray-600 tracking-[0.2em] mb-0">
                    BARSIK to enter
                </p>

                {/* Price: | 1 000 | */}
                <div className="text-3xl md:text-2xl font-black font-nunito text-gray-600 tracking-tighter">
                    <span className="font-light mx-1">{'('}</span>
                    <span className="text-gray-600 drop-shadow-md">{amount}</span>
                    <span className="font-light mx-1">{')'}</span>
                </div>
            </div>
        </div>
    </div>
);

const SocialBtn = ({ icon, color }) => (
    <button className={`cursor-pointer w-14 h-14 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 ${color || 'bg-gray-800'}`}>
        {icon}
    </button>
);

export default BarsikPage;