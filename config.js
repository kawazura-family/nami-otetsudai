const CONFIG = {
  OWNER: 'kawazura-family',
  REPO: 'nami-otetsudai',
  DATA_PATH: 'data',
  get TOKEN() {
    return localStorage.getItem('github_token') || '';
  },
};

const TASKS = [
  { id: 'dish',      emoji: '🍽️', label: 'おさらあらい' },
  { id: 'laundry',   emoji: '👕', label: 'せんたくもの' },
  { id: 'clean',     emoji: '🧹', label: 'そうじ' },
  { id: 'cook',      emoji: '🍳', label: 'りょうりのおてつだい' },
  { id: 'pet',       emoji: '🐶', label: 'ぺっとのおせわ' },
  { id: 'tidy',      emoji: '🧸', label: 'おかたづけ' },
  { id: 'water',     emoji: '🌱', label: 'みずやり' },
  { id: 'errand',    emoji: '🛒', label: 'おつかい' },
];

// 初回アクセス時にトークン設定を促す
function checkToken() {
  if (!CONFIG.TOKEN) {
    const token = prompt('GitHub Token をにゅうりょくしてください（さいしょの1かいだけ）');
    if (token) {
      localStorage.setItem('github_token', token);
    }
  }
}
checkToken();
