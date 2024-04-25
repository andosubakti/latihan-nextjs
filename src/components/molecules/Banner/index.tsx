import { FC } from 'react'
import Image from 'next/image'
import Button from '@/components/atoms/Button'

interface BannerPropsType {
    imgUrl: string,
    bannerTitle: string
}

const Banner: FC<BannerPropsType> = (props) => {
    const { imgUrl, bannerTitle } = props
    return (
        <div className='h-[800px] w-screen flex flex-col items-center justify-center relative'>
            <Image src={imgUrl} alt='banner-img' fill className='z-[-1]' />
            <p className='text-[64px] text-center text-white max-w-[888px] font-semibold'>{bannerTitle}</p>
            <div className='flex flex-row gap-4'>
                <Button
                    text='Jelajah'
                    onClick={() => console.log('onclick button jelajah')}
                    type='primary'
                    className='w-[204px]'
                />
                <Button
                    text='Informasi & Layanan'
                    onClick={() => console.log('onclick button informasi & layanan')}
                    type='transparent'
                    className='w-[204px]'
                />
            </div>
        </div>
    )
}

export default Banner