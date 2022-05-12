let resposta

new Promise((resolve,rejeita)=>{
    console.log("promessa pendente")

    let r = 0

    resolve(r + 1)
})
.then((res) =>{
    console.log("Sucesso:", res)
}).catch((erro)=>{
    console.log("Erro:", erro)
})