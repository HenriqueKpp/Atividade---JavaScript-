// Criando o vetor vazio
        let id = [];
        let vendedorArry = [];
        let numeros = [];
        let desconto = [];
        let valorfinal = [];
        let data = [];

        // Função para atualizar a lista na tela
        function atualizarLista() {
            const listaDiv = document.getElementById('listaValores');
            
            // Limpa a lista atual
            listaDiv.innerHTML = '';
            
            // Verifica se o vetor está vazio
            if (numeros.length === 0) {
                listaDiv.innerHTML = '<div class="vazio">Nenhum valor cadastrado</div>';
                return;
            }
            
            // Percorre o vetor e cria um item para cada número
            for (let i = 0; i < numeros.length; i++) {
                const item = document.createElement('div');
                item.className = 'item-lista';
                
                item.innerHTML = `
                    <span class="item-valor">${i}</span>
                    <span class="item-valor">${vendedorArry[i]}</span>
                    <span class="item-valor">${numeros[i]}</span>
                    <span class="item-valor">${desconto[i]}</span>
                    <span class="item-valor">${valorfinal[i]}</span>
                    <span class="item-valor">${data[i]}</span>
                    <button onclick="removerItem(${i})">Remover</button>                `;
                
                listaDiv.appendChild(item);
            }
            
            
            // Mostra o vetor no console
            console.log('Vetor atual:', numeros);
        }






        // Função para adicionar número (push)
        function adicionarVenda() {
            // Pega o valor do input
            const vendedor = document.getElementById('valor');
            const nome = (vendedor.value);

            const venda = document.getElementById('valor2');
            const valor = parseFloat(venda.value);
            
            if(!nome   || nome === ""){
                alert('Por favor, digite um nome!');
                vendedor.focus();
                return;
            }

             if(!valor   || valor === ""){
                alert('Por favor, digite um valor!');
                vendedor.focus();
                return;
            }

            // Valida se é um número
            if (isNaN(valor)) {
                alert('Por favor, digite um valor válido!');
                vendedor.focus();
                return;
            }
            
            // Adiciona ao vetor usando push
            numeros.push(valor);
            vendedorArry.push(nome);

            // Limpa o input
            vendedor.value = '';
            vendedor.focus();
            

            //calculo de desconto
            const input = document.getElementById("nome");

    


              desconto.push((valor * 0.1).toFixed(2));
              valorfinal.push((valor * 0.9).toFixed(2));     
              data.push(new Date().toLocaleString('pt-BR'));

            // Atualiza a lista
            atualizarLista();
        }



        function removerItem(index) {
            // remove de TODOS os vetores
            numeros.splice(index, 1);
            vendedorArry.splice(index, 1);
            desconto.splice(index, 1);
            valorfinal.splice(index, 1);
            data.splice(index, 1);

            atualizarLista();
        }





        
        // Função para remover o último número (pop)
        function removerUltimoNumero() {
            if (numeros.length === 0) {
                alert('Não há pedidos para remover!');
                return;
            }
            
            // Remove o último usando pop
           numeros.pop();
           
        
            atualizarLista();
            
            alert(`Número removido!`);
        }






        // Função para limpar toda a lista
        function limparLista() {
            if (numeros.length === 0) {
                alert('A lista já está vazia!');
                return;
            }
            
            if (confirm('Deseja realmente limpar todos os números?')) {
                // Limpa o vetor
                id = [];
                vendedorArry = [];
                numeros = [];
                desconto = [];
                valorfinal = [];
                data = [];

                // Atualiza a lista
                atualizarLista();
            }
        }

        // Inicializa a lista
        atualizarLista();