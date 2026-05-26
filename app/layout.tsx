import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Krishna Kiran Sristi — Data Scientist & GenAI Engineer',
  description:
    'Data Scientist and GenAI Engineer building production-grade AI systems. Specializing in LLMs, RAG, MLOps, and cloud-based AI solutions using AWS Bedrock and Amazon Q.',
  keywords: [
    'Krishna Kiran Sristi',
    'Data Scientist',
    'Machine Learning Engineer',
    'GenAI Engineer',
    'AI Engineer',
    'MLOps',
    'AWS SageMaker',
    'FastAPI',
    'MLflow',
    'LLMs',
    'LangChain',
    'RAG',
    'Production ML Systems',
    'Cloud Deployment',
    'Serverless Inference',
    'AI Infrastructure',
    'Experiment Tracking',
    'Distributed Systems',
    'NLP',
    'Semantic Search',
    'Deep Learning',
    'Model Deployment',
    'Inference APIs',
    'Portfolio',
  ],
  authors: [{ name: 'Krishna Kiran Sristi' }],
  creator: 'Krishna Kiran Sristi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://krishnakiransristi.com',
    title: 'Krishna Kiran Sristi — Data Scientist & GenAI Engineer',
    description:
      'Building production-grade AI systems. Data Scientist, ML Engineer, GenAI Engineer.',
    siteName: 'Krishna Kiran Sristi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krishna Kiran Sristi — Data Scientist & GenAI Engineer',
    description: 'Building production-grade AI systems.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
