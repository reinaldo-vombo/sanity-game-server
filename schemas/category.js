export default {
  name: 'category',
  title: 'Categorias',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'image',
      title: 'capa',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'slug',
      type: 'slug',
      title: 'slug',
      options: {
        source: 'title',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title,
      }
    },
  },
}
