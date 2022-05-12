//criando um novo objeto da classe promise e colocando o objeto na variável "promessa" para tratar o fluxo de resposta

const promessa = new Promise((resolve, rejeita)=>{

    let a = 2 + h

    setTimeout(
        ()=>resolve(5),
        3000
    )

})

// then / catch 

promessa.then(
    soma => {
        console.log("SOMA:",soma)
    }
).catch(
    erro =>{
        console.log("erro! \n", erro)
    }
)
