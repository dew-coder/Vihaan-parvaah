// services/askOpenAI.js
const askOpenAI = async (message) => {
    const url = 'https://open-ai34.p.rapidapi.com/api/v1/chat/completions';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '1877116e40msh88bb5596f4361b1p1720adjsned9fd0f3e117',
        'X-RapidAPI-Host': 'open-ai34.p.rapidapi.com'
      },
      body: JSON.stringify({
        model: 'mistral-7b',
        messages: [
          {
            role: 'system',
            content: 'Your are a helpful assistant that help the users by assisting them.'
          },
          {
            role: 'user',
            content: message // Pass the user's message here
          }
        ],
        temperature: 0.1,
        top_p: 0.95,
        max_tokens: 500,
        use_cache: false,
        stream: false
      })
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result)
      console.log(result?.choices[0]?.message?.content);
      return result?.choices[0]?.message?.content; // Return the result for further processing
    } catch (error) {
      console.error(error);
      throw error; // Throw the error for handling in the calling code
    }
  };
  
  export default askOpenAI;
  