import { FC, MouseEventHandler } from 'react'
import clsx from 'clsx'


interface ButtonPropsType {
    type: 'primary' | 'secondary' | 'transparent',
    text: string,
    onClick: MouseEventHandler<HTMLButtonElement>,
    className?: string
}

const Button: FC<ButtonPropsType> = (props) => {
    const { text, type, className, onClick } = props
    return (
        <button
            className={clsx([
                'py-4 font-medium text-base',
                type === 'primary' && 'bg-white text-black',
                type === 'transparent' && 'bg-transparent text-white border-white border-[1px] border-solid',
                type === 'secondary' && 'bg-[#0055A6] text-white',
                className
            ])}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button