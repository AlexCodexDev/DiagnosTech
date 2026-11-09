import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

export default function Container({
    children,
    className = ""
}: Props) {
    return (
        <div
            className={`mx-auto w-full h-full max-w-12xl px-4 sm:px-6 lg:px-16 ${className}`}
        >
            {children}
        </div>
    )
}