"use client"
import React from 'react';
import HeaderButton from "./button-header";

const Header = () => {
  return (
    <div className="flex flex-row justify-between text-xl px-28 py-6">
      <p className="text-2xl font-bold">Portfólio</p>
      <div className="flex flex-row gap-10">
        <HeaderButton conteudo="Sobre mim" scrollTargetId="sobre-mim"/>
        <HeaderButton conteudo="Projetos" scrollTargetId="projetos" />
        <HeaderButton conteudo="Serviços" scrollTargetId="servicos"/>
        <HeaderButton conteudo="Minhas skills" scrollTargetId="minhas-skills"/>
      </div>
    </div>
  );
}

export default Header;
