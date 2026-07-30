Casos de Uso - AdotaPet

Atores do Sistema
Ator	                  Descrição
Visitante	              Usuário não autenticado
Adotante	              Usuário logado com role ADOTANTE e perfil de adotante criado
Instituição	              Usuário logado com role INSTITUICAO e perfil de ONG criado


UC01 - Cadastrar Usuário
Ator: Visitante

Objetivo: Criar uma conta no sistema.

Pré-condições: Nenhuma.

Fluxo Principal:

Visitante acessa a tela de cadastro

Preenche nome, email, senha

Seleciona o tipo de perfil: ADOTANTE ou INSTITUICAO

Clica em "Cadastrar"

Sistema valida os dados

Sistema criptografa a senha

Sistema cria o usuário

Sistema exibe mensagem de sucesso

Exceções:

E1. Email já cadastrado → Sistema exibe "E-mail já cadastrado" (409)

E2. Email em formato inválido → Sistema exibe "Formato de email inválido"

E3. Senha com menos de 6 caracteres → Sistema exibe "A senha deve ter no mínimo 6 caracteres"

E4. Nome não preenchido → Sistema exibe "O campo nome não pode estar vazio"

E5. Tipo de perfil não selecionado → Sistema exibe "Escolha uma das opções: INSTITUICAO ou ADOTANTE"

Pós-condições:

Usuário criado no banco de dados

Usuário pode fazer login

UC02 - Autenticar Usuário (Login)
Ator: Visitante

Objetivo: Entrar no sistema e receber token de acesso.

Pré-condições:

Ter conta cadastrada

Fluxo Principal:

Visitante acessa a tela de login

Digita email e senha

Clica em "Entrar"

Sistema busca usuário pelo email

Sistema compara a senha com o hash armazenado

Sistema gera token JWT (válido por 1 dia)

Sistema retorna token e dados do usuário

Exceções:

E1. Email não encontrado → Sistema exibe "Email ou senha inválidos" (401)

E2. Senha incorreta → Sistema exibe "Email ou senha inválidos" (401)

E3. Email em formato inválido → Sistema exibe "Formato de email inválido"

Pós-condições:

Token JWT gerado contendo: id do usuário, email, role

Usuário pode acessar rotas protegidas

UC03 - Cadastrar Animal
Ator: Instituição

Objetivo: Disponibilizar um novo animal para adoção.

Pré-condições:

Estar autenticado como INSTITUICAO

Ter perfil de ONG cadastrado

Fluxo Principal:

Instituição acessa a tela de cadastro de animal

Preenche os campos obrigatórios: nome, idOng

Preenche campos opcionais: raça, sexo, cor, idade, temperamento, pelagem, porte

Clica em "Cadastrar"

Sistema valida os dados

Sistema salva o animal com status DISPONIVEL

Sistema retorna os dados do animal cadastrado

Fluxo Alternativo:

A1. Instituição desiste do cadastro

A1.1. Clica em "Cancelar"

A1.2. Retorna para a página anterior sem salvar

Exceções:

E1. Nome do animal não preenchido → Sistema exibe "O nome do animal é obrigatório" (400)

E2. ID da ONG não preenchido → Sistema exibe "O ID da ONG é obrigatório" (400)

E3. Sexo inválido → Sistema exibe "Sexo deve ser MACHO ou FEMEA" (400)

E4. Status inválido → Sistema exibe "Status inválido" (400)

E5. Token expirado ou inválido → Sistema retorna 401

E6. Usuário não é INSTITUICAO → Sistema retorna 403

Pós-condições:

Animal cadastrado com status DISPONIVEL

Animal aparece na listagem pública

UC04 - Listar Animais Disponíveis
Ator: Visitante, Adotante

Objetivo: Visualizar animais disponíveis para adoção.

Pré-condições: Nenhuma.

Fluxo Principal:

Usuário acessa a página de animais disponíveis

Sistema exibe animais com status DISPONIVEL

Sistema exibe 10 animais por página (padrão)

Sistema mostra total de animais e número de páginas

Fluxo Alternativo:

A1. Usar filtros

