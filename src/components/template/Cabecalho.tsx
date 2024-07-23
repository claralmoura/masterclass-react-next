import Logo from "./Logo"
import MenuUsuario from "./MenuUsuario"
export default function Cabecalho() {
    return (
        <header className="flex gap-5 px-5 items-center bg-zinc-800 h-20">
            <Logo/>
            <span className="flex-grow">Cabecalho</span>
            <MenuUsuario/>
        </header>
    )
}