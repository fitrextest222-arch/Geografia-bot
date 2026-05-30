// ============================================================
//  DANE KRAJÓW – FLAGI WSPÓŁCZESNE I HISTORYCZNE
// ============================================================

const MODERN_COUNTRIES = {
  // -------- EUROPA --------
  europe: [
    { name: 'Polska', answers: ['polska', 'poland'], flag: '🇵🇱', region: 'Europa' },
    { name: 'Niemcy', answers: ['niemcy', 'germany', 'deutschland'], flag: '🇩🇪', region: 'Europa' },
    { name: 'Francja', answers: ['francja', 'france'], flag: '🇫🇷', region: 'Europa' },
    { name: 'Włochy', answers: ['włochy', 'wlochy', 'italy', 'italia'], flag: '🇮🇹', region: 'Europa' },
    { name: 'Hiszpania', answers: ['hiszpania', 'spain', 'espana'], flag: '🇪🇸', region: 'Europa' },
    { name: 'Portugalia', answers: ['portugalia', 'portugal'], flag: '🇵🇹', region: 'Europa' },
    { name: 'Wielka Brytania', answers: ['wielka brytania', 'uk', 'united kingdom', 'anglia', 'england'], flag: '🇬🇧', region: 'Europa' },
    { name: 'Irlandia', answers: ['irlandia', 'ireland'], flag: '🇮🇪', region: 'Europa' },
    { name: 'Holandia', answers: ['holandia', 'netherlands', 'niderlandy'], flag: '🇳🇱', region: 'Europa' },
    { name: 'Belgia', answers: ['belgia', 'belgium'], flag: '🇧🇪', region: 'Europa' },
    { name: 'Luksemburg', answers: ['luksemburg', 'luxembourg'], flag: '🇱🇺', region: 'Europa' },
    { name: 'Szwajcaria', answers: ['szwajcaria', 'switzerland'], flag: '🇨🇭', region: 'Europa' },
    { name: 'Austria', answers: ['austria'], flag: '🇦🇹', region: 'Europa' },
    { name: 'Szwecja', answers: ['szwecja', 'sweden'], flag: '🇸🇪', region: 'Europa' },
    { name: 'Norwegia', answers: ['norwegia', 'norway'], flag: '🇳🇴', region: 'Europa' },
    { name: 'Dania', answers: ['dania', 'denmark'], flag: '🇩🇰', region: 'Europa' },
    { name: 'Finlandia', answers: ['finlandia', 'finland'], flag: '🇫🇮', region: 'Europa' },
    { name: 'Estonia', answers: ['estonia'], flag: '🇪🇪', region: 'Europa' },
    { name: 'Łotwa', answers: ['lotwa', 'łotwa', 'latvia'], flag: '🇱🇻', region: 'Europa' },
    { name: 'Litwa', answers: ['litwa', 'lithuania'], flag: '🇱🇹', region: 'Europa' },
    { name: 'Białoruś', answers: ['bialorus', 'białoruś', 'belarus'], flag: '🇧🇾', region: 'Europa' },
    { name: 'Ukraina', answers: ['ukraina', 'ukraine'], flag: '🇺🇦', region: 'Europa' },
    { name: 'Mołdawia', answers: ['moldawia', 'mołdawia', 'moldova'], flag: '🇲🇩', region: 'Europa' },
    { name: 'Rosja', answers: ['rosja', 'russia'], flag: '🇷🇺', region: 'Europa' },
    { name: 'Czechy', answers: ['czechy', 'czech republic', 'czechia'], flag: '🇨🇿', region: 'Europa' },
    { name: 'Słowacja', answers: ['slowacja', 'słowacja', 'slovakia'], flag: '🇸🇰', region: 'Europa' },
    { name: 'Węgry', answers: ['wegry', 'węgry', 'hungary'], flag: '🇭🇺', region: 'Europa' },
    { name: 'Rumunia', answers: ['rumunia', 'romania'], flag: '🇷🇴', region: 'Europa' },
    { name: 'Bułgaria', answers: ['bulgaria', 'bułgaria', 'bulgaria'], flag: '🇧🇬', region: 'Europa' },
    { name: 'Serbia', answers: ['serbia'], flag: '🇷🇸', region: 'Europa' },
    { name: 'Chorwacja', answers: ['chorwacja', 'croatia'], flag: '🇭🇷', region: 'Europa' },
    { name: 'Słowenia', answers: ['slowenia', 'słowenia', 'slovenia'], flag: '🇸🇮', region: 'Europa' },
    { name: 'Bośnia i Hercegowina', answers: ['bosnia', 'bośnia', 'bośnia i hercegowina', 'bosnia'], flag: '🇧🇦', region: 'Europa' },
    { name: 'Czarnogóra', answers: ['czarnogora', 'czarnogóra', 'montenegro'], flag: '🇲🇪', region: 'Europa' },
    { name: 'Północna Macedonia', answers: ['macedonia', 'polnocna macedonia', 'północna macedonia', 'north macedonia'], flag: '🇲🇰', region: 'Europa' },
    { name: 'Albania', answers: ['albania'], flag: '🇦🇱', region: 'Europa' },
    { name: 'Kosowo', answers: ['kosowo', 'kosovo'], flag: '🇽🇰', region: 'Europa' },
    { name: 'Grecja', answers: ['grecja', 'greece'], flag: '🇬🇷', region: 'Europa' },
    { name: 'Cypr', answers: ['cypr', 'cyprus'], flag: '🇨🇾', region: 'Europa' },
    { name: 'Malta', answers: ['malta'], flag: '🇲🇹', region: 'Europa' },
    { name: 'Islandia', answers: ['islandia', 'iceland'], flag: '🇮🇸', region: 'Europa' },
    { name: 'Liechtenstein', answers: ['liechtenstein'], flag: '🇱🇮', region: 'Europa' },
    { name: 'Monako', answers: ['monako', 'monaco'], flag: '🇲🇨', region: 'Europa' },
    { name: 'Andora', answers: ['andora', 'andorra'], flag: '🇦🇩', region: 'Europa' },
    { name: 'San Marino', answers: ['san marino'], flag: '🇸🇲', region: 'Europa' },
    { name: 'Watykan', answers: ['watykan', 'vatican'], flag: '🇻🇦', region: 'Europa' },
  ],

  // -------- AZJA --------
  asia: [
    { name: 'Chiny', answers: ['chiny', 'china'], flag: '🇨🇳', region: 'Azja' },
    { name: 'Japonia', answers: ['japonia', 'japan'], flag: '🇯🇵', region: 'Azja' },
    { name: 'Korea Południowa', answers: ['korea poludniowa', 'korea południowa', 'south korea', 'korea'], flag: '🇰🇷', region: 'Azja' },
    { name: 'Korea Północna', answers: ['korea polnocna', 'korea północna', 'north korea'], flag: '🇰🇵', region: 'Azja' },
    { name: 'Indie', answers: ['indie', 'india'], flag: '🇮🇳', region: 'Azja' },
    { name: 'Pakistan', answers: ['pakistan'], flag: '🇵🇰', region: 'Azja' },
    { name: 'Bangladesz', answers: ['bangladesz', 'bangladesh'], flag: '🇧🇩', region: 'Azja' },
    { name: 'Sri Lanka', answers: ['sri lanka'], flag: '🇱🇰', region: 'Azja' },
    { name: 'Nepal', answers: ['nepal'], flag: '🇳🇵', region: 'Azja' },
    { name: 'Bhutan', answers: ['bhutan'], flag: '🇧🇹', region: 'Azja' },
    { name: 'Afganistan', answers: ['afganistan', 'afghanistan'], flag: '🇦🇫', region: 'Azja' },
    { name: 'Iran', answers: ['iran'], flag: '🇮🇷', region: 'Azja' },
    { name: 'Irak', answers: ['irak', 'iraq'], flag: '🇮🇶', region: 'Azja' },
    { name: 'Syria', answers: ['syria'], flag: '🇸🇾', region: 'Azja' },
    { name: 'Turcja', answers: ['turcja', 'turkey', 'turkiye'], flag: '🇹🇷', region: 'Azja' },
    { name: 'Arabia Saudyjska', answers: ['arabia saudyjska', 'saudi arabia'], flag: '🇸🇦', region: 'Azja' },
    { name: 'Zjednoczone Emiraty Arabskie', answers: ['zea', 'zjednoczone emiraty arabskie', 'uae', 'emiraty'], flag: '🇦🇪', region: 'Azja' },
    { name: 'Katar', answers: ['katar', 'qatar'], flag: '🇶🇦', region: 'Azja' },
    { name: 'Kuwejt', answers: ['kuwejt', 'kuwait'], flag: '🇰🇼', region: 'Azja' },
    { name: 'Bahrajn', answers: ['bahrajn', 'bahrain'], flag: '🇧🇭', region: 'Azja' },
    { name: 'Oman', answers: ['oman'], flag: '🇴🇲', region: 'Azja' },
    { name: 'Jemen', answers: ['jemen', 'yemen'], flag: '🇾🇪', region: 'Azja' },
    { name: 'Jordania', answers: ['jordania', 'jordan'], flag: '🇯🇴', region: 'Azja' },
    { name: 'Liban', answers: ['liban', 'lebanon'], flag: '🇱🇧', region: 'Azja' },
    { name: 'Izrael', answers: ['izrael', 'israel'], flag: '🇮🇱', region: 'Azja' },
    { name: 'Palestyna', answers: ['palestyna', 'palestine'], flag: '🇵🇸', region: 'Azja' },
    { name: 'Kazachstan', answers: ['kazachstan', 'kazakhstan'], flag: '🇰🇿', region: 'Azja' },
    { name: 'Uzbekistan', answers: ['uzbekistan'], flag: '🇺🇿', region: 'Azja' },
    { name: 'Turkmenistan', answers: ['turkmenistan'], flag: '🇹🇲', region: 'Azja' },
    { name: 'Kirgistan', answers: ['kirgistan', 'kyrgyzstan'], flag: '🇰🇬', region: 'Azja' },
    { name: 'Tadżykistan', answers: ['tadzykistan', 'tadżykistan', 'tajikistan'], flag: '🇹🇯', region: 'Azja' },
    { name: 'Mongolia', answers: ['mongolia'], flag: '🇲🇳', region: 'Azja' },
    { name: 'Wietnam', answers: ['wietnam', 'vietnam'], flag: '🇻🇳', region: 'Azja' },
    { name: 'Tajlandia', answers: ['tajlandia', 'thailand'], flag: '🇹🇭', region: 'Azja' },
    { name: 'Kambodża', answers: ['kambodza', 'kambodża', 'cambodia'], flag: '🇰🇭', region: 'Azja' },
    { name: 'Laos', answers: ['laos'], flag: '🇱🇦', region: 'Azja' },
    { name: 'Myanmar', answers: ['myanmar', 'birma', 'burma'], flag: '🇲🇲', region: 'Azja' },
    { name: 'Malezja', answers: ['malezja', 'malaysia'], flag: '🇲🇾', region: 'Azja' },
    { name: 'Singapur', answers: ['singapur', 'singapore'], flag: '🇸🇬', region: 'Azja' },
    { name: 'Indonezja', answers: ['indonezja', 'indonesia'], flag: '🇮🇩', region: 'Azja' },
    { name: 'Filipiny', answers: ['filipiny', 'philippines'], flag: '🇵🇭', region: 'Azja' },
    { name: 'Tajwan', answers: ['tajwan', 'taiwan'], flag: '🇹🇼', region: 'Azja' },
    { name: 'Gruzja', answers: ['gruzja', 'georgia'], flag: '🇬🇪', region: 'Azja' },
    { name: 'Armenia', answers: ['armenia'], flag: '🇦🇲', region: 'Azja' },
    { name: 'Azerbejdżan', answers: ['azerbejdzan', 'azerbejdżan', 'azerbaijan'], flag: '🇦🇿', region: 'Azja' },
  ],

  // -------- AMERYKA PÓŁNOCNA --------
  north_america: [
    { name: 'USA', answers: ['usa', 'stany zjednoczone', 'united states', 'ameryka'], flag: '🇺🇸', region: 'Ameryka Północna' },
    { name: 'Kanada', answers: ['kanada', 'canada'], flag: '🇨🇦', region: 'Ameryka Północna' },
    { name: 'Meksyk', answers: ['meksyk', 'mexico'], flag: '🇲🇽', region: 'Ameryka Północna' },
    { name: 'Kuba', answers: ['kuba', 'cuba'], flag: '🇨🇺', region: 'Ameryka Północna' },
    { name: 'Jamajka', answers: ['jamajka', 'jamaica'], flag: '🇯🇲', region: 'Ameryka Północna' },
    { name: 'Haiti', answers: ['haiti'], flag: '🇭🇹', region: 'Ameryka Północna' },
    { name: 'Dominikana', answers: ['dominikana', 'dominican republic'], flag: '🇩🇴', region: 'Ameryka Północna' },
    { name: 'Panama', answers: ['panama'], flag: '🇵🇦', region: 'Ameryka Północna' },
    { name: 'Kostaryka', answers: ['kostaryka', 'costa rica'], flag: '🇨🇷', region: 'Ameryka Północna' },
    { name: 'Gwatemala', answers: ['gwatemala', 'guatemala'], flag: '🇬🇹', region: 'Ameryka Północna' },
    { name: 'Honduras', answers: ['honduras'], flag: '🇭🇳', region: 'Ameryka Północna' },
    { name: 'Salwador', answers: ['salwador', 'el salvador'], flag: '🇸🇻', region: 'Ameryka Północna' },
    { name: 'Nikaragua', answers: ['nikaragua', 'nicaragua'], flag: '🇳🇮', region: 'Ameryka Północna' },
    { name: 'Belize', answers: ['belize'], flag: '🇧🇿', region: 'Ameryka Północna' },
    { name: 'Bahamy', answers: ['bahamy', 'bahamas'], flag: '🇧🇸', region: 'Ameryka Północna' },
    { name: 'Barbados', answers: ['barbados'], flag: '🇧🇧', region: 'Ameryka Północna' },
    { name: 'Trynidad i Tobago', answers: ['trynidad', 'trinidad', 'trynidad i tobago'], flag: '🇹🇹', region: 'Ameryka Północna' },
  ],

  // -------- AMERYKA POŁUDNIOWA --------
  south_america: [
    { name: 'Brazylia', answers: ['brazylia', 'brazil', 'brasil'], flag: '🇧🇷', region: 'Ameryka Południowa' },
    { name: 'Argentyna', answers: ['argentyna', 'argentina'], flag: '🇦🇷', region: 'Ameryka Południowa' },
    { name: 'Chile', answers: ['chile'], flag: '🇨🇱', region: 'Ameryka Południowa' },
    { name: 'Peru', answers: ['peru'], flag: '🇵🇪', region: 'Ameryka Południowa' },
    { name: 'Kolumbia', answers: ['kolumbia', 'colombia'], flag: '🇨🇴', region: 'Ameryka Południowa' },
    { name: 'Wenezuela', answers: ['wenezuela', 'venezuela'], flag: '🇻🇪', region: 'Ameryka Południowa' },
    { name: 'Ekwador', answers: ['ekwador', 'ecuador'], flag: '🇪🇨', region: 'Ameryka Południowa' },
    { name: 'Boliwia', answers: ['boliwia', 'bolivia'], flag: '🇧🇴', region: 'Ameryka Południowa' },
    { name: 'Paragwaj', answers: ['paragwaj', 'paraguay'], flag: '🇵🇾', region: 'Ameryka Południowa' },
    { name: 'Urugwaj', answers: ['urugwaj', 'uruguay'], flag: '🇺🇾', region: 'Ameryka Południowa' },
    { name: 'Gujana', answers: ['gujana', 'guyana'], flag: '🇬🇾', region: 'Ameryka Południowa' },
    { name: 'Surinam', answers: ['surinam', 'suriname'], flag: '🇸🇷', region: 'Ameryka Południowa' },
  ],

  // -------- OCEANIA --------
  oceania: [
    { name: 'Australia', answers: ['australia'], flag: '🇦🇺', region: 'Oceania' },
    { name: 'Nowa Zelandia', answers: ['nowa zelandia', 'new zealand'], flag: '🇳🇿', region: 'Oceania' },
    { name: 'Papua Nowa Gwinea', answers: ['papua nowa gwinea', 'papua new guinea'], flag: '🇵🇬', region: 'Oceania' },
    { name: 'Fidżi', answers: ['fidzi', 'fidżi', 'fiji'], flag: '🇫🇯', region: 'Oceania' },
    { name: 'Samoa', answers: ['samoa'], flag: '🇼🇸', region: 'Oceania' },
    { name: 'Tonga', answers: ['tonga'], flag: '🇹🇴', region: 'Oceania' },
    { name: 'Vanuatu', answers: ['vanuatu'], flag: '🇻🇺', region: 'Oceania' },
    { name: 'Wyspy Salomona', answers: ['wyspy salomona', 'solomon islands'], flag: '🇸🇧', region: 'Oceania' },
    { name: 'Kiribati', answers: ['kiribati'], flag: '🇰🇮', region: 'Oceania' },
    { name: 'Mikronezja', answers: ['mikronezja', 'micronesia'], flag: '🇫🇲', region: 'Oceania' },
    { name: 'Nauru', answers: ['nauru'], flag: '🇳🇷', region: 'Oceania' },
    { name: 'Palau', answers: ['palau'], flag: '🇵🇼', region: 'Oceania' },
    { name: 'Tuvalu', answers: ['tuvalu'], flag: '🇹🇻', region: 'Oceania' },
    { name: 'Wyspy Marshalla', answers: ['wyspy marshalla', 'marshall islands'], flag: '🇲🇭', region: 'Oceania' },
  ],
};

