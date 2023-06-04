from promptGeneration import generate_response
    
def promptText(text):    
    prompt = f"""Give a detailed summary on the topic below. The nodeDataArray and linkDataArray variables should be in an array format. Each element in the array represents a node or a link in the mind map. Only the contents of the arrays should be provided.

    For the nodeDataArray, each node object should have the following properties:

    key: A unique identifier for the node.
    text: The text content of the node.
    color: The color of the node.
    loc: The location coordinates of the node on the diagram.

    For the linkDataArray, each link object should have the following properties:
    key: A unique identifier for the link.
    from: The key of the source node.
    to: The key of the target node.

    The main topic should be in the centre with subtopics branching from it in all directions. Every single subtopic should have only one branch (which is attached to the main topic or it's parent topic). Nothing should overlap and links shouldn't intersect and must be under 30px in length. Make sure the topics are in chronological order and the mind map is easy to understand. 
    Give the output exclusively in the form of a json dictionary object which contains 'nodeDataArray' and 'linkDataArray' as keys and the corresponding arrays as values. Do not return anything that is invalid json.
    The topic is: 

    {text}

    """
    return generate_response(prompt=prompt)