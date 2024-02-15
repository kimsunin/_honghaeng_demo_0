This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
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

< 프로젝트 기초 >
파일구분

1. public: 이미지, 아이콘 등 정적인 파일 저장
2. pages: 모든 페이지들
3. component: 재활용 가능 컴포넌트들을 따로 만들어 page별로 import후 사용
4. storage: url, 지역이름, 카테고리 등 주기적 관리가 필요한 정보들 저장
5. styles: 모든 페이지들의 css를 정리, 파일명은 page이름.module.css로 저장 후 page별로 import하여 사용, tailwind기반 css는 정말 간단한 것에만 사용하기

layout
components중 모든 페이지에서 사용하는 Header와 Footer는 레이아웃을 통해 사용
mediaquary를 통해 레이아웃 크기 및 hidden관리

기본구조
밑의 기본 구조를 기반으로 프로젝트 진행. header와 footer는 레이아웃을 통해 사용하므로 모든 pages는 nav와 main태그가 가장 큰 부모태그임

<body>
    <header>
    <nav>
    <main>
    <footer>
<body>
