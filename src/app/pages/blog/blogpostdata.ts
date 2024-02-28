export interface BlogPostData {

  id: number


  date?:string
  link?: string
  tags: string[]

  title: string
  content: string
  color: "dark"| "light"
  side:  "left" | "right"
  image: string

}
