import { BACKEND_ROUTE } from "@env";

const TOKEN_KEY = "bahiamar-client-token";
//export const EH_ADMIN = "&bahiamar-client-is-admin";

const storage = {};

async function resetarLocalStorage() {
  delete storage[TOKEN_KEY];
}

export async function tokenEhValido(token, route = "validar-jwt") {
  return new Promise((resolve, reject) => {
    fetch(`${BACKEND_ROUTE}/${route}/${token}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        const { error } = response;
        // deu ruim
        if (error) {
          console.error(error);
          alert(error);
        }

        resolve(response);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}

export async function testarLogin(navigate, deveEstarLogado = true) {
  const token = await getTokenSessao();
  console.log(token);
  // entrou em uma página que precisa estar logado mas não está logado
  if (deveEstarLogado && token === null) {
    logout();
    navigate("/");
    return false;
  }
  // entrou em uma página que não pode estar logado mas está logado
  else if (!deveEstarLogado && token !== null) {
    navigate("/menu");
    return false;
  }

  return true;
}

export function handleErrorBackend(navigate, error) {
  alert(error.message);
  switch (error.type) {
    case "SessionTokenErr":
      logout().then(() => navigate("Login"));
      break;
    default:
  }
}

export async function getTokenSessao() {
  return storage[TOKEN_KEY];
}

export async function login(token) {
  storage[TOKEN_KEY] = token;
}
export const logout = resetarLocalStorage;
