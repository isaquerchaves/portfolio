import Image from 'next/image'

const CardProjects = ({ srcImage, alt, title, subTitle }: any) => {
    return (
        <div className='flex flex-col items-center gap-1 bg-[#212121] p-4 h-[350px] w-[400px]'>
            <div className='h-[200px] w-[300px]'>
                <Image
                src={srcImage}
                alt={alt}
                height={200}
                width={300}
                sizes="100vw"
                className='max-h-[100%] max-w-[100%] h-[100%] w-[100%]'
                style={{
                    objectFit: "contain",
                  }}
            />
            </div>
            
            <div className='flex flex-col items-start '>
                <h5>{title}</h5>
                <p className='opacity-70'>{subTitle}</p>
            </div>
        </div>
    );
}

export default CardProjects;