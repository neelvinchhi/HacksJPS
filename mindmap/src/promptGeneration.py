import openai


openai.api_key = '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'

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


prompt = """Give a detailed summary on the topic below. The nodeDataArray and linkDataArray variables should be in an array format. Each element in the array represents a node or a link in the mind map. Only the contents of the arrays should be provided.

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
The topic is: 


The human digestive system consists of the gastrointestinal tract plus the accessory organs of digestion (the tongue, salivary glands, pancreas, liver, and gallbladder). Digestion involves the breakdown of food into smaller and smaller components, until they can be absorbed and assimilated into the body. The process of digestion has three stages: the cephalic phase, the gastric phase, and the intestinal phase.

The first stage, the cephalic phase of digestion, begins with secretions from gastric glands in response to the sight and smell of food. This stage includes the mechanical breakdown of food by chewing, and the chemical breakdown by digestive enzymes, that takes place in the mouth. Saliva contains the digestive enzymes amylase, and lingual lipase, secreted by the salivary and serous glands on the tongue. Chewing, in which the food is mixed with saliva, begins the mechanical process of digestion. This produces a bolus which is swallowed down the esophagus to enter the stomach.

The second stage of digestion begins in the stomach with the gastric phase. Here the food is further broken down by mixing with gastric acid until it passes into the duodenum, the first part of the small intestine.

The third stage begins in the duodenum with the intestinal phase, where partially digested food is mixed with a number of enzymes produced by the pancreas. Digestion is helped by the chewing of food carried out by the muscles of mastication, the tongue, and the teeth, and also by the contractions of peristalsis, and segmentation. Gastric acid, and the production of mucus in the stomach, are essential for the continuation of digestion.

Peristalsis is the rhythmic contraction of muscles that begins in the esophagus and continues along the wall of the stomach and the rest of the gastrointestinal tract. This initially results in the production of chyme which when fully broken down in the small intestine is absorbed as chyle into the lymphatic system. Most of the digestion of food takes place in the small intestine. Water and some minerals are reabsorbed back into the blood in the colon of the large intestine. The waste products of digestion (feces) are defecated from the rectum via the anus."""

response = generate_response(prompt)
response1, response2 = response.split('linkDataArray:', 2)

response1.replace('nodeDataArray:', ' ')

print(response1, response2)