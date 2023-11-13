import { useRouter } from 'next/navigation';  // Altere a declaração de importação

const HeaderButton = ({ conteudo, scrollTargetId }: any) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`#${scrollTargetId}`);
  };

  return (
    <button
      className="transition duration-100 hover:opacity-60"
      onClick={handleClick}
    >
      {conteudo}
    </button>
  );
}

export default HeaderButton;
