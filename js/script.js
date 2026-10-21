const ITEMS={
 "01":"Rotina de Chegada","02":"Como Saber em Qual Etapa Está o Processo","03":"Recepção de Comprovante de Pagamento","04":"Textos Padrão para E-mail de Comprovante","05":"Responder E-mail de Comprovante (Split)","06":"E-mails que Não Necessitam Resposta",
 "07":"Fluxo Completo do Processo","08":"Pagamento de Oficina Indicada","09":"Pagamento de Adiantamento de Oficina","10":"Recepção de NF e Termo de Entrega","11":"Finalização de Processos","12":"Recepção de Processo da RRX","13":"Quando For Necessário Descontar Valor","14":"Termo de Acordo Construtivo","15":"Odara Consultoria & Sindicância","16":"Attos — Mega e Split","17":"Mega Mais | Processos Irregulares",
 "18":"Veículo Mega","19":"Passo a Passo — Projeção","20":"Eletro Chaves (Fabinho Chaveiro)","21":"Pagamento de Peças de RRON","22":"Reembolso de Chave","23":"Reembolso GNV Roubado","24":"Controle no WhatsApp e Boleto Checkrápido","25":"Ação de Regresso","26":"Reembolso de Franquia","27":"Reembolso de Tanque","28":"Pagamento da Franquia","29":"Carbigdata Tecnologia","30":"Reembolso de Peças","31":"Pagamento pelo Bot","QP":"Qual planilha usar"
};
const PARTS=[
 {k:"Parte I",t:"Rotina, Comunicação e Referência"},
 {k:"Parte II",t:"Fluxo Geral do Processo"},
 {k:"Parte III",t:"Tipos de Processo e Fornecedores"}
];
/* a alternativa correta é sempre a primeira em "o"; a ordem é embaralhada na tela */
const Q=[
// ---------- PARTE I ----------
{p:0,i:"01",q:"Ao chegar no setor, qual é a prioridade da rotina?",o:["Verificar os pagamentos programados para o dia, separar, dar para a Raquel assinar e levar ao financeiro","Finalizar os processos que estão na Caixa Box","Responder todos os e-mails automáticos da Split","Atualizar a planilha de Feedback com os processos do dia anterior"],e:"A rotina de chegada começa pelos pagamentos do dia: checar, separar, levar para a Raquel assinar e entregar ao financeiro."},
{p:0,i:"01",q:"Você pegou um processo que não tem Nota Fiscal nem Termo de Entrega. O que fazer?",o:["Colocar na prateleira de \"Pagamentos Realizados\" e aguardar os documentos chegarem","Finalizar normalmente e registrar no Perdas que faltam os documentos","Devolver o processo para a Juliana","Guardar o processo direto na Caixa Box"],e:"Sem os dois documentos o processo não é finalizado. Ele fica na prateleira de Pagamentos Realizados até a NF e o Termo chegarem."},
{p:0,i:"02",q:"Você encontrou uma informação registrada no Perdas. O que isso indica e onde o processo está?",o:["Processo aguardando pagamento, na Caixa Box","Processo pronto para finalizar, em \"Para Finalizar\"","Pagamento parcial feito, em \"Pagamentos Realizados\"","Processo excluído, na planilha de Feedback"],e:"Pelo guia rápido: informação registrada no Perdas = processo aguardando pagamento, localizado na Caixa Box."},
{p:0,i:"02",q:"Chegou um e-mail com \"Reparos Realizados\". O que isso significa?",o:["NF e Termo chegaram e o processo está pronto para finalizar (\"Para Finalizar\")","O adiantamento de 50% já foi pago","A oficina ainda está fazendo os reparos","O processo deve voltar para a Juliana"],e:"E-mail com \"Reparos Realizados\" indica que NF e Termo chegaram. O processo está em \"Para Finalizar\"."},
{p:0,i:"02",q:"No processo consta \"Adiantamento\". Onde ele deve estar?",o:["Em \"Pagamentos Realizados\", aguardando NF e Termo","Na Caixa Box, já finalizado","Em \"Para Finalizar\"","Na pasta para a Raquel assinar"],e:"Consta adiantamento = pagamento parcial já feito, aguardando NF e Termo, na prateleira de Pagamentos Realizados."},
{p:0,i:"03",q:"Como o comprovante de pagamento deve ser salvo?",o:["Na pasta \"Comprovante\", com o nome do associado/terceiro (ex.: Comprovante Thaynara Ambrosio)","Na pasta do mês, com o número da NF","Na pasta \"Comprovante\", com a placa do veículo","Na área de trabalho, com a data do pagamento"],e:"O comprovante é baixado e salvo na pasta \"Comprovante\" com o nome do associado ou terceiro."},
{p:0,i:"03",q:"Antes de gerar o e-mail de confirmação do comprovante, o que precisa ser verificado no processo?",o:["Se o pagamento é adiantamento ou valor restante","Se a oficina é Recami ou Castor","Se o associado tem kit gás","Se o processo já está no Feedback"],e:"Ser adiantamento ou valor restante define o conteúdo do e-mail."},
{p:0,i:"03",q:"Sobre as exceções no envio do comprovante (Sindicância, Perícia e RRX), qual afirmação está correta?",o:["Nos três casos, o e-mail para o financeiro continua obrigatório","Na RRX, o comprovante é enviado normalmente para a oficina","Na Perícia, não é preciso avisar o financeiro","Na Sindicância, o comprovante é encaminhado para a empresa sindicante"],e:"Sindicância e Perícia não recebem o comprovante. Na RRX não se encaminha e-mail, só se lança na projeção. Mas o e-mail para o financeiro continua obrigatório nos três casos."},
{p:0,i:"03",q:"Depois de tratar o comprovante, o que precisa ser feito na Projeção?",o:["Marcar como PAGO e retirar do A PAGAR","Excluir a linha do processo","Registrar \"Finalizado dia XX/XX/XXXX\"","Lançar o valor na próxima data disponível"],e:"O passo 5 é marcar como PAGO e retirar do A PAGAR. É fácil de esquecer e deixa a projeção desatualizada."},
{p:0,i:"03",q:"Qual é o assunto padrão do e-mail de comprovante?",o:["MEGA ASSOCIAÇÃO - COMPROVANTE DE PAGAMENTO - VEÍCULO: [MODELO] - PLACA: [PLACA]","COMPROVANTE - [NOME DO ASSOCIADO] - [VALOR]","MEGA SEGUROS - PAGAMENTO REALIZADO - [PLACA]","VEÍCULO: [MODELO] - PLACA: [PLACA]"],e:"\"VEÍCULO: [MODELO] - PLACA: [PLACA]\" é o assunto do e-mail de finalização. O de comprovante começa com \"MEGA ASSOCIAÇÃO - COMPROVANTE DE PAGAMENTO\"."},
{p:0,i:"03",q:"Quando o pagamento é referente a um acordo, para quem vai o e-mail de confirmação?",o:["Para o associado/terceiro","Para a oficina","Para a Split","Somente para a Raquel"],e:"Pagamentos de reparo vão para a oficina; acordo vai para o associado/terceiro. O financeiro sempre recebe a confirmação, e se for terceiro inclui nome e placa do terceiro."},
{p:0,i:"04",q:"No texto padrão de Reembolso Kit Gás, qual percentual é informado?",o:["70%","50%","100%","30%"],e:"O modelo diz: \"comprovante de pagamento referente ao reembolso de 70% do kit gás do veículo supracitado\"."},
{p:0,i:"04",q:"O e-mail padrão de Encerramento de Processo deve ir com quais anexos?",o:["NF, Termo de Entrega do Veículo e Autorização Financeira","NF, CNH e comprovante bancário","Termo de Acordo, CRLV e orçamento","Somente o comprovante de pagamento"],e:"Texto 4: \"Segue em anexo: NF, Termo de Entrega do Veículo e Autorização Financeira.\""},
{p:0,i:"05",q:"Qual destes dados NÃO faz parte do modelo padrão de resposta ao e-mail de comprovante da Split?",o:["Número da apólice","Placa","Valor","Segurado / Terceiro"],e:"O modelo traz tipo do pagamento, segurado/terceiro, veículo, placa, valor e \"Split\". Número da apólice não entra."},
{p:0,i:"06",q:"Qual destes e-mails pode ser apenas lido e arquivado, sem resposta?",o:["Split Risk Seguradora: \"Acompanhe sua solicitação em Solicitação Pagamento Enterprise\"","Oficina enviando NF e Termo de Entrega","Mega Mais | Processos Irregulares","Attos enviando NF de perícia"],e:"Confirmações de recepção, agendamentos, acompanhamento da Split, cancelamento de nota e confirmações automáticas de pagamento são só informativos."},
// ---------- PARTE II ----------
{p:1,i:"07",q:"Qual é a primeira etapa do fluxo completo de um processo?",o:["Aguardar a Juliana entregar o processo físico junto com a autorização inicial","Fazer o adiantamento de 50%","Enviar mensagem padrão para a oficina","Lançar o valor total na projeção"],e:"Nenhuma ação começa sem o processo físico e a autorização inicial em mãos."},
{p:1,i:"07",q:"No adiantamento de 50%, qual é a ação correta para Split e para Mega?",o:["Split: subir o pagamento no sistema · Mega: lançar o valor na projeção","Split: lançar na projeção · Mega: subir no sistema da Split","Split e Mega: entregar direto ao financeiro","Split: enviar por WhatsApp · Mega: subir no Pipefy"],e:"Split sobe no sistema; Mega lança na projeção. Depois, encaminhar o e-mail do valor e guardar em Pagamentos Realizados."},
{p:1,i:"07",q:"A NF chegou, mas o Termo de Entrega ainda não. O processo avança?",o:["Não. Os dois documentos precisam chegar juntos","Sim, desde que a NF esteja correta","Sim, se for oficina Mega","Sim, registrando a falta do termo no Perdas"],e:"NF sem Termo (ou o contrário) não avança. O processo continua na prateleira aguardando."},
{p:1,i:"08",q:"Para pagar uma oficina indicada, quais três itens o processo precisa ter obrigatoriamente?",o:["Dados bancários da oficina, termo de autorização assinado e informação se será 50% ou integral","CNH do associado, CRLV e orçamento da regulagem","NF, Termo de Entrega e comprovante bancário","Contrato social da oficina, procuração e boleto"],e:"Sem dados bancários, termo assinado e definição do tipo de pagamento, o processo não segue."},
{p:1,i:"08",q:"Na mensagem padrão para a oficina indicada, quantos dias úteis são necessários para agendar o pagamento após a NF?",o:["3 dias úteis","2 dias úteis","15 dias úteis","30 dias corridos"],e:"\"Precisamos de 3 dias úteis para agendar o pagamento.\""},
{p:1,i:"08",q:"Segundo a mensagem padrão, em que período do mês não é possível fazer pagamentos?",o:["Do dia 25 até o último dia do mês","Do dia 1 ao dia 5","Entre os dias 10 e 15","Somente no último dia útil do mês"],e:"Do dia 25 até o último dia de cada mês o sistema está em fechamento."},
{p:1,i:"09",q:"Qual título deve ir na autorização financeira de adiantamento de oficina?",o:["PAGAMENTO DE ADIANTAMENTO","ADIANTAMENTO 50%","PAGAMENTO DE REPAROS","AUTORIZAÇÃO INICIAL"],e:"O título padrão é \"PAGAMENTO DE ADIANTAMENTO\"."},
{p:1,i:"09",q:"Calcule o adiantamento:",c:"Associado · Valor líquido da autorização inicial: R$ 8.000,00 · Cota de participação: R$ 1.500,00",o:["Valor total R$ 9.500,00 · Adiantamento R$ 4.000,00","Valor total R$ 8.000,00 · Adiantamento R$ 4.750,00","Valor total R$ 6.500,00 · Adiantamento R$ 3.250,00","Valor total R$ 9.500,00 · Adiantamento R$ 4.750,00"],e:"Valor total = cota + valor mega (1.500 + 8.000 = 9.500). Valor mega = líquido (8.000). Adiantamento = valor mega ÷ 2 = 4.000. A cota não entra na divisão."},
{p:1,i:"09",q:"Se o processo é de terceiro, como fica o valor total da autorização de adiantamento?",o:["Somente o valor líquido","Cota + valor líquido","Valor bruto da regulagem","Metade do valor bruto"],e:"Para associado: cota + valor mega. Para terceiro: somente o valor líquido."},
{p:1,i:"09",q:"Qual anexo é obrigatório no adiantamento de oficina?",o:["Orçamento da regulagem","CRLV do veículo","Termo de Entrega","Comprovante bancário do associado"],e:"Sem o orçamento da regulagem anexado, o processo não segue."},
{p:1,i:"09",q:"Processo da oficina Recami com valor líquido de R$ 12.000,00. O que fazer?",o:["Não faz adiantamento: guardar na Caixa Box e pagar o valor integral quando tiver Termo de Entrega e NF","Fazer o adiantamento de 50% normalmente","Pagar em até 2 dias úteis após a NF","Fazer adiantamento de 30%"],e:"Recami só recebe adiantamento se o líquido for acima de R$ 15.000,00."},
{p:1,i:"09",q:"Qual oficina tem pagamento em até 2 dias úteis após a recepção da NF?",o:["Castor","Recami","Vitor Alex","Eletro Chaves"],e:"Castor: pagamento em até 2 dias úteis após recepcionar a NF. (Eletro Chaves tem prazo de 72 horas.)"},
{p:1,i:"10",q:"Como identificar se a NF é da Mega ou da Split?",o:["Rio Vamos Associação = Mega · Split Risk Seguradora = Split","Rio Vamos Associação = Split · Split Risk Seguradora = Mega","Pelo valor: acima de R$ 15 mil é Split","Pela oficina: oficina indicada é sempre Mega"],e:"Rio Vamos → MEGA; Split Risk Seguradora → SPLIT. Se estiver incorreta, pedir correção."},
{p:1,i:"10",q:"Em quanto tempo as notas devem ser analisadas para não gerar custos?",o:["Até 24 horas","Até 72 horas","Até 3 dias úteis","Até 30 dias"],e:"Analisar as notas em até 24h para não gerar custos."},
{p:1,i:"10",q:"Ao recepcionar NF e Termo por e-mail, qual previsão de pagamento é informada?",o:["30 dias a partir da emissão da NF","30 dias a partir do recebimento do e-mail","15 dias úteis a partir da assinatura do GOV","3 dias úteis a partir da NF"],e:"Ex.: NF emitida em 27/05/2026 → pagamento previsto para 27/06/2026."},
{p:1,i:"10",q:"Calcule o valor a pagar:",c:"Reparo inicial líquido: R$ 6.000,00 · Complemento: R$ 1.000,00 · Cota de participação: R$ 1.200,00 · Adiantamento já pago: R$ 3.000,00",o:["R$ 4.000,00","R$ 5.200,00","R$ 7.000,00","R$ 2.800,00"],e:"Total do Termo = 1.000 + 6.000 + 1.200 = 8.200. Valor Mega = 8.200 − 1.200 = 7.000. A pagar = 7.000 − 3.000 = 4.000."},
{p:1,i:"10",q:"O que deve ser adicionado na autorização financeira na recepção de NF e Termo?",o:["Número da NF e data de emissão","Número da apólice e CNH","Placa e chassi","Data do evento e nome do perito"],e:"Além de alterar o valor total conforme o cálculo, adicionar o número da NF e a data de emissão."},
{p:1,i:"10",q:"Qual valor é registrado no Hinova?",o:["Sempre o valor líquido","Sempre o valor bruto","O valor do adiantamento","O valor total com a cota"],e:"No Hinova o valor registrado é sempre o líquido. Se necessário, alterar."},
{p:1,i:"10",q:"Quais dados vão na planilha \"Notas Fiscais a Pagar 2026\"?",o:["Número da NF, data de emissão e placa do associado/terceiro","Nome da oficina, valor e data do pagamento","Placa, cota e valor líquido","Número da apólice e data do evento"],e:"NF, data de emissão e placa."},
{p:1,i:"10",q:"No Contato de Satisfação, qual data de autorização de reparos deve ser usada?",o:["A da autorização de reparo inicial","A da autorização de complemento","A da emissão da NF","A da entrega do veículo"],e:"A data a usar é a da autorização de reparo inicial."},
{p:1,i:"11",q:"Qual é a ordem correta dos documentos dentro do plástico do processo?",o:["Comprovantes (por data, com a autorização) → NF → Termo de Entrega → Autorização Inicial → Complemento → Contato de Satisfação","NF → Termo de Entrega → Comprovantes → Autorização Inicial → Contato de Satisfação → Complemento","Autorização Inicial → Complemento → NF → Termo → Comprovantes → Contato de Satisfação","Contato de Satisfação → Comprovantes → Autorização Inicial → NF → Termo → Complemento"],e:"E nenhum documento é furado: tudo vai dentro do plástico."},
{p:1,i:"11",q:"Para qual e-mail vai a finalização com NF, Termo e autorizações escaneadas?",o:["notas.financeiro23@gmail.com","financeiro@megaprotecaoveicular.com.br","notas@splitrisk.com.br","O e-mail da oficina"],e:"Sempre usar notas.financeiro23@gmail.com. Não enviar para outro endereço."},
{p:1,i:"11",q:"Processo com adiantamento + complemento. Quantos registros podem ir no Perdas na finalização?",o:["Um registro por pagamento, podendo chegar a 2 ou até 4 entradas","Sempre um único registro","Exatamente 2 registros","Nenhum, só o Hinova"],e:"Um registro por pagamento. Depois, copiar tudo do Perdas e colar no Hinova para finalizar."},
{p:1,i:"11",q:"Na planilha \"Notas Fiscais de Oficinas Pagas pela Mega 2026\", aba \"Notas Fiscais Pagas em Geral\", qual data é usada?",o:["Data do evento de colisão","Data do pagamento","Data de emissão da NF","Data da entrega do veículo"],e:"Nunca lançar pela data de pagamento. Sempre pela data do evento de colisão. (A aba \"NFs Pagas\" usa o mês do processo.)"},
{p:1,i:"11",q:"A data de entrega no Contato de Satisfação está em branco. O que fazer?",o:["Imprimir e colocar dentro do processo mesmo assim","Aguardar a data ser preenchida para finalizar","Não imprimir e registrar no Perdas","Preencher com a data da NF"],e:"Imprimir e colocar no processo mesmo que a data esteja em branco."},
{p:1,i:"12",q:"Na recepção de processo da RRX, qual valor vai na autorização financeira?",o:["O valor líquido da regulagem","O valor bruto da regulagem","50% do valor líquido","O valor da cota"],e:"Usar sempre o valor líquido, não o bruto."},
{p:1,i:"12",q:"Como a RRX é paga na Split?",o:["Pelo valor integral, após o financeiro enviar a NF","Com adiantamento de 50% e restante na NF","Em 3 parcelas","Pela Mega, direto no financeiro"],e:"Pagamento integral é uma regra exclusiva da RRX. Na autorização entram o número da NF e o número da apólice (pela data do evento)."},
{p:1,i:"12",q:"Como o processo da RRX chega ao financeiro para emissão da NF?",o:["Via WhatsApp","Pelo e-mail notas.financeiro23@gmail.com","Pelo site da Split","Entregue em mãos pela Juliana"],e:"Encaminhar via WhatsApp para o financeiro emitir a NF."},
{p:1,i:"12",q:"O Termo de Entrega da RRX não foi localizado. O que fazer?",o:["Finalizar mesmo assim e registrar no Perdas a observação (ex.: \"Termo não localizado no e-mail\")","Manter o processo aberto até o termo chegar","Devolver o processo para a RRX","Excluir o processo do Perdas"],e:"Finaliza assim mesmo, com a observação registrada no Perdas."},
{p:1,i:"13",q:"No fluxo de desconto de valor, depois do pagamento integral pela Split (RRX), como segue o tratamento?",o:["Tudo passa a ser tratado pela Mega e não volta para a Split","Volta para a Split no pagamento do restante","O adiantamento é pela Split e o restante pela Mega","Fica com a RRX até a NF chegar"],e:"Após o valor integral pela Split, uma nova autorização é feita para a Mega, e tudo segue pela Mega."},
{p:1,i:"13",q:"Houve dedução por erro de procedimento ou venda de veículo. Onde registrar?",o:["Planilha de Controle de Devedores","Vidros e Pequenos Reembolsos 2026","Planilha de Feedback","Projeção de Acordo"],e:"Toda dedução é registrada no Controle de Devedores, que tem uma aba por devedor/oficina."},
{p:1,i:"14",q:"Acordo Construtivo pela Split: quais documentos são obrigatórios no site?",o:["CRLV, Termo de Acordo assinado e orçamento da regulagem","CNH, comprovante bancário e NF","Autorização inicial original, CNH e xerox","Boleto, NF e procuração"],e:"Os três são obrigatórios. Sem um deles o pagamento não segue."},
{p:1,i:"14",q:"Como calcular a previsão de pagamento de um Acordo Construtivo?",o:["A partir da assinatura do GOV: 15 dias úteis (padrão) ou 7 dias úteis quando aplicável","30 dias corridos a partir da emissão da NF","72 horas após a assinatura","Sempre no dia 10 ou 15 do mês"],e:"Dias úteis, não corridos. Se vier da matriz, contar a partir da autenticação ou da data de recebimento no Hinova."},
{p:1,i:"14",q:"Acordo Mega: o que é entregue ao financeiro e o que fica com você?",o:["Financeiro recebe autorização original, CNH e comprovante bancário; você fica com a xerox e o processo físico","Financeiro recebe o processo físico; você fica com a autorização original","Tudo fica com o financeiro","Financeiro recebe a xerox; você fica com a original"],e:"Na projeção, registrar \"Entregue ao financeiro dia XX/XX/XXXX\" e cobrar o comprovante no dia do pagamento."},
{p:1,i:"15",q:"Odara pela Split: como preencher a Chave PIX no formulário?",o:["TRATA-SE DE PAGAMENTO POR BOLETO","Deixar em branco","CNPJ da Odara","0000"],e:"Campos fixos: Tipo = Despesas Diretas (Peritos, Sindicantes...), Chave PIX = TRATA-SE DE PAGAMENTO POR BOLETO, Agência = 0000, Conta = 000000, banco conferido no boleto."},
{p:1,i:"15",q:"Qual a forma de pagamento da Odara Consultoria?",o:["Sempre boleto","Sempre PIX","Transferência bancária","Depende da oficina"],e:"Pagamento é sempre feito por boleto, conferindo os dados antes de seguir."},
{p:1,i:"16",q:"A data de vencimento do boleto da Attos cai num sábado. O que fazer?",o:["Antecipar o pagamento","Pagar na segunda-feira seguinte","Pedir novo boleto","Lançar na próxima projeção"],e:"Nunca deixar vencer em dia não útil sem antecipar."},
{p:1,i:"16",q:"O que significa \"Acatado\" na Attos?",o:["A Attos acatou a irregularidade, não prossegue com o ressarcimento e recebe o bônus","A Attos não acatou a irregularidade e vai ressarcir o segurado","O pagamento foi aprovado pela Split","O processo foi para sindicância"],e:"Acatado: Attos recebe o bônus. Não Acatado: Attos prossegue com o ressarcimento e não recebe o bônus."},
{p:1,i:"17",q:"Mega Mais | Processos Irregulares: o status \"Aguardando entrega do Check LI\" significa:",o:["Acatado, vai ser indenizado","Aguardando parecer","Negado","Em sindicância"],e:"\"Aberto\" = aguardando parecer; \"Sindicância\" = perguntar a quem é responsável. Se for roubo, informar que não possui orçamento."},
// ---------- PARTE III ----------
{p:2,i:"18",q:"Qual é o ponto principal do Veículo Mega?",o:["Não sobe para a Split: o processo vai direto para o financeiro","Sobe para a Split como acordo","É pago sempre de forma integral","É pago em até 72 horas"],e:"Veículo Mega tem fluxo simplificado, sem Split e sem upload em site."},
{p:2,i:"18",q:"Já existe um documento salvo como \"VEÍCULO MEGA TUW3E05\". Como salvar a nova autorização de R$ 3.500?",o:["VEÍCULO MEGA - TUW3E05 - 3500","VEÍCULO MEGA TUW3E05 (2)","TUW3E05 - VEÍCULO MEGA - NOVO","3500 - VEÍCULO MEGA"],e:"Padrão: VEÍCULO MEGA + placa. Se já existir: incluir valor + placa."},
{p:2,i:"18",q:"Veículo Mega com valor alto e dúvida se é integral ou adiantamento. O que fazer?",o:["Perguntar para a Raquel antes de seguir","Fazer integral","Fazer adiantamento de 50%","Subir para a Split"],e:"Não assumir que é integral. Em caso de dúvida, sempre confirmar com a Raquel."},
{p:2,i:"18",q:"Quais são as datas padrão da projeção Mega?",o:["Dia 10 e dia 15","Dia 5 e dia 20","Dia 1 e dia 15","Último dia útil do mês"],e:"Colocar sempre na próxima projeção: dias 10 e 15."},
{p:2,i:"19",q:"Há uma negociação de oficina ainda aberta no atendimento. Como tratar na projeção?",o:["Colocar uma data fictícia para reservar o espaço","Esperar fechar para lançar","Lançar só na projeção do mês seguinte","Lançar no Perdas"],e:"Checar com as meninas do atendimento e reservar o espaço com data fictícia."},
{p:2,i:"19",q:"Na projeção de oficina, qual valor é lançado?",o:["Valor bruto (cheio) da regulagem","Valor líquido","Valor do adiantamento","Valor da cota"],e:"Quando for oficina, colocar o valor bruto (cheio) da regulagem."},
{p:2,i:"19",q:"Com quantos dias úteis de antecedência os pagamentos precisam ser lançados no sistema?",o:["No mínimo 3 dias úteis","1 dia útil","5 dias corridos","Até o dia anterior"],e:"Fins de semana e feriados não contam. Para pagar no dia 10, enviar nos dias 8 ou 9 já é tarde."},
{p:2,i:"19",q:"Sobre os totais da projeção, qual afirmação está correta?",o:["Somar o total do dia 10 e do dia 15 da Mega; a Split não precisa de soma total","Somar o total da Split e da Mega juntos","Somar apenas a Split","Não é preciso somar totais"],e:"Totais só para a Mega (dia 10 e dia 15)."},
{p:2,i:"19",q:"Quem assina a projeção antes de entregar ao financeiro?",o:["Rayane ou Raquel","Juliana","Michelle","Pamela"],e:"Salvar na pasta de projeção, aguardar assinatura da Rayane ou Raquel e entregar ao financeiro."},
{p:2,i:"20",q:"Eletro Chaves (Fabinho Chaveiro) entra como qual tipo e qual o prazo?",o:["Como oficina, com prazo de 72 horas","Como acordo, com prazo de 15 dias úteis","Como reembolso, com prazo de 30 dias","Como sindicância, por boleto"],e:"Entra como oficina e não precisa aguardar os 30 dias. Pela Split, anexar a NF no site."},
{p:2,i:"21",q:"Pagamentos de peças de RRON são:",o:["Sempre Mega","Sempre Split","Mega ou Split, conforme o veículo","Pagos pela RRX"],e:"Peças RRON: sempre Mega, próxima projeção e entrega ao financeiro no dia do pagamento."},
{p:2,i:"22",q:"Quais documentos são pedidos no Reembolso de Chave?",o:["NF ou recibo da chave, CNH e comprovante bancário","CRLV, Termo de Acordo e orçamento","Selo GNV, CSV e certificado de inspeção","Formulário de reembolso e procuração"],e:"E confirmar se o valor já não foi coberto por outro processo."},
{p:2,i:"23",q:"Reembolso GNV Roubado: qual regra está correta?",o:["70% do valor da NF (sem teto), em até 15 dias úteis, sem entrar na projeção","50% da NF, em até 30 dias, lançado na projeção","70% da NF com teto de R$ 3.000, em 72 horas","100% da NF, na projeção de acordo"],e:"Lança na planilha de Pequenos Reembolsos, não na projeção."},
{p:2,i:"23",q:"O certificado de inspeção GNV do associado venceu há 20 dias. É aceito?",o:["Sim, é aceito com até 30 dias após o vencimento","Não, precisa estar válido","Sim, sem limite de prazo","Só se o selo GNV estiver válido"],e:"Certificado vencido é aceito com até 30 dias após o vencimento. O selo GNV tem um ano de validade."},
{p:2,i:"23",q:"No Reembolso GNV Roubado, o que verificar no e-mail de Monitoramento de Roubo?",o:["Se o veículo foi recuperado e, se sim, se tem kit gás","A data da NF do kit","O nome do instalador","Se o associado tem ação de regresso"],e:"Essas informações são essenciais antes de autorizar o reembolso."},
{p:2,i:"24",q:"Boleto Checkrápido: como responder o e-mail?",o:["\"Bom dia, Recepcionado\"","Com a previsão de 30 dias","Com o modelo de comprovante da Split","Não precisa responder"],e:"Autorização com número e data de emissão da NF, responder \"Bom dia, Recepcionado\" e levar ao financeiro no dia do pagamento."},
{p:2,i:"24",q:"Quando a mensagem de controle no WhatsApp é enviada?",o:["Quando for entregar pagamento no financeiro, listando as placas do dia","Ao receber cada comprovante","No fim do mês, com o total pago","Ao finalizar cada processo"],e:"\"Somente para controle, seguem as placas encaminhadas para pagamento da Split e Mega no dia...\""},
{p:2,i:"25",q:"Ação de Regresso pela Split: como subir e como lançar na projeção?",o:["Sobe como Acordo; na projeção entra como oficina com a observação \"Ação de Regresso\"","Sobe como oficina; na projeção entra como acordo","Sobe como Despesas Diretas; não entra na projeção","Sobe como Sindicância; entra na projeção de sindicância"],e:"Anexos: acordo, boleto, carta de ressarcimento, procuração e contrato social. Após o pagamento, sempre encaminhar o comprovante por e-mail."},
{p:2,i:"26",q:"Em qual situação ocorre o Reembolso de Franquia?",o:["O nosso segurado foi responsável e o terceiro tem veículo locado, com valor dentro da cobertura de terceiro","O associado pede reembolso da própria franquia","A oficina cobra franquia antecipada","O veículo foi roubado e recuperado"],e:"Ex.: Localiza cobrando R$ 4.000,00 de franquia. O valor de serviço vem depois, na ação de regresso."},
{p:2,i:"26",q:"Nos reembolsos de franquia, tanque e peças, como a autorização inicial precisa estar assinada?",o:["Pelo GOV ou com firma reconhecida","Apenas pela Raquel","Pela oficina","Não precisa de assinatura"],e:"Sem assinatura válida o processo não segue."},
{p:2,i:"27",q:"Em qual planilha são lançados os reembolsos de franquia, tanque e peças?",o:["Vidros e Pequenos Reembolsos 2026","Projeção de Acordo","Notas Fiscais a Pagar 2026","Controle de Devedores"],e:"Os três sobem na Split como Acordo Segurado ou Acordo Terceiro e vão para \"Vidros e Pequenos Reembolsos 2026\"."},
{p:2,i:"28",q:"Pagamento da Franquia em processo Split: como fica?",o:["Separado: a franquia é paga pelo financeiro Mega e os reparos pela Split","Junto com os reparos, tudo pela Split","Junto com os reparos, tudo pela Mega","A franquia é paga pela oficina"],e:"No Split, nunca juntar franquia e reparos. No Mega, segue tudo junto."},
{p:2,i:"29",q:"Carbigdata Tecnologia: qual afirmação está correta?",o:["Sempre Mega, autorização em duas vias assinadas pela Supervisão e pelo Financeiro, entregue só com boleto e NF","Sempre Split, subindo como Despesas Diretas","Mega ou Split, com uma via assinada pela Raquel","Pago em 72 horas como oficina"],e:"Carbigdata é monitoramento por câmeras. 1ª via fica com o financeiro, 2ª via com você."},
{p:2,i:"31",q:"Qual sequência está correta para pagar pelo bot?",o:["Abrir o CMD como administrador → cd C:\\pipefy_bot → py -3.12 preencher_pipefy.py \"nome da autorização.docx\"","Abrir o PowerShell → cd Documentos → python bot.py","Abrir o CMD normal → py preencher_pipefy.py → digitar a placa","Abrir o Pipefy → importar a autorização → clicar em pagar"],e:"O nome entre aspas é o arquivo da autorização que será paga. Trocar sempre antes de executar."},
{p:2,i:"QP",q:"Pela tabela \"Qual planilha usar\", qual é a sequência da finalização padrão?",o:["Perdas → Hinova → Projeção → Notas Fiscais → Contato de Satisfação","Split → Projeção → Perdas → Hinova → Feedback","Projeção → Perdas → Hinova → Caixa Box","Hinova → Perdas → Notas Fiscais → Projeção → Feedback"],e:"Split → Projeção → Perdas → Hinova → Feedback é a sequência do processo RRX."},
{p:2,i:"QP",q:"Segurado com moto (Mega) é registrado em qual Hinova?",o:["Hinova 5360","Hinova 439","Hinova 3484","Hinova 1452"],e:"439 = carro (Split) · 5360 = moto (Mega) · 3484 = Minas Gerais / Sarzedo."}
];

