import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Subscribe = () => {
	return (
		<section className="my-5 py-20 md:py-32 bg-main2 bg-opacity-10">
			<div className="container px-4 sm:flex sm:justify-center">
				<div className="sm:max-w-[600px]">
					<div className="text-center space-y-2 mb-5 md:space-y-5">
						<h2 className="text-xl font-bold">Subscribe to our newsletter</h2>
						<p>
							Subscribe to our newsletter and get updates on our latest
							campaigns
						</p>
					</div>
					<form className="flex items-center flex-col gap-3 md:gap-5 sm:flex-row">
						<Input
							required
							type="email"
							placeholder="Enter your email address"
						/>
						<Button>Subscribe</Button>
					</form>
				</div>
			</div>
		</section>
	);
};
export default Subscribe;