// ============================================================
//  FLAGI HISTORYCZNE
//  URL do obrazków z GitHub repo (folder /flags/)
//  Wgraj pliki PNG do folderu flags/ w swoim repo na GitHubie!
//  Wzór URL: https://raw.githubusercontent.com/TWOJ_USERNAME/REPO_NAME/main/flags/NAZWA.png
// ============================================================

// Zamień poniżej na swój username i nazwę repo!
const RAW = 'https://raw.githubusercontent.com/fitrextest222-arch/Geografia-bot/main/flags';

const HISTORICAL_FLAGS = [
  {
    name: 'III Rzesza',
    displayName: 'III Rzesza (Niemcy Nazistowskie)',
    answers: ['iii rzesza', 'trzecia rzesza', 'nazi germany', 'niemcy hitlerowskie', 'rzesza', 'niemcy nazistowskie'],
    flagUrl: `${RAW}/nazi_germany.png`,
    period: '1933–1945',
    hint: '🇪🇺 Europa – II Wojna Światowa',
    category: 'IIWW',
  },
  {
    name: 'Republika Weimarska',
    displayName: 'Republika Weimarska (Niemcy)',
    answers: ['republika weimarska', 'weimar', 'niemcy weimarskie'],
    flagUrl: `${RAW}/weimar.png`,
    period: '1919–1933',
    hint: '🇪🇺 Europa – Niemcy między wojnami',
    category: 'Historyczne',
  },
  {
    name: 'Faszystowskie Włochy',
    displayName: 'Faszystowskie Włochy (Królestwo Włoch)',
    answers: ['faszystowskie wlochy', 'faszystowskie włochy', 'wlochy faszystowskie', 'mussolini', 'krolestwo wloch'],
    flagUrl: `${RAW}/fascist_italy.png`,
    period: '1922–1943',
    hint: '🇪🇺 Europa – II Война Światowa',
    category: 'IIWW',
  },
  {
    name: 'Cesarska Japonia',
    displayName: 'Cesarska Japonia',
    answers: ['cesarska japonia', 'imperial japan', 'japonia imperialna'],
    flagUrl: `${RAW}/imperial_japan.png`,
    period: '1870–1945',
    hint: '🌏 Azja – II Война Światowa',
    category: 'IIWW',
  },
  {
    name: 'Wojenna Flaga Japonii',
    displayName: 'Wojenna Flaga Japonii (Kyokujitsu-ki)',
    answers: ['kyokujitsu', 'wojenna flaga japonii', 'rising sun', 'wschodzace slonce'],
    flagUrl: `${RAW}/rising_sun.png`,
    period: '1870–1945',
    hint: '🌏 Azja – Armia Imperialna Japonii',
    category: 'IIWW',
  },
  {
    name: 'ZSRR',
    displayName: 'Związek Radziecki (ZSRR)',
    answers: ['zsrr', 'cccp', 'zwiazek radziecki', 'związek radziecki', 'soviet union', 'ussr'],
    flagUrl: `${RAW}/ussr.png`,
    period: '1922–1991',
    hint: '🇪🇺 Europa/Azja – Zimna Война',
    category: 'Komunizm',
  },
  {
    name: 'Jugosławia',
    displayName: 'Jugosławia (SFRJ)',
    answers: ['jugoslawia', 'jugosławia', 'yugoslavia', 'sfrj'],
    flagUrl: `${RAW}/yugoslavia.png`,
    period: '1945–1992',
    hint: '🇪🇺 Europa – Bałkany',
    category: 'Komunizm',
  },
  {
    name: 'Austro-Węgry',
    displayName: 'Austro-Węgry',
    answers: ['austro-wegry', 'austro wegry', 'austro-hungarian empire', 'austro-Hungary'],
    flagUrl: `${RAW}/austro_hungary.png`,
    period: '1869–1918',
    hint: '🇪🇺 Europa – I Война Światowa',
    category: 'Historyczne',
  },
  {
    name: 'Imperium Osmańskie',
    displayName: 'Imperium Osmańskie',
    answers: ['imperium osmanskie', 'imperium osmańskie', 'ottoman empire', 'turcja osmanska'],
    flagUrl: `${RAW}/ottoman.png`,
    period: '1844–1922',
    hint: '🌍 Europa/Azja – Imperium',
    category: 'Historyczne',
  },
  {
    name: 'Cesarstwo Rosyjskie',
    displayName: 'Cesarstwo Rosyjskie',
    answers: ['cesarstwo rosyjskie', 'rosja carska', 'russian empire', 'carska rosja'],
    flagUrl: `${RAW}/russian_empire.png`,
    period: '1858–1917',
    hint: '🇪🇺 Europa – Carska Rosja',
    category: 'Historyczne',
  },
  {
    name: 'Konfederacja',
    displayName: 'Skonfederowane Stany Ameryki',
    answers: ['konfederacja', 'skonfederowane stany', 'confederate', 'confederate states'],
    flagUrl: `${RAW}/confederate.png`,
    period: '1861–1865',
    hint: '🌎 Ameryka Północna – Война Secesyjna',
    category: 'Historyczne',
  },
  {
    name: 'Francja Vichy',
    displayName: 'Francja Vichy (État Français)',
    answers: ['francja vichy', 'vichy', 'vichy france'],
    flagUrl: `${RAW}/vichy_france.png`,
    period: '1940–1944',
    hint: '🇪🇺 Europa – Kolaboracja II WŚ',
    category: 'IIWW',
  },
  {
    name: 'II Rzeczpospolita',
    displayName: 'II Rzeczpospolita Polska',
    answers: ['ii rzeczpospolita', 'druga rzeczpospolita', 'polska przedwojenna'],
    flagUrl: `${RAW}/poland_ii.png`,
    period: '1918–1939',
    hint: '🇪🇺 Europa – Polska między wojnami',
    category: 'Historyczne',
  },
  {
    name: 'NRD',
    displayName: 'NRD (Wschodnie Niemcy)',
    answers: ['nrd', 'niemcy wschodnie', 'ddr', 'east germany'],
    flagUrl: `${RAW}/east_germany.png`,
    period: '1949–1990',
    hint: '🇪🇺 Europa – Zimna Война',
    category: 'Komunizm',
  },
  {
    name: 'Czechosłowacja',
    displayName: 'Czechosłowacja',
    answers: ['czechoslowacja', 'czechosłowacja', 'czechoslovakia'],
    flagUrl: `${RAW}/czechoslovakia.png`,
    period: '1920–1992',
    hint: '🇪🇺 Europa – Europa Środkowa',
    category: 'Historyczne',
  },
  {
    name: 'PRL',
    displayName: 'PRL (Polska Ludowa)',
    answers: ['prl', 'polska ludowa', 'polska rzeczpospolita ludowa'],
    flagUrl: `${RAW}/prl.png`,
    period: '1952–1990',
    hint: '🇪🇺 Europa – Komunistyczna Polska',
    category: 'Komunizm',
  },
  {
    name: 'Rodezja',
    displayName: 'Rodezja',
    answers: ['rodezja', 'rhodesia'],
    flagUrl: `${RAW}/rhodesia.png`,
    period: '1968–1979',
    hint: '🌍 Afryka – Dawna kolonia brytyjska',
    category: 'Historyczne',
  },
  {
    name: 'Imperium Brytyjskie',
    displayName: 'Imperium Brytyjskie',
    answers: ['imperium brytyjskie', 'british empire'],
    flagUrl: `${RAW}/british_empire.png`,
    period: '1801–1922',
    hint: '🌍 Globalne – Imperium Brytyjskie',
    category: 'Historyczne',
  },
];

// Pomocnicze funkcje
function getAllModernCountries() {
  return [
    ...MODERN_COUNTRIES.europe,
    ...MODERN_COUNTRIES.asia,
    ...MODERN_COUNTRIES.north_america,
    ...MODERN_COUNTRIES.south_america,
    ...MODERN_COUNTRIES.oceania,
  ];
}

function getCountriesByRegion(regions) {
  let result = [];
  if (regions.includes('europa') || regions.includes('all')) result.push(...MODERN_COUNTRIES.europe);
  if (regions.includes('azja') || regions.includes('all')) result.push(...MODERN_COUNTRIES.asia);
  if (regions.includes('ameryka_polnocna') || regions.includes('all')) result.push(...MODERN_COUNTRIES.north_america);
  if (regions.includes('ameryka_poludniowa') || regions.includes('all')) result.push(...MODERN_COUNTRIES.south_america);
  if (regions.includes('oceania') || regions.includes('all')) result.push(...MODERN_COUNTRIES.oceania);
  return result;
}

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

module.exports = { MODERN_COUNTRIES, HISTORICAL_FLAGS, getAllModernCountries, getCountriesByRegion, shuffle };

