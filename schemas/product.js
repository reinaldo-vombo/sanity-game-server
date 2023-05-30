export default {
  name: 'product',
  title: 'Productos',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Imagem',
      type: 'array',
      of: [{type: 'image'}],
      option: {
        hotspot: true,
      },
    },
    {
      name: 'bgImage',
      title: 'Imagem de fundo',
      type: 'image',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Nome',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      title: 'Categoria',
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
    },
    {
      name: 'price',
      title: 'Preço',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Descrição',
      type: 'string',
    },
    {
      name: 'videoUrl',
      title: 'Video demo',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'description',
      title: 'Contéudo',
      type: 'array',
      of: [
        {
          type: 'block',
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
        },
      ],
    },
  ],
}
