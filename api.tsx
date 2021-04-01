const API = 'http://localhost:3000';

export const fetcher = (url: string) =>
  fetch(`${API}/${url}`).then(res => res.json());
