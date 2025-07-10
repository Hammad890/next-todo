
import { HeroParallax } from "@/components/ui/hero-parallax";
import HomeComponent from "./Home/page";
import { products } from "./Hero/page";

export default function Home() {
  return (
    <div>
      <HomeComponent />
      <HeroParallax products={products}/>
      </div>
  );
}
