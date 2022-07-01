/** @type {import('next').NextConfig} */

// const API_KEY = "10923b261ba94d897ac6b81148314a3f";
// private -> env 파일을 만들어서 gitignore을 추가해주면 내 api key가 보이지 않는다

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source:"/contact",
        destination:"/form",
        permanent: false,
      }
    ]
  },
  async rewrites() {
    return [
      {
        source:"/api/movies",
        destination:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source:"/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      }
    ];
  },
};

module.exports = nextConfig
