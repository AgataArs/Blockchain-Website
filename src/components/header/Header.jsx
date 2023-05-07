import "./header.scss";
import Image from "next/image";
import Logo from "../../assets/site_logo.png";
import Flag from "../../assets/flagUK.png";
import Navbar from "@/components/navbar";
import Button from "@/components/button";

// BEM
export const Header = () => {
	return (
		<header className='Header__main'>
			<div className='Header__main-logo'>
				<Image src={Logo} />
			</div>
			<Navbar />
			<div className='Header__main-loginBox'>
				<Button className='Header__main-loginBox-login'>Login</Button>
				<a className='Header__main-loginBox-signUp' href='#'>
					Sign Up
				</a>
				<div className='Header__main-language'>
        <Button className='Header__main-flag'></Button>
				</div>
			</div>
		</header>
	);
};
