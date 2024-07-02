/* eslint-disable @next/next/no-img-element */
const Footer = () => {
	return (
		<>
			<section className="bg-gray-800 text-white text-center py-10 sm:py-20 lg:py-10">
				<div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-start gap-10">
					<FooterItem title="Authorized BY">
						<div className="flex gap-3">
							<img
								className="object-cover aspect-square size-20 rounded-lg"
								src="https://globalcommunityorganization.org/wp-content/uploads/2023/02/NGO-Affairs-Bureau-1.png"
								alt=""
							/>
							<img
								className="object-cover aspect-square size-20 rounded-lg"
								src="https://globalcommunityorganization.org/wp-content/uploads/2023/02/Social-Service-logo.jpg"
								alt=""
							/>
						</div>
					</FooterItem>
					<FooterItem title="About Us">
						<a href="/facebook">Mission and Vision</a>
						<a href="/twitter">History of GCO</a>
						<a href="/twitter">Meet The Team</a>
					</FooterItem>
					<FooterItem title="Contract US">
						<p className="text-sm w-[80%]">
							Global Community Organization South Milik Bagha Bagha-6280, Bagha,
							Rajshahi, Bangladesh hello@globalcommunityorganization.org Mobile:
							+8801760870070
						</p>
					</FooterItem>
					<FooterItem title="TAX ID #463673947101">
						<p className="text-sm w-[80%]">
            GCO is a tax-exempt organization & your donation is tax-deductible within the guidelines of B.D law.
            </p>
					</FooterItem>
					<FooterItem title="Vetted BY">
          <div className="flex gap-3">
							<img
								className="object-cover aspect-square size-20 rounded-lg"
								src="https://globalcommunityorganization.org/wp-content/uploads/2023/10/2024_Pathway-Vetted-Badge-768x710.png"
								alt=""
							/>
							<img
								className="object-cover aspect-square size-20 rounded-lg"
								src="https://globalcommunityorganization.org/wp-content/uploads/2023/10/European_Commission.svg.png"
								alt=""
							/>
						</div>
					</FooterItem>
					<FooterItem title="Planting Partner">
          <div className="flex gap-3">
							<img
								className="object-cover aspect-square size-20 rounded-lg"
								src="https://globalcommunityorganization.org/wp-content/uploads/elementor/thumbs/OTP-e1704813735137-qi2983g0nym3xzxqm7zf7d6mwv4sidl9oirdxl1b9y.webp"
								alt=""
							/>
							<img
								className="object-cover aspect-square size-20 rounded-lg"
								src="https://globalcommunityorganization.org/wp-content/uploads/2023/12/GN-Logo-JPEG.jpg"
								alt=""
							/>
						</div>
					</FooterItem>
					<FooterItem title="Social Link">
						<a href="/faq">FAQ</a>
						<a href="/support">Support</a>
					</FooterItem>
					<FooterItem title="FINANCIALS">
						<a href="/faq">FAQ</a>
						<a href="/support">Support</a>
					</FooterItem>
				</div>
			</section>
			<footer className="bg-gray-900 text-white text-center py-5">
				<p>&copy; 2021 All rights reserved</p>
			</footer>
		</>
	);
};

const FooterItem = ({
	children,
	title,
}: {
	children: React.ReactNode;
	title: string;
}) => {
	return (
		<div className="flex  flex-col gap-3 items-center sm:items-start">
			<h1 className="text-xl font-bold">{title}</h1>
			{children}
		</div>
	);
};

export default Footer;
