import doa from '../../data/doa.json';

export default function handler(req, res) {
  const { name } = req.query;

  // cari slug yang cocok, tanpa peduli huruf besar/kecil
  const result = doa.find(d => d.slug.toLowerCase() === name.toLowerCase());

  if (!result) {
    return res.status(404).json({
      code: 404,
      message: "Doa not found",
      error: true
    });
  }

  res.status(200).json({
    code: 200,
    message: "Success get doa",
    data: result,
    error: false
  });
}
