let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons =document.querySelectorAll("#buttons-container button");
let messagecontainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

//contador de jogadas

let player1 = 0;
let player2 = 0;


//qunado alguem clicar na caixa

for(let i =0 ; i < boxes.length; i++){
   
        boxes[i].addEventListener("click" ,function(e){
            
           
           let el = verificaJogador(player1,player2);

            //computando jogadas
            if(this.childNodes.length == 0){ // verifica se o this(boxes) tem algum nó filho, no caso é 0 pois as divs com class box estamo vazias, se voce colocar um elemento la, seja ele uma string ou numero, vai aumentar o length ou seja vai ser adicionado 1 nó filho


                let cloneEl = el.cloneNode(true);//clonando o el lembrando que primeiro ele passa pela condição de se player1 == player2 (no caso inicial 0 == 0) el = x, se não, ou seja, se player1 != player2 el = o

                this.appendChild(cloneEl) //colocando o elemento criadno dentro da box
                    if(player1 == player2){ 
                        player1++; //agora para manter uma jogada x e uma jogada o precisamos incrementar o valor de player 1
                    }else{
                        player2++; //e para voltar ao estagio inicial precisamos tambem incrementar o valor de player2
                    }
                    //nesse caso, faremos um loop onde p1 == p2 (x), logo depois incrementa o p1 e estaremos na jogada da ( o ) e incrementa o ( o ), voltando no estado inicial onde p1 == p2 (x)
            }
            
            //checa quem venceu 

            function checaGanhador(){
                let b1 = document.getElementById("block-1");
                let b2 = document.getElementById("block-2");
                let b3 = document.getElementById("block-3");
                let b4 = document.getElementById("block-4");
                let b5 = document.getElementById("block-5");
                let b6 = document.getElementById("block-6");
                let b7 = document.getElementById("block-7");
                let b8 = document.getElementById("block-8");
                let b9 = document.getElementById("block-9");

                //console.log(b1.childNodes[0].classList == "o") //true

                //checando se x ou o esta contido nas horizontais
                //horizontal
                if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){ //primeira horizontal

                    let b1child = b1.childNodes[0].classList;  //verifica a classe das ou da childNode
                    let b2child = b2.childNodes[0].classList;

                    let b3child = b3.childNodes[0].classList;
                   
                        if(b1child == "x" && b2child == "x" && b3child == "x"){
                            messagecontainer.style.display = "block";
                            messageText.innerHTML = "PLAYER 1 VENCEU";
                        }else if( b1child == "o" && b2child == "o" && b3child == "o"){
                            messagecontainer.style.display = "block";
                            messageText.innerHTML = "PLAYER 2 VENCEU";
                        }


                }else if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){ //segunda horizontal
                    let b4child = b4.childNodes[0].classList;
                    let b5child = b5.childNodes[0].classList;
                    let b6child = b6.childNodes[0].classList;

                        if(b4child == "x" && b5child == "x" && b6child == "x"){
                            messagecontainer.style.display = "block";
                            messageText.innerHTML = "PLAYER 1 VENCEU";

                        }else if(b4child == "o" && b5child == "o" && b6child == "o"){
                            messagecontainer.style.display = "block";
                            messageText.innerHTML = "PLAYER 2 VENCEU";
                        }

                }else if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){
                    let b7child = b7.childNodes[0].classList;
                    let b8child = b8.childNodes[0].classList;
                    let b9child = b9.childNodes[0].classList;
                        if(b7child == "x" && b8child == "x" && b9child == "x"){
                            messagecontainer.style.display = "block";
                            messageText.innerHTML = "PLAYER 1 VENCEU";
        
                        }else if(b7child == "o" && b8child == "o" && b9child == "o"){
                            messagecontainer.style.display = "block";
                            messageText.innerHTML = "PLAYER 2 VENCEU";
                        }

                }


                //checando na vertical

                if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
                    let b1child = b1.childNodes[0].classList;
                    let b4child = b4.childNodes[0].classList;
                    let b7child = b7.childNodes[0].classList;

                        if(b1child == "x" && b4child == "x" && b7child == "x"){
                            messagecontainer.style.display = "block";
                            messageText.innerHTML = "PLAYER 1 VENCEU";
                        }else if(b1child == "o" && b4child == "o" && b7child == "o"){
                            messagecontainer.style.display = "block";
                            messageText.innerHTML = "PLAYER 2 VENCEU";
                        }

                }else if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){
                    let b2child = b2.childNodes[0].classList;
                    let b5child = b5.childNodes[0].classList;
                    let b8child = b8.childNodes[0].classList;
                        if(b2child == "x" && b5child == "x" && b8child == "x"){
                            messagecontainer.style.display = "block";
                            messageText.innerHTML = "PLAYER 1 VENCEU";
                        }else if(b2child == "o" && b5child == "o" && b8child == "o"){
                            messagecontainer.style.display = "block";
                            messageText.innerHTML = "PLAYER 2 VENCEU";
                        }
                }else if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){
                    let b3child = b3.childNodes[0].classList;
                    let b6child = b6.childNodes[0].classList;
                    let b9child = b9.childNodes[0].classList;
                        if(b3child == "x" && b6child == "x" && b9child == "x"){
                            messagecontainer.style.display = "block";
                            messageText.innerHTML = "PLAYER 1 VENCEU";
                        }else if(b3child == "o" && b6child == "o" && b9child == "o"){
                            messagecontainer.style.display = "block";
                            messageText.innerHTML = "PLAYER 2 VENCEU";
                        }

                }

                //checagem na diagonal

                if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){
                    let b1child = b1.childNodes[0].classList;
                    let b5child = b5.childNodes[0].classList;
                    let b9child = b9.childNodes[0].classList;
                        if(b1child == "x" && b5child == "x" && b9child == "x"){
                            messagecontainer.style.display = "block";
                            messageText.innerHTML = "PLAYER 1 VENCEU";
                        }else if (b1child == "o" && b5child == "o" && b9child == "o"){
                            messagecontainer.style.display = "block";
                            messageText.innerHTML = "PLAYER 2 VENCEU";
                        }
                }else if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){
                    let b3child = b3.childNodes[0].classList;
                    let b5child = b5.childNodes[0].classList;
                    let b7child = b7.childNodes[0].classList;
                        if(b3child == "x" && b5child == "x" && b7child == "x"){
                            messagecontainer.style.display = "block";
                            messageText.innerHTML = "PLAYER 1 VENCEU";
                        }else if( b3child == "o" && b5child == "o" && b7child == "o"){
                            messagecontainer.style.display = "block";
                            messageText.innerHTML = "PLAYER 2 VENCEU";
                        }

                }  
                
                //deu velha
                let contador = 0

                for(let i = 0 ; i < boxes.length ; i++){
                    if(boxes[i].childNodes[0] != undefined){
                        contador++
                    }
                }

                if(contador == 9){
                    messagecontainer.style.display = "block";
                    messageText.innerHTML = "DEU VELHA";
                }
            }

            checaGanhador()

           
                
        })
}


//verifica quem vai jogar

function verificaJogador(p1,p2){ //toda função retorna algo, nesse caso retorna el (elemento (x) ou (o))
    if(p1 == p2) { //se player 1 == player 2
        el = x
          
    }else {  //se player 1 !=  player 2
        el = o 
}
return el
}
