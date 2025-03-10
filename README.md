# vite-plugin-ts-to-zod

Vite plugin to transform typescript types to zod schemas.

## Usage

```bash
pnpm i -D vite-plugin-ts-to-zod
```

```ts
// vite.config.ts
import viteZod from 'vite-plugin-ts-to-zod';

export default defineConfig({
  plugins: [
    viteZod()
  ]
});
```

```ts
// src/hero.ts
export interface Hero {
  name: string;
}
```

```ts
// src/index.ts
import { heroSchema } from './hero?zod';
import { type Hero } from './hero';
```
