import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import {NextConfig} from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export', // key part for static export
  images: {
    unoptimized: true, // needed for GitHub Pages
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
  },
})

export default withMDX(nextConfig)




