import { motion } from 'framer-motion';
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  TrendingUp,
  Sprout,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const Dashboard = () => {
  return (
    <motion.div 
      className="min-h-screen pt-24 lg:pt-32 pb-20 lg:pb-8 px-4 lg:px-8"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Welcome, Farmer
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your AI-powered companion for smarter farming decisions
          </p>
        </motion.div>

        {/* Quick Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          variants={staggerContainer}
        >
          <motion.div className="module-card text-center" variants={fadeInUp}>
            <div className="w-12 h-12 mx-auto mb-3 bg-primary/20 rounded-full flex items-center justify-center">
              <Thermometer className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">28°C</h3>
            <p className="text-sm text-muted-foreground">Temperature</p>
          </motion.div>

          <motion.div className="module-card text-center" variants={fadeInUp}>
            <div className="w-12 h-12 mx-auto mb-3 bg-secondary/20 rounded-full flex items-center justify-center">
              <Droplets className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">65%</h3>
            <p className="text-sm text-muted-foreground">Humidity</p>
          </motion.div>

          <motion.div className="module-card text-center" variants={fadeInUp}>
            <div className="w-12 h-12 mx-auto mb-3 bg-accent/20 rounded-full flex items-center justify-center">
              <Wind className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">12 km/h</h3>
            <p className="text-sm text-muted-foreground">Wind Speed</p>
          </motion.div>

          <motion.div className="module-card text-center" variants={fadeInUp}>
            <div className="w-12 h-12 mx-auto mb-3 bg-warning/20 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-warning" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">+15%</h3>
            <p className="text-sm text-muted-foreground">Price Trend</p>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Crop Recommendations */}
          <motion.div className="lg:col-span-2" variants={fadeInUp}>
            <div className="module-card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground flex items-center">
                  <Sprout className="w-6 h-6 text-primary mr-2" />
                  Recommended Crops
                </h2>
                <span className="text-sm text-muted-foreground">Based on current conditions</span>
              </div>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center justify-between p-4 bg-success/10 rounded-lg border border-success/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Rice</h3>
                      <p className="text-sm text-muted-foreground">95% suitability</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-success">Excellent</p>
                    <p className="text-xs text-muted-foreground">Expected yield: 4.5 tonnes/hectare</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center justify-between p-4 bg-primary/10 rounded-lg border border-primary/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Wheat</h3>
                      <p className="text-sm text-muted-foreground">88% suitability</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-primary">Very Good</p>
                    <p className="text-xs text-muted-foreground">Expected yield: 3.8 tonnes/hectare</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center justify-between p-4 bg-warning/10 rounded-lg border border-warning/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-warning/20 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-warning" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Corn</h3>
                      <p className="text-sm text-muted-foreground">72% suitability</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-warning">Moderate</p>
                    <p className="text-xs text-muted-foreground">Consider irrigation</p>
                  </div>
                </motion.div>
              </div>

              <motion.button 
                className="btn-hero w-full mt-6"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Detailed Recommendations
              </motion.button>
            </div>
          </motion.div>

          {/* Side Panel */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            {/* Weather Alert */}
            <div className="module-card">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 text-warning mr-2" />
                Weather Alert
              </h3>
              <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
                <p className="text-sm text-foreground mb-2">Rain expected in 2 days</p>
                <p className="text-xs text-muted-foreground">Consider postponing irrigation</p>
              </div>
            </div>

            {/* Market Insights */}
            <div className="module-card">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 text-accent mr-2" />
                Market Insights
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Rice</span>
                  <span className="text-sm font-medium text-success">₹2,850/quintal ↑</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Wheat</span>
                  <span className="text-sm font-medium text-foreground">₹2,100/quintal →</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Corn</span>
                  <span className="text-sm font-medium text-destructive">₹1,950/quintal ↓</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="module-card">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Clock className="w-5 h-5 text-secondary mr-2" />
                Quick Actions
              </h3>
              <div className="space-y-2">
                <motion.button 
                  className="btn-secondary w-full text-left"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Check Soil Health
                </motion.button>
                <motion.button 
                  className="btn-secondary w-full text-left"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Weather Forecast
                </motion.button>
                <motion.button 
                  className="btn-secondary w-full text-left"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  AI Assistant
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};