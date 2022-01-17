export default function (req, res) {
  console.log(req.query);
  res.json({
    ...req.query,
  });
}
