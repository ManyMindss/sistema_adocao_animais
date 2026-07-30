# 📊 Banco de Dados - AdotaPet

## Tabelas

### Usuario
Guarda os dados de login.

| Coluna | Tipo | Obrigatório | Descrição |
|--------|------|:-----------:|-----------|
| id | Int |  (auto) | Identificador |
| nome | String(100) | Sim | Nome completo |
| email | String(100) | (único) | Email de login |
| senha | String | Sim | Criptografada com bcrypt |
| role | Enum | Sim | ADOTANTE ou INSTITUICAO |
| createdAt | DateTime | (auto) | Data de criação |
| updatedAt | DateTime | (auto) | Data de atualização |

---

### Ong
Perfil da instituição.

| Coluna | Tipo | Obrigatório | Descrição |
|--------|------|:-----------:|-----------|
| id | Int |  (auto) | Identificador |
| nome | String(100) | Sim | Nome da instituição |
| localizacao | String(100) | Sim | Cidade/Estado |
| email | String(100) | Não | Email de contato |
| usuarioId | Int | (único) | Ligação com Usuario |

**Relacionamentos:**
- `usuarioId` → `Usuario.id` (uma ONG por usuário)
- Uma ONG → muitos Animais
- Uma ONG → muitos Telefones

--
### Adotante
Perfil do adotante.

| Coluna | Tipo | Obrigatório | Descrição |
|--------|------|:-----------:|-----------|
| id | Int |(auto) | Identificador |
| nome | String(100) | Sim | Nome completo |
| localizacao | String(100) | Sim | Cidade/Estado |
| email | String(100) | Não | Email de contato |
| dataNascimento | DateTime | Sim | Data de nascimento |
| usuarioId | Int | N (único) | Ligação com Usuario |

**Relacionamentos:**
- `usuarioId` → `Usuario.id` (um adotante por usuário)
- Um Adotante → muitos Favoritos
- Um Adotante → muitos Interesses

---

### Animal
Animais para adoção.

| Coluna | Tipo | Obrigatório | Descrição |
|--------|------|:-----------:|-----------|
| id | Int |(auto) | Identificador |
| idOng | Int | Sim | ONG responsável |
| nome | String(50) | Sim | Nome do animal |
| raca | String(60) | Não | Raça |
| sexo | Enum | Não | MACHO ou FEMEA |
| cor | String(50) | Não | Cor |
| idade | Int | Não | Idade em anos |
| temperamento | String(50) | Não | Ex: Dócil |
| pelagem | String(50) | Não | Ex: Curto |
| porte | String(30) | Não | Pequeno, Médio, Grande |
| status | Enum | Não (padrão: DISPONIVEL) | DISPONIVEL, ADOTADO, EM_TRATAMENTO, AGUARDANDO_VISITA |

**Relacionamentos:**
- `idOng` → `Ong.id`
- Um Animal → muitos Favoritos
- Um Animal → muitos Interesses

---

### Favorito
Animais favoritados pelo adotante.

| Coluna | Tipo | Obrigatório | Descrição |
|--------|------|:-----------:|-----------|
| id | Int | (auto) | Identificador |
| adotanteId | Int | Sim | Quem favoritou |
| animalId | Int | Sim | Animal favoritado |
| createdAt | DateTime |  (auto) | Data |

**Regra:** Um adotante não pode favoritar o mesmo animal 2 vezes.
**Cascade:** Animal ou Adotante deletado → favoritos somem.

---

### Interesse
Demonstração de interesse em adotar.

| Coluna | Tipo | Obrigatório | Descrição |
|--------|------|:-----------:|-----------|
| id | Int | (auto) | Identificador |
| adotanteId | Int | Sim | Adotante interessado |
| animalId | Int | Sim | Animal de interesse |
| mensagem | String | Não | Mensagem opcional |
| createdAt | DateTime |(auto) | Data |
| lido | Boolean | Não (padrão: false) | Se a ONG já leu |

**Regra:** Um adotante não pode demonstrar interesse no mesmo animal 2 vezes.
**Cascade:** Animal ou Adotante deletado → interesses somem.

---

### Telefone
Telefones de contato.

| Coluna | Tipo | Obrigatório | Descrição |
|--------|------|:-----------:|-----------|
| id | Int |(auto) | Identificador |
| numero | String(20) | Sim | Número |
| tipoTelefone | String(20) | Não (padrão: CELULAR) | Tipo |
| idOng | Int | Não | Ligação com ONG |
| idAdotante | Int | Não | Ligação com Adotante |

**Regra:** Pertence a UMA ONG OU UM Adotante.

---

## Regras de Deleção

| Ação | Efeito |
|------|--------|
| Deletar Animal | Remove Favoritos e Interesses |
| Deletar Adotante | Remove Favoritos e Interesses |
| Deletar Ong | Remove Animais (e seus Favoritos/Interesses) |
| Deletar Usuario | Remove Ong ou Adotante vinculado |