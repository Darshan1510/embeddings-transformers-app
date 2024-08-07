import { FormEvent, useState } from "react";
import { pipeline, env, DataArray } from "@xenova/transformers";

env.allowLocalModels = false;
env.useBrowserCache = false;

const TextSimilarityChecker = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [dotProductSimilarity, setDotProductSimilarity] = useState<string>("");
  const [cosineSimilarityScore, setCosineSimilarityScore] = useState<string>("");

  const handleCheckSimilarity = async (e: FormEvent) => {
    e.preventDefault();

    let generateEmbeddings = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");

    const result1 = await generateEmbeddings(text1, { pooling: "mean", normalize: true });
    const result2 = await generateEmbeddings(text2, { pooling: "mean", normalize: true });

    const dotProductSimilarity = dotProduct(result1.data, result2.data);
    const cosineSimilarityScore = cosineSimilarity(result1.data, result2.data);
    setCosineSimilarityScore(cosineSimilarityScore.toPrecision(4));
    setDotProductSimilarity(dotProductSimilarity.toPrecision(4));
  };

  const dotProduct = (vector1: DataArray, vector2: DataArray) => {
    if (vector1.length !== vector2.length) {
      throw new Error("Vectors must have the same length");
    }

    let result = 0;
    for (let i = 0; i < vector1.length; i++) {
      result += vector1[i] * vector2[i];
    }
    return result;
  };

  // Function to calculate the magnitude (norm) of a vector
  const magnitude = (vector: DataArray): number => {
    let sum = 0;
    for (const value of vector) {
      sum += value * value;
    }
    return Math.sqrt(sum);
  };

  // Function to calculate the cosine similarity between two vectors
  const cosineSimilarity = (vector1: DataArray, vector2: DataArray): number => {
    const dotProd = dotProduct(vector1, vector2);
    const mag1 = magnitude(vector1);
    const mag2 = magnitude(vector2);

    if (mag1 === 0 || mag2 === 0) {
      throw new Error("Magnitude of a vector must not be zero");
    }

    return dotProd / (mag1 * mag2);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Text Similarity Checker</h1>
      <form className="mb-4" onSubmit={(e: FormEvent) => handleCheckSimilarity(e)}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <textarea
              className="form-control"
              required
              rows={10}
              value={text1}
              onChange={(e) => setText1(e.target.value)}
              placeholder="Enter first text here..."
            />
          </div>
          <div className="col-md-6 mb-3">
            <textarea
              className="form-control"
              required
              rows={10}
              value={text2}
              onChange={(e) => setText2(e.target.value)}
              placeholder="Enter second text here..."
            />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Check Similarity Score
          </button>
        </div>
      </form>
      {dotProductSimilarity !== null && dotProductSimilarity !== "" && (
        <div className="mt-4 text-center">
          <h2>Dot product similarity Score: {dotProductSimilarity}</h2>
        </div>
      )}
      {cosineSimilarityScore !== null && cosineSimilarityScore !== "" && (
        <div className="mt-4 text-center">
          <h2>Cosine similarity Score: {cosineSimilarityScore}</h2>
        </div>
      )}
    </div>
  );
};

export default TextSimilarityChecker;
