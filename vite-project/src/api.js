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

export async function addNewTaskApi(
  token,
  { title, topic, status, description, date }
) {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({
      title,
      topic,
      status,
      description,
      date,
    }),
  });
  if (!response.ok) {
    throw new Error("Какая то ошибка бро");
  }
}

export async function deleteTaskApi(id, token ) {
  const response = await fetch(API_URL + "/" +id , {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "DELETE",
  })
  if (!response.ok) {
    throw new Error("Какая то ошибка бро");
  }

}

export async function editTaskApi(  id , token,
  { title, topic, status, description, date }
) {
  const response = await fetch(API_URL + "/" + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "PUT",
    body: JSON.stringify({
      title,
      topic,
      status,
      description,
      date,
    }),
  });
  if (!response.ok) {
    throw new Error("Какая то ошибка бро");
  }
  console.log(response)
}