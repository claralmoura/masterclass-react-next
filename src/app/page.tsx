import Link from "next/link";

export default function Inicio() {
  return (
    <div
      className="
      min-h-screen
        bg-gradient-to-r from-black to-zinc-800
      "
    >
      <h1 className="font-black">Masterclass Next</h1>
      <nav className="flex flex-col">
        <Link href="/primeiro">Primeiro Componente</Link>
        <Link href="/flexbox">Componente Flexbox</Link>
        <Link href="/pagina">Componente Página</Link>
      </nav>
    </div>
  );
}
