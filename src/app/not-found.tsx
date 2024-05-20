'use client';
import { Button, Typography } from "@material-tailwind/react";
import Link from 'next/link';

export default function Custom404() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="text-center">
                <Typography color="red" className="text-7xl mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    404
                </Typography>
                <Typography color="blue-gray" className="text-2xl mb-8" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Página no encontrada
                </Typography>
                <Link href="/">
                    <Button color="blue" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Volver a inicio</Button>
                </Link>
            </div>
        </div>
    );
}
