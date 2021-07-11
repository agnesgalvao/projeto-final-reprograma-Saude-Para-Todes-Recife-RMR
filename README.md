# projeto-final-reprograma-Saude-Para-Todes-Recife-RMR


<h2> Saúde para todes Recife e RMR</h2><h6>V. 1.0.0</h6>


<P>O projeto saúde para todes Recife e RMR foi criado com o objetivo de auxiliar pessoas LGBT+ de Recife e região metropolitana de Recife 
a encontrarem ambulatórios do SUS e profissionais de baixo custo especializados no atendimento desta população, além de auxiliar também 
na busca por serviços de assistência social e jurídica gratuitos. O projeto irá permitir que a própria comunidade alimente a base de dados cadastrando novos serviços, ambulatórios e profissionais de saúde.</P>

<p>A idéia para o projeto surgiu após um diagnóstico realizado pelo coletivo #voteLGBT durante a pandemia, onde por meio de pesquisa foi identificada
 a dificuldade da população LGBT+ em localizar e acessar os serviços gratuitos e de baixo custo ofertados à está população.</p>

<p>Diante de tal exposto apresento esta ferramenta, com objetivo de torna-lá uma ponte entre as necessidades desta população e serviços viáveis, afim de contribuir para o acesso igualitário à saúde e outros direitos fundamentais.</p>





<h2>Serão ultilizados 4 schemas:</h2>

| MODEL | USUÁRIOS |  | AMBULATÓRIOS |  | SERVIÇOS | | EPECIALIDADES DE BAIXO CUSTO | |
| ----- | -------- | ---- | ------------ | ---- | -------- | --- | ---------------------------- | --- |
| | <h6>atributos</h6> | <h6>type</h6> |  <h6>atributos</h6> | <h6>type</h6>  | <h6>atributos</h6> | <h6>type</h6>  |  <h6>atributos</h6>  | --- |
| | _id | mongoose ObjectId | _id | mongoose ObjectId | _id | mongoose ObjectId | _id | mongoose ObjectId |
| | nome| String | nome | String | nome | String | nomeProfissional | String | 
| | email | String | cidade| String | tipoDeServico | String | especialidade |String | 
| | identidade | String | bairro  | String |cidade | String | cidade |String | 
| |  genero | String | logradouro  | String | bairro | String | bairro  | String |
| | sexualidade | String | numero | String | logradouro | String | logradouro  | String |
| | cidade | String | horarioFuncionamento | String | numero  | String |numero | String | 
| | senha | String |especialidades | Array | horarioFuncionamento | String | horarioFuncionamento | String | 
| | criadoEm | Date | antedimentoOnline  | String  | telefone  | String | telefone | String | 
|  | - | | observacoes | String | antedimentoOnline  | String | antedimentoOnline | String | 
|  | - | - | criadoPor | String | observacoes | String | observacoes | String | 
|  | - | - | criadoEm |  Date | criadoPor | String | criadoPor | String | 
|  | - | - | - | - | criadoEm | Date | criadoEm | Date | 

--------------------------------------------------------------------------------------------------------------------------------------


<h4>Tecnologias utilizadas</h4>
<h5>● Git</h5>
<h5>● Node.js</h5>
<h5>● MongoDB</h5>
<h5>● Heroku</h5>
<h5>● Postman</h5>


--------------------------------------------------------------------------------------------------------------------------------------


<h4>Pacotes utilizados</h4>
<h5>● nodemon</h5>
<h5>● express</h5>
<h5>● mongoose</h5>
<h5>● nodemailer</h5>
<h5>● cors</h5>
<h5>● bcrypt</h5>
<hs>● dotenv</h5>
<h5>● jsonwebtoken </h5>

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<h2>Métodos e Rotas</h2>

