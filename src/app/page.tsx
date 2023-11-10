import CardInfos from '@/components/ui/card-infos'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=''>
      <section className='px-28 py-16 flex flex-col justify-between items-center sm:flex-row sm:px-[10%]'>
        <div className='flex flex-col gap-4'>
          <h1 className='font-bold leading-10'>Olá, eu sou o <br />Isaque Chaves :)</h1>
          <p className=' opacity-70 text-xl'>Desenvolvedor Front-End</p>
          <div className='flex justify-around gap-4'>
            <button className='m-0 p-4 bg-green-500 text-black hover:bg-[#171717] hover:text-white'>Download CSV</button>
            <button className='m-0 p-4 bg-[#171717] border border-[#333333] hover:bg-green-500 hover:text-black'>Entre em Contato</button>
          </div>
        </div>
        <img src="./isaque-img.png" alt="" className=''/>
      </section>
      <section className='px-28 p-8 flex flex-col items-center gap-10'>
        <h1 className='font-bold leading-10'>Sobre mim</h1>
        <p className='opacity-70 text-xl text-center px-20 leading-8'>
          Meu nome é Isaque Ramos Chaves, sou formado em Sistemas de Informação pela Facimp Wyden e atualmente atuo como analista de dados na Escola Conquer. No entanto, estou direcionando minha carreira para o campo do Front-End. Possuo experiência em HTML, CSS, JavaScript, TypeScript, React, Next e Tailwind. Estou ansioso para continuar a minha jornada no universo do Front-End, contribuindo com minha paixão pelo design e usabilidade em projetos digitais.
          </p>
        <div className='flex justify-around gap-20 py-16'>
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
    </div>
  )
}
