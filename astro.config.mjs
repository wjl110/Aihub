import { defineConfig } from 'astro/config';

// GitHub Pages 部署在 /Aihub 子路径;Netlify(Deploy Preview)部署在站点根路径
const isNetlify = !!process.env.NETLIFY;

// https://astro.build/config
export default defineConfig({
	site: isNetlify ? undefined : 'https://wjl110.github.io',
	base: isNetlify ? '/' : '/Aihub',
});
