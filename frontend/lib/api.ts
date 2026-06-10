const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

export type Animal = {
  id: number;
  idOng: number;
  nome: string;
  raca: string | null;
  sexo: string | null;
  cor: string | null;
  idade: number | null;
  temperamento: string | null;
  pelagem: string | null;
  porte: string | null;
  status: string;
  ong?: {
    id: number;
    nome: string;
    localizacao: string;
    email?: string | null;
  };
};

export type Adotante = {
  id: number;
  nome: string;
  localizacao: string;
  email: string | null;
  dataNascimento: string;
  telefones?: { id: number; numero: string; tipoTelefone: string }[];
};

export type Ong = {
  id: number;
  nome: string;
  localizacao: string;
  email: string | null;
  telefones?: { id: number; numero: string; tipoTelefone: string }[];
};

export type CreateUserPayload = {
  nome: string;
  email: string;
  senha: string;
  role: 'INSTITUICAO' | 'ADOTANTE';
};

export type LoginPayload = {
  email: string;
  senha: string;
};

async function fetchApi<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, init);

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Erro na requisição: ${response.status}`);
  }

  return response.json();
}

export async function getAnimais(): Promise<Animal[]> {
  return fetchApi<Animal[]>('/animais', { next: { revalidate: 60 } });
}

export async function getAnimal(id: number): Promise<Animal> {
  return fetchApi<Animal>(`/animais/${id}`, { next: { revalidate: 60 } });
}

export async function getAdotantes(): Promise<Adotante[]> {
  return fetchApi<Adotante[]>('/adotante', { next: { revalidate: 60 } });
}

export async function getOngs(): Promise<Ong[]> {
  return fetchApi<Ong[]>('/ong', { next: { revalidate: 60 } });
}

export async function login(payload: LoginPayload) {
  return fetchApi<{ access_token: string }>('/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

export async function cadastro(payload: CreateUserPayload) {
  return fetchApi('/auth/cadastro', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}
