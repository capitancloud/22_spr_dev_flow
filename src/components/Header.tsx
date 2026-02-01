import { LogOut, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

export function Header() {
  const { logout } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
            <Terminal className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">
            Dev<span className="text-primary">Flow</span>
          </span>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={logout}
          className="gap-2 border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">Esci</span>
        </Button>
      </div>
    </header>
  );
}
