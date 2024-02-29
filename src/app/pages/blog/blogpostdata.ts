import {Tag} from "./tag";

export interface BlogPostData {

  id: number


  date?:string
  link?: string
  tags: Tag[]

  title: string
  content: string
  color: "dark"| "light"
  side:  "left" | "right"
  image: string

}
