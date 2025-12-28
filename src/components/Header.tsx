import { Moon } from "lucide-react";
import { SiInstagram} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
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
    <header className="fixed top-0 left-0 right-0 z-50 animate-fade-in px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between glass px-6 py-3 rounded-2xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <Moon className="w-4 h-4 text-primary" />
          </div>
          <span className="font-semibold text-lg tracking-tight">Twilight</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1 sm:gap-2">
            <a
              href="https://github.com/psycho-baller/twilight"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-4 h-4 text-muted-foreground" />
            </a>
            {/* instagram - hidden on mobile */}
            <a
              href="https://www.instagram.com/psycho.baller"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex w-9 h-9 rounded-lg items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Instagram"
            >
              <SiInstagram className="w-4 h-4 text-muted-foreground" />
            </a>
            {/* twitter - hidden on mobile */}
            <a
              href="https://x.com/rami__maalouf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex w-9 h-9 rounded-lg items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Twitter"
            >
              <BsTwitterX className="w-4 h-4 text-muted-foreground" />
            </a>
            {/* youtube - hidden on mobile */}
            <a
              href="https://www.youtube.com/@ramimaalouf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex w-9 h-9 rounded-lg items-center justify-center hover:bg-secondary transition-colors"
              aria-label="YouTube"
            >
              <FiYoutube className="w-4 h-4 text-muted-foreground" />
            </a>
            {/* linkedin - hidden on mobile */}
            <a
              href="https://www.linkedin.com/company/orbitlabsdotstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex w-9 h-9 rounded-lg items-center justify-center hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-4 h-4 text-muted-foreground" />
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
                <span className="hidden sm:inline">Join Android Waitlist</span>
                <span className="sm:hidden">Android</span>
              </Button>
            </AndroidWaitlistModal>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
