// selecionar os elementos
const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const profileResults = document.querySelector('.profile-results')

const baseURL = "https://api.github.com";

// adicionar evento de clique no botão
btnSearch.addEventListener("click", async () => {
  const valorDigitado = inputSearch.value.trim();

  if (!valorDigitado) {
    alert("Por favor, digite um nome de usuário do GitHub.");
    return;
  }

  // Estado de carregamento
  profileResults.innerHTML = '<p class="loading-message">Carregando...</p>';

  try {
    const response = await fetch(`${baseURL}/users/${valorDigitado}`);

    if (!response.ok) {
      profileResults.innerHTML = "";
      alert("Usuário não encontrado");
      return;
    }

    const userData = await response.json();
    console.log(userData);

    profileResults.innerHTML = `
    <div class = "profile-card">
         <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
         <div class="profile-info">
         <h2>${userData.name}</h2>
         <p>${userData.bio ||'Não possui bio cadastrada 😢.'}</p>
         </div>
    </div>`;

  } catch (error) {
    profileResults.innerHTML = "";
    console.error("Erro na requisição:", error);
    alert("Ocorreu um erro ao buscar o usuário. Tente novamente mais tarde.");
  }
});
 

// Buscar nome do usuário com enter
