import { EventEmitter } from "events";

const Blog = class Blog extends EventEmitter {

  constructor() {
    super()

    this.blogs = [
      {
        _id: "2783578262131",
        title: "ich bin der erste Beitrag",
        author: "illo",
        content: {
          brief: "ich bin eine Kurzbeschreibung",
          extend: "ich bin die ausführliche Version"
        },
        tags: ["nodejs", "mongodb", "react"],
        createdOn: Date.now(),
        updatedOn: Date.now()
      },{
        _id: "456345734",
        title: "ich bin der zweite Beitrag",
        author: "illo",
        content: {
          brief: "ich bin eine Kurzbeschreibung",
          extend: "ich bin die ausführliche Version"
        },
        tags: ["nodejs", "mongodb", "react"],
        createdOn: Date.now(),
        updatedOn: Date.now()
      },{
        _id: "74564356",
        title: "ich bin der dritte Beitrag",
        author: "illo",
        content: {
          brief: "ich bin eine Kurzbeschreibung",
          extend: "ich bin die ausführliche Version"
        },
        tags: ["nodejs", "mongodb", "react"],
        createdOn: Date.now(),
        updatedOn: Date.now()
      }
    ]

  }


  getAll() {
    return(this.blogs)
  }

}

const blog = new Blog

export default blog


