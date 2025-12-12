
![landing-page](https://github.com/user-attachments/assets/207800f4-f9ca-405a-a7e9-15bc770697b9)
![landing-page-2](https://github.com/user-attachments/assets/6ca71cd3-d10d-4194-a505-69718509995a)
![dashboard](https://github.com/user-attachments/assets/20d2b8b8-059f-44a8-9938-0cbe73045bdb)

# shadcn/ui monorepo template

This template is for creating a monorepo with shadcn/ui.

## Usage

```bash
pnpm dlx shadcn@latest init
```

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Tailwind

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button"
```
