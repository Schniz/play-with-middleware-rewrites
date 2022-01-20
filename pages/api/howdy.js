/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default function (req, res) {
  if (req.query._clear_) {
    res.status(302).setHeader("Location", "/api/howdy?foo=bar").send("moved");
    return;
  }

  res.json(req.query);
}
