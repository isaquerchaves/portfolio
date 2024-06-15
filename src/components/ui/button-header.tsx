import { useRouter } from 'next/navigation';

const HeaderButton = ({ conteudo, scrollTargetId, onClick }: any) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`#${scrollTargetId}`);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className="transition duration-100 hover:opacity-60"
      onClick={handleClick}
    >
      {conteudo}
    </button>
  );
};

export default HeaderButton;
