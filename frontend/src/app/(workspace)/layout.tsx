import React from "react";
import GridBackground from "@/components/ui/background-grid";

export default function WelcomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className=" max-h-full h-screen">
			<GridBackground />
			{children}
		</div>
	);
}
