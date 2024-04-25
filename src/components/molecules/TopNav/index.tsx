import { FC } from 'react'
import Image from 'next/image'
import Button from '@/components/atoms/Button'

const topNavData = [
    {
        name: 'Layanan Publik',
        url: 'https://google.com'
    },
    {
        name: 'Data Statistik',
        url: 'https://google.com'
    },
    {
        name: 'Galeri',
        url: 'https://google.com'
    },
    {
        name: 'Sekilas Info',
        url: 'https://google.com'
    },
    {
        name: 'Pemerintah',
        url: 'https://google.com'
    }
]

const TopNav: FC = () => {
    return (
        <nav className='h-[87px] w-screen bg-white flex flex-row justify-between fixed py-4 px-10 z-[100]'>
            <div className='flex flex-row gap-1 items-center w-[200px]'>
                <Image src='/img/logo.png' height={63} width={51} alt='logo' />
                <div className='text-base font-medium'>
                    PEMERINTAH LOMBOK BARAT
                </div>
            </div>
            <div className='flex flex-row gap-10'>
                {
                    topNavData.map((item, index) => {
                        return (
                            <button key={index} onClick={() => window.location.href = item.url}>
                                {item.name}
                            </button>
                        )
                    })
                }
            </div>
            <Button className='w-[203px]' type='secondary' text='Pengaduan' onClick={() => console.log('on click pengaduan')} />
        </nav>
    )
}

export default TopNav