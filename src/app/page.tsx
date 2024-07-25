import Pagina from "@/components/template/Pagina";
import { IconDashboard } from "@tabler/icons-react";
import Link from "next/link";

export default function Inicio() {
  return (
    
    <Pagina>
      <div className="flex flex-col w-full h-96 justify-center items-center">
        <IconDashboard size={100} stroke={0.5} className="text-zinc-500" />
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-black">Olá, usuário!</h1>
          <p className="text-lg text-zinc-400">Seja bem-vindo ao sistema!!!</p>
        </div>
      </div>
    </Pagina>
  );
}
