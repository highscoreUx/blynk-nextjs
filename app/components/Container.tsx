import React from "react";

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

const Container = ({ children, className = "", ...props }: ContainerProps) => {
	return (
		<div
			className={`md:max-w-[1200px] md:mx-6 lg:mx-auto mx-4 max-w-full ${className}`}
			{...props}
		>
			{children}
		</div>
	);
};

export default Container;
