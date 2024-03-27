const API_URL_USER = `https://wedev-api.sky.pro/api/user`;
const API_URL = "https://wedev-api.sky.pro/api/kanban";

export async function login({ login, password }) {
  const response = await fetch(API_URL_USER + `/login`, {
    method: `POST`,
    body: JSON.stringify({
      login,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Не верный логин или пароль");
  }

  const data = await response.json();
  return data;
}

export async function getTasks({ token }) {
  const response = await fetch(API_URL, {
    headers: {
      method: "GET",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return data;
}

export async function Registration({ login, name, password }) {
  const response = await fetch(API_URL_USER, {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Пользователь с таким именем существует");
  }

  const data = await response.json();
  return data;
}
