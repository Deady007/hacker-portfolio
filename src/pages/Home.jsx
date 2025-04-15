import GalaxyBackground from "../components/GalaxyBackground";

import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="relative h-screen">
      {/* Galaxy Background with a Moving Planet */}
      <GalaxyBackground />
    
      {/* Hero Section */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
