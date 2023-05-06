"use client";
import "./main-page.scss";
import Header from "@/components /header";
import Image from "next/image";
import bgImage from "../assets/bgimg11.jpg";
import Button, { SocialButton } from "@/components /button";
import Twitter from "../assets/twitter.svg?url";
import { Counter } from "@/components /counter/Counter";

export default function Home() {
  const time = Date.now() - Date.parse("May 6, 2024");

  console.log("time", time);

  return (
    <main className="Home">
      <div className="Home__background">
        <Image src={bgImage} fill />
      </div>

      <div className="Home__content">
        <Header />
        <div className="Home__content-container">
          <div className="Home__content-title">
            <h1>Blockchain Identity Verification</h1>
            <h3>Current rate 1 KYC = 2.20 USD Discount 12% from final price</h3>
          </div>
          <div className="Home__content-buttons">
            <Button>Get whitepaper</Button>
            <Button>Onepager</Button>
          </div>
          <div className="Home__content-socials">
            <SocialButton>
              <Twitter />
            </SocialButton>
            {/*  tutaj inne ikonki tylko import na gorze dolaczyc*/}
            {/*<SocialButton>*/}
            {/*  <Twitter />*/}
            {/*</SocialButton>*/}
            {/*<SocialButton>*/}
            {/*  <Twitter />*/}
            {/*</SocialButton>*/}
            {/*<SocialButton>*/}
            {/*  <Twitter />*/}
            {/*</SocialButton>*/}
            {/*<SocialButton>*/}
            {/*  <Twitter />*/}
            {/*</SocialButton>*/}
          </div>
          <div className="Home__content-divider">Next stage in</div>
          <div className="Home__content-counter">
            <Counter time={time} />
          </div>
        </div>
        <div className="Home__content-scrollDown">scroll down</div>
      </div>
    </main>
  );
}
