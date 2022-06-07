export default {
  name: 'order',
  title: 'להזמין',
  type: 'document',
  fields: [
    {
      title: 'משתמש',
      name: 'user',
      type: 'reference',
      to: [{ type: 'user' }],
      options: {
        disableNew: true,
      },
    },
    {
      name: 'userName',
      title: 'שם משתמש',
      type: 'string',
    },
    {
      name: 'itemsPrice',
      title: 'מחיר מוצר',
      type: 'number',
    },
    {
      name: 'shippingPrice',
      title: 'משלוח',
      type: 'number',
    },
    {
      name: 'taxPrice',
      title: 'מחיר מס',
      type: 'number',
    },
    {
      name: 'totalPrice',
      title: 'מחיר כולל',
      type: 'number',
    },
    {
      name: 'paymentMethod',
      title: 'אמצעי תשלום',
      type: 'string',
    },
    {
      title: 'כתובת למשלוח',
      name: 'shippingAddress',
      type: 'shippingAddress',
    },
    {
      title: 'תוצאה של תשלום',
      name: 'paymentResult',
      type: 'paymentResult',
    },
    {
      title: 'הזמנת פריטים',
      name: 'orderItems',
      type: 'array',
      of: [
        {
          title: 'הזמן פריט',
          type: 'orderItem',
        },
      ],
    },
    {
      title: 'שולם',
      name: 'isPaid',
      type: 'boolean',
    },
    {
      title: 'תאריך תשלום',
      name: 'paidAt',
      type: 'datetime',
    },
    {
      title: 'זה נשלח',
      name: 'isDelivered',
      type: 'boolean',
    },
    {
      title: 'נמסר בשעה',
      name: 'deliveredAt',
      type: 'datetime',
    },
    {
      title: 'נוצר ב',
      name: 'createdAt',
      type: 'datetime',
    },
  ],
};
