import { GoogleGenAI } from '@google/genai';

export default async function getPromptResponse(prompt: string): Promise<string> {
  const ai = new GoogleGenAI({
    apiKey: "AIzaSyCjVvmJFzn0zkQGqg1W1Qx7-QqVahT1Ngw",
  });

  const config = {
    responseMimeType: 'text/plain',
  };

  const model = 'gemini-2.0-flash';

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let fullResponse = '';

  for await (const chunk of response) {
    if (chunk.text) {
      fullResponse += chunk.text;
    }
  }

  return fullResponse;
}
