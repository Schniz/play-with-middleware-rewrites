export default function (req, res) {
  console.log(req.query);
  res.json({
    queryKeys: Object.keys(req.query),
  });
}
