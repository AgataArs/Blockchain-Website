"use client";
import "./main-page.scss";
import Header from "@/components/header";
import Image from "next/image";
import videoBw from "../assets/bwvideo.mp4";
import Button, { SocialButton } from "@/components/button";
import Twitter from "../assets/twitter.svg?url";
import Facebook from "../assets/facebook.svg?url";
import Telegram from "../assets/telegram.svg?url";
import Youtube from "../assets/youtube.svg?url";
import Bitcoin from "../assets/bitcoin.svg?url";
import { Counter } from "@/components/counter/Counter";

export default function Home() {
	const time = Date.parse("May 6, 2024") - Date.now();

	return (
		<main className='Home'>
			{/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}

			<div className='Home__background'>
				<div class='overlay'></div>
				<video src={videoBw} autoPlay loop muted />
			</div>

			<div className='Home__content'>
				<Header />
				<div className='Home__content-container'>
					<div className='Home__content-title'>
						<h1>Blockchain Identity Verification</h1>
						<h3>Current rate 1 KYC = 2.20 USD Discount 12% from final price</h3>
					</div>
					<div className='Home__content-buttons'>
						<Button>Get whitepaper</Button>
						<Button>Onepager</Button>
					</div>
					<div className='Home__content-socials'>
						<SocialButton>
							<Twitter />
						</SocialButton>
						<SocialButton>
							<Facebook />
						</SocialButton>
						<SocialButton>
							<Telegram />
						</SocialButton>
						<SocialButton>
							<Youtube />
						</SocialButton>
						<SocialButton>
							<Bitcoin />
						</SocialButton>
					</div>
					<div className='Home__content-divider'>Next stage in</div>
					<div className='Home__content-counter'>
						<Counter time={time} />
					</div>
				</div>
				<div className='Home__content-scrollDown'>scroll down</div>
			</div>
		</main>
	);
}
