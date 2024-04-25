"use client"
import Banner from "@/components/molecules/Banner";
import Category from "@/components/atoms/Category";
import { categoryData } from "@/utils/staticVariable";
import Section from "@/components/molecules/Section";
import Card from "@/components/atoms/Card";
import TopNav from "@/components/molecules/TopNav";

export default function Home() {
  const onClickCategory = (url: string) => {
    window.location.href = url
  }

  const mocakDataBeritaAktual = [
    {
      src: '/img/card-1.png',
      alt: 'card-1',
      date: '12 Februari 2023',
      title: 'Lorem Ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non convallis ex, semper sodales turpis. Maecenas eu turpis volutpat, venenatis ipsum id.',
      permalink: 'https://google.com'
    },
    {
      src: '/img/card-2.png',
      alt: 'card-2',
      date: '12 Februari 2023',
      title: 'Lorem Ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non convallis ex, semper sodales turpis. Maecenas eu turpis volutpat, venenatis ipsum id.',
      permalink: 'https://google.com'
    },
    {
      src: '/img/card-3.png',
      alt: 'card-3',
      date: '12 Februari 2023',
      title: 'Lorem Ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non convallis ex, semper sodales turpis. Maecenas eu turpis volutpat, venenatis ipsum id.',
      permalink: 'https://google.com'
    },
  ]

  const mocakDataWisataAlam = [
    {
      src: '/img/card-4.png',
      alt: 'card-1',
      title: 'Pantai Mekaki',
      text: 'Pantai Mekaki terletak di ujung selatan barat pulau Kecil Lombok.',
      permalink: 'https://google.com'
    },
    {
      src: '/img/card-5.png',
      alt: 'card-2',
      date: '12 Februari 2023',
      title: 'Narmada Park',
      text: 'Taman Narmada terletak di Desa Lembuak, Kecamatan Narmada, Kabupaten Lombok Barat.',
      permalink: 'https://google.com'
    },
    {
      src: '/img/card-6.png',
      alt: 'card-3',
      date: '12 Februari 2023',
      title: 'Wisata Alam Aikneyt',
      text: 'bjek wisata Aik Nyet Sesaot ialah salah satu wisata alam yang meyuguhkan pemandian umum yang bernuansa hutan wisata.',
      permalink: 'https://google.com'
    },
  ]
  return (
    <main className="flex min-h-screen flex-col w-screen items-center justify-start gap-20 px-20 pb-20">
      <TopNav />
      <Banner imgUrl="/img/Banner-1.png" bannerTitle="Bangkit dan Produktif Untuk Lombok Barat Mantap" />
      <div className="flex flex-row justify-between w-full">
        {
          categoryData.length > 0 &&
          categoryData.map((item, index) => {
            return (
              <div key={index}>
                <Category text={item.label} imgUrl={item.img} alt="lpse" onClick={() => onClickCategory(item.permalink)} />
              </div>)
          })
        }
      </div>
      <Section
        name="Berita Aktual"
        title="Pusat Media Pemerintah Kabupaten Lombok Barat"
        onClickSeeAll={() => console.log('on click see all')}
        withSeeAll
      >
        {
          mocakDataBeritaAktual.length > 0 && mocakDataBeritaAktual.map((item, index) => {
            return (
              <div key={index}>
                <Card
                  imgUrl={item.src}
                  imgAlt={item.alt}
                  dateText={item.date}
                  title={item.title}
                  text={item.text}
                  onClickSeeMore={() => window.location.href = item.permalink}
                  type='primary'
                />
              </div>
            )
          })
        }
      </Section>
      <Section
        name="Wisata Alam"
        title="Wisata Lombok Barat"
        withSeeAll={false}
      >
        {
          mocakDataWisataAlam.length > 0 && mocakDataWisataAlam.map((item, index) => {
            return (
              <div key={index}>
                <Card
                  imgUrl={item.src}
                  imgAlt={item.alt}
                  title={item.title}
                  text={item.text}
                  onClickSeeMore={() => window.location.href = item.permalink}
                  type="secondary"
                />
              </div>
            )
          })
        }
      </Section>
    </main>
  );
}
