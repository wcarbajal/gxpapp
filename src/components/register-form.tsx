import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RegisterForm( {
  className,
  ...props
}: React.ComponentProps<"div"> ) {
  return (
    <div className={ cn( "flex flex-col gap-6", className ) } { ...props }>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="  hidden md:flex">
            <img
              src="/inicio3.jpeg"
              alt="Image"
              className=" object-contain"
            />
          </div>
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Registrese</h1>
                <p className="text-muted-foreground text-balance">
                  Nuevo de usuario
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="nombre">Nombre</Label>
                <Input
                  id="nombre"
                  type="text"
                  placeholder="Juan Perez"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Re-password</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Registrarse
              </Button>
              
              
              <div className="text-center text-sm">
                Ya tienes una cuenta?{" "}
                <a href="/login" className="underline underline-offset-4">
                  Iniciar sessión
                </a>
              </div>
            </div>
          </form>

        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        Al hacer clic en continuar, aceptas nuestros <a href="#">Terminos de servicios</a>{ " " }
        y <a href="#">Politicas de privacidad</a>.
      </div>
    </div>
  );
}
