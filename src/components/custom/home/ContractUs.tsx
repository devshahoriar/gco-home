import { Mail, MapPin, Phone } from "lucide-react";
import type { ReactElement } from "react";

const ContractUs = () => {
	return (
		<section>
			<div className="container my-10 md:my-20">
				<div className="flex flex-col justify-center items-center gap-5">
					<h1 className="text-2xl font-bold">Contact Us</h1>
					<p className="w-[90%] text-center text-sm md:text-base md:w-[600px]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
						delectus ab. Nesciunt, cum veritatis, quibusdam odit nam nemo
						exercitationem eaque fugiat consequatur possimus assumenda vel ea
						itaque enim harum aliquam!
					</p>
				</div>
				<div className="mt-5 sm:flex sm:justify-center sm:gap-5 md:h-[400px] xl:h-[500px] ">
					<div className="grid grid-cols-2 grid-rows-2 ">
						<FooterAddressItem
							icon={<MapPin />}
							title="Address"
							text="Bagha,Rajshahi"
						/>
						<FooterAddressItem
							icon={<Mail />}
							text="Email@email.com"
							title="Email"
						/>
						<FooterAddressItem
							icon={<Phone />}
							text="017**********"
							title="Phone"
						/>
					</div>
					<div className="aspect-square mt-5 sm:mt-0">
						<iframe
							title="map"
							className="h-full w-full"
							src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Rosemont+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

const FooterAddressItem = ({
	icon,
	title,
	text,
}: {
	icon: ReactElement;
	title: string;
	text: string;
}) => {
	return (
		<div className="bg-slate-300 flex justify-center items-center flex-col aspect-square gap-2">
			<div className="[&>*]:size-8">{icon}</div>
			<h3 className="text-lg md:text-base font-semibold">{title}</h3>
			<p>{text}</p>
		</div>
	);
};

export default ContractUs;
