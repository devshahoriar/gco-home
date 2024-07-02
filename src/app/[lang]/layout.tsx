"use client";
import Nav from "@/components/shared/Nav";
import { I18nProviderClient } from "@/locales/client";
import type { ReactElement } from "react";
import ThemeProviderClient from "@/components/shared/theme-provider";
import TopBar from "@/components/shared/TopBar";
import Footer from "@/components/shared/Footer";

const SubLayout = ({
	params: { lang },
	children,
}: {
	params: { lang: string };
	children: ReactElement;
}) => {
	return (
		<ThemeProviderClient
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<I18nProviderClient locale={lang}>
				{/* this is notish when need uncomment and edit */}
				{/* <Marquee
          className="text-red-500 container bg-red-50 dark:bg-opacity-10"
          pauseOnHover
          autoFill
        >
          any notice here -
        </Marquee> */}
				<TopBar />
				<Nav />
				<main>{children}</main>
				<Footer />
			</I18nProviderClient>
		</ThemeProviderClient>
	);
};

export default SubLayout;
