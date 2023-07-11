This is an exemple how to reproduce a certain bug when it comes to Intercom with Nextjs

## Steps to reproduce

- Open the website on mobile or with chrome mobile simulation
- Open the Intercom
- Clost the intercom
- Click on test to navigate to the test page

## What should I see

The test page

## What do I see

![Screenshot](./docs/assets/error.png?raw=true "Screenshot")

```
redirect-boundary.js:61 Uncaught TypeError: Cannot read properties of null (reading 'removeChild')
at unmountHoistable (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:35632:23)
at commitDeletionEffectsOnFiber (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:20927:13)
at commitDeletionEffects (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:20891:5)
at recursivelyTraverseMutationEffects (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21291:9)
at commitMutationEffectsOnFiber (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21758:9)
at recursivelyTraverseMutationEffects (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21305:7)
at commitMutationEffectsOnFiber (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21758:9)
at recursivelyTraverseMutationEffects (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21305:7)
at commitMutationEffectsOnFiber (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21366:9)
at recursivelyTraverseMutationEffects (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21305:7)
at commitMutationEffectsOnFiber (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21327:9)
at recursivelyTraverseMutationEffects (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21305:7)
at commitMutationEffectsOnFiber (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21366:9)
at recursivelyTraverseMutationEffects (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21305:7)
at commitMutationEffectsOnFiber (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21366:9)
at recursivelyTraverseMutationEffects (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21305:7)
at commitMutationEffectsOnFiber (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21327:9)
at recursivelyTraverseMutationEffects (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21305:7)
at commitMutationEffectsOnFiber (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21327:9)
at recursivelyTraverseMutationEffects (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21305:7)
at commitMutationEffectsOnFiber (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21758:9)
at recursivelyTraverseMutationEffects (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21305:7)
at commitMutationEffectsOnFiber (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21758:9)
at recursivelyTraverseMutationEffects (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21305:7)
at commitMutationEffectsOnFiber (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21758:9)
at recursivelyTraverseMutationEffects (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21305:7)
at commitMutationEffectsOnFiber (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21758:9)
at recursivelyTraverseMutationEffects (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21305:7)
at commitMutationEffectsOnFiber (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21758:9)
at recursivelyTraverseMutationEffects (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21305:7)
at commitMutationEffectsOnFiber (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21327:9)
at recursivelyTraverseMutationEffects (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21305:7)
at commitMutationEffectsOnFiber (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21366:9)
at recursivelyTraverseMutationEffects (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21305:7)
at commitMutationEffectsOnFiber (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21327:9)
at recursivelyTraverseMutationEffects (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21305:7)
at commitMutationEffectsOnFiber (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21327:9)
at recursivelyTraverseMutationEffects (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21305:7)
at commitMutationEffectsOnFiber (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21327:9)
at recursivelyTraverseMutationEffects (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21305:7)
at commitMutationEffectsOnFiber (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21327:9)
at recursivelyTraverseMutationEffects (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21305:7)
at commitMutationEffectsOnFiber (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21327:9)
at recursivelyTraverseMutationEffects (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21305:7)
at commitMutationEffectsOnFiber (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21758:9)
at recursivelyTraverseMutationEffects (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21305:7)
at commitMutationEffectsOnFiber (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21563:11)
at commitMutationEffects (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:21275:3)
at commitRootImpl (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:24994:5)
at commitRoot (webpack-internal:///(:3001/app-client)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js:24860:5)
```

## More notes

It looks like it is working as expecting if we first navigate and then open/close the Intercom

# Next js Original documentation

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
