export default {
  name: 'user',
  title: 'משתמש',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'שם',
      type: 'string',
    },

    {
      name: 'email',
      title: 'אימייל',
      type: 'string',
    },
    {
      name: 'password',
      title: 'סיסמה',
      type: 'string',
    },
    {
      name: 'isAdmin',
      title: 'Is Admin',
      type: 'boolean',
    },
  ],
};
