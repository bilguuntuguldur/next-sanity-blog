const post = {
    name: "post",
    title: "Блог",
    type: "document",
    fields: [
      {
        title: "Гарчиг",
        name: "title",
        type: "string",
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
        options: {
          source: 'title',
          maxLength: 200,
        }
      },
      {
        title: "Зураг",
        name: "image",
        type: "image",
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string"
          }
        ]
      },
      {
        title: "Агуулга",
        name: "content",
        type: "array",
        of: [{ type: "block" }]
      }
    ]
  }
  
  export default post;