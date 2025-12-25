import { Moon, Sun, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-2xl px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Moon className="w-4 h-4 text-primary" />
            </div>
            <span className="font-semibold text-lg">Twilight</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-muted-foreground" />
            </a>
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-muted-foreground" />
              ) : (
                <Moon className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
            <Button size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
