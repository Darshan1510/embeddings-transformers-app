import "./App.css";
import TextSentimentAnalysis from "./TextSentimentAnalysis";
import TextSimilarityChecker from "./TextSimilarityChecker";

function App() {
  return (
    <div>
      <TextSimilarityChecker />
      <TextSentimentAnalysis />
    </div>
  );
}

export default App;