URL-base:<br>
Modo teste: [http://localhost:3333](http://localhost:3333)<br>
Modo produção: [https://saude-para-todes-recife-rmr.herokuapp.com]( https://saude-para-todes-recife-rmr.herokuapp.com )

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<H2>URL-base/usuarios</h2>


| Métodos | Rotas | Recursos |
| ------- | ----- | -------- |
| GET | '/' | Retorna todos os usuários. Requer autenticação. |
| POST | '/infoUsuario' | Retorna as informações de um usuário específico. Requer autenticação. |
| POST | '/logar' | Retorna um jsonwebtoken para a autenticação do usuário. |
| POST | '/cadastrar' | Realiza o cadastro de um novo usuário na base de dados. |
| POST | '/resetarSenha' | Substitui a senha do usuário e envia a nova senha por e-mail. |
| PATCH | '/atualizar' | Atualiza as informações de um usuário específico. Requer autenticação. |
| PATCH | '/atualizar/:id' | Atualiza as informações de um usuário específico. Requer autenticação. |
| DELETE | '/deletar' | Apaga definitivamente as inoformações de um usuário específico. Requer autenticação. |
| DELETE | '/deletar/:id' | Apaga definitivamente as inoformações de um usuário específico. Requer autenticação. |



<H4> Especificações das rotas "/usuarios" </h4>



| Método | Body  | Header | Códigos de resposta HTTP |
| ------ | ----- | ------ | ------------------- |
| GET  '/' | - | Baerer Token  | 200 (OK)<br> 500 (erro no servidor)|
| POST  '/infoUsuario' | {'email': 'exemplo@email.com'}| Baerer Token  | 200 (OK)<br>401 (não autorizado) <br> 500 (erro no servidor)| 
| POST  '/logar' | {'email': 'exemplo@email.com', <br>'senha': 'senhaDoUsuario'} |  -  | 200 (OK)<br> 404 (e-mail inválido)<br> 401 (senha incorreta)<br> 500 (erro no servidor)|
| POST  '/cadastrar' | {'nome': 'nome do usuario',<br> 'email': 'exemplo@email.com',<br> 'identidade': 'cis ou trans', <br>'genero': 'genero do usuáro',<br> 'sexualidade': 'sexualidade do usuario',<br>'cidade': 'cidade do usuário', <br>'senha': 'senhaDoUsuario'} |  -  | 201 (OK)<br> 209 (e-mail já cadastrado)<br> 500 (erro no servidor)| 
| POST  '/resetarSenha' | {'email': 'exemplo@email.com'} |  -  | 200 (OK)<br> 404 (e-mail inválido)<br> 500 (erro no servidor)|
| PATCH  '/atualizar' | {'email': 'exemplo@email.com',<br>'senhaAtual':'senha atual do usuário',<br> 'senha': 'nova senha',<br> 'cidade': 'nova cidade'} <br><h6>//o e-mail é obrigatório, os demais parâmetros precisam ser<br> enviados de acordo com o que será atualizado. No caso de atualização de senha o envio da senha atual é obrigatório</h6> |  Baerer Token  | 200 (OK)<br> 401 (não autorizado),<br> 404 (e-mail inválido)<br> 500 (erro no servidor)|
| PATCH  '/atualizar/:id' | {'id': 'id do usuario',<br> {'senhaAtual':'senha atual do usuário',<br> 'senha': 'nova senha',<br> 'cidade': 'nova cidade'} <br><h6><br><h6>//o id é obrigatório, os demais parâmetros precisam ser<br> enviados de acordo com o que será atualizado. No caso de atualização de senha o envio da senha atual é obrigatório</h6> </h6> |  Baerer Token  | 200 (OK)<br> 401 (não autorizado),<br> 404 (e-mail inválido)<br> 500 (erro no servidor)|
| DELETE  '/deletar' | {'email': 'exemplo@email.com'} |  Baerer Token  | 200 (OK)<br> 401 (não autorizado),<br> 404 (e-mail inválido)<br> 500 (erro no servidor)|
| DELETE  '/deletar/:id' | {'id': 'id do usuario'} |  Baerer Token  | 200 (OK)<br> 401 (não autorizado),<br> 404 (e-mail inválido)<br> 500 (erro no servidor)|



----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<H2>URL-base/ambulatorios</h2>



| Métodos | Rotas | Recursos |
| ------- | ----- | -------- |
| GET | '/' | Retorna todos os ambulatórios. |
| POST | '/cadastrar' | Cadastra um novo ambulatórios. Requer autenticação. |
| POST | '/buscar' | Retorna os ambulatórios filtrados por cidade e especialidade. |
| POST | '/criadosPor' | Retorna os ambulatórios criados por um usuário específico. Requer autenticação. |
| PATCH | '/atualizar' | Atualiza as informações de um ambulátorio específico. Requer autenticação. |
| PATCH | '/atualizar/:id' | Atualiza as informações de um ambulátorio específico. Requer autenticação. |
| DELETE | '/deletar' | Apaga definitivamente as informações de um ambulátorio específico. Requer autenticação. |
| DELETE | '/deletar/:id' | Apaga definitivamente as informações de um ambulátorio específico. Requer autenticação. |



<H3> Especificações das rotas "/ambulatorios" </h3>



| Método | Body  | Header | Códigos de resposta HTTP |
| ------ | ----- | ------ | ------------------- |
| GET  '/' | - |  -  | 200 (OK)<br> 500 (erro no servidor)|
| POST '/cadastrar' | {'nome': 'nome do ambulatórios',<br> 'cidade': 'cidade do ambulatórios,<br> 'bairro': 'bairro do ambulatórios', <br>'logradouro': 'logradouro do ambulatórios',<br> 'numero': 'numero do endereço',<br>'horarioFuncionamento': 'horário de funcionamento do ambulatório', <br>'especialidades': [especialidades do ambulatórios],<br> 'observações': 'observações opcionais',<br> 'criadoPor': 'e-mail do usuário que está autenticado' } |  Baerer Token   | 201 (OK)<br> 209 (ambulatório já cadastrado)<br> 401 (não autorizado)<br> 500 (erro no servidor)| 
| POST '/buscar' | {'cidade': 'nome da cidade',<br> 'especialidade': 'nome da especialidade'} |  -  | 200 (OK)<br> 404 (nenhum item corresponde a pesquisa)<br> 500 (erro no servidor)|
| POST '/criadosPor' | {'criadoPor': 'email do usuário'} |  Baerer Token  | 200 (OK)<br> 401 (não autorizado)<br> 500 (erro no servidor)|
| PATCH '/atualizar' |  {'nome': 'nome do ambulatório', <br> 'bairro': 'bairro do ambulatório', <br>'logradouro': 'logradouro do ambulatório',<br> 'numero': 'numero do endereço',<br>'horarioFuncionamento': 'horário de funcionamento do ambulatório', <br>'especialidades': [especialidades do ambulátorio],<br> 'observações': 'observações são opcionais'}<br><h6>//O nome do ambulatório é obrigatório, dos demais, apenas os parâmetros que irão ser alterados<br> precisam ser enviados no body |  Baerer Token  | 200 (OK)<br> 401 (não autorizado)<br> 404 (ambulátorio não encontrado)<br> 500 (erro no servidor)|
| PATCH '/atualizar/:id' |  {_id': 'id do ambulatório',<br> 'bairro': 'bairro do ambulatório', <br>'logradouro': 'logradouro do ambulátorio',<br> 'numero': 'numero do endereço',<br>'horarioFuncionamento': 'horário de funcionamento do ambulátorio', <br>'especialidades': [especialidades do ambulátorio],<br> 'observações': 'observações são opcionais'}<br><h6>//O id do ambulátorio é obrigatório, dos demais, apenas os parâmetros que irão ser alterados<br> precisam ser enviados no body |  Baerer Token  | 200 (OK)<br> 401 (não autorizado)<br> 404 (ambulátorio não encontrado)<br> 500 (erro no servidor)|
| DELETE '/deletar' | {'nome': 'nome do ambulátorio'} |  Baerer Token  | 200 (OK)<br> 401 (não autorizado),<br> 404 (ambulatório não encontrado)<br> 500 (erro no servidor)|
| DELETE '/deletar/:id' | {'id': 'id do ambulatório'} |  Baerer Token  | 200 (OK)<br> 401 (não autorizado),<br> 404 (ambulatório não encontrado)<br> 500 (erro no servidor)|


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<H3>URL-base/servicos</h3>



| Métodos | Rotas | Recursos |
| ------- | ----- | -------- |
| GET | '/' | Retorna todos os serviços. |
| POST | '/cadastrar' | Cadastra um novo serviço. Requer autenticação. |
| POST | '/buscar' | Retorna os serviços filtrados por cidade |
| POST | '/criadosPor' | Retorna os serviços criados por um usuário específico. Requer autenticação. |
| PATCH | '/atualizar' | Atualiza as informações de um serviço específico. Requer autenticação. |
| PATCH | '/atualizar/:id' | Atualiza as informações de um serviço específico. Requer autenticação. |
| DELETE | '/deletar' | Apaga definitivamente as informações de um serviço específico. Requer autenticação. |
| DELETE | '/deletar/:id' | Apaga definitivamente as informações de um serviço específico. Requer autenticação. |



<H3> Especificações das rotas "/servicos" </h3>



| Método | Body  | Header | Códigos de resposta HTTP |
| ------ | ----- | ------ | ------------------- |
| GET  '/' | - |  -  | 200 (OK)<br> 500 (erro no servidor)|
| POST '/cadastrar' | {'nome': 'nome do local',<br> 'tipoDeServico': 'serviço ofertado',<br> 'cidade': 'cidade do serviço',<br> 'bairro': 'bairro do serviço', <br>'logradouro': 'logradouro do serviço',<br> 'numero': 'numero do endereço',<br>'horarioFuncionamento': 'horário de funcionamento do serviço',<br> 'observações': 'observações opcionais',<br> 'criadoPor': 'e-mail do usuário que está autenticado' } |  Baerer Token   | 201 (OK)<br> 209 (ambulatório já cadastrado)<br> 401 (não autorizado)<br> 500 (erro no servidor)| 
| POST '/buscar' | {'cidade': 'nome da cidade'} |  -  | 200 (OK)<br> 404 (nenhum item corresponde a pesquisa)<br> 500 (erro no servidor)|
| POST '/criadosPor' | {'usuario': 'email do usuário'} |  Baerer Token  | 200 (OK)<br> 401 (não autorizado)<br> 500 (erro no servidor)|
| PATCH '/atualizar' |  {'nome': 'nome do serviço', <br>'tipoDeServiço': 'serviço ofertado', <br> 'cidade': 'cidade do serviço',<br> 'bairro': 'bairro do serviço', <br>'logradouro': 'logradouro do serviço',<br> 'numero': 'numero do endereço',<br>'horarioFuncionamento': 'horário de funcionamento do serviço', <br> 'observações': 'observações são opcionais'}<br><h6>//O nome do serviço é obrigatório, dos demais, apenas os parâmetros que irão ser alterados<br> precisam ser enviados no body |  Baerer Token  | 200 (OK)<br> 401 (não autorizado)<br> 404 (serviço não encontrado)<br> 500 (erro no servidor)|
| PATCH '/atualizar/:id' |  {_id': 'id do serviço',<br>'tipoDeServiço': 'serviço ofertado',<br>'cidade': 'cidade do serviço',<br> 'bairro': 'bairro do serviço', <br>'logradouro': 'logradouro do serviço',<br> 'numero': 'numero do endereço',<br>'horarioFuncionamento': 'horário de funcionamento do serviço',  <br> 'observações': 'observações são opcionais'}<br><h6>//O id do serviço é obrigatório e não é alterável, dos demais, apenas os parâmetros que irão ser alterados<br> precisam ser enviados no body |  Baerer Token  | 200 (OK)<br> 401 (não autorizado)<br> 404 (serviço não encontrado)<br> 500 (erro no servidor)|
| DELETE '/deletar' | {'nome': 'nome do serviço'} |  Baerer Token  | 200 (OK)<br> 401 (não autorizado),<br> 404 (serviço não encontrado)<br> 500 (erro no servidor)|
| DELETE '/deletar/:id' | {'id': 'id do serviço'} |  Baerer Token  | 200 (OK)<br> 401 (não autorizado),<br> 404 (serviço não encontrado)<br> 500 (erro no servidor)|




----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<H2>URL-base/especialidadesBaixoCusto</h2>



| Métodos | Rotas | Recursos |
| ------- | ----- | -------- |
| GET | '/' | Retorna todos os profissionais. |
| POST | '/cadastrar' | Cadastra um novo profissional. Requer autenticação. |
| POST | '/buscar' | Retorna os profissionais filtrados por cidade e especialidade |
| POST | '/criadosPor' | Retorna os profissionais cadastrados por um usuário específico. Requer autenticação. |
| PATCH | '/atualizar' | Atualiza as informações de um profissional específico. Requer autenticação. |
| DELETE | '/deletar' | Apaga definitivamente as informações de um profissional específico. Requer autenticação. |




<H3> Especificações das rotas "/servicos" </h3>



| Método | Body  | Header | Códigos de resposta HTTP |
| ------ | ----- | ------ | ------------------- |
| GET  '/' | - |  -  | 200 (OK)<br> 500 (erro no servidor)|
| POST '/cadastrar' | {'nomeProfissional': 'nome do profissional',<br> 'especialidade': 'especialidade do profissional de saúde', <br> 'cidade': 'cidade',<br> 'bairro': 'bairro', <br>'logradouro': 'logradouro',<br> 'numero': 'numero do endereço',<br>'horarioFuncionamento': 'horário de atendimento',<br> 'observações': 'observações opcionais',<br> 'criadoPor': 'e-mail do usuário que está autenticado' } |  Baerer Token   | 201 (OK)<br> 209 (profissional já cadastrado)<br> 401 (não autorizado)<br> 500 (erro no servidor)| 
| POST '/buscar' | {'cidade': 'nome da cidade',<br> 'especialidade': 'especialidade desejada'} |  -  | 200 (OK)<br> 404 (nenhum item corresponde a pesquisa)<br> 500 (erro no servidor)|
| POST '/criadosPor' | {'usuario': 'email do usuário'} |  Baerer Token  | 200 (OK)<br> 401 (não autorizado)<br> 500 (erro no servidor)|
| PATCH '/atualizar' |  {'nomeProfissional': 'nome do profissional', <br>'especialidade': 'especialidade do profissional de saúde', <br> 'cidade': 'cidade',<br> 'bairro': 'bairro', <br>'logradouro': 'logradouro',<br> 'numero': 'numero do endereço',<br>'horarioFuncionamento': 'horário de atendimento', <br> 'observações': 'observações são opcionais'} <br><h6>//O nome do profissional é obrigatório, dos demais, apenas os parâmetros que irão ser alterados<br> precisam ser enviados no body |  Baerer Token  | 200 (OK)<br> 401 (não autorizado)<br> 404 (profissional não encontrado)<br> 500 (erro no servidor)|
| DELETE '/deletar' | {'nome': 'nome do profissional'} |  Baerer Token  | 200 (OK)<br> 401 (não autorizado)<br> 404 (profissional não encontrado)<br> 500 (erro no servidor)|



