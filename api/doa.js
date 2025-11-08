import doa from '../data/doa.json';

export default function handler(req, res) {
  res.status(200).json({
    code: 200,
    message: "Success get doa list",
    data: doa,
    error: false
  });
}
