const project = {
  title: "Төсөл",
  name: "project",
  type: "document",
  fields: [
    {
      title: "Нэр",
      name: "name",
      type: "string",
    },
    {
      title: "Дэд гарчиг",
      name: "subtitle",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96,}
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
      name: "url",
      title: "URL",
      type: "url"
    },
    {
      title: "Агуулга",
      name: "content",
      type: "array",
      of: [{ type: "block" }]
    }
  ]
}

export default project;