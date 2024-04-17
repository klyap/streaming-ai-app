import { StreamingTextResponse, experimental_streamText } from 'ai';
import { openai } from 'ai/openai';

export const runtime = 'edge';

const finetune_model = 'ft:gpt-3.5-turbo-1106:personal:spark-blogs:925aCS7d'

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await experimental_streamText({
    model: openai.chat(finetune_model),
    messages,
  });

  return new StreamingTextResponse(result.toAIStream());
}
