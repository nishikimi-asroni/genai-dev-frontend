export default function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = JSON.parse(req.body);
    // 仮の応答（将来的にAIやバックエンドに接続可）
    const reply = `あなたが送ったメッセージ: ${text}`;
    res.status(200).json({ reply });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

