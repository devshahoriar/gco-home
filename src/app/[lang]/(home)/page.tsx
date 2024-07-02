import BlogSection from "@/components/custom/home/BlogSection";
import Carosel from "@/components/custom/home/Carosel";
import ChildAbouse from "@/components/custom/home/ChildAbouse";
import ContractUs from "@/components/custom/home/ContractUs";
import DonarAndCo from "@/components/custom/home/DonarAndCo";
import Donate from "@/components/custom/home/Donate";
import Instagram from "@/components/custom/home/Instagram";
import JoinOurMission from "@/components/custom/home/JoinOurMission";
import MiniWOrdlMap from "@/components/custom/home/MiniWOrdlMap";
import OurJob from "@/components/custom/home/OurJob";
import { PlantTrees } from "@/components/custom/home/PlantTrees";
import Subscribe from "@/components/custom/home/Subscribe";
import React from "react";

const HomePage = async () => {
	return (
		<>
			<Carosel />
			<OurJob />
			<DonarAndCo />
			<PlantTrees />
			<JoinOurMission />
			<BlogSection />
			<MiniWOrdlMap />
			<ChildAbouse />
			<Donate />
			<Instagram />
			<Subscribe />
			<ContractUs />
		</>
	);
};

export default HomePage;
