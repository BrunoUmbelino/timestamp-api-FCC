const date = (request, response) => {
  const date = request.params.date;
  const query = request.query.color;
  console.log(request.query.color);
  response.json({ date: date, query: query });
};

module.exports = { date };
