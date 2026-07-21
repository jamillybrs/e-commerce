import { Component } from '@angular/core';
import{ Produto } from '../produto/produto';
import{ signal } from '@angular/core';
import { computed } from '@angular/core';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { effect } from '@angular/core'; //adicionado 17/07
import { UpperCasePipe } from '@angular/common'; //adicionado 17/07

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, PrecoFormatadoPipe, UpperCasePipe],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
//lista de produtos 16/07-array lista de dados
export class ListaProdutos {
  produtos = signal([
    {nome:'Teclado Gamer', preco:229.99},
    {nome:'Mouse Gamer', preco:129.99},
    {nome:'Monitor Gamer', preco:2000}
  ]);
  //função para produtos selecionados
  exibirProduto(nome: string){
    console.log('Produto Selecionado: ', nome);
    this.produtoSelecionado.set(nome); //17/07
  }
  //função que adiciona produtos pelo método update 16/07
  adicionarProduto(){
    this.produtos.update(listaAtual =>[
      ...listaAtual,
      {nome:'Playstation 5', preco:3000},
    ]);
  }
//função que contabiliza quantidade produtos na lista 16/07
totalProdutos = computed(() => this.produtos().length);

//funçao que calcula o valor total dos produtos usando o método computed 16/07
valorTotal = computed(()=>
{return this.produtos().reduce((total, item) =>
total + item.preco,0
)}
);
//função que substituir a lista atual usadando o método set 17/07
substituirProdutos(){
  this.produtos.set([
    {nome:'Teclado', preco: 50 },
    {nome:'Mouse', preco: 15 },
    {nome:'Monitor', preco: 500},
    {nome:'Desktop', preco:1500},
    {nome:'Headset',preco: 30 },
  ]);
}
//! método para monitorar alteração em tempo real usando effect()
constructor(){
  effect(()=>{
    console.log('Lista de produtos Alterados: ', this.produtos());
  });
  effect(()=>{
    console.log('Valor Total Atualizado: ', this.valorTotal());
  });
  effect(()=>{
    if (typeof document !== 'undefined'){
      document.title =`(${this.totalProdutos()})- Loja da Jamilly` //função esperada = nome da guia e quantidade de produto 17/07
    }
  });
}
//! método para criar um estado de seleção com sinal string | null
produtoSelecionado = signal <string | null>(null);

}



