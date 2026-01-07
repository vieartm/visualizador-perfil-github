// Módulo para requisições à API do GitHub

const baseURL = "https://api.github.com";

export async function fetchGitHubUser(username) {
  const response = await fetch(`${baseURL}/users/${username}`);
  if (!response.ok) {
    throw new Error("Usuário não encontrado");
  }
  return response.json();
}

export async function fetchGithubUserRepos(userName) {
    const response = await fetch (`${baseURL}/users/${userName}/repos?per_page=10&sort=created`);
      if (!response.ok) {
    throw new Error("Repositórios não encontrado");
  }
  return response.json();
}
    
