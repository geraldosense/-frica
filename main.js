// Lista de países africanos (nome, código ISO para bandeira e riqueza)
const africanCountries = [
  { name: 'África do Sul', code: 'za', riqueza: 'Grande diversidade mineral e turística' },
  { name: 'Angola', code: 'ao', riqueza: 'Rica em petróleo e diamantes' },
  { name: 'Argélia', code: 'dz', riqueza: 'Grande exportador de gás natural e petróleo' },
  { name: 'Benim', code: 'bj', riqueza: 'Agricultura e cultura vodu' },
  { name: 'Botsuana', code: 'bw', riqueza: 'Diamantes e safáris' },
  { name: 'Burquina Fasso', code: 'bf', riqueza: 'Ouro e cultura tradicional' },
  { name: 'Burúndi', code: 'bi', riqueza: 'Café e paisagens montanhosas' },
  { name: 'Cabo Verde', code: 'cv', riqueza: 'Turismo e pesca' },
  { name: 'Camarões', code: 'cm', riqueza: 'Agricultura e biodiversidade' },
  { name: 'Chade', code: 'td', riqueza: 'Petróleo e gado' },
  { name: 'Comores', code: 'km', riqueza: 'Especiarias e pesca' },
  { name: 'Congo', code: 'cg', riqueza: 'Petróleo e florestas tropicais' },
  { name: 'Costa do Marfim', code: 'ci', riqueza: 'Maior produtor mundial de cacau' },
  { name: 'Djibuti', code: 'dj', riqueza: 'Portos estratégicos' },
  { name: 'Egito', code: 'eg', riqueza: 'Patrimônio histórico e turismo' },
  { name: 'Eritreia', code: 'er', riqueza: 'Mineração e litoral no Mar Vermelho' },
  { name: 'Eswatini', code: 'sz', riqueza: 'Açúcar e florestas' },
  { name: 'Etiópia', code: 'et', riqueza: 'Café e história milenar' },
  { name: 'Gabão', code: 'ga', riqueza: 'Petróleo e florestas' },
  { name: 'Gâmbia', code: 'gm', riqueza: 'Turismo e agricultura' },
  { name: 'Gana', code: 'gh', riqueza: 'Ouro e cacau' },
  { name: 'Guiné', code: 'gn', riqueza: 'Bauxita e recursos hídricos' },
  { name: 'Guiné-Bissau', code: 'gw', riqueza: 'Caju e pesca' },
  { name: 'Guiné Equatorial', code: 'gq', riqueza: 'Petróleo' },
  { name: 'Lesoto', code: 'ls', riqueza: 'Água e diamantes' },
  { name: 'Libéria', code: 'lr', riqueza: 'Borracha e minério de ferro' },
  { name: 'Líbia', code: 'ly', riqueza: 'Petróleo' },
  { name: 'Madagáscar', code: 'mg', riqueza: 'Biodiversidade e baunilha' },
  { name: 'Maláui', code: 'mw', riqueza: 'Tabaco e pesca no Lago Maláui' },
  { name: 'Mali', code: 'ml', riqueza: 'Ouro e algodão' },
  { name: 'Marrocos', code: 'ma', riqueza: 'Fosfato e turismo' },
  { name: 'Maurícia', code: 'mu', riqueza: 'Turismo e açúcar' },
  { name: 'Mauritânia', code: 'mr', riqueza: 'Minério de ferro e pesca' },
  { name: 'Moçambique', code: 'mz', riqueza: 'Gás natural e frutos do mar' },
  { name: 'Namíbia', code: 'na', riqueza: 'Diamantes e turismo' },
  { name: 'Níger', code: 'ne', riqueza: 'Urânio e gado' },
  { name: 'Nigéria', code: 'ng', riqueza: 'Petróleo e cinema (Nollywood)' },
  { name: 'Quênia', code: 'ke', riqueza: 'Safáris e chá' },
  { name: 'República Centro-Africana', code: 'cf', riqueza: 'Diamantes e madeira' },
  { name: 'República Democrática do Congo', code: 'cd', riqueza: 'Cobalto, cobre e florestas' },
  { name: 'Ruanda', code: 'rw', riqueza: 'Café e turismo de montanha' },
  { name: 'São Tomé e Príncipe', code: 'st', riqueza: 'Cacau e turismo' },
  { name: 'Senegal', code: 'sn', riqueza: 'Pescado e música' },
  { name: 'Serra Leoa', code: 'sl', riqueza: 'Diamantes e pesca' },
  { name: 'Seicheles', code: 'sc', riqueza: 'Turismo e pesca' },
  { name: 'Somália', code: 'so', riqueza: 'Gado e pesca' },
  { name: 'Sudão', code: 'sd', riqueza: 'Petróleo e gado' },
  { name: 'Sudão do Sul', code: 'ss', riqueza: 'Petróleo e gado' },
  { name: 'Tanzânia', code: 'tz', riqueza: 'Safáris e turismo' },
  { name: 'Togo', code: 'tg', riqueza: 'Fosfato e algodão' },
  { name: 'Tunísia', code: 'tn', riqueza: 'Azeite e turismo' },
  { name: 'Uganda', code: 'ug', riqueza: 'Café e turismo' },
  { name: 'Zâmbia', code: 'zm', riqueza: 'Cobre e safáris' },
  { name: 'Zimbábue', code: 'zw', riqueza: 'Mineração e turismo' }
];

