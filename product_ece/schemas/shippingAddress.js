export default {
  title: 'כתובת למשלוח',
  name: 'shippingAddress',
  type: 'object',
  fields: [
    {
      title: 'שם מלא',
      name: 'fullName',
      type: 'string',
    },
    {
      title: 'כתובת',
      name: 'address',
      type: 'string',
    },
    {
      title: 'עיר',
      name: 'city',
      type: 'string',
    },
    {
      title: 'מיקוד',
      name: 'postalCode',
      type: 'string',
    },
    {
      title: 'מדינה',
      name: 'country',
      type: 'string',
    },
  ],
};
