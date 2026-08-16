function status(req, res) {
  res.status(200).json({
    status: req.statusCode || 200,
    message: "Os alunos do Curso.dev são pessoas acima da média.",
  });
}

export default status;
