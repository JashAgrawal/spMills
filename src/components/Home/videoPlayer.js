import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";

const VideoBanner = () => {
	const [hasWindow, setHasWindow] = useState(false);
	useEffect(() => {
		if (typeof window !== "undefined") {
			setHasWindow(true);
		}
	}, []);
	return (
		<div className="w-full h-[80vh] flex justify-center items-center">
			{hasWindow && (
				<ReactPlayer
					playing
					controls={false}
					loop
					width="90%"
					height="100%"
					url="https://youtu.be/lxHJfVjj5Zc"
					// light={true}
					muted
				/>
			)}
		</div>
	);
};

export default VideoBanner;
