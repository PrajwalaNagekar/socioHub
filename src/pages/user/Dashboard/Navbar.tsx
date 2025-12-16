import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
    onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: Props) => {
    return (
        <header className="h-14 flex items-center gap-4 px-4 border-b bg-background">
            <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={onMenuClick}
            >
                <Menu />
            </Button>

            {/* <h1 className="font-semibold">Dashboard</h1> */}
        </header>
    );
};

export default Navbar;
