import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";



export default function Home({results}) {
    const router = useRouter();
    console.log("router", router);
    const onClick = (id, title) => {
        router.push({
            pathname: `/movies/${id}`,
            query:{
                title,
            },
        },
        `/movies/${id}`
        );
    };

    //빈배열값없으면 안불러와짐
  const [movies, setMovies] = useState();
//   useEffect(() => {
//     (async () => {
//       const { results } = await (
//         await fetch(
//           `/api/movies`
//         )
//       ).json();
//       console.log(results);
//       setMovies(results);
//     })();
//   }, []);
  return (
    <div>
      <Seo title="Home" />
      {/* {!movies && <h4>Loading...</h4>} */}
     
        {results?.map((movie) => (
                    <div 
                        onClick = {()=> onClick(movie.id,movie.original_title )} 
                        className="movie" 
                        key={movie.id}
                    >
                    <Link href={
                        {
                            pathname: `/movies/${movie.id}`,
                            query:{
                                title : movie.original_title ,
                            },
                        }
                    } 
                    as = {`/movies/${movie.id}`}
                    key={movie.id}>
                     <a>{movie.original_title}</a> 
                     </Link>
                    </div>
        ))}
        
    </div>
  );
}

// 이름 바꾸면 안됨, server 쪽에서만 작동, api키를 적어도 보이지 않고 백앤드에서 진행
export async function getServerSideProps() {
    const { results } = await (
                await fetch(
                  `http://localhost:3000//api/movies`
                )
              ).json();
    return{
        props:{
            results,
        },
    };

}