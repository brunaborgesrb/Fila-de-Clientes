// Declaração de uma array vazia para armazenar a fila de clientes
const queue = [];

// Função para adicionar um cliente à fila
function addToQueue() {
    // Obter o nome do cliente do campo de entrada no formulário
    const clientName = document.querySelector('input[name="cliente"]').value;
    // Obter a cor selecionada para a ficha do cliente
    const color = document.querySelector('input[name="corDeFundo"]').value;

    // Adicionar um objeto representando o cliente à fila
    queue.push({ name: clientName, color: color });

    // Atualizar a exibição da fila após adicionar um novo cliente
    updateQueue();
}

// Função para remover o próximo cliente da fila
function removeFromQueue() {
    // Verificar se a fila não está vazia
    if (queue.length > 0) {
        // Remover o primeiro cliente da fila (o próximo da fila)
        queue.shift();
        // Atualizar a exibição da fila após remover um cliente
        updateQueue();
    }
}

// Função para atualizar a exibição da fila no HTML
function updateQueue() {
    // Obter o elemento HTML onde a fila será exibida
    const queueElement = document.getElementById("queue");
    // Limpar o conteúdo atual da fila
    queueElement.innerHTML = "";

    // Iterar sobre cada cliente na fila
    queue.forEach(client => {
        // Criar um elemento <div> para representar o cliente na fila
        const clientElement = document.createElement("div");
        // Definir a cor do texto com base na cor da ficha do cliente
        clientElement.style.color = client.color;
        // Definir o texto do elemento como o nome do cliente
        clientElement.textContent = client.name;
        // Adicionar o elemento do cliente à lista de visualização da fila
        queueElement.appendChild(clientElement);
    });
}

// Função para listar a fila de clientes em ordem reversa
function listReverseQueue() {
    // Obter o elemento HTML onde a fila será exibida
    const queueElement = document.getElementById("queue");
    // Limpar o conteúdo atual da fila
    queueElement.innerHTML = "";

    // Iterar sobre a fila de clientes em ordem reversa
    for (let i = queue.length - 1; i >= 0; i--) {
        const client = queue[i];
        // Criar um elemento <div> para representar o cliente na fila
        const clientElement = document.createElement("div");
        // Definir a cor de fundo do elemento com base na cor da ficha do cliente
        clientElement.style.backgroundColor = client.color;
        // Definir o texto do elemento com o nome do cliente e sua cor
        clientElement.textContent = `${client.name} - Cor: ${client.color}`;
        // Adicionar o elemento do cliente à lista de visualização da fila
        queueElement.appendChild(clientElement);
    }
}
