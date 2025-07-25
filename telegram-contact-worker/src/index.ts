// Cloudflare Workers environment provides global types for Request, Response, and fetch
// Удаляю import type и declare fetch, так как Cloudflare Workers предоставляет эти типы глобально

export interface Env {
	TELEGRAM_BOT_TOKEN: string;
	TELEGRAM_CHAT_ID: string;
  }
  
  export default {
	async fetch(request: Request, env: Env): Promise<Response> {
	  // Обработка preflight (OPTIONS)
	  if (request.method === "OPTIONS") {
		return new Response(null, {
		  status: 204,
		  headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "POST, OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type"
		  }
		});
	  }
  
	  if (request.method !== "POST") {
		return new Response("Method Not Allowed", {
		  status: 405,
		  headers: {
			"Access-Control-Allow-Origin": "*"
		  }
		});
	  }
  
	  try {
		const { name, email, message, formType } = await request.json();
  
		let text = `🦎 *Новая заявка от Гипоганодика!*\n\n👤 *Имя:* ${name}\n📧 *Email:* ${email}`;
		if (formType === 'consultation') {
		  if (message) text += `\n\n💬 *Тариф:* ${message.replace('Тариф: ', '')}`;
		  text += `\n\n📝 С формы: консультация`;
		} else if (formType === 'faq') {
		  if (message) text += `\n\n💬 *Вопрос/сообщение:*\n${message}`;
		  text += `\n\n📝 С формы: задать вопрос (FAQ)`;
		}
  
		const telegramUrl = `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`;
  
		const sendMessageToTelegram = async (chatId: string) => {
		  const response = await fetch(telegramUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
			  chat_id: chatId,
			  text,
			  parse_mode: 'Markdown',
			}),
		  });
		  if (!response.ok) throw new Error('Telegram message sending error');
		};
  
		await sendMessageToTelegram(env.TELEGRAM_CHAT_ID);
  
		return new Response(JSON.stringify({ message: 'Message sent' }), {
		  status: 200,
		  headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*"
		  }
		});
	  } catch (error) {
		return new Response(JSON.stringify({ message: 'Server error' }), {
		  status: 500,
		  headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*"
		  }
		});
	  }
	}
  };