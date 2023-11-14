"use client";
import React from 'react';
import HeaderButton from "./button-header";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-xl px-4 md:px-8 lg:px-16 py-4 md:py-6 sm:flex-row">
      <p className="text-2xl font-bold mb-4 md:text-2xl lg:text-3xl xl:text-4xl md:mb-0 md:mr-4">Portfólio</p>
      <div className="flex flex-row gap-4 md:gap-10">
        <HeaderButton conteudo="Sobre mim" scrollTargetId="sobre-mim" />
        <HeaderButton conteudo="Projetos" scrollTargetId="projetos" />
        <HeaderButton conteudo="Serviços" scrollTargetId="servicos" />
        <HeaderButton conteudo="Minhas skills" scrollTargetId="minhas-skills" />
      </div>
    </div>
  );
}

export default Header;
