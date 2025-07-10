import { GoogleGenAI } from "@google/genai";
import { env } from "../env.ts";
import { config } from "process";

const gemini = new GoogleGenAI({
  apiKey: env.GEMINI_API_KEY,
})

const model = "gemini-2.5-flash"

export async function transcribeAudio(audioAsBase64: string, mimeType: string) {
    const response = await gemini.models.generateContent({
        model,
        contents: [
            {
                text: 'Transcreva o áudio para o português do Brasil. Seja preciso e natural na transcrição. Mantenha a pontuação e a formatação correta e divida o texto em parágrafos quando for apropriado.'
            },
            {
                inlineData: {
                    mimeType,
                    data: audioAsBase64,
                }
            }
        ]
    })

    if (!response.text) {
        throw new Error('Failed to transcribe audio')
    }

    return response.text
}

export async function generateEmbeddings(text: string) {
    const response = await gemini.models.embedContent({
        model: "text-embedding-004",
        contents: [{ text }],
        config: {
            taskType: "RETRIEVAL_DOCUMENT",
        }
    })

    if (!response.embeddings?.[0].values) {
        throw new Error('Failed to generate embeddings')    
    }

    return response.embeddings[0].values
}

export async function generateAnswer(question: string, transcriptions: string[]) {
    const context = transcriptions.join('\n\n')

    const prompt = `
        Com base no texto fornecido abaixo como contexto, 
        responda a pergunta de forma clara e objetiva em 
        português do Brasil.

        Contexto:
        ${context}

        Pergunta:
        ${question}

        Instruções:
        - Use apenas as informações do contexto para responder;
        - Se a resposta não estiver no contexto, diga que não possui informações suficientes para responder;
        - Seja objetivo e claro na resposta;
        - Mantenha um tom educativo e profissional;
        - Cite trechos relevantes do contexto quando necessário;
        - Se for citar o contexto, use o termo "conteúdo da aula;
        - Termine com uma frase motivacional ou de incentivo ao aprendizado.

    `.trim()

    const response = await gemini.models.generateContent({
        model,
        contents: [
            {
                text: prompt
            }
        ]
    })

    if (!response.text) {
        throw new Error('Failed to generate answer')
    }

    return response.text
}