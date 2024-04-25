import { FC, MouseEventHandler } from 'react'
import Image from 'next/image'

interface CategoryPropType {
    imgUrl: string,
    onClick: MouseEventHandler<HTMLButtonElement>,
    text: string,
    alt: string
}

const Category: FC<CategoryPropType> = (props) => {
    const { imgUrl, onClick, text, alt } = props
    return (
        <button className='flex flex-col gap-4 items-center' onClick={onClick}>
            <Image width={105} height={101} src={imgUrl} alt={alt} />
            <p>{text}</p>
        </button>
    )
}

export default Category