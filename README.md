# Glass Bridge - Desafio da Ponte de Vidro

---

## Descrição:
O jogo "Glass Bridge" é um desafio baseado em uma ponte de vidro, onde o jogador precisa atravessar 5 pisos. Cada piso pode ser frágil ou resistente. O objetivo é escolher os pisos corretos para chegar ao final sem quebrar nenhum dos pisos frágeis. Se o jogador escolher um piso frágil, ele perde o jogo. Caso consiga atravessar todos os 5 pisos sem erros, o jogador vence e recebe a mensagem de vitória.

**Jogue agora:** [Clique aqui para jogar]([https://seu-link-para-o-jogo.com](https://spellerbarbosa.github.io/glass_bridge/)

---

## Funcionalidades Principais:

1. **Bem-Vindo ao Jogo:**
   - Ao iniciar o jogo, o jogador é apresentado à descrição do desafio:
     - A ponte possui 5 pisos.
     - Cada piso pode ser frágil ou resistente.
     - O jogador deve escolher cuidadosamente os pisos para atravessar.
     - Erro em qualquer piso frágil resulta na derrota.

2. **Interface do Jogo:**
   - O jogo exibe uma matriz de 5 pisos (linhas) com duas opções por linha (E e D).
   - Exemplo de layout:
     ```
     Piso 1-E | Piso 1-D
     Piso 2-E | Piso 2-D
     Piso 3-E | Piso 3-D
     Piso 4-E | Piso 4-D
     Piso 5-E | Piso 5-D
     ```

3. **Escolha dos Pisos:**
   - O jogador clica em um dos dois botões (E ou D) para cada piso.
   - Após a escolha, o jogo verifica se o piso escolhido é frágil ou resistente:
     - Se for frágil, o piso quebra, e o jogador perde o jogo.
     - Se for resistente, o jogador avança para o próximo piso.

4. **Resultados:**
   - **Perda:** Se o jogador escolher um piso frágil, aparece a mensagem de derrota: *"Você perdeu! Tente novamente."*
   - **Vitória:** Se o jogador atravessar todos os 5 pisos sem erro, aparece a mensagem de vitória: *"Parabéns! Você sobreviveu!"*

5. **Botões Adicionais:**
   - **Jogar:** Reinicia o jogo após a derrota ou vitória.
   - **Reiniciar:** Reinicia o jogo a qualquer momento, limpando todas as escolhas feitas.

---

## Tecnologias Utilizadas:
- **HTML**: Estrutura da página.
- **CSS**: Estilização visual.
- **JavaScript**: Lógica do jogo, verificação de escolhas, exibição de resultados e controle de estados.

---

## Instruções para Execução:
1. Clone o repositório do GitHub:
   ```bash
   git clone https://github.com/SpellerBarbosa/glass_bridge.git
