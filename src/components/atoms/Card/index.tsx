import { FC, MouseEventHandler } from 'react'
import Image from 'next/image'
import Button from '../Button'

interface CardPropType {
    imgUrl: string,
    imgAlt: string,
    dateText?: string,
    title: string,
    text: string,
    onClickSeeMore: MouseEventHandler<HTMLButtonElement>,
    type: 'primary' | 'secondary'
}

const Card: FC<CardPropType> = (props) => {
    const { imgUrl, imgAlt, dateText, title, text, onClickSeeMore, type } = props
    return (
        <>
            {
                type === 'primary' && (
                    <div className='w-full shadow-md h-[569px]'>
                        {
                            type === 'primary' && (
                                <div className='flex flex-col rounded-sm h-full bg-white'>
                                    <div className='relative h-[50%]'>
                                        <Image fill alt={imgAlt} src={imgUrl} />
                                    </div>
                                    <div className='h-[50%] flex flex-col justify-between p-4 item-start'>
                                        <div className='flex flex-col gap-2'>
                                            <p className='text-black font-normal text-base'>
                                                {dateText}
                                            </p>
                                            <p className='text-[28px] font-medium'>
                                                {title}
                                            </p>
                                            <p className='text-base font-medium text-black'>
                                                {text}
                                            </p>
                                        </div>
                                        <button className='text-[#0055A6] text-left' onClick={onClickSeeMore}>
                                            Baca Selengkapnya...
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    </div >
                )
            }
            {
                type === 'secondary' && (
                    <div className='h-[423px] w-[423px] relative rounded-xl'>
                        <div className="absolute inset-0 bg-black opacity-50 rounded-xl z-[2]"></div>
                        <Image src={imgUrl} alt={imgAlt} fill />
                        <div className='flex flex-col h-full justify-between'>
                            <div className='flex flex-col gap-2 relative z-[3] p-8'>
                                <p className='text-[40px] text-white font-normal'>
                                    {title}
                                </p>
                                <p className='text-[20px] font-normal text-white'>
                                    {text}
                                </p>
                            </div>
                            <Button className='z-[3] relative w-[203px] m-8' type='primary' text='Selengkapnya' onClick={onClickSeeMore} />
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Card