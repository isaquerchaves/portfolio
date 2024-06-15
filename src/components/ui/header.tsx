"use client"
import React, { useState, useEffect, useRef } from 'react';
import { AlignJustify, X } from 'lucide-react';
import HeaderButton from './button-header';

const Header: React.FC = () => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const [isMdScreenOrLarger, setIsMdScreenOrLarger] = useState<boolean>(false);

    const toggleSidebar = () => {
      setShowSidebar(!showSidebar);
    };
  
    const closeSidebar = () => {
      setShowSidebar(false);
    };

    // Remove Sidebar quando clica fora dele
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
          setShowSidebar(false);
        }
      };
      
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    useEffect(() => {
      // Função para verificar o tamanho da tela e atualizar o estado
      const checkScreenSize = () => {
        const mdScreenOrLarger = window.innerWidth >= 768;
        setIsMdScreenOrLarger(mdScreenOrLarger);
      };
    
      // Verifica o tamanho da tela quando o componente é montado
      checkScreenSize();
    
      // Adiciona um event listener para o evento de redimensionamento da janela
      window.addEventListener('resize', checkScreenSize);
    
      // Remove o event listener quando o componente é desmontado
      return () => {
        window.removeEventListener('resize', checkScreenSize);
      };
    }, []);

    useEffect(() => {
      // Verifica se o código está sendo executado no lado do cliente
      if (typeof window !== 'undefined') {
        const mdScreenOrLarger = window.innerWidth >= 768;
        setIsMdScreenOrLarger(mdScreenOrLarger);
      }
    }, []);

    return (
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#171717] ">
            {isMdScreenOrLarger ? (
              <div className="flex flex-col md:flex-row justify-between items-center text-xl px-4 md:px-8 lg:px-16 py-4 md:py-6 sm:flex-row">
                <p className="text-2xl font-bold mb-4 md:text-2xl lg:text-3xl xl:text-4xl md:mb-0 md:mr-4">Portfólio</p>
                <div className="flex flex-row gap-4 md:gap-10">
                  <HeaderButton conteudo="Sobre mim" scrollTargetId="sobre-mim" />
                  <HeaderButton conteudo="Projetos" scrollTargetId="projetos" />
                  <HeaderButton conteudo="Serviços" scrollTargetId="servicos" />
                  <HeaderButton conteudo="Minhas skills" scrollTargetId="minhas-skills" />
                </div>
              </div>
            ) : (
              <div className="flex flex-row justify-between items-center text-xl px-4 md:px-8 lg:px-16 py-4 md:py-6 ">
                <p className="text-2xl font-bold md:text-2xl lg:text-3xl xl:text-4xl">Portfólio</p>
                <button onClick={toggleSidebar}> <AlignJustify /> </button>
              </div>
            )}

            <div ref={sidebarRef} className={`fixed top-0 right-0 h-full bg-[#212121] text-white w-64 border-l border-gray-600 bg-background shadow-lg transform z-50 ${showSidebar ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
              <div className="flex flex-col gap-6 h-full px-4 py-6 relative">
                <button className="flex justify-end" onClick={closeSidebar}><X color='gray' size={18} /></button>
                <div className="flex flex-col gap-4 md:gap-10">
                  <HeaderButton conteudo="Sobre mim" scrollTargetId="sobre-mim" onClick={toggleSidebar} />
                  <HeaderButton conteudo="Projetos" scrollTargetId="projetos" onClick={toggleSidebar} />
                  <HeaderButton conteudo="Serviços" scrollTargetId="servicos" onClick={toggleSidebar} />
                  <HeaderButton conteudo="Minhas skills" scrollTargetId="minhas-skills" onClick={toggleSidebar} />
                </div>
              </div>
            </div>
          </div>
    );
}

export default Header;
