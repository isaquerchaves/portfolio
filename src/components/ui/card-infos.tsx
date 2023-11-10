import Image from 'next/image'

const CardInfos = ({srcImage, title,subTitle}: any) => {
    return ( 
        <div className='flex flex-col items-center gap-1 h-[170px] w-[170px]'>
            <Image 
              src={srcImage}
              alt="felicidade"
              width={0}
              height={0}
              sizes="100vw"
              className=" h-24 max-h-[100%] w-24 max-w-[100%] bg-[#212121] p-5 rounded-full"
              style={{
                objectFit: 'contain'
            }}
            />
            <h5 className='font-bold'>{title}</h5>
            <p className='opacity-70'>{subTitle}</p>
          </div>
     );
}
 
export default CardInfos;