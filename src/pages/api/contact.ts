import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Here, you would typically handle the form submission, e.g., save to a database or send an email.
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Respond with a success message
    res.status(200).json({ success: true });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
