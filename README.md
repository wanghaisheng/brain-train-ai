# ZenMelody

Welcome to ZenMelody, an all-in-one platform designed to enrich your meditation practice and guide you on your journey towards inner peace. ZenMelody combines the power of AI with the wisdom of Zen to offer a comprehensive suite of tools for achieving tranquility and mindfulness.

## Features

ZenMelody offers a diverse range of features tailored to enhance your meditation experience:

- **Zen Guide AI**: An AI-generated meditation guide that helps you find peace and tranquility through personalized sessions.
  
![Zen Guide AI](/public/zen-guide-web.png)

- **Zen Music AI**: Experience unique, soothing soundscapes tailored to your mood and meditation needs, crafted by AI.

![Zen Music AI](/public/zen-music-web.png)

- **Zen Quotes**: Get inspired with Zen quotes that bring insights into inner peace and tranquility.

![Zen Quotes](/public/zen-quotes-web.png)

- **Meditation Video**: Access a diverse range of meditation videos that cater to various practices and preferences.

![Meditation Video](/public/zen-video-web.png)

## Built With

ZenMelody is built using cutting-edge technologies to ensure a seamless and enriching user experience:

- [Next.js](https://nextjs.org/) - A React framework for production
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript
- [MySQL](https://planetscale.com/) - A reliable and scalable database service
- [Primsa](https://www.prisma.io/) - Open-source ORM(Object Relational Mapping)
- [OpenAI](https://openai.com/) - Leveraging AI for personalized meditation experiences
- [Replicate](https://replicate.com/) - Leveraging AI for generating meditation music
- [Stripe](https://stripe.com) - Secure payment processing
- [Crisp](https://crisp.chat/en/) - Chatbot for real-time user support and engagement
- [Docker](https://www.docker.com/) - Developing, shipping, and running applications inside lightweight, portable containers
- [GithubActions](https://docs.github.com/en/actions) - CI/CD and automation tool to enable automated testnig
- Hosted on [Vercel](https://vercel.com/) - For effortless deployment and scaling


## Running the App Using Docker

To run ZenMelody using Docker on your local machine, follow these steps:

### Step 1: Clone the ZenMelody repository to your local machine:

```bash
git clone https://repository-url-here.git
```


### Step 2: Set Up Environment Variables
Copy the .env.template file to a new file named .env:

```bash
cp .env.template .env
```
Open the .env file in your text editor and update the credentials and other configuration settings to match your local development environment.

### Step 3: Build the Docker Image

Build the Docker image for ZenMelody

```bash
docker build -t zen-melody .
```

### Step 4: Run the Docker Container
Run the Docker container, specifying the port and the environment file:
```bash
docker run -p 3000:3000 --env-file ./.env zen-melody
```
This command starts the ZenMelody application and binds it to port 3000 on your local machine. The --env-file ./.env option ensures that your Docker container uses the environment variables defined in your .env file.

### Step 5: Accessing the App
With the container running, open your web browser and navigate to http://localhost:3000. You should see the ZenMelody application running.

## Running the app wihtout using Docker

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
