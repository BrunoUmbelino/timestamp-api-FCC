const date = (request, response) => {
  const param = request.params.date;

  const shortDateValidation = /^(\d{4})-(\d{2})-(\d{2})$/g.test(param);
  const longDateValidation = /^(\d{2}) (\w+) (\d{4})$/g.test(param);
  const unixDateValidation = /^(\d+)$/g.test(param);
  const undefinedParam = param === undefined;

  if (
    shortDateValidation ||
    longDateValidation ||
    unixDateValidation ||
    undefinedParam
  ) {
    if (undefinedParam) {
      const date = new Date();
      const utc = date.toUTCString();
      const dateStr = date.toString();
      const unix = Date.parse(date);

      response.json({ dateStr, utc, unix });
    }
    if (shortDateValidation || longDateValidation) {
      const date = new Date(param);
      const utc = date.toUTCString();
      const dateStr = date.toString();
      const unix = Date.parse(param);

      response.json({ dateStr, utc, unix });
    }
    if (unixDateValidation) {
      const unix = parseInt(param);
      const date = new Date(unix);
      const utc = date.toUTCString();
      const dateStr = date.toString();

      response.json({ dateStr, utc, unix });
    }
  } else response.status(400).json({ error: "Invalid Date" });
};

module.exports = { date };
