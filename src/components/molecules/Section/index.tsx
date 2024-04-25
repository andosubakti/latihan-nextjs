import { FC, MouseEventHandler, ReactNode } from 'react'
import Button from '@/components/atoms/Button'

interface SectionPropType {
    name: string,
    title: string,
    onClickSeeAll?: MouseEventHandler<HTMLButtonElement>,
    withSeeAll: boolean,
    children: ReactNode
}

const Section: FC<SectionPropType> = (props) => {
    const { name, title, onClickSeeAll, withSeeAll, children } = props
    return (
        <div className='w-full flex flex-col gap-8'>
            <div className='flex flex-row justify-between items-end'>
                <div className='flex flex-col gap-6'>
                    <p className='border-black border-b-2 w-max py-1 font-semibold'>
                        {name && name.toUpperCase()}
                    </p>
                    <p className='text-[#1D2130] font-semibold text-[46px]'>
                        {title}
                    </p>
                </div>
                {
                    withSeeAll && <Button className='w-[203px]' type="secondary" text='Lihat Semua' onClick={onClickSeeAll ? onClickSeeAll : () => { }} />
                }
            </div>
            <div className='flex flex-row gap-6'>
                {children}
            </div>
        </div>
    )
}

export default Section