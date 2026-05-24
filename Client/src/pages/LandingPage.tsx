import { Card, Title, Text, Button } from "@tremor/react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
      <Card className="max-w-md text-center p-6">
        <Title>Bienvenido a Heleani</Title>
        <Text  className= "mt-4">Su mascota es nuestra mayor prioridad</Text>
        <Text className= "mt-4">Mantega a su querida mascota feliz y saludable manteniendo toda su información médica, consejos de salud y el contacto de veterinarios confiables al alcance de su mano</Text>
        <div className="mt-6 flex justify-center gap-4">
          <Button variant="primary">Iniciar sesión</Button>
          <Button variant="secondary">Registrarse</Button>
        </div>
      </Card>
    </div>
  );
}