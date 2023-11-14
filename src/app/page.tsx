import CardInfos from '@/components/ui/card-infos'
import CardProjects from '@/components/ui/card-projects'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className=''>
      <section className='px-4 sm:px-8 md:px-16 lg:px-24 xl:px-28 py-8 md:py-12 lg:py-16 xl:py-20 flex flex-col md:flex-row justify-between items-center'>
        <div className='flex flex-col gap-4 text-center items-start md:text-left'>
          <h1 className='text-left '>
            Olá, eu sou o <br />Isaque Chaves :)
          </h1>
          <p className='opacity-70 text-base'>
            Desenvolvedor Front-End
          </p>
          <div className='flex justify-center md:justify-start gap-4 mt-4 md:mt-0'>
            <button className='m-0 p-2 md:p-4 bg-green-500 text-black hover:bg-[#171717] hover:text-white'>
              Download CSV
            </button>
            <button className='m-0 p-2 md:p-4 bg-[#171717] border border-[#333333] hover:bg-green-500 hover:text-black'>
              Entre em Contato
            </button>
          </div>
        </div>
        <img src="./isaque-img.png" alt="" className='mt-4 md:mt-0' />
      </section>
      <section id='sobre-mim' className='px-4 md:px-8 lg:px-16 xl:px-28 pt-8 flex flex-col items-center gap-10'>
        <h1 className='text-center'>Sobre mim</h1>
        <p className='opacity-70 text-base text-center px-4 md:px-20 leading-8'>
          Meu nome é Isaque Ramos Chaves, sou formado em Sistemas de Informação pela Facimp Wyden e atualmente atuo como analista de dados na Escola Conquer. No entanto, estou direcionando minha carreira para o campo do Front-End. Possuo experiência em HTML, CSS, JavaScript, TypeScript, React, Next e Tailwind. Estou ansioso para continuar a minha jornada no universo do Front-End, contribuindo com minha paixão pelo design e usabilidade em projetos digitais.
        </p>
        <div className='flex flex-col flex-wrap md:flex-row justify-center md:justify-around gap-4 md:gap-20 py-8 md:py-16'>
          <CardInfos
            srcImage="/smile.svg"
            title="Meu Nome"
            subTitle="Isaque Ramos Chaves"
          />
          <CardInfos
            srcImage="/mail.svg"
            title="E-mail"
            subTitle="isaque.ramosch@gmail.com"
          />
          <CardInfos
            srcImage="/instagram.svg"
            title="Instagram"
            subTitle="@isaquechaves_"
          />
          <CardInfos
            srcImage="/phone.svg"
            title="Telefone"
            subTitle="(91) 99391-1310"
          />
        </div>
      </section>
      <section id='projetos' className='px-28 pt-8 flex flex-col items-center gap-10'>
        <h1>Projetos</h1>
        <div className='flex flex-wrap items-center justify-center gap-7 xl:w-[1410px]'>
          <Link href="https://github.com/isaquerchaves/IRC-Store" target="_blank" rel="noopener noreferrer">
            <CardProjects
              srcImage='/app-ecommerce.png'
              alt=''
              title='App de E-Commerce'
              subTitle='Tecnologias: React, Next.js, NextAuth.js (com login via Google), TypeScript, Prisma, PostgreSQL, Tailwind e Stripe'
            />
          </Link>
          <CardProjects
            srcImage="/em-breve.jpg"
            alt="breve"
            title="Lorem Ipsum"
            subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry." l
          />
          <CardProjects
            srcImage="/em-breve.jpg"
            alt="breve"
            title="Lorem Ipsum"
            subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry." l
          />
          <CardProjects
            srcImage="/em-breve.jpg"
            alt="breve"
            title="Lorem Ipsum"
            subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry." l
          />
          <CardProjects
            srcImage="/em-breve.jpg"
            alt="breve"
            title="Lorem Ipsum"
            subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry." l
          />
          <CardProjects
            srcImage="/em-breve.jpg"
            alt="breve"
            title="Lorem Ipsum"
            subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry." l
          />
        </div>
      </section>
      <section id='servicos' className='px-28 pt-20 flex flex-col items-center gap-10'>
        <h1>Serviços</h1>
        <div className='flex flex-row justify-around gap-10 flex-wrap'>
          <div className='service'>
            <Image
              src="/criacao-sites.svg"
              width={56}
              height={56}
              alt=''
              className='py-3'
            />
            <p className=' font-semibold text-3xl leading-10 mr-36 opacity-70'>Criação <br />de sites</p>
          </div>
          <div className='service'>
            <Image
              src="/figma.svg"
              width={56}
              height={56}
              alt=''
              className='py-3'
            />
            <p className=' font-semibold text-3xl leading-10 mr-36 opacity-70'>UX <br />Designer</p>
          </div>
          <div className='service'>
            <Image
              src="/smartphone.svg"
              width={56}
              height={56}
              alt=''
              className='py-3'
            />
            <p className=' font-semibold text-3xl leading-10 mr-36 opacity-70'>Sites <br />Responsivos</p>
          </div>
        </div>
      </section>
      <section id='minhas-skills' className='px-28 py-20 flex flex-col items-center gap-10'>
        <h1>Minhas Skills</h1>
        <div className='flex flex-row flex-wrap justify-between gap-10'>
          <div className='flex justify-center w-[150px] y-[150px] p-5 bg-[#212121] border border-[#333333]'>
            <Image
              src='/html.svg'
              alt='HTML'
              width={80}
              height={80}
            />
          </div>
          <div className='flex justify-center w-[150px] y-[150px] p-5 bg-[#212121] border border-[#333333]'>
            <Image
              src='/css.svg'
              alt='CSS'
              width={80}
              height={80}
            />
          </div>
          <div className='flex justify-center w-[150px] y-[150px] p-5 bg-[#212121] border border-[#333333]'>
            <Image
              src='/js.svg'
              alt='JavaScript'
              width={80}
              height={80}
            />
          </div>
          <div className='flex justify-center w-[150px] y-[150px] p-5 bg-[#212121] border border-[#333333]'>
            <Image
              src='/tailwind.svg'
              alt='Tailwind'
              width={80}
              height={80}
            />
          </div>
          <div className='flex justify-center w-[150px] y-[150px] p-5 bg-[#212121] border border-[#333333]'>
            <Image
              src='/react.svg'
              alt='React'
              width={80}
              height={80}
            />
          </div>
          <div className='flex justify-center w-[150px] y-[150px] p-5 bg-[#212121] border border-[#333333]'>
            <Image
              src='/next.png'
              alt='Next'
              width={80}
              height={48}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
