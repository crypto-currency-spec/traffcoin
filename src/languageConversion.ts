export const loadText = (language: 'eng' | null) => {
  return fetch(`data/${language === 'eng' ? 'eng' : 'rus'}.json`).then(res => res.json());
};