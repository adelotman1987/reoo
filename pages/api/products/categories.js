import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['אפוקסי', 'קרש חיתוך','CNC כרסום ','CNC לייזר'];
  res.send(categories);
});

export default handler;
