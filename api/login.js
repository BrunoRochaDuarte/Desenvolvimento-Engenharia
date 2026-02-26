export default function handler(req, res) {
  // Só aceita POST
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Método não permitido' });
  }

  const { senha } = req.body;

  // Senha vem da variável de ambiente — nunca fica exposta no código
  const senhaCorreta = process.env.SENHA_ACESSO;

  if (!senhaCorreta) {
    return res.status(500).json({ ok: false, message: 'Servidor mal configurado' });
  }

  if (senha === senhaCorreta) {
    return res.status(200).json({ ok: true });
  } else {
    return res.status(401).json({ ok: false, message: 'Senha incorreta' });
  }
}