// Conteúdo profissional para todos os países africanos
const defaultDetails = {
  cultura: 'Este país africano possui uma rica diversidade cultural, com tradições, músicas, danças e festivais únicos que refletem a identidade de seu povo.',
  paisagens: 'Paisagens marcantes, incluindo parques naturais, montanhas, rios, desertos e praias que encantam visitantes e moradores.',
  curiosidades: 'A história, a arte e a hospitalidade local fazem deste país um destino fascinante no continente africano.'
};

const countryDetails = {
  'África do Sul': {
    cultura: 'Conhecida como a "Nação Arco-Íris", mistura diversas etnias, 11 línguas oficiais e festas como o Carnaval da Cidade do Cabo.',
    paisagens: 'Destaques: Montanha da Mesa, Parque Kruger, Cidade do Cabo.',
    curiosidades: 'Sede da Copa do Mundo de 2010.'
  },
  'Angola': {
    cultura: 'A cultura angolana é marcada pela música (kizomba, semba), danças tradicionais e uma culinária rica em peixes e mandioca.',
    paisagens: 'Destaques: Quedas de Kalandula, Parque Nacional da Kissama, praias de Benguela.',
    curiosidades: 'Angola é um dos maiores produtores de petróleo da África.'
  },
  'Argélia': {
    cultura: 'A cultura argelina é uma fusão de influências árabes, berberes e francesas, com destaque para a música raï e a culinária apimentada.',
    paisagens: 'Destaques: Deserto do Saara, ruínas romanas de Timgad, costa mediterrânea.',
    curiosidades: 'É o maior país da África em extensão territorial.'
  },
  'Benim': {
    cultura: 'Berço do vodu, Benim tem tradições religiosas e festivais vibrantes.',
    paisagens: 'Destaques: Porto-Novo, Parque Nacional Pendjari.',
    curiosidades: 'Foi o centro do antigo Reino do Daomé.'
  },
  'Botsuana': {
    cultura: 'Conhecida pela hospitalidade e tradições do povo tswana.',
    paisagens: 'Destaques: Delta do Okavango, Parque Nacional Chobe.',
    curiosidades: 'Um dos melhores destinos de safári do mundo.'
  },
  'Burquina Fasso': defaultDetails,
  'Burúndi': defaultDetails,
  'Cabo Verde': {
    cultura: 'Mistura de influências africanas e portuguesas, famosa pela morna e coladeira.',
    paisagens: 'Destaques: Praias, montanhas e ilhas vulcânicas.',
    curiosidades: 'É um arquipélago com 10 ilhas principais.'
  },
  'Camarões': defaultDetails,
  'Chade': defaultDetails,
  'Comores': defaultDetails,
  'Congo': defaultDetails,
  'Costa do Marfim': {
    cultura: 'Famosa pelo povo Akan, máscaras e danças tradicionais.',
    paisagens: 'Destaques: Basílica de Yamoussoukro, praias e florestas tropicais.',
    curiosidades: 'Grande produtor de cacau.'
  },
  'Djibuti': defaultDetails,
  'Egito': {
    cultura: 'Famoso por sua herança faraônica, o Egito tem tradições milenares, festas religiosas e culinária baseada em grãos e vegetais.',
    paisagens: 'Destaques: Pirâmides de Gizé, Rio Nilo, Mar Vermelho.',
    curiosidades: 'O Egito é considerado o berço de uma das civilizações mais antigas do mundo.'
  },
  'Eritreia': defaultDetails,
  'Eswatini': defaultDetails,
  'Etiópia': {
    cultura: 'Berço do café, com tradições cristãs ortodoxas e música própria.',
    paisagens: 'Destaques: Lalibela, Vale do Omo, montanhas Simien.',
    curiosidades: 'Nunca foi colonizada, exceto breve ocupação italiana.'
  },
  'Gabão': defaultDetails,
  'Gâmbia': defaultDetails,
  'Gana': {
    cultura: 'Conhecida pelo tecido kente, festivais coloridos e música highlife.',
    paisagens: 'Destaques: Castelo de Cape Coast, Lago Volta.',
    curiosidades: 'Primeiro país da África Subsaariana a conquistar independência.'
  },
  'Guiné': defaultDetails,
  'Guiné-Bissau': defaultDetails,
  'Guiné Equatorial': defaultDetails,
  'Lesoto': defaultDetails,
  'Libéria': defaultDetails,
  'Líbia': defaultDetails,
  'Madagáscar': {
    cultura: 'Mistura de influências africanas e asiáticas, famosa pela música salegy.',
    paisagens: 'Destaques: Avenida dos Baobás, Parque Nacional de Andasibe.',
    curiosidades: '90% da fauna é endêmica.'
  },
  'Maláui': defaultDetails,
  'Mali': {
    cultura: 'Conhecida pela música tradicional e pelo Festival do Deserto.',
    paisagens: 'Destaques: Tombuctu, Rio Níger.',
    curiosidades: 'Foi lar do Império Mali, um dos mais ricos da história.'
  },
  'Marrocos': {
    cultura: 'Mistura de influências árabes, berberes e europeias, com destaque para a música gnawa e a culinária com especiarias.',
    paisagens: 'Destaques: Deserto do Saara, Marrakech, Chefchaouen.',
    curiosidades: 'O Marrocos é famoso por seus souks (mercados) e arquitetura islâmica.'
  },
  'Maurícia': defaultDetails,
  'Mauritânia': defaultDetails,
  'Moçambique': {
    cultura: 'Famosa pela música marrabenta, danças e culinária baseada em frutos do mar.',
    paisagens: 'Destaques: Arquipélago de Bazaruto, Ilha de Moçambique.',
    curiosidades: 'Possui uma das maiores linhas costeiras da África.'
  },
  'Namíbia': defaultDetails,
  'Níger': defaultDetails,
  'Nigéria': {
    cultura: 'Rica em etnias (yorubás, hauçás, ibos), música afrobeat e Nollywood.',
    paisagens: 'Destaques: Zuma Rock, Parque Nacional Yankari.',
    curiosidades: 'País mais populoso da África.'
  },
  'Quênia': {
    cultura: 'Famosa pelos povos Maasai e Kikuyu, e pela maratona.',
    paisagens: 'Destaques: Masai Mara, Monte Quênia.',
    curiosidades: 'Destino de safári mundialmente famoso.'
  },
  'República Centro-Africana': defaultDetails,
  'República Democrática do Congo': defaultDetails,
  'Ruanda': defaultDetails,
  'São Tomé e Príncipe': defaultDetails,
  'Senegal': {
    cultura: 'Berço do mbalax, com tradições de hospitalidade (teranga).',
    paisagens: 'Destaques: Lago Rosa, Ilha de Gorée.',
    curiosidades: 'Dakar é famosa pelo rali Paris-Dakar.'
  },
  'Serra Leoa': defaultDetails,
  'Seicheles': defaultDetails,
  'Somália': defaultDetails,
  'Sudão': defaultDetails,
  'Sudão do Sul': defaultDetails,
  'Tanzânia': {
    cultura: 'Conhecida pela música taarab e pelo povo suaíli.',
    paisagens: 'Destaques: Kilimanjaro, Zanzibar, Serengeti.',
    curiosidades: 'Abriga o ponto mais alto e o mais baixo da África.'
  },
  'Togo': defaultDetails,
  'Tunísia': defaultDetails,
  'Uganda': defaultDetails,
  'Zâmbia': defaultDetails,
  'Zimbábue': defaultDetails
};

