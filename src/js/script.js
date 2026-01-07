import { fetchGitHubUser, fetchGithubUserRepos } from "./api.js";
import { showLoading, showProfile, showError } from "./profile.js";


// Selecionar elementos
const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const profileResults = document.querySelector('.profile-results');

// Evento de clique

btnSearch.addEventListener("click", handleSearch);
inputSearch.addEventListener("keydown", function(e) {
  if (e.key === "Enter") handleSearch();
});

async function handleSearch() {
  const valorDigitado = inputSearch.value.trim();
  if (!valorDigitado) {
    alert("Por favor, digite um nome de usuário do GitHub.");
    return;
  }
  showLoading(profileResults);
  try {
    const userData = await fetchGitHubUser(valorDigitado);
    const userRepos = await fetchGithubUserRepos(valorDigitado);
    showProfile(profileResults, userData, userRepos);
  } catch (error) {
    showError(profileResults, error.message || "Ocorreu um erro ao buscar o usuário. Tente novamente mais tarde.");
  }
}


// Buscar nome do usuário com enter