const KEY="prova-cartilha-notas-v1";
let st={order:{},ans:{},done:false,nome:""};
function load(){try{const s=JSON.parse(localStorage.getItem(KEY)||"null");if(s&&s.order)st=s;}catch(e){}}
function save(){try{localStorage.setItem(KEY,JSON.stringify(st));}catch(e){}}
function shuffle(n){const a=[...Array(n).keys()];for(let i=n-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function ensureOrder(){Q.forEach((q,k)=>{if(!st.order[k]||st.order[k].length!==q.o.length)st.order[k]=shuffle(q.o.length);});}
const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const L="ABCD";

function render(){
  const box=document.getElementById("questions");box.innerHTML="";
  let n=0;
  PARTS.forEach((P,pi)=>{
    const sec=document.createElement("section");sec.className="part";
    sec.innerHTML=`<div class="part-head"><span class="k">${P.k}</span><h2>${P.t}</h2></div>`;
    Q.forEach((q,k)=>{
      if(q.p!==pi)return;n++;
      const d=document.createElement("article");d.className="q";d.id="q"+k;
      const itemLbl=q.i==="QP"?"Quadro · Qual planilha usar":`Item ${q.i} · ${ITEMS[q.i]}`;
      let h=`<div class="q-top"><span class="q-num">Questão ${n}</span><span class="q-item">${itemLbl}</span></div>`;
      h+=`<div class="q-text">${esc(q.q)}${q.c?`<span class="case">${esc(q.c)}</span>`:""}</div><div class="opts">`;
      st.order[k].forEach((oi,pos)=>{
        const id=`q${k}o${oi}`;
        h+=`<label class="opt" for="${id}" data-oi="${oi}"><input type="radio" name="q${k}" id="${id}" value="${oi}" ${st.ans[k]===oi?"checked":""}><span class="l">${L[pos]}</span><span class="t">${esc(q.o[oi])}</span></label>`;
      });
      h+=`</div>`;
      d.innerHTML=h;sec.appendChild(d);
    });
    box.appendChild(sec);
  });
  document.getElementById("f-total").textContent=Q.length;
  box.querySelectorAll("input[type=radio]").forEach(r=>r.addEventListener("change",e=>{
    if(st.done){e.preventDefault();return;}
    const k=+r.name.slice(1);st.ans[k]=+r.value;save();progress();
    document.getElementById("q"+k).classList.remove("blank");
  }));
  if(st.done)grade(false);
  progress();
}
function progress(){
  const a=Object.keys(st.ans).length;
  document.getElementById("prog-txt").textContent=st.done?`Prova corrigida · ${a} de ${Q.length} respondidas`:`${a} de ${Q.length} respondidas`;
  document.getElementById("prog-bar").style.width=(a/Q.length*100)+"%";
  const b=document.getElementById("btn-submit");
  b.textContent=st.done?"Refazer prova":"Corrigir prova";
}
function warnBlank(){
  const blanks=Q.map((_,k)=>k).filter(k=>st.ans[k]===undefined);
  const slot=document.getElementById("result-slot");
  slot.innerHTML=`<div class="warnbox"><div><strong>${blanks.length} questão${blanks.length>1?"ões":""} sem resposta.</strong> As questões em branco contam como erradas.</div><div class="row"><button class="btn ghost" type="button" id="go-blank">Ir para a primeira em branco</button><button class="btn" type="button" id="force">Corrigir mesmo assim</button></div></div>`;
  blanks.forEach(k=>document.getElementById("q"+k).classList.add("blank"));
  document.getElementById("go-blank").onclick=()=>{slot.innerHTML="";document.getElementById("q"+blanks[0]).scrollIntoView({behavior:"smooth",block:"center"});};
  document.getElementById("force").onclick=()=>{st.done=true;save();grade(true);progress();};
  slot.scrollIntoView({behavior:"smooth",block:"start"});
}
function grade(scroll){
  document.body.classList.add("done");
  let ok=0;const perPart=[[0,0],[0,0],[0,0]];const miss={};
  Q.forEach((q,k)=>{
    const d=document.getElementById("q"+k);d.classList.add("done");d.classList.remove("blank");
    const a=st.ans[k];const right=a===0;perPart[q.p][1]++;if(right){ok++;perPart[q.p][0]++;d.classList.add("is-ok");}
    else{miss[q.i]=(miss[q.i]||0)+1;}
    d.querySelectorAll("input").forEach(i=>i.disabled=true);
    d.querySelectorAll(".opt").forEach(o=>{
      const oi=+o.dataset.oi;
      if(oi===0){o.classList.add("right");o.insertAdjacentHTML("beforeend",`<span class="tag">Correta</span>`);}
      else if(oi===a){o.classList.add("wrong");o.insertAdjacentHTML("beforeend",`<span class="tag">Sua resposta</span>`);}
    });
    const st2=a===undefined?`<span class="status s-blank">Em branco</span>`:right?`<span class="status s-ok">Acertou</span>`:`<span class="status s-bad">Errou</span>`;
    d.querySelector(".q-top").insertAdjacentHTML("beforeend",st2);
    d.insertAdjacentHTML("beforeend",`<div class="expl"><b>Gabarito comentado.</b> ${esc(q.e)}</div>`);
  });
  const pct=Math.round(ok/Q.length*100);const pass=pct>=70;
  const nome=(document.getElementById("nome").value||"").trim();
  const missList=Object.entries(miss).sort((a,b)=>b[1]-a[1]).map(([i,c])=>`<li>${i==="QP"?"Quadro “Qual planilha usar”":`Item ${i} · ${ITEMS[i]}`} <span style="color:var(--muted)">(${c} erro${c>1?"s":""})</span></li>`).join("");
  document.getElementById("result-slot").innerHTML=`<section class="result" aria-live="polite">
    <div class="top"><div class="score">${pct}<small>%</small></div>
    <div class="verdict"><span class="pill ${pass?"ok":"bad"}">${pass?"Aprovada":"Não atingiu 70%"}</span>
    <p>${nome?esc(nome)+" · ":""}${ok} acertos de ${Q.length} questões.</p></div></div>
    <div class="parts">${PARTS.map((P,i)=>`<div>${P.k} · ${P.t}<b>${perPart[i][0]} / ${perPart[i][1]}</b></div>`).join("")}</div>
    ${missList?`<div class="review"><h3>Itens para revisar na cartilha</h3><ul>${missList}</ul></div>`:`<div class="review"><h3>Gabaritou a prova.</h3></div>`}
    <div class="actions"><button class="btn ghost" type="button" id="only-wrong">Mostrar só as erradas</button><button class="btn" type="button" id="redo">Refazer prova</button></div>
  </section>`;
  document.getElementById("only-wrong").onclick=e=>{const on=document.body.classList.toggle("hideok");e.target.textContent=on?"Mostrar todas":"Mostrar só as erradas";};
  document.getElementById("redo").onclick=redo;
  if(scroll)document.getElementById("result-slot").scrollIntoView({behavior:"smooth",block:"start"});
}
function redo(){
  const nome=st.nome;st={order:{},ans:{},done:false,nome};ensureOrder();save();
  document.body.classList.remove("done","hideok");document.getElementById("result-slot").innerHTML="";
  render();window.scrollTo({top:0,behavior:"smooth"});
}
document.getElementById("btn-submit").onclick=()=>{
  if(st.done){redo();return;}
  if(Object.keys(st.ans).length<Q.length){warnBlank();return;}
  st.done=true;save();grade(true);progress();
};
const nomeEl=document.getElementById("nome");
nomeEl.addEventListener("input",()=>{st.nome=nomeEl.value;save();});
load();ensureOrder();save();nomeEl.value=st.nome||"";render();
