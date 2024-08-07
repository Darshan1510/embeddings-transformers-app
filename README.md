# Embeddings Transformers App

This project is a web application that allows users to analyze text and get sentiment analysis scores and similarity check using transformer models. The application is built with React and Bootstrap for a responsive and user-friendly interface.

## Live Demo

You can access the live application at: [Embeddings Transformers App](https://embeddings-transformers.netlify.app/)

## Features

- **Text Analysis**: Enter text and get sentiment analysis scores.
- **Text Similarity**: Enter texts and get similarity scores.
- **Responsive Design**: Built with Bootstrap to ensure a responsive and visually appealing interface.
- **Easy to Use**: Simple and intuitive UI for a seamless user experience.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Darshan1510/embeddings-transformers-app.git
    cd embeddings-transformers-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Similarity checker

1. Enter the texts to do the similarity check in the text areas.
2. Click the "Check Similarity Score" button.
3. View the similarity score displayed below the button.

### Sentiment analysis

1. Enter the text you want to analyze in the text area.
2. Click the "Check Sentiment Analysis Score" button.
3. View the sentiment analysis score displayed below the button.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Bootstrap](https://getbootstrap.com/) - A CSS framework for building responsive web pages.
- [Hugging Face Transformers](https://huggingface.co/transformers/) - A library for state-of-the-art natural language processing.

## Project Structure

```
embeddings-transformers-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   └── TextSimilarityChecker.tsx
        └── TextSentimentAnalysis.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```
## Acknowledgments

- Thanks to [Hugging Face](https://huggingface.co/) for their amazing transformers library.
- Thanks to [Bootstrap](https://getbootstrap.com/) for providing the responsive UI framework.

## Contact

If you have any questions or feedback, feel free to reach out.

- GitHub: [Darshan1510](https://github.com/Darshan1510)
- Live Site: [Embeddings Transformers App](https://embeddings-transformers.netlify.app/)

---