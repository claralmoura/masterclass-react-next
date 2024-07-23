export default function Caixa(props: any) {
    return (
        <div
            className={`
                flex justify-center
                bg-red-700 rounded-md p-3
                border-2 border-zinc-300
                ${props.className}
            `}
        >
            <span>{ props.texto }</span>
        </div>
    )
}