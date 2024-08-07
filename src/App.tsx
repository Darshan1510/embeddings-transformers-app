import "./App.css";
import TextSentimentAnalysis from "./components/TextSentimentAnalysis";
import TextSimilarityChecker from "./components/TextSimilarityChecker";

function App() {
  return (
    <div>
      <TextSimilarityChecker />
      <TextSentimentAnalysis />
    </div>
  );
}

export default App;
