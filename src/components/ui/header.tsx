import HeaderButton from "./button-header";

const Header = () => {
    return (
        <div className="flex flex-row justify-between text-xl px-28 py-6">
            <p className="text-2xl font-bold">Portfólio</p>
            <div className="flex flex-row gap-10">
                <HeaderButton conteudo="Sobre mim" />
                <HeaderButton conteudo="Projetos" />
                <HeaderButton conteudo="Serviços" />
                <HeaderButton conteudo="Minhas skils" />
            </div >
        </div>
    );
}

export default Header;