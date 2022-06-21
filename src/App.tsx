import { gql, useQuery } from "@apollo/client";

const GET_LESSONS_QUERY = gql`
  query {
    lessons{
      id
      title
    }
  }
`

interface LessonsProps{
  id: string,
  title: string;
}
function App() {
  const { data } = useQuery<{ lessons: LessonsProps[]}>(GET_LESSONS_QUERY);
  return (
    <div>
        <h1 className="text-2xl text-violet-700">Hellow</h1>
        <ul>
          {
            data?.lessons.map((lesson: LessonsProps, index)=> {
              return <li key={index}>{lesson.title}</li>
            })
          }
        </ul>
    </div> 
  )
}

export default App
