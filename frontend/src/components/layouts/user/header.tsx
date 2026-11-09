import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    // START: List menu
    const menus = [
        {
            name: "home",
            url: "javascript:void(0);"
        },
        {
            name: "Diet Plans",
            url: "javascript:void(0);"
        },
        {
            name: "About Us",
            url: "javascript:void(0);"
        },
        {
            name: "Testimonial",
            url: "javascript:void(0);"
        },
        {
            name: "Contact Us",
            url: "javascript:void(0);"
        }
    ];
    // END: List menu

    return (
        <header className="w-full py-8 border-b-2">
            <div className="flex justify-between items-center px-4 sm:px-6 lg:px-16">
                <div className="flex-1 cursor-pointer" onClick={() => navigate("/")}>
                    <p>Logo</p>
                </div>
                <div className="flex-2 flex justify-end items-center gap-8 menu">
                    {menus.map((item: any, index: number) => (
                        <div
                            key={index}
                        >
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-transparent transition-colors duration-300 hover:bg-accent px-6 py-3 rounded-2xl"
                            >
                                {item.name}
                            </a>
                        </div>
                    ))}
                    <div>
                        <Button
                            className="px-12 py-6 rounded-2xl"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}