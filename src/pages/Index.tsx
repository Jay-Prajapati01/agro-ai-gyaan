import { useState } from 'react';
import { Scene3D } from '@/components/Scene3D';
import { Navigation } from '@/components/Navigation';
import { Dashboard } from '@/components/Dashboard';
import { CropRecommendations } from '@/components/CropRecommendations';
import { WeatherModule } from '@/components/WeatherModule';
import { AIAssistant } from '@/components/AIAssistant';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'recommendations':
        return <CropRecommendations />;
      case 'weather':
        return <WeatherModule />;
      case 'chat':
        return <AIAssistant />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* 3D Background Scene */}
      <Scene3D />
      
      {/* Navigation */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Main Content */}
      <main className="relative z-10">
        {renderContent()}
      </main>
      
      {/* Particle Effects */}
      <div className="particles fixed inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
