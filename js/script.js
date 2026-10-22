const ITEMS={
 "01":"Rotina de Chegada","02":"Como Saber em Qual Etapa Está o Processo","03":"Recepção de Comprovante de Pagamento","04":"Textos Padrão para E-mail de Comprovante","05":"Responder E-mail de Comprovante (Split)","06":"E-mails que Não Necessitam Resposta",
 "07":"Fluxo Completo do Processo","08":"Pagamento de Oficina Indicada","09":"Pagamento de Adiantamento de Oficina","10":"Recepção de NF e Termo de Entrega","11":"Finalização de Processos","12":"Recepção de Processo da RRX","13":"Quando For Necessário Descontar Valor","14":"Termo de Acordo Construtivo","15":"Odara Consultoria & Sindicância","16":"Attos — Mega e Split","17":"Mega Mais | Processos Irregulares",
 "18":"Veículo Mega","19":"Passo a Passo — Projeção","20":"Eletro Chaves (Fabinho Chaveiro)","21":"Pagamento de Peças de RRON","22":"Reembolso de Chave","23":"Reembolso GNV Roubado","24":"Controle no WhatsApp e Boleto Checkrápido","25":"Ação de Regresso","26":"Reembolso de Franquia","27":"Reembolso de Tanque","28":"Pagamento da Franquia","29":"Carbigdata Tecnologia","30":"Reembolso de Peças","31":"Pagamento pelo Bot","QP":"Qual planilha usar"
};
const PARTS=[
 {k:"Bloco 1",t:"Prazos"},
 {k:"Bloco 2",t:"Montar a Projeção"},
 {k:"Bloco 3",t:"Cálculos: adiantamento, complemento e valor restante"},
 {k:"Bloco 4",t:"NF, Termo e Finalização de Processos"}
];
/* a alternativa correta é sempre a primeira em "o"; a ordem é embaralhada na tela */
const Q=[
// ---------- PARTE 0: PRAZOS ----------
{p:0,i:"19",q:"O pagamento está programado para o dia 10. Você lança no sistema no dia 8. Está no prazo?",o:["Não. Os pagamentos precisam ser lançados com no mínimo 3 dias úteis de antecedência, e dia 8 já é tarde","Sim, porque ainda faltam 2 dias para o pagamento","Sim, desde que a projeção seja assinada no dia 9","Sim, se for pagamento Mega"],e:"Mínimo de 3 dias úteis, sem contar fim de semana e feriado. A própria cartilha dá o exemplo: para pagar no dia 10, enviar nos dias 8 ou 9 já é tarde demais."},
{p:0,i:"10",q:"A NF foi emitida em 12/06/2026, mas só chegou no seu e-mail em 20/06/2026. Qual previsão de pagamento você informa?",o:["12/07/2026","20/07/2026","15/06/2026","02/07/2026"],e:"A previsão é de 30 dias a partir da EMISSÃO da NF, não da data em que ela chegou. A pegadinha é contar a partir do recebimento."},
{p:0,i:"14",q:"Acordo Construtivo com prazo padrão. O GOV foi assinado na segunda-feira, 03/08/2026, e não há feriados no período. Qual a previsão de pagamento?",o:["24/08/2026","18/08/2026","14/08/2026","02/09/2026"],e:"São 15 dias ÚTEIS a partir da assinatura do GOV. 18/08 seria contando 15 dias corridos, e esse é o erro mais comum. Se vier da matriz, conta a partir da autenticação (ou da data de recebimento no Hinova)."},
{p:0,i:"08",q:"Hoje é dia 26 e a oficina pergunta se o valor restante pode ser pago amanhã. O que você responde?",o:["Não é possível: do dia 25 até o último dia do mês o sistema está em fechamento","Sim, desde que a NF chegue hoje","Sim, se for oficina Castor","Sim, se for pagamento pela Split"],e:"A mensagem padrão para a oficina indicada já avisa: do dia 25 até o último dia de cada mês não é possível pagar, por causa do fechamento do sistema."},
{p:0,i:"09",q:"Qual combinação de prazos está correta?",o:["Castor: até 2 dias úteis após a NF · Eletro Chaves: 72 horas · Adiantamento de oficina: até 3 dias úteis","Castor: 72 horas · Eletro Chaves: 2 dias úteis · Adiantamento: 30 dias","Castor: 30 dias · Eletro Chaves: 72 horas · Adiantamento: 15 dias úteis","Castor: 3 dias úteis · Eletro Chaves: 30 dias · Adiantamento: 2 dias úteis"],e:"Castor paga em até 2 dias úteis após recepcionar a NF. Eletro Chaves (Fabinho Chaveiro) tem 72h e não espera os 30 dias. O adiantamento de oficina deve ser pago respeitando os 3 dias úteis."},
{p:0,i:"16",q:"O boleto da Attos vence num sábado. O que fazer?",o:["Antecipar o pagamento para um dia útil antes do vencimento","Pagar na segunda-feira seguinte","Pedir um novo boleto à Attos","Lançar para a próxima projeção"],e:"Nunca deixar vencer em dia não útil sem antecipar."},
{p:0,i:"23",q:"Reembolso GNV de veículo roubado. Qual é o prazo e onde ele é lançado?",o:["15 dias úteis a partir da solicitação, lançado em Pequenos Reembolsos (não entra na projeção)","30 dias da NF, lançado na projeção de oficina","72 horas, lançado na projeção de acordo","15 dias corridos, lançado na projeção Mega"],e:"GNV roubado: 70% da NF, sem teto, em até 15 dias úteis. É a pegadinha da projeção, porque esse pagamento NÃO entra nela."},
// ---------- PARTE 1: PROJEÇÃO ----------
{p:1,i:"19",q:"Ao lançar um pagamento de OFICINA na projeção, qual valor você coloca?",o:["O valor bruto (cheio) da regulagem","O valor líquido","O valor que está no Hinova","O valor do adiantamento"],e:"Na projeção de oficina vai o valor BRUTO. A pegadinha é confundir com o Hinova, onde o valor registrado é sempre o LÍQUIDO."},
{p:1,i:"19",q:"O atendimento ainda está negociando um acordo com um terceiro. Como fica a projeção?",o:["Coloca uma data fictícia para reservar o espaço na projeção","Não lança nada até o acordo fechar","Lança na projeção de oficina com o valor bruto","Lança direto como PAGO"],e:"Antes de montar a projeção, checar com as meninas do atendimento as negociações abertas e reservar o espaço com data fictícia."},
{p:1,i:"19",img:"exemplo-real-registros-marcados.jpg",q:"Na projeção de junho aparecem linhas marcadas \"REFERENTE AO MÊS ANTERIOR\", como na imagem. Por que elas estão ali?",o:["São pagamentos do mês anterior que não foram realizados e entram na próxima projeção","São pagamentos já feitos, só para conferência","São processos que devem ser excluídos","São adiantamentos que viraram acordo"],e:"Antes de fechar a projeção, verificar o que não foi pago no mês anterior e incluir na próxima. Também sempre conferir o que já foi pago antes de lançar."},
{p:1,i:"19",q:"Monte o total da Mega para o dia 10:",c:"Moto Mega · dia 10 · R$ 1.199,00\nCarro Mega · dia 10 · R$ 3.500,00\nMoto Mega · dia 15 · R$ 1.185,00\nCarro Split · dia 10 · R$ 4.480,00",o:["R$ 4.699,00","R$ 9.179,00","R$ 5.884,00","R$ 10.364,00"],e:"Entram só os lançamentos Mega do dia 10: 1.199 + 3.500 = 4.699. O valor da Split não entra, porque a Split não precisa de soma total. O da Mega do dia 15 vai no total do dia 15."},
{p:1,i:"19",q:"A programação do pagamento do dia 15 precisa estar pronta até quando?",o:["Antes do dia 14","Antes do dia 15","Antes do dia 10","Até o dia 25"],e:"Dia 10 → pronta antes do dia 9. Dia 15 → pronta antes do dia 14. Às vezes pedem antes, então não deixar para o limite."},
{p:1,i:"19",img:"planilha-real-de-projecao-abas-mensais-e.jpg",q:"Na planilha de Projeção, como os pagamentos de oficina são separados?",o:["Por mês (abas) e por categoria: Moto Mega, Moto Split, Carro Mega e Carro Split","Só por mês, tudo numa tabela única","Por oficina, uma aba para cada","Por associado, em ordem alfabética"],e:"Cada mês tem sua aba, e dentro dela os blocos separados por tipo de veículo e via. Acordo (Mega/Split) e Sindicância (Mega/Split) também têm seus próprios blocos."},
{p:1,i:"19",q:"Depois de montada e somada, quem assina a projeção antes de ir ao financeiro?",o:["Rayane ou Raquel","Somente a Raquel","Juliana","Ninguém, vai direto"],e:"Salvar na pasta de projeção, aguardar a assinatura da Rayane ou da Raquel e entregar ao financeiro."},
// ---------- PARTE 2: CÁLCULOS ----------
{p:2,i:"09",q:"Autorização de adiantamento, ASSOCIADO:",c:"Valor líquido da autorização inicial: R$ 10.000,00\nCota de participação: R$ 2.000,00",o:["Valor total R$ 12.000,00 · Adiantamento R$ 5.000,00","Valor total R$ 12.000,00 · Adiantamento R$ 6.000,00","Valor total R$ 10.000,00 · Adiantamento R$ 4.000,00","Valor total R$ 8.000,00 · Adiantamento R$ 4.000,00"],e:"Valor total = cota + valor Mega (2.000 + 10.000). Valor Mega = líquido. Adiantamento = valor Mega ÷ 2 = 5.000. A pegadinha é dividir o total com a cota (6.000)."},
{p:2,i:"09",q:"Autorização de adiantamento, TERCEIRO:",c:"Valor líquido: R$ 7.400,00\nCota de participação informada no processo: R$ 1.500,00",o:["Valor total R$ 7.400,00 · Adiantamento R$ 3.700,00","Valor total R$ 8.900,00 · Adiantamento R$ 3.700,00","Valor total R$ 8.900,00 · Adiantamento R$ 4.450,00","Valor total R$ 5.900,00 · Adiantamento R$ 2.950,00"],e:"Para terceiro, o valor total é SOMENTE o valor líquido. A cota não entra."},
{p:2,i:"10",q:"Chegaram NF e Termo. Quanto falta pagar?",c:"Reparo inicial líquido: R$ 9.000,00\nCota de participação: R$ 1.500,00\nAdiantamento já pago: R$ 4.500,00\nSem complemento",o:["R$ 4.500,00","R$ 6.000,00","R$ 3.000,00","R$ 10.500,00"],e:"Total do Termo = 9.000 + 1.500 = 10.500. Valor Mega = 10.500 − 1.500 = 9.000. A pagar = 9.000 − 4.500 = 4.500. Esquecer de tirar a cota dá 6.000."},
{p:2,i:"10",q:"Processo com complemento e DOIS adiantamentos. Qual o valor restante?",c:"Reparo inicial líquido: R$ 8.000,00\nComplemento: R$ 2.000,00\nCota de participação: R$ 1.000,00\nAdiantamento 1: R$ 4.000,00\nAdiantamento 2: R$ 1.000,00",o:["R$ 5.000,00","R$ 6.000,00","R$ 4.000,00","R$ 7.000,00"],e:"Total do Termo = 2.000 + 8.000 + 1.000 = 11.000. Valor Mega = 11.000 − 1.000 = 10.000. A pagar = 10.000 − 4.000 − 1.000 = 5.000. A cartilha alerta: sempre verificar se há mais de um adiantamento para subtrair (esquecer o segundo dá 6.000)."},
{p:2,i:"10",q:"Quando o pagamento do complemento é feito?",o:["Quando chega a nota fiscal","Junto com o adiantamento de 50%","Assim que a autorização de complemento é feita","Somente na finalização do processo"],e:"O pagamento de complemento se paga quando chega a nota fiscal."},
{p:2,i:"09",q:"Oficina Recami, valor líquido de exatamente R$ 15.000,00. Faz adiantamento?",o:["Não. Recami só recebe adiantamento ACIMA de R$ 15.000,00, então vai para a Caixa Box e é pago integral com NF e Termo","Sim, porque atingiu R$ 15.000,00","Sim, mas de 30%","Sim, se a Raquel autorizar"],e:"A regra é \"acima de R$ 15.000,00\". Exatamente 15.000 não passa. Abaixo disso: Caixa Box e valor integral quando tiver o Termo de Entrega e a NF."},
{p:2,i:"13",q:"Processo com dedução por erro de procedimento. No pagamento do restante, o que NÃO pode faltar?",o:["Descontar o que já foi pago e registrar a dedução na planilha de Controle de Devedores","Subir o restante de novo pela Split","Lançar a dedução na planilha de Vidros e Pequenos Reembolsos","Pagar o valor cheio e cobrar depois por e-mail"],e:"Sempre descontar o adiantamento antes de calcular o restante. Toda dedução (erro, venda de veículo, RRX → Mega) vai para o Controle de Devedores. Depois do integral pela Split, o processo não volta para a Split."},
// ---------- PARTE 3: NF E FINALIZAÇÃO ----------
{p:3,i:"10",img:"identificacao-rio-vamos-associacao-orige.jpg",q:"A NF chegou com este tomador. Por qual via o pagamento segue?",o:["MEGA","SPLIT","Depende da oficina","Precisa pedir correção, porque o nome não é \"Mega\""],e:"Rio Vamos Associação = MEGA. Split Risk Seguradora = SPLIT. Se a NF estiver no nome errado, pedir correção, e analisar as notas em até 24h para não gerar custos."},
{p:3,i:"07",q:"A NF chegou, mas o Termo de Entrega ainda não. O que fazer?",o:["Aguardar. NF sem Termo não avança, e o processo continua na prateleira","Recepcionar a NF e já finalizar","Pagar o restante e finalizar depois","Finalizar e registrar no Perdas que falta o Termo"],e:"Os dois documentos precisam chegar juntos. A exceção é só a RRX: lá, se o Termo não for localizado, finaliza com observação."},
{p:3,i:"12",q:"Processo da RRX: o Termo de Entrega não foi localizado no e-mail. O que fazer?",o:["Finalizar mesmo assim e registrar no Perdas \"Termo não localizado no e-mail\"","Deixar o processo aberto até o Termo chegar","Devolver para a Juliana","Excluir do Perdas"],e:"É a exceção da RRX: finaliza com a observação registrada. Lembrando que a RRX é paga de forma INTEGRAL na Split, com o número da NF e o número da apólice na autorização."},
{p:3,i:"QP",q:"Qual é a sequência certa da FINALIZAÇÃO PADRÃO?",o:["Perdas → Hinova → Projeção → Notas Fiscais → Contato de Satisfação","Split → Projeção → Perdas → Hinova → Feedback","Hinova → Perdas → Projeção → Contato de Satisfação → Notas Fiscais","Projeção → Perdas → Hinova → Caixa Box"],e:"A pegadinha é a sequência da RRX: Split → Projeção → Perdas → Hinova → Feedback. A de Acordo Construtivo termina em Hinova → Caixa Box."},
{p:3,i:"11",q:"Ordem dos documentos dentro do plástico do processo:",o:["Comprovantes (por data, com a autorização) → NF → Termo → Autorização Inicial → Complemento → Contato de Satisfação","NF → Termo → Comprovantes → Autorização Inicial → Complemento → Contato de Satisfação","Autorização Inicial → Complemento → NF → Termo → Comprovantes → Contato de Satisfação","Contato de Satisfação → NF → Termo → Comprovantes → Autorização Inicial"],e:"Comprovantes primeiro, cada um junto da sua autorização financeira e em ordem de data. E nenhum documento é furado: tudo vai dentro do plástico."},
{p:3,i:"11",q:"Na planilha \"Notas Fiscais de Oficinas Pagas pela Mega 2026\", aba \"Notas Fiscais Pagas em Geral\", por qual data se lança?",o:["Data do evento de colisão","Data do pagamento","Data de emissão da NF","Data de entrega do veículo"],e:"Nunca pela data de pagamento, sempre pela data do evento de colisão. (A aba \"NFs Pagas\" usa o mês correspondente ao processo.)"},
{p:3,i:"11",q:"Processo com adiantamento + reparos + complemento. Como fica o registro no Perdas na finalização?",o:["Um registro por pagamento, podendo chegar a 2 ou até 4 entradas, e depois copiar tudo para o Hinova","Um único registro resumindo tudo","Só o último pagamento","Nenhum, basta finalizar no Hinova"],e:"Um registro por pagamento. Depois, copiar tudo do Perdas e colar no Hinova para finalizar, e marcar na projeção \"Finalizado dia XX/XX/XXXX\"."},
{p:3,i:"11",q:"A data de entrega no Contato de Satisfação está em branco. O que fazer?",o:["Imprimir e colocar no processo mesmo assim","Esperar a data ser preenchida para finalizar","Preencher com a data da NF","Não imprimir"],e:"Imprimir e colocar dentro do processo mesmo que a data esteja em branco."},
{p:3,i:"11",q:"Para qual e-mail você envia NF, Termo e autorizações escaneadas na finalização?",o:["notas.financeiro23@gmail.com","financeiro@megaprotecaoveicular.com.br","notas.financeiro@gmail.com","O e-mail da oficina"],e:"Sempre notas.financeiro23@gmail.com, com o assunto \"VEÍCULO: [MODELO] - PLACA: [PLACA]\". Cuidado com endereços parecidos."}
];

const IMG=f=>(window.IMGDATA&&window.IMGDATA[f])||("assets/"+f);
document.addEventListener("click",e=>{const f=e.target.closest(".qimg");if(f)f.classList.toggle("big");});
const KEY="prova-cartilha-notas-v2";
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
      h+=`<div class="q-text">${esc(q.q)}${q.c?`<span class="case">${esc(q.c)}</span>`:""}</div>${q.img?`<figure class="qimg"><img src="${IMG(q.img)}" alt="Imagem da questão" loading="lazy"></figure>`:""}<div class="opts">`;
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
  let ok=0;const perPart=PARTS.map(()=>[0,0]);const miss={};
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
