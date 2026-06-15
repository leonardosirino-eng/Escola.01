document.addEventListener('DOMContentLoaded', () => {
    
    // Seleção de elementos do DOM
    const counterValue = document.getElementById('counter-value');
    const btnIncrement = document.getElementById('btn-increment');
    const btnDecrement = document.getElementById('btn-decrement');
    const btnReset = document.getElementById('btn-reset');

    // Estado inicial do contador
    let count = 0;

    // Função para atualizar a interface
    const updateDisplay = () => {
        counterValue.textContent = count;
        
        // Altera as cores dinamicamente baseado no valor
        if (count > 0) {
            counterValue.style.color = '#48bb78'; // Verde
        } else if (count < 0) {
            counterValue.style.color = '#f56565'; // Vermelho
        } else {
            counterValue.style.color = '#2d3748'; // Padrão
        }

        // Feedback visual de escala ao alterar o valor
        counterValue.style.transform = 'scale(1.1)';
        setTimeout(() => {
            counterValue.style.transform = 'scale(1)';
        }, 100);
    };

    // Event Listeners para cliques
    btnIncrement.addEventListener('click', () => {
        count++;
        updateDisplay();
    });

    btnDecrement.addEventListener('click', () => {
        count--;
        updateDisplay();
    });

    btnReset.addEventListener('click', () => {
        count = 0;
        updateDisplay();
    });

});
