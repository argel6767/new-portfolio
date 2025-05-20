export interface ModalProps {
    children?: React.ReactNode,
    onMouseOver?: () => void,
    onClick?: () => void,
}

export const Modal = ({ children, onMouseOver, onClick }: ModalProps) => {
    return (
        <div className="absolute inset-0 flex bg-opacity-50 items-center justify-center z-10 "
             onClick={onClick} onMouseOver={onMouseOver}>
            <div
                className="relative p-6 rounded-xl shadow-lg flex flex-col gap-5 bg-slate-100 w-10/12 max-h-full justify-center overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
                onMouseOver={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}