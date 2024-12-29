import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";

const NewYearCountdown: React.FC = () => {
	const calculateTimeLeft = () => {
		const now = new Date();
		const nextYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);
		const difference = nextYear.getTime() - now.getTime();

		let timeLeft = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			difference
		};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
				difference
			};
		}

		return timeLeft;
	};

  	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="flex justify-center flex-col items-center">
			<>
				{(timeLeft?.difference) ? (
					<>
						<h3 className="text-lg md:text-2xl text-slate-300 font-inter-medium">New Year&apos;s Countdown🎉</h3>
						<p className="text-lg md:text-2xl text-slate-300 font-inter-medium">
							{timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes, {timeLeft.seconds} seconds
						</p>
					</>		
				) : (
					<h3 className="text-xl md:text-2xl text-slate-300 font-inter-medium py-6">
						<Marquee 
							autoFill 
							speed={50} 
							direction="left" 
						>	
							Happy New Year! 🎉🎉🎉
						</Marquee>
					</h3>
				)}
			</>
		</div>
	);
};

export default NewYearCountdown;
