# Módulo de Usuarios

Este módulo contiene toda la funcionalidad relacionada con la gestión y visualización de usuarios en la aplicación.

## Estructura

```
modules/users/
├── components/
│   └── users-table.tsx    # Componente de tabla de usuarios
├── graphql/
│   └── queries.ts         # Queries GraphQL para usuarios
└── README.md
```

## Componentes

### UsersTable

Componente de tabla que muestra una lista de usuarios obtenidos desde la API GraphQL.

**Características:**
- Carga de datos desde GraphQL
- Manejo de estados de carga y error
- Diseño responsive con Tailwind CSS
- Soporte para modo oscuro
- Manejo de datos opcionales (username, phone)

**Uso:**

```tsx
import { UsersTable } from 'modules/users/components/users-table'

export default function Page() {
  return <UsersTable />
}
```

**Nota importante:** Este componente usa Apollo Client v4 con Next.js App Router. Los hooks de React deben importarse desde `@apollo/client/react` en lugar de `@apollo/client`.

## GraphQL

### GET_USERS Query

Query para obtener todos los usuarios del sistema.

```graphql
query GetUsers {
  getUsers {
    id
    name
    email
    username
    phone
  }
}
```

## Tipos

Los tipos TypeScript para usuarios están definidos en `/types/user.ts`:

```typescript
interface User {
  id: string
  name: string
  email: string
  username?: string
  phone?: string
}
```

## Página

La tabla de usuarios se puede visualizar en la ruta `/users` de la aplicación.

## Configuración

Asegúrate de que tu endpoint GraphQL esté configurado en las variables de entorno:

```env
NEXT_PUBLIC_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
```

El endpoint debe implementar la query `getUsers` que retorne un array de objetos User.

