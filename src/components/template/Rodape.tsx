import { IconHeartFilled } from "@tabler/icons-react"

export default function Rodape() {
    return(
        <footer>
            <div className="flex justify-end items-center gap-2 text-zinc-400 text-sm p-4 bg-zinc-700 p-4">
                <span>Desenvolvido com</span>
                <IconHeartFilled size={18} className="text-red-500"/>
                <span>por Clara - { new Date().getFullYear() }</span>
            </div>
        </footer>
    )
}