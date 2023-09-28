import Image from 'next/image';
import { useState } from 'react';
import { aboutMeData } from '../../data/aboutMeData';

function AboutMeBio() {
	const [aboutMe, setAboutMe] = useState(aboutMeData);
	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<Image
					src="/images/profile.webp"
					width={200}
					height={200}
					className="rounded-lg"
					alt="Profile Image"
				/>
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						
					>
						I am Emmanuel Barasa, a seasoned web developer with four years of experience in the ever-changing technological landscape. I have refined my skills and knowledge in three distinct but interconnected domains: web development, mobile application development, and machine learning. I flourish in the field of web development. Over the years, I have immersed myself in the intricate world of coding, creating websites that are both visually and functionally spectacular. I am well-versed in a variety of programming languages and frameworks, allowing me to remain abreast of web development trends and create digital experiences that captivate and engage users
					</p>
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						
					>
						My expertise extends to mobile app development, where I have  utilized my engineering skills to create innovative, user-friendly applications. I am adept at devising solutions that adapt seamlessly to the mobile ecosystem and am familiar with the unique challenges and opportunities mobile platforms present
					</p>
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						
					>
						I also thrive in machine learning, a discipline that continues to transform our digital landscape. I have immersed myself in the realm of algorithms and data analysis, leveraging the power of machine learning to solve complex problems and extract insights from data. This combination of technical skills enables me to approach problem-solving holistically, infusing creativity and innovation into every endeavor I undertake					</p>
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						
					>
					I am not just a developer with four years of experience; I am a tech enthusiast dedicated to stretching the boundaries of what is possible. I am eager to take on new challenges, work with forward-thinking teams, and contribute to the ever-evolving technological landscape. Lets transform ideas into digital realities that have an enduring impact by working together					</p>
			</div>
		</div>
	);
}

export default AboutMeBio;
