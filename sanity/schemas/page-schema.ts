const page = {
  name: "page",
  title: "Хуудас",
  type: "document",
  fields: [
    {
      title: "Хуудасны гарчиг",
      name: "title",
      type: "string"
    },
    {
      title: "Дэд гарчиг",
      name: "subtitle",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 }
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" }
      ]
    },
    {
      title: "Хуудасны зураг",
      name: "image",
      type: "image",
      options: { hotspot: 'true'},
    },
    {
      title: "Утас",
      name: "phone",
      type: "number",
  },
  {
      title: "Имэйл",
      name: "email",
      type: "string",
  },
  {
      title: "FB",
      name: "facebook",
      type: "string",
  },
  {
      title: "IG",
      name: "instagram",
      type: "string",
  },
  {
      title: "LN",
      name: "linkedinn",
      type: "string"
  }
  ]
}

export default page;