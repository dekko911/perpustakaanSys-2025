import { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

export const Audio = ({ audioSrc = "", audioType = "audio/wav" }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(null);

	const handlePlay = () => {
		audioRef.current.play();
		setIsPlaying(true);
	};

	const handlePause = () => {
		audioRef.current.pause();
		setIsPlaying(false);
	};

	// for adjust volume using range input.
	// const handleVolume = (e) => {
	// 	const number = e.target.value;
	// 	const volume = number / 100;
	// 	audioRef.current.volume = volume;
	// };

	return (
		<div
			className={`absolute bottom-18 left-6 z-10 flex items-center ${isPlaying ? "animate-pulse" : ""}`}
		>
			<audio ref={audioRef} loop>
				<source src={audioSrc} type={audioType} />
			</audio>

			<button
				className="cursor-pointer bg-white p-3 rounded-3xl text-black focus:outline-0"
				onClick={() => {
					if (isPlaying) {
						handlePause();
					} else {
						handlePlay();
					}
				}}
			>
				{isPlaying ? <FaPause /> : <FaPlay />}
			</button>

			{isPlaying ? (
				<p className="ms-2">Rindik Bali</p>
			) : (
				<p className="ms-2">Play Song</p>
			)}

			{/* this use for adjust volume */}
			{/* <input
				className="cursor-pointer block ms-3"
				type="range"
				min={0}
				max={100}
				onChange={(e) => handleVolume(e)}
			/> */}
		</div>
	);
};
