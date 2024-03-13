export const seo = {
  title: 'xyspg | Blog',
  description: 'Hi, I\'m xyspg  👋',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://xyspg.moe'
      : 'http://localhost:3000'
  ),
} as const