A1.1. Usuário filtra por porte (ex: ?porte=Grande)

A1.2. Usuário filtra por idade (ex: ?idade=3)

A1.3. Usuário filtra por localização da ONG (ex: ?localizacao=Natal)

A1.4. Sistema retorna apenas animais que atendem aos filtros

A2. Navegar entre páginas

A2.1. Usuário informa a página desejada (ex: ?page=2)

A2.2. Usuário define quantidade por página (ex: ?limit=5)

Exceções:

E1. Nenhum animal disponível → Sistema exibe lista vazia com total = 0

Pós-condições:

Lista de animais exibida com paginação

UC05 - Visualizar Perfil da Instituição
Ator: Visitante, Adotante

Objetivo: Ver detalhes de uma instituição de adoção.

Pré-condições: Nenhuma.

Fluxo Principal:

Usuário acessa o perfil de uma ONG (ex: /ong/1)

Sistema exibe: nome, localização, email

Sistema exibe lista de animais da ONG

Sistema exibe telefones de contato

Exceções:

E1. ONG não encontrada → Sistema exibe "ONG não encontrada" (404)

Pós-condições:

Dados da instituição exibidos

UC06 - Favoritar Animal
Ator: Adotante

Objetivo: Salvar um animal na lista de favoritos.

Pré-condições:

Estar autenticado como ADOTANTE

Ter perfil de adotante cadastrado

Fluxo Principal:

Adotante visualiza um animal disponível

Clica em "Favoritar" (ícone de coração)

Sistema verifica se o animal existe

Sistema verifica se já não está favoritado

Sistema salva o favorito

Sistema exibe confirmação visual (coração preenchido)

Exceções:

E1. Animal não encontrado → Sistema exibe "Animal não encontrado" (404)

E2. Animal já está nos favoritos → Sistema exibe "Animal já está nos favoritos" (409)

E3. Token expirado ou inválido → Sistema retorna 401

E4. Usuário não é ADOTANTE → Sistema retorna 403

Pós-condições:

Animal aparece na lista de favoritos do adotante

UC07 - Listar Favoritos
Ator: Adotante

Objetivo: Visualizar lista de animais favoritados.

Pré-condições:

Estar autenticado como ADOTANTE

Ter perfil de adotante cadastrado

Fluxo Principal:

Adotante acessa a página de favoritos

Sistema busca todos os favoritos do adotante

Sistema exibe lista com dados do animal e da ONG

Lista ordenada por data (mais recentes primeiro)

Exceções:

E1. Nenhum favorito → Sistema exibe lista vazia

E2. Token expirado ou inválido → Sistema retorna 401

Pós-condições:

Lista de favoritos exibida

UC08 - Remover Favorito
Ator: Adotante

Objetivo: Remover um animal da lista de favoritos.

Pré-condições:

Estar autenticado como ADOTANTE

Ter o animal nos favoritos

Fluxo Principal:

Adotante acessa a lista de favoritos

Clica em "Remover" no animal desejado

Sistema remove o favorito

Sistema atualiza a lista

Exceções:

E1. Favorito não encontrado → Sistema exibe "Favorito não encontrado" (404)

E2. Token expirado ou inválido → Sistema retorna 401

Pós-condições:

Animal removido da lista de favoritos

UC09 - Demonstrar Interesse em Animal
Ator: Adotante

Objetivo: Notificar a instituição sobre o interesse em adotar um animal.

Pré-condições:

Estar autenticado como ADOTANTE

Ter perfil de adotante cadastrado

Animal estar com status DISPONIVEL

Fluxo Principal:

Adotante visualiza um animal disponível

Clica em "Tenho Interesse"

Opcionalmente, escreve uma mensagem

Sistema verifica se o animal existe e está disponível

Sistema verifica se já não demonstrou interesse antes

Sistema salva o interesse com status "não lido"

Sistema exibe confirmação

Exceções:

E1. Animal não encontrado → Sistema exibe "Animal não encontrado" (404)

E2. Animal não está disponível → Sistema exibe "Animal não está disponível para adoção" (409)

E3. Interesse já registrado → Sistema exibe "Você já demonstrou interesse neste animal" (409)

E4. Token expirado ou inválido → Sistema retorna 401

Pós-condições:

Interesse registrado com lido = false

Instituição pode ver o interesse na lista

UC10 - Visualizar Interesses Recebidos
Ator: Instituição

Objetivo: Ver lista de adotantes interessados nos animais da ONG.

Pré-condições:

Estar autenticado como INSTITUICAO

Ter perfil de ONG cadastrado

Fluxo Principal:

Instituição acessa a página de interesses

Sistema busca todos os interesses dos animais da ONG

Sistema exibe: nome do adotante, animal, mensagem, data

Lista ordenada por data (mais recentes primeiro)

Exceções:

E1. Nenhum interesse → Sistema exibe lista vazia

E2. ONG não encontrada → Sistema exibe "ONG não encontrada" (404)

E3. Token expirado ou inválido → Sistema retorna 401

Pós-condições:

Lista de interesses exibida para a instituição

UC11 - Remover Interesse
Ator: Adotante

Objetivo: Cancelar uma demonstração de interesse.

Pré-condições:

Estar autenticado como ADOTANTE

Ter um interesse registrado no animal

Fluxo Principal:

Adotante acessa seus interesses

Clica em "Cancelar Interesse"

Sistema remove o interesse

Sistema atualiza a lista

Exceções:

E1. Interesse não encontrado → Sistema exibe "Interesse não encontrado" (404)

E2. Token expirado ou inválido → Sistema retorna 401

Pós-condições:

Interesse removido do sistema

UC12 - Editar Animal
Ator: Instituição

Objetivo: Atualizar dados de um animal cadastrado.

Pré-condições:

Estar autenticado como INSTITUICAO

Animal pertencer à ONG do usuário

Fluxo Principal:

Instituição acessa a lista de seus animais

Seleciona o animal desejado

Clica em "Editar"

Altera os campos desejados

Clica em "Salvar"

Sistema valida os dados

Sistema atualiza o animal

Exceções:

E1. Animal não encontrado → Sistema exibe "Animal não encontrado" (404)

E2. Dados inválidos → Sistema exibe mensagem de erro específica (400)

E3. Token expirado ou inválido → Sistema retorna 401

Pós-condições:

Dados do animal atualizados

UC13 - Remover Animal
Ator: Instituição

Objetivo: Remover um animal do sistema.

Pré-condições:

Estar autenticado como INSTITUICAO

Animal pertencer à ONG do usuário

Fluxo Principal:

Instituição acessa a lista de seus animais

Seleciona o animal desejado

Clica em "Remover"

Sistema solicita confirmação

Usuário confirma

Sistema remove o animal

Sistema remove automaticamente favoritos e interesses relacionados (Cascade)

Sistema atualiza a lista

Exceções:

E1. Animal não encontrado → Sistema exibe "Animal não encontrado" (404)

E2. Token expirado ou inválido → Sistema retorna 401

Pós-condições:

Animal removido do banco

Favoritos e interesses relacionados removidos

Resumo de Permissões

Caso de Uso                         	Visitante	 Adotante	Instituição

UC01 - Cadastrar Usuário                   ✅          ✅           ✅
UC02 - Autenticar Usuário	               ✅          ✅           ✅
UC03 - Cadastrar Animal	                   ❌	      ❌	          ✅
UC04 - Listar Disponíveis	               ✅	      ✅	          ✅
UC05 - Ver Perfil ONG	                   ✅	      ✅           ✅
UC06 - Favoritar Animal	                   ❌	      ✅	          ❌
UC07 - Listar Favoritos	                   ❌	      ✅           ❌
UC08 - Remover Favorito	                   ❌	      ✅	          ❌
UC09 - Demonstrar Interesse	               ❌	      ✅	          ❌
UC10 - Ver Interesses	                   ❌	      ❌	          ✅
UC11 - Remover Interesse	               ❌	      ✅	          ❌
UC12 - Editar Animal	                   ❌	      ❌	          ✅
UC13 - Remover Animal	                   ❌	      ❌	          ✅