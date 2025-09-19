import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Send, 
  Mic, 
  MicOff, 
  Bot, 
  User,
  Volume2,
  VolumeX,
  Lightbulb,
  Sprout,
  CloudRain,
  TrendingUp
} from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  suggestions?: string[];
}

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const quickSuggestions = [
  {
    icon: Sprout,
    text: "What crops should I grow this season?",
    color: "text-primary"
  },
  {
    icon: CloudRain,
    text: "Will it rain this week?",
    color: "text-secondary"
  },
  {
    icon: TrendingUp,
    text: "What are the current market prices?",
    color: "text-accent"
  },
  {
    icon: Lightbulb,
    text: "How to improve soil health?",
    color: "text-warning"
  }
];

export const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI farming assistant. I can help you with crop recommendations, weather insights, market prices, and farming best practices. How can I help you today?",
      sender: 'ai',
      timestamp: new Date(),
      suggestions: [
        "Show crop recommendations",
        "Check weather forecast",
        "Market price trends",
        "Soil health tips"
      ]
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputText),
        sender: 'ai',
        timestamp: new Date(),
        suggestions: getResponseSuggestions(inputText)
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const getAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('crop') || lowerInput.includes('grow')) {
      return "Based on your location and current season, I recommend Rice and Wheat. Rice has 95% suitability with expected yield of 4.5 tonnes/hectare. The soil conditions are perfect, and market prices are trending upward at ₹2,850/quintal.";
    }
    
    if (lowerInput.includes('weather') || lowerInput.includes('rain')) {
      return "The weather forecast shows partly cloudy conditions with 28°C temperature. Rain is expected in 2 days with 80% probability. I recommend postponing irrigation and considering harvesting any ready crops before the rain.";
    }
    
    if (lowerInput.includes('price') || lowerInput.includes('market')) {
      return "Current market prices: Rice ₹2,850/quintal (↑15%), Wheat ₹2,100/quintal (stable), Corn ₹1,950/quintal (↓5%). Rice prices are trending up due to good export demand. This is a good time to sell rice if you have stock.";
    }
    
    if (lowerInput.includes('soil') || lowerInput.includes('health')) {
      return "To improve soil health: 1) Add organic compost regularly, 2) Practice crop rotation, 3) Use cover crops during off-season, 4) Reduce chemical fertilizer usage, 5) Test soil pH annually. Would you like specific recommendations for your soil type?";
    }
    
    return "I understand your question. Let me provide you with the best advice based on current conditions and agricultural best practices. Feel free to ask more specific questions about crops, weather, or farming techniques!";
  };

  const getResponseSuggestions = (input: string): string[] => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('crop')) {
      return ["Tell me more about rice cultivation", "What about fertilizer requirements?", "When should I plant?"];
    }
    
    if (lowerInput.includes('weather')) {
      return ["Set up weather alerts", "How does rain affect my crops?", "Best time for spraying?"];
    }
    
    if (lowerInput.includes('price')) {
      return ["Price predictions for next month", "How to get better prices?", "Storage recommendations"];
    }
    
    return ["Tell me more", "Any other suggestions?", "What's next?"];
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion);
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    // Implement speech recognition here
  };

  const toggleSpeech = () => {
    setIsSpeaking(!isSpeaking);
    // Implement text-to-speech here
  };

  return (
    <motion.div 
      className="min-h-screen pt-24 lg:pt-32 pb-20 lg:pb-8 px-4 lg:px-8"
      initial="initial"
      animate="animate"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-8" variants={fadeInUp}>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            AI Assistant
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get instant answers to your farming questions with voice support
          </p>
        </motion.div>

        {/* Chat Container */}
        <motion.div className="module-card h-[600px] flex flex-col" variants={fadeInUp}>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-3 max-w-[80%] ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-secondary-foreground'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4" />
                    )}
                  </div>

                  {/* Message Content */}
                  <div className={`rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card border border-card-border'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                    
                    {/* AI Message Suggestions */}
                    {message.sender === 'ai' && message.suggestions && (
                      <div className="mt-3 space-y-2">
                        {message.suggestions.map((suggestion, index) => (
                          <motion.button
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="block w-full text-left text-xs px-3 py-2 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {suggestion}
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Timestamp */}
                  <div className="text-xs text-muted-foreground mt-2">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-border p-4">
            {/* Quick Suggestions */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
              {quickSuggestions.map((suggestion, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion.text)}
                  className="btn-secondary text-left p-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <suggestion.icon className={`w-4 h-4 mb-1 ${suggestion.color}`} />
                  <p className="text-xs">{suggestion.text}</p>
                </motion.button>
              ))}
            </div>

            {/* Input Field */}
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything about farming..."
                  className="w-full px-4 py-3 pr-12 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <motion.button
                  onClick={toggleListening}
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full ${
                    isListening ? 'bg-destructive text-destructive-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </motion.button>
              </div>

              <motion.button
                onClick={toggleSpeech}
                className={`p-3 rounded-lg ${
                  isSpeaking ? 'bg-warning text-warning-foreground' : 'btn-secondary'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </motion.button>

              <motion.button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="btn-hero p-3 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: inputText.trim() ? 1.05 : 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-4 h-4" />
              </motion.button>
            </div>

            <p className="text-xs text-muted-foreground mt-2 text-center">
              Ask in English, Hindi, or your local language • Voice supported
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};