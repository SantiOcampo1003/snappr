'use client';
import { Typography } from "@material-tailwind/react";

interface AboutProps {
  appName: string;
  description: string;
}

export default async function About() {
  const data = await getData();

  return (
    <div className="container mx-auto p-4">
      <Typography variant="h4" className="mb-4"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        About {data.appName}
      </Typography>
      <Typography className="text-lg"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        {data.description}
      </Typography>
    </div>
  );
}

async function getData(): Promise<AboutProps> {
  // Simulando una llamada a una API para obtener los datos de la aplicación
  const data = {
    appName: "AI Prompt and Image Generator",
    description: `
      Nuestra aplicación está diseñada para aprovechar el poder de la inteligencia artificial mediante la integración con la API de OpenAI.
      Ofrecemos una plataforma interactiva y fácil de usar que permite a los usuarios generar prompts creativos y crear imágenes sorprendentes a partir de esos prompts.
      Nuestro objetivo es proporcionar herramientas avanzadas que permitan la exploración creativa y la automatización de tareas complejas a través de soluciones AI de última generación.
    `
  };
  
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000); // Simula un retraso en la llamada a la API
  });
}
