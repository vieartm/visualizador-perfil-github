// Módulo para requisições à API do GitHub

const baseURL = "https://api.github.com";

export async function fetchGitHubUser(username) {
  const response = await fetch(`${baseURL}/users/${username}`);
  if (!response.ok) {
    throw new Error("Usuário não encontrado");
  }
  return response.json();
}