// Função utilitária para gerar o nome do arquivo HTML do país
function getCountryFileName(name, code) {
  return (
    name
      .toLowerCase()
      .normalize('NFD').replace(/\p{Diacritic}/gu, '')
      .replace(/ /g, '-')
      .replace(/[^a-z0-9\-]/g, '') + '-' + code + '.html'
  );
}

// Função para gerar os cards
function renderCountryCards() {
  const grid = document.getElementById('countries-grid');
  const sorted = [...africanCountries].sort((a, b) => a.name.localeCompare(b.name, 'pt'));
  grid.innerHTML = '';
  sorted.forEach(country => {
    const card = document.createElement('div');
    card.className = 'country-card';
    card.tabIndex = 0;
    card.innerHTML = `
      <img class="country-flag" src="https://flagcdn.com/w80/${country.code}.png" alt="Bandeira de ${country.name}">
      <div class="country-name">${country.name}</div>
      <div class="country-wealth">${country.riqueza}</div>
    `;
    card.addEventListener('click', () => {
      window.location.href = getCountryFileName(country.name, country.code);
    });
    card.addEventListener('keypress', (e) => { if (e.key === 'Enter') window.location.href = getCountryFileName(country.name, country.code); });
    grid.appendChild(card);
  });
}

// Função para abrir o modal com detalhes
function openCountryModal(countryName) {
  const modal = document.getElementById('country-modal');
  const details = document.getElementById('modal-details');
  const info = countryDetails[countryName] || defaultDetails;
  details.innerHTML = `
    <h2>${countryName}</h2>
    <img class="country-flag" src="https://flagcdn.com/w80/${getCountryCode(countryName)}.png" alt="Bandeira de ${countryName}" style="margin-bottom:1rem;">
    <div style="margin-bottom:1rem;">
      <strong>Cultura:</strong> ${info.cultura}<br>
      <strong>Paisagens:</strong> ${info.paisagens}<br>
      <strong>Curiosidades:</strong> ${info.curiosidades}
    </div>
  `;
  modal.style.display = 'flex';
  // Acessibilidade: foco no modal
  details.focus && details.focus();
}

// Função auxiliar para obter o código do país
function getCountryCode(name) {
  const found = africanCountries.find(c => c.name === name);
  return found ? found.code : '';
}

// Fechar modal
document.addEventListener('DOMContentLoaded', () => {
  renderCountryCards();
  document.getElementById('close-modal').onclick = () => {
    document.getElementById('country-modal').style.display = 'none';
  };
  window.onclick = (event) => {
    const modal = document.getElementById('country-modal');
    if (event.target === modal) modal.style.display = 'none';
  };
  // Fechar modal com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.getElementById('country-modal').style.display = 'none';
    }
  });
});
