import { FormEvent, useState } from "react";
import { pipeline } from "@xenova/transformers";

const TextSentimentAnalysis = () => {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState<any>([]);

  const handleButtonClick = async (e: FormEvent) => {
    e.preventDefault();
    let classifier = await pipeline("sentiment-analysis");

    let result = await classifier(text);
    setSentiment(result);
  };

  return (
    <div className="mt-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Sentiment Analysis</h3>
              <div>
                <form className="mb-3" onSubmit={(e: FormEvent) => handleButtonClick(e)}>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows={5}
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Enter text here..."
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Check Sentiment Analysis Score
                  </button>
                </form>
              </div>
              {sentiment && sentiment.length > 0 && (
                <div className="mt-3">
                  <h6>Analysis Score:</h6>
                  <p>
                    {sentiment.map((item: any) => {
                      return `${item.label} : ${item.score}`;
                    })}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSentimentAnalysis;
