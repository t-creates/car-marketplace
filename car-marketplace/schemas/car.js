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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
  ]
}