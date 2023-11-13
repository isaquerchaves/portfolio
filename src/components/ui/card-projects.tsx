import Image from 'next/image'

const CardProjects = ({ srcImage, alt, title, subTitle }: any) => {
    return (
        <div className='flex flex-col items-center gap-1 bg-[#212121] p-4 h-[300px] w-[400px]'>
            <Image
                src={srcImage}
                alt={alt}
                height={130}
                width={300}
                className='max-h-[100%] max-w-[100%]'
            />
            <div className='flex flex-col items-start'>
                <h5>{title}</h5>
                <p className='opacity-70'>{subTitle}</p>
            </div>
        </div>
    );
}

export default CardProjects;