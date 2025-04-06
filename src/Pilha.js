class Pilha {
   constructor(size=15){
        this.size=size;
        this.dados=[];
        this.topo=0;
   }

   push(elemento){
      if(this.isFull()){
         throw new Error("Stack Overflow");
      }
      this.dados[this.topo]=elemento;
      this.topo++;
   }

   pop(){
      if(this.isEmpty()){
         throw new Error("Stack Underflow")
      }
      this.topo--;
      return this.dados[this.topo];
   }

   top(){
      if(!this.isEmpty()){
         return this.dados[this.topo - 1];
      }
   }

   length(){
      return this.topo;
   }

   isEmpty(){
      return this.length()===0;
   }

   isFull(){
      return this.length()===this.size;
   }

   clear(){
      this.topo=0;
   }

   toString(){
      if (this.isEmpty()) {
         return "Pilha vazia";
     }
     return this.dados.slice(0, this.topo).reverse().join("");
   }


}
export default Pilha;