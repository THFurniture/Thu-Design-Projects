import * as React from "react";
import { Link } from "react-router";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
    size?: "sm" | "md" | "lg";
    asChild?: boolean;
    href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = "", variant = "primary", size = "md", asChild = false, href, ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center rounded-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8B877D] disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

        const variants = {
            primary: "bg-[#D8D3C7] text-[#121212] hover:bg-[#8B877D] hover:text-white shadow-sm",
            secondary: "bg-[#121212] text-[#EFEDE8] hover:bg-[#121212]/80 shadow-sm",
            outline: "border border-[#121212]/20 bg-transparent text-[#121212] hover:bg-[#121212] hover:text-[#EFEDE8] backdrop-blur-sm",
            ghost: "hover:bg-[#121212]/5 text-[#121212]",
            link: "text-[#121212] underline-offset-4 hover:underline",
        };

        const sizes = {
            sm: "h-8 px-4 text-xs tracking-wide",
            md: "h-11 px-8 text-sm tracking-wide",
            lg: "h-14 px-10 text-base tracking-widest uppercase",
        };

        const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

        if (href) {
            return (
                <Link to={href} className={combinedClassName}>
                    {props.children}
                </Link>
            );
        }

        return (
            <button
                ref={ref}
                className={combinedClassName}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
