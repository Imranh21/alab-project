import { genid } from "../helper/generateID";

export const AllBlogs = [
    {
      id: genid(),
      date: new Date().toDateString(),
      title: "Title 01",
      des:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      id: genid(),
      date: new Date().toDateString(),
      title: "Title 02",
      des:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. as opposed to using 'Content here, content here', making it look like readable English.",
    },
  ]
