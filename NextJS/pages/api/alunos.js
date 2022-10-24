// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function alunos(req, res) {

  res.status(200).json([
    { name: 'John Doe', age: 15, id: Math.random() },
    { name: 'michel', age: 12, id: Math.random()},
    { name: 'raquel', age: 15, id: Math.random()}
  ])
}
