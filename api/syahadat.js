import syahadat from '../data/syahadat.json';

export default function handler(req, res) {
  res.status(200).json({
    code: 200,
    message: "Success get syahadat",
    data: syahadat,
    error: false
  });
}
