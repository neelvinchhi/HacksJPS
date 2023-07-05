from promptGeneration import generate_response
    
def promptText(text):    
    prompt_ = "generate a simple recipe with the following ingredients: {text}"


    return generate_response(prompt=prompt_)