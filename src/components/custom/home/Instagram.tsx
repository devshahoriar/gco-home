import BlurIn from "@/components/ui/aimate/blur-in";
import { MagicCard, MagicContainer } from "@/components/ui/aimate/magic-card";

const Instagram = () => {
	return (
		<section>
			<div className="container">
				<div className="mt-10">
					<BlurIn
						className="!text-2xl font-semibold md:!text-3xl !py-10 text-center"
						word="We are in instagrem"
					/>
				</div>
				<MagicContainer
					className={"flex gap-5 flex-wrap justify-center px-5 md:px-0"}
				>
					{new Array(10).fill(0).map((_, i) => (
						<MagicCard
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={i}
							borderWidth={3}
							className="flex w-[calc(50%-10px)] md:w-[calc(33%-10px)] lg:w-[calc(25%-10px)] cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] shadow-2xl"
						>
							{/* biome-ignore lint/style/useTemplate: <explanation> */}
							<img src={"https://picsum.photos/1000?q=" + i} alt="img" />
							<div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
						</MagicCard>
					))}
				</MagicContainer>
			</div>
		</section>
	);
};
export default Instagram;
