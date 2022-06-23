import { gql, useQuery } from "@apollo/client";
import { Lesson } from "../Lesson/Lesson";


const GET_LESSONS_QUERY = gql`
    query{
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED){
            id
            lessonType
            availableAt
            title 
            slug
        }
    }
`
interface GetLessonsQueryResponse{
    lessons: {
        id: string
        title: string
        slug: string 
        availableAt: string 
        lessonType: 'live' | 'class'
    }
}

export function Sidebar(){
   const { data } = useQuery<GetLessonsQueryResponse | undefined>(GET_LESSONS_QUERY)
   
    const lessons = data?.lessons


    return(
        <aside className="w-[348px] bg-gray-700 p-6 border-gray-600 ">
            <span className= "font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronogramas de Aulas
            </span>

            <div className="flex flex-col gap-8">
              {data?.lessons.map(lesson =>{
                return (
                  <Lesson key = {lesson.id}
                    title ={lesson.title}
                    slug ={lesson.slug}
                    availableAt = {new Date(lesson.availableAt)}
                    type = 'class'
                  />
                )
              })}
            </div>
        </aside>
    )
}