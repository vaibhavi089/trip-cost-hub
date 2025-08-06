import { Github, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-dark border-t border-border/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-3 text-muted-foreground text-lg">
            <span>Made with</span>
            <Heart className="w-5 h-5 text-red-500 fill-current" />
            <span>by</span>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-glow transition-colors font-medium"
            >
              Your Name
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
            </a>
          </div>
          
          <p className="text-xs text-muted-foreground">
            © 2024 Ride Fare Comparator. This is a demo app for price comparison.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;