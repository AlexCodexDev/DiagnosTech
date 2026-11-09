import type { ReactNode } from "react";
import Container from "./container";
import Header from "./header";
import Footer from "./footer";

interface Props {
    children: ReactNode;
    className?: string;
}

export default function PageLayout({
    children,
    className = ""
}: Props) {
    return (
        <main
            className={`min-h-screen flex flex-col ${className}`}
        >
            <Header />
            <Container className="flex flex-col flex-1">
                <div
                    className="flex-1 py-6 md:py-8"
                >
                    {children}
                </div>
            </Container>
            <Footer />
        </main>
    )
}