export default {
  name: 'product',
  title: 'מוצר',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'שם',
      type: 'string',
    },
    {
      name: 'price',
      title: 'מחיר',
      type: 'number',
    },
    {
      name: 'image',
      title: 'תמונה',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'תיאור',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'קשור (Slug)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'brand',
      title: 'מותג',
      type: 'string',
    },
    {
      name: 'category',
      title: 'קטגוריה',
      type: 'string',
    },
    {
      name: 'rating',
      title: 'דירוג',
      type: 'number',
    },

    {
      name: 'numReviews',
      title: 'מספר ביקורות',
      type: 'number',
    },
    {
      name: 'countInStock',
      title: 'ספירה במלאי',
      type: 'number',
    },
  ],
};
