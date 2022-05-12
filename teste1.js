//criando um novo objeto da classe promise e colocando o objeto na variável "promessa" para tratar o fluxo de resposta

const promessa = new Promise((resolve, rejeita)=>{

    let a = 2 + 5

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
)