import openai
from credentials import OPENAI_KEY

openai.api_key = OPENAI_KEY


def generate_response(prompt):
    response = openai.Completion.create(
        engine='text-davinci-003',  
        prompt=prompt,
        max_tokens=2000,  
        n=1,
        stop=None, 
        temperature=0.7,  
    )
    return response.choices[0].text.strip()


