import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sprout, 
  Home, 
  CloudRain, 
  TrendingUp, 
  BookOpen, 
  MessageSquare, 
  Settings,
  Globe,
  Mic,
  Menu,
  X
} from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home, color: 'text-primary' },
  { id: 'recommendations', label: 'Crop Advice', icon: Sprout, color: 'text-success' },
  { id: 'weather', label: 'Weather', icon: CloudRain, color: 'text-secondary' },
  { id: 'market', label: 'Market', icon: TrendingUp, color: 'text-accent' },
  { id: 'training', label: 'Learn', icon: BookOpen, color: 'text-warning' },
  { id: 'chat', label: 'AI Assistant', icon: MessageSquare, color: 'text-primary-glow' },
];

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-50 glass-card px-8 py-4 rounded-2xl">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
              <Sprout className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-foreground">CropAI</span>
          </motion.div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`nav-link flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  activeTab === item.id ? 'active bg-primary/10' : ''
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className={`w-4 h-4 ${item.color}`} />
                <span className="text-sm font-medium">{item.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Language & Voice Controls */}
          <div className="flex items-center space-x-3">
            <motion.button
              className="btn-secondary flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLanguage(language === 'EN' ? 'हिं' : 'EN')}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">{language}</span>
            </motion.button>
            
            <motion.button
              className="btn-secondary p-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mic className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <header className="fixed top-0 left-0 right-0 z-50 glass-card px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                <Sprout className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-foreground">CropAI</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <motion.button
                className="btn-secondary p-2"
                whileTap={{ scale: 0.95 }}
              >
                <Mic className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="btn-secondary p-2"
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 glass-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="pt-20 px-6">
              <div className="grid grid-cols-2 gap-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      onTabChange(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`module-card text-center ${
                      activeTab === item.id ? 'glow-primary' : ''
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <item.icon className={`w-8 h-8 mx-auto mb-2 ${item.color}`} />
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                  </motion.button>
                ))}
              </div>
              
              <div className="mt-6 flex justify-center">
                <motion.button
                  className="btn-secondary flex items-center space-x-2"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setLanguage(language === 'EN' ? 'हिं' : 'EN')}
                >
                  <Globe className="w-4 h-4" />
                  <span>Language: {language}</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Mobile Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 glass-card px-4 py-2">
          <div className="flex justify-around">
            {navItems.slice(0, 5).map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`flex flex-col items-center space-y-1 p-2 rounded-lg ${
                  activeTab === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs">{item.label.split(' ')[0]}</span>
              </motion.button>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};