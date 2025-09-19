import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Droplets, 
  Calendar,
  Sprout,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  BarChart3,
  Lightbulb
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const CropRecommendations = () => {
  const [soilType, setSoilType] = useState('');
  const [season, setSeason] = useState('');
  const [irrigationType, setIrrigationType] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleGetRecommendations = () => {
    setShowResults(true);
  };

  const cropData = [
    {
      name: 'Rice',
      suitability: 95,
      confidence: 'High',
      yield: '4.5 tonnes/hectare',
      profit: '₹45,000/hectare',
      season: 'Kharif',
      reasons: ['Suitable soil pH', 'Adequate water supply', 'Favorable temperature'],
      tips: ['Use hybrid varieties', 'Apply organic fertilizers', 'Monitor water levels'],
      color: 'success'
    },
    {
      name: 'Wheat',
      suitability: 88,
      confidence: 'High',
      yield: '3.8 tonnes/hectare',
      profit: '₹38,000/hectare',
      season: 'Rabi',
      reasons: ['Good soil drainage', 'Optimal climate', 'Market demand'],
      tips: ['Choose disease-resistant varieties', 'Proper spacing', 'Timely harvesting'],
      color: 'primary'
    },
    {
      name: 'Sugarcane',
      suitability: 72,
      confidence: 'Medium',
      yield: '65 tonnes/hectare',
      profit: '₹52,000/hectare',
      season: 'Year-round',
      reasons: ['High water requirement met', 'Good market price', 'Long-term crop'],
      tips: ['Ensure continuous irrigation', 'Regular weeding', 'Pest monitoring'],
      color: 'warning'
    }
  ];

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
            AI Crop Recommendations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get personalized crop suggestions based on your soil, location, and season
          </p>
        </motion.div>

        {!showResults ? (
          /* Input Form */
          <motion.div className="max-w-2xl mx-auto" variants={fadeInUp}>
            <div className="module-card">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Sprout className="w-6 h-6 text-primary mr-2" />
                Tell us about your farm
              </h2>

              <div className="space-y-6">
                {/* Location */}
                <div>
                  <label className="flex items-center text-sm font-medium text-foreground mb-2">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your district/state"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Soil Type */}
                <div>
                  <label className="flex items-center text-sm font-medium text-foreground mb-2">
                    <BarChart3 className="w-4 h-4 mr-2 text-primary" />
                    Soil Type
                  </label>
                  <select
                    value={soilType}
                    onChange={(e) => setSoilType(e.target.value)}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select soil type</option>
                    <option value="clay">Clay Soil</option>
                    <option value="sandy">Sandy Soil</option>
                    <option value="loam">Loam Soil</option>
                    <option value="silt">Silt Soil</option>
                    <option value="black">Black Soil</option>
                    <option value="red">Red Soil</option>
                  </select>
                </div>

                {/* Season */}
                <div>
                  <label className="flex items-center text-sm font-medium text-foreground mb-2">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    Season
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Kharif', 'Rabi', 'Zaid'].map((s) => (
                      <motion.button
                        key={s}
                        onClick={() => setSeason(s)}
                        className={`px-4 py-3 rounded-lg border transition-all ${
                          season === s 
                            ? 'bg-primary text-primary-foreground border-primary' 
                            : 'bg-input border-border text-foreground hover:border-primary/50'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {s}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Irrigation */}
                <div>
                  <label className="flex items-center text-sm font-medium text-foreground mb-2">
                    <Droplets className="w-4 h-4 mr-2 text-primary" />
                    Irrigation Available
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Yes', 'No'].map((option) => (
                      <motion.button
                        key={option}
                        onClick={() => setIrrigationType(option)}
                        className={`px-4 py-3 rounded-lg border transition-all ${
                          irrigationType === option 
                            ? 'bg-primary text-primary-foreground border-primary' 
                            : 'bg-input border-border text-foreground hover:border-primary/50'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {option}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Previous Crops */}
                <div>
                  <label className="flex items-center text-sm font-medium text-foreground mb-2">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    Previous Crops (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="What did you grow last season?"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <motion.button
                  onClick={handleGetRecommendations}
                  className="btn-hero w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!soilType || !season || !irrigationType}
                >
                  Get AI Recommendations
                </motion.button>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Results */
          <motion.div className="space-y-8" variants={fadeInUp}>
            {/* Results Header */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Your Personalized Recommendations
              </h2>
              <p className="text-muted-foreground">
                Based on your soil type: {soilType}, Season: {season}, Irrigation: {irrigationType}
              </p>
            </div>

            {/* Crop Cards */}
            <div className="grid lg:grid-cols-3 gap-6">
              {cropData.map((crop, index) => (
                <motion.div
                  key={crop.name}
                  className="module-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground">{crop.name}</h3>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      crop.color === 'success' ? 'bg-success/20 text-success' :
                      crop.color === 'primary' ? 'bg-primary/20 text-primary' :
                      'bg-warning/20 text-warning'
                    }`}>
                      {crop.confidence} Confidence
                    </div>
                  </div>

                  {/* Suitability Score */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Suitability</span>
                      <span className="text-sm font-medium text-foreground">{crop.suitability}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div 
                        className={`h-2 rounded-full ${
                          crop.color === 'success' ? 'bg-success' :
                          crop.color === 'primary' ? 'bg-primary' :
                          'bg-warning'
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${crop.suitability}%` }}
                        transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Expected Yield</p>
                      <p className="text-sm font-medium text-foreground">{crop.yield}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Profit</p>
                      <p className="text-sm font-medium text-foreground">{crop.profit}</p>
                    </div>
                  </div>

                  {/* Reasons */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1 text-success" />
                      Why this crop?
                    </h4>
                    <ul className="space-y-1">
                      {crop.reasons.map((reason, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-center">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tips */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2 flex items-center">
                      <Lightbulb className="w-4 h-4 mr-1 text-accent" />
                      Pro Tips
                    </h4>
                    <ul className="space-y-1">
                      {crop.tips.map((tip, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-center">
                          <div className="w-1 h-1 bg-accent rounded-full mr-2" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    className="btn-secondary w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Detailed Guide
                  </motion.button>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => setShowResults(false)}
                className="btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Try Different Inputs
              </motion.button>
              <motion.button
                className="btn-hero"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Chat with AI Assistant
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};