import { Card, Title, TextInput, Button } from "@tremor/react";

export default function SignupForm() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <Card className="w-96 p-6">
                <Title>Crear cuenta</Title>
                <form className="flex flex-col gap-4 mt-4">
                    <TextInput placeholder="Nombre completo" />
                    <TextInput placeholder="Correo electrónico" type="email" />
                    <TextInput placeholder="Contraseña" type="password" />
                    <Button variant="primary">Registrarse</Button>
                </form>
            </Card>
        </div>
    );
}