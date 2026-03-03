import { useState, useRef, useEffect } from "react";
import { Menu, Bell, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
    onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: Props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        if (dropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownOpen]);

    return (
        <header className="h-[76px] flex items-center justify-between px-6 md:px-8 rounded-[2rem] bg-background/80 backdrop-blur-2xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:border-white/10 relative overflow-visible transition-all">
            <div className="absolute top-0 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10 pointer-events-none overflow-hidden"></div>

            <div className="flex items-center gap-4 z-10">
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden hover:bg-muted/80 transition-colors rounded-full w-12 h-12"
                    onClick={onMenuClick}
                >
                    <Menu className="w-5 h-5" />
                </Button>
            </div>

            <div className="flex items-center gap-4 md:gap-5 z-10">
                <Button variant="ghost" size="icon" className="relative hover:bg-secondary/60 transition-colors rounded-full w-12 h-12 bg-secondary/30">
                    <Bell className="w-5 h-5 text-foreground/80" />
                    <span className="absolute top-[12px] right-[14px] w-2.5 h-2.5 bg-destructive rounded-full ring-2 ring-background"></span>
                </Button>

                <div className="relative" ref={dropdownRef}>
                    <div
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg shadow-primary/20 cursor-pointer hover:scale-105 transition-transform select-none"
                    >
                        U
                    </div>

                    {dropdownOpen && (
                        <div className="absolute right-0 mt-3 w-48 bg-background/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 dark:border-white/10 py-2 z-50 animate-in fade-in slide-in-from-top-4 duration-200">
                            <div className="px-4 py-2 border-b border-border/50 mb-2">
                                <p className="text-sm font-medium leading-none">User</p>
                                <p className="text-xs text-muted-foreground mt-1">user@sociohub.com</p>
                            </div>
                            <div className="px-2 font-medium">
                                <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-foreground hover:bg-secondary/50 rounded-xl transition-colors text-left">
                                    <User className="w-4 h-4 text-primary" />
                                    Profile
                                </button>
                                <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-destructive hover:bg-destructive/10 rounded-xl transition-colors text-left mt-1">
                                    <LogOut className="w-4 h-4" />
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
