"use client"
import CardInfos from '@/components/ui/card-infos'
import CardProjects from '@/components/ui/card-projects'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  const handleClick = () => {
      window.open("https://www.linkedin.com/in/isaque-chaves-a591aa141/", '_blank');
  };

  return (
    <div className='pt-12'>
      <section className='px-4 sm:px-8 md:px-16 lg:px-24 xl:px-28 pt-8 md:pt-12 lg:pt-16 flex flex-col md:flex-row justify-between items-center'>
        <div className='flex flex-col gap-4 text-center items-start md:text-left'>
          <h1 className='text-left '>
            Olá, eu sou o <br />Isaque Chaves :)
          </h1>
          <p className='opacity-70 text-base'>
            Desenvolvedor Front-End
          </p>
          <div className='flex justify-center md:justify-start gap-4 mt-4 md:mt-0'>
            <a href="./Isaque Chaves - Currículo.pdf" download>
              <button className='m-0 p-2 md:p-4 bg-green-500 text-black hover:bg-[#171717] hover:text-white'>
              Download CSV
            </button>
            </a>
            <button
                className='m-0 p-2 md:p-4 bg-[#171717] border border-[#333333] hover:bg-green-500 hover:text-black'
                onClick={handleClick}
            >
                Entre em Contato
            </button>
          </div>
        </div>
        <img src="./isaque-img.png" alt="" className='mt-4 md:mt-0' />
      </section>
      <section id='sobre-mim' className='px-4 md:px-8 lg:px-16 xl:px-28 pt-24 flex flex-col items-center gap-10'>
        <h1 className='text-center'>Sobre mim</h1>
        <p className='opacity-70 text-base text-justify px-4 leading-8 md:px-20 md:text-center'>
        Graduado em Sistemas de Informação pela Facimp Wyden, mergulhei de cabeça na paixão pela tecnologia. Minha caixa de ferramentas contém NextJs, ReactJs, Typescript, Tailwind, Styled Components, Go e a metodologia SCRUM. Além disso, possuo um amplo conhecimento em banco de dados relacional (MySQL e PostgreSQL) e não relacional (MongoDB).
        <br />
        Gosto de sempre buscar a evolução, enriquecendo meus conhecimentos para contribuir ainda mais com minha equipe, sempre pronto para ajudar onde for necessário.
        </p>
        <div className='flex flex-col flex-wrap md:flex-row justify-center pt-12 md:justify-around gap-4 md:gap-20 py-8 md:pt-16'>
          <CardInfos
            srcImage="/smile.svg"
            title="Meu Nome"
            subTitle="Isaque Ramos Chaves"
          />
          <CardInfos
            type="link"
            srcImage="/linkedin.svg"
            title="Linkedin"
            subTitle="Ir para linkedin"
            className="p-7"
          />
          <CardInfos
            srcImage="/mail.svg"
            title="E-mail"
            subTitle="isaque.ramosch@gmail.com"
          />
          <CardInfos
            srcImage="/phone.svg"
            title="Telefone"
            subTitle="(91) 99391-1310"
          />
        </div>
      </section>
      <section id='projetos' className='px-28 pt-20 flex flex-col items-center gap-10 md:pt-24'>
        <h1>Projetos</h1>
        <div className='flex flex-wrap items-center justify-center gap-7 xl:w-[1410px]'>
          <Link href="https://irc-store.vercel.app/" target="_blank" rel="noopener noreferrer">
            <CardProjects
              srcImage='/app-ecommerce.png'
              alt=''
              title='IRC Store - (Desktop/Mobile)'
              subTitle='Tecnologias: React, Next.js, NextAuth.js (com login via Google), TypeScript, Prisma, PostgreSQL e Tailwind'
            />
          </Link>
          <Link href="https://ifood-clone-gray.vercel.app/" target="_blank" rel="noopener noreferrer">
            <CardProjects
              srcImage='/ifood.png'
              alt=''
              title='Ifood Clone - (Mobile)'
              subTitle='Tecnologias: React, Next.js, TypeScript, Tailwind, Golang, Gin, Gorm e PostgreSQL'
            />
          </Link>
          <Link href="https://advogado-geovane-benigno.vercel.app/" target="_blank" rel="noopener noreferrer">
            <CardProjects
              srcImage="/geovane-advogado.png"
              alt="advogado"
              title="Advocacia - (Desktop/Mobile)"
              subTitle="Tecnologias: React e TypeScript"
            />
          </Link>
          <Link href="https://github.com/isaquerchaves/z-fit" target="_blank" rel="noopener noreferrer">
            <CardProjects
              srcImage="/zfit.png"
              alt="breve"
              title="ZFit - (Mobile)"
              subTitle="Projeto em desenvolvimento, usando: React, Next.js, TypeScript, Prisma, PostgreSQL e Tailwind"
            />
          </Link>
          <Link href="https://github.com/isaquerchaves/dogs" target="_blank" rel="noopener noreferrer">
            <CardProjects
              srcImage="/dog.png"
              alt="breve"
              title="Dog | Rede Social - (Desktop/Mobile)"
              subTitle="Projeto em desenvolvimento, usando: React, React Router Dom, Typescript e API REST"
            />
          </Link>
          <CardProjects
            srcImage="/em-breve.jpg"
            alt="breve"
            title="Em Breve"
            subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
        </div>
      </section>
      <section id='servicos' className='px-28 pt-24 flex flex-col items-center gap-10 md:pt-20'>
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
        <div className='flex flex-row flex-wrap justify-center gap-10'>
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
          <div className='flex justify-center w-[150px] y-[150px] min-h-[121px] p-5 bg-[#212121] border border-[#333333]'>
            <Image
              src='/react.svg'
              alt='React'
              width={80}
              height={80}
            />
          </div>
          <div className='flex justify-center w-[150px] y-[150px] min-h-[125.6px] p-5 bg-[#212121] border border-[#333333]'>
            <Image
              src='/nextjs.svg'
              alt='Next'
              width={80}
              height={80}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
