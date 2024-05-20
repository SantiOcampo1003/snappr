'use client';
import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";

interface AboutProps {
  appName: string;
  description: string;
}

export default async function About() {
  const data = await getData();

  return (
    <div className="container mx-auto p-4">
      <Typography variant="h4" className="mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        About {data.appName}
      </Typography>
      <Typography className="text-lg" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        {data.description}
      </Typography>
      <Link href="/">
        <Button color="blue" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Volver a inicio</Button>
      </Link>
    </div>
  );
}

async function getData(): Promise<AboutProps> {
  // Simulando una llamada a una API para obtener los datos de la aplicación
  const data = {
    appName: "AI Prompt and Image Generator",
    description: `
    Our application, crafted as part of a technical assessment, is built on cutting-edge technologies to deliver an exceptional experience. We leverage Next.js, a highly efficient React framework that empowers us to build modern web applications with optimal performance and integrated SEO right out of the box.

    For styling, we embrace Tailwind CSS, coupled with the powerful Material Tailwind framework for an even richer and more flexible design experience. This combination allows us to create attractive and highly customizable user interfaces efficiently, with a focus on usability and accessibility.
    
    Furthermore, we integrate the Vercel SDK to ensure seamless connection with our APIs. This provides us with a robust and scalable infrastructure to handle user requests efficiently and reliably.
    
    At the core of our application lies integration with the OpenAI API, which we harness to power creative content generation. This enables us to offer our users the ability to generate innovative prompts and transform them into stunning images using cutting-edge artificial intelligence technologies.
    `
  };

  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000); // Simula un retraso en la llamada a la API
  });
}
