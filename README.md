# Katas de JavasScript 7 - Callbacks

Nesta entrega, você irá exercitar a criação e o uso das funções callback, e irá se familiarizar com o modo no qual os métodos incorporados do JavaScript funcionam nos bastidores.

O JavaScript fornece vários "métodos de iteração" baseados no mesmo tipo de padrão de callback que você viu no caso do forEach() na aula sobre Funções Callback. Essencialmente, eles são loops prontos, com alguns comportamentos adicionados para ter um pouco de variação do padrão.

Há várias formas de recriar as funções. Como o foco é a lógica, use esta para facilitar 
nos testes:

```js
function nomeDaFuncao(array, callback) {
    // conteúdo da função
}
```

Não se preocupe caso tenha visto formas de criar com _prototype_ ;) Depois você poderá voltar e refazer. 

## Sua Tarefa

Sua tarefa será reproduzir o comportamento desses métodos de Array com suas funções callback, incluindo os parametros opcionais e _sem usar as versões incorporadas do JavaScript_:

1. [forEach()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
2. [fill()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
3. [map()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
4. [some()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
5. [find()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
6. [findIndex()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
7. [every()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
8. [filter()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro) 
9. [concat()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
10. [includes()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/contains)
11. [indexOf()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
12. [join()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
13. [reduce()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
14. [slice()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
15. [flat()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
16. [flatMap()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
17. [Array.of()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/of)

Dê os seguintes nomes a cada uma das funções: newForEach, newFill, newMap, newSome, newFind, newFindIndex, newEvery, newFilter, newConcat, newIncludes, newIndexOf, newJoin, newReduce, newSlice, newFlat, newFlatMap e newArrayOf. Sua implementação de cada um dos métodos de iteração acima deve resultar nos _mesmos argumentos e valores de retorno_.

IMPORTANTE: Para propósitos de teste/avaliação, é importante que você dê o nome do repositório de 'katas7', e que o nome das funções seja igual ao padrão mencionado acima.

## Por exemplo:

```js
function myCallback(value) {
    return `${value} é muito bom!`
};

let myArr = ["maçã", "uva", "pera"];

let retornoMap = myArr.map(myCallback);
let retornoNewMap = newMap(myArr, myCallback);

retornoMap // Deve retornar ["maçã é muito bom!", "uva é muito bom!", "pera é muito bom!"];
retornoNewMap // Deve retornar ["maçã é muito bom!", "uva é muito bom!", "pera é muito bom!"];
myArr // Deve retornar ["maçã", "uva", "pera"];
```

__Note que possuem o mesmo retorno e o array original não foi modificado, conforme a documentação do Array.prototype.map()__.


# Envio

Faça o push do código para seu repositório no GitLab e use a função do GitLab Pages que permite que o site seja visualizado diretamente. No GitLab, por favor, adicione `ka-br-<sua-turma>-correcoes` como membro do seu projeto com a permissão "Reporter", e **envie a url do seu gitlab pages (Ex: https://nomedeusuario.gitlab.io/katas7)**.
