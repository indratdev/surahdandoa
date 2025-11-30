import asmaulhusna from '../../data/asmaulhusna.json';

export default function handler(req, res) {
  res.status(200).json({
    code: 200,
    message: "Success get Asmaul Husna list",
    data: asmaulhusna,
    error: false
  });
}
