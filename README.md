This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Aim

1. Fetch and view posts: https://jsonplaceholder.typicode.com/posts
2. Implement infinite scroller: Eg https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10
3. Use typescript
4. Posts should like Facebook post meaning it has user details followed by text description
5. Don't worry about image. Don't show it
6. User details should be fetched by userId via /users: https://jsonplaceholder.typicode.com/users/1
7. You must use Typescript. Limit the use of any keyword
8. DONT PUSH CODE IN MAIN BRANCH, CREATE BRANCH WITH YOUR OWN NAME AND PUSH IT

## Steps to acheive the aim

1. Run the project as mentioned at the beginning of this document
2. Explore the purpose served by app/layout.tsx and app/page.tsx
3. Make some small changes in app/layout.tsx and app/page.tsx to understand how they work
4. Install postman
5. Call from postman: https://jsonplaceholder.typicode.com/posts
6. Call from postman: https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10 and change the value of \_start and \_limit to see how pagination works
7. Once you call apis from postman please check their response to understand their JSON structure
8. infinite scroller is same like Facebook and Instagram, where you scroll till the bottom of the page and it fetches the next page
9. When you define props and state inside the components and response, request of the API callers use Typescript
10. Ensure that the post is a component which is used in the page.tsx via .map
11. Please playaround with Tailwind CSS utilities as well ( check out the className property in page.tsx. You will see something like flex, flex-col which is shorthand for defining css properties.)
