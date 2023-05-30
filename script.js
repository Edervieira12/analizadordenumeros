var num = document.getElementById('num')
var lista = document.querySelector('select#flista')
var res = document.getElementById('res')
var valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if( l.indexOf(Number(n)) != -1 ){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item  = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou já foi adicionado!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if( valores.length == 0 ){
        alert('adicione valores antes de finalizar')
    }else{
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for(var pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML +=`<p> Ao todo, temos ${tot} numeros cadastrado.</p>`
        res.innerHTML +=`<p> O maior valoe informado foi ${maior}.</p>`
        res.innerHTML +=`<p> Omenor valoe informado foi ${menor}.</p>`
        res.innerHTML +=`<p> Somando todos os valores digitado é ${soma}.</p>`
        res.innerHTML +=`<p> A media dos valores digitado é ${media}.</p>`
    }
