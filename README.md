# Easy Cash Dashboard

Dashboard privado para controlar:

- entradas por transferencia
- entregas en efectivo
- balances globales y por cuenta
- ganancia por comisiones

## Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Firebase Authentication
- Firestore
- Recharts

## Módulos incluidos

- Login privado con email/password
- Dashboard con cards, gráficos y resumen por cuenta
- Gestión de cuentas bancarias
- Registro de transacciones con comisión automática
- Registro de entregas con vínculo opcional a transacciones
- Filtros por cuenta, fecha, texto y estado
- Sidebar responsive para móvil y escritorio

## Configuración

1. Instala dependencias:

```bash
npm install
```

2. Crea `.env.local` a partir de `.env.example` y completa:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

3. En Firebase Authentication habilita `Email/Password`.

4. Publica las reglas de `firestore-rules/firestore.rules`.

5. Levanta la app:

```bash
npm run dev
```

## Colecciones

- `users`
- `accounts`
- `transactions`
- `deliveries`

## Lógica financiera

- `commissionAmount = baseAmount * commissionPercentage / 100`
- `totalReceived = baseAmount + commissionAmount`
- `totalProfit = sum(transactions.commissionAmount)`
- `balance = totalReceived - totalDelivered`

Si una entrega se vincula a una transacción:

- pasa a `partial` si todavía falta efectivo por entregar
- pasa a `completed` cuando el total entregado alcanza el `baseAmount`

## Nota

En este entorno no había `node`/`npm` disponible en PATH, así que el código quedó preparado pero no pude ejecutar `build` o `lint` localmente.
