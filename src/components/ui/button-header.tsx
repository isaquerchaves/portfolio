const HeaderButton = ({ conteudo }: any) => {
    return (
        <button
            className="transition duration-100 hover:opacity-60"
        >
            {conteudo}
        </button>
    );
}

export default HeaderButton;