export default {
  name: 'car',
  title: 'Car',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'transmission',
      title: 'Transmission',
      type: 'string',
    },
    {
      name: 'seats',
      title: 'Seats',
      type: 'number',
    },
    {
      name: 'mpg',
      title: 'Mpg',
      type: 'number',
    },
    {
      name: 'km',
      title: 'Km',
      type: 'string',
    },
    {
      name: 'doors',
      title: 'Doors',
      type: 'number',
    },
    {
      name: 'engine',
      title: 'Engine',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true
      }
    },
  ]
}