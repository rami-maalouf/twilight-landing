import { Moon } from "lucide-react";
import { SiInstagram, SiYoutube } from "react-icons/si";
import { FiGithub, FiYoutube } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { AndroidWaitlistModal } from "@/components/AndroidWaitlistModal";
import { useEffect, useState } from "react";

export const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 animate-fade-in glass-header">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <Moon className="w-4 h-4 text-primary" />
          </div>
          <span className="font-semibold text-lg tracking-tight">Twilight</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/mhm13dev/twilight-landing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-4 h-4 text-muted-foreground" />
            </a>
            {/* instagram */}
            <a
              href="https://www.instagram.com/psycho.baller"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Instagram"
            >
              <SiInstagram className="w-4 h-4 text-muted-foreground" />
            </a>
            {/* twitter */}
            <a
              href="https://x.com/rami__maalouf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Twitter"
            >
              <BsTwitterX className="w-4 h-4 text-muted-foreground" />
            </a>
            {/* youtube */}
            <a
              href="https://www.youtube.com/@ramimaalouf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="YouTube"
            >
              <FiYoutube className="w-4 h-4 text-muted-foreground" />
            </a>
            {/* <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Sun className="w-4 h-4 text-muted-foreground" />
              ) : (
                <Moon className="w-4 h-4 text-muted-foreground" />
              )}
            </button> */}
            <AndroidWaitlistModal>
              <Button size="sm">
                Join Android Waitlist
              </Button>
            </AndroidWaitlistModal>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
