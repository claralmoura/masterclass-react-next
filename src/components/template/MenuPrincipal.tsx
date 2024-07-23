import Link from "next/link"
import MenuItem from "./MenuItem"

export default function MenuPrincipal() {
    return (
        <aside className="w-80 bg-zinc-900">
           <nav className="flex flex-col p-5 gap-1">
                <MenuItem link="/primeiro">Primeiro Componente</MenuItem>
                <MenuItem link="/flexbox">Flexbox</MenuItem>
                <MenuItem link="/pagina">Componente Página</MenuItem>
            </nav>
        </aside>
    )
}