import { motion } from 'framer-motion';
import { 
  Cloud, 
  Sun, 
  CloudRain, 
  Wind, 
  Thermometer,
  Droplets,
  Eye,
  Gauge,
  Calendar,
  MapPin
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const weatherData = {
  current: {
    temperature: 28,
    humidity: 65,
    windSpeed: 12,
    pressure: 1013,
    visibility: 10,
    condition: 'Partly Cloudy',
    icon: Cloud,
    location: 'Punjab, India'
  },
  forecast: [
    { day: 'Today', high: 32, low: 24, condition: 'Sunny', icon: Sun, rain: 10 },
    { day: 'Tomorrow', high: 30, low: 22, condition: 'Cloudy', icon: Cloud, rain: 30 },
    { day: 'Day 3', high: 26, low: 20, condition: 'Rainy', icon: CloudRain, rain: 80 },
    { day: 'Day 4', high: 28, low: 21, condition: 'Partly Cloudy', icon: Cloud, rain: 20 },
    { day: 'Day 5', high: 31, low: 23, condition: 'Sunny', icon: Sun, rain: 5 },
    { day: 'Day 6', high: 29, low: 22, condition: 'Cloudy', icon: Cloud, rain: 40 },
    { day: 'Day 7', high: 27, low: 21, condition: 'Rainy', icon: CloudRain, rain: 70 }
  ]
};

export const WeatherModule = () => {
  const CurrentIcon = weatherData.current.icon;

  return (
    <motion.div 
      className="min-h-screen pt-24 lg:pt-32 pb-20 lg:pb-8 px-4 lg:px-8"
      initial="initial"
      animate="animate"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Weather Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time weather data and forecasts for informed farming decisions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Weather */}
          <motion.div className="lg:col-span-2" variants={fadeInUp}>
            <div className="module-card">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">{weatherData.current.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {new Date().toLocaleDateString('en-IN', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Temperature Display */}
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <CurrentIcon className="w-16 h-16 text-primary mr-4" />
                    <div>
                      <div className="text-5xl font-bold text-foreground">
                        {weatherData.current.temperature}°C
                      </div>
                      <div className="text-lg text-muted-foreground">
                        {weatherData.current.condition}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Weather Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/10 rounded-lg p-4 text-center">
                    <Droplets className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-lg font-semibold text-foreground">{weatherData.current.humidity}%</div>
                    <div className="text-xs text-muted-foreground">Humidity</div>
                  </div>
                  
                  <div className="bg-secondary/10 rounded-lg p-4 text-center">
                    <Wind className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <div className="text-lg font-semibold text-foreground">{weatherData.current.windSpeed} km/h</div>
                    <div className="text-xs text-muted-foreground">Wind Speed</div>
                  </div>
                  
                  <div className="bg-accent/10 rounded-lg p-4 text-center">
                    <Gauge className="w-6 h-6 text-accent mx-auto mb-2" />
                    <div className="text-lg font-semibold text-foreground">{weatherData.current.pressure} mb</div>
                    <div className="text-xs text-muted-foreground">Pressure</div>
                  </div>
                  
                  <div className="bg-warning/10 rounded-lg p-4 text-center">
                    <Eye className="w-6 h-6 text-warning mx-auto mb-2" />
                    <div className="text-lg font-semibold text-foreground">{weatherData.current.visibility} km</div>
                    <div className="text-xs text-muted-foreground">Visibility</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Farming Alerts */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            <div className="module-card">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Thermometer className="w-5 h-5 text-primary mr-2" />
                Farming Alerts
              </h3>
              
              <div className="space-y-3">
                <div className="bg-warning/10 border border-warning/20 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <CloudRain className="w-4 h-4 text-warning" />
                    <span className="text-sm font-medium text-foreground">Rain Expected</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Heavy rain in 2 days. Consider harvesting ready crops.</p>
                </div>
                
                <div className="bg-success/10 border border-success/20 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <Sun className="w-4 h-4 text-success" />
                    <span className="text-sm font-medium text-foreground">Ideal Conditions</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Perfect weather for spraying pesticides tomorrow.</p>
                </div>
              </div>
            </div>

            <div className="module-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <motion.button 
                  className="btn-secondary w-full text-left"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Hourly Forecast
                </motion.button>
                <motion.button 
                  className="btn-secondary w-full text-left"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Rainfall History
                </motion.button>
                <motion.button 
                  className="btn-secondary w-full text-left"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Set Weather Alerts
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 7-Day Forecast */}
        <motion.div className="mt-8" variants={fadeInUp}>
          <div className="module-card">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Calendar className="w-6 h-6 text-primary mr-2" />
              7-Day Forecast
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {weatherData.forecast.map((day, index) => {
                const DayIcon = day.icon;
                return (
                  <motion.div
                    key={day.day}
                    className="bg-card/50 rounded-lg p-4 text-center border border-card-border hover:bg-card/80 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-sm font-medium text-foreground mb-2">{day.day}</div>
                    <DayIcon className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <div className="text-xs text-muted-foreground mb-1">{day.condition}</div>
                    <div className="flex justify-between text-xs">
                      <span className="font-medium text-foreground">{day.high}°</span>
                      <span className="text-muted-foreground">{day.low}°</span>
                    </div>
                    <div className="flex items-center justify-center mt-2 text-xs text-secondary">
                      <Droplets className="w-3 h-3 mr-1" />
                      {day.rain}%
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};