import Image from 'next/image'

const CardInfos = ({srcImage, title,subTitle, className, type}: any) => {
    if (type  === 'link')
      return ( 
        <div className="flex flex-col items-center gap-1 h-[170px] w-[170px]">
            <Image 
              src={srcImage}
              alt="img"
              width={0}
              height={0}
              sizes="100vw"
              className={`h-28 w-28 bg-[#212121] p-5 rounded-full overflow-visible ${className}`}
              style={{
                objectFit: 'contain'
            }}
            />
            <h5 className='font-bold'>{title}</h5>
            <a href="https://www.linkedin.com/in/isaque-chaves-a591aa141/" target='blank'>
            <p className='opacity-70'>{subTitle}</p>
            </a>
          </div>
     );

    return ( 
        <div className="flex flex-col items-center gap-1 h-[170px] w-[170px]">
            <Image 
              src={srcImage}
              alt="img"
              width={0}
              height={0}
              sizes="100vw"
              className="h-28 w-28 bg-[#212121] p-5 rounded-full overflow-visible"
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