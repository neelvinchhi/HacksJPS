import React, { useState } from 'react';
import { Button, Input, Box, Text, Center, Spinner } from '@chakra-ui/react';

const MyComponent = () => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');
  const [responseData, setResponseData] = useState('');

  const fetchData = () => {
    setLoading(true);
    fetch("http://localhost:5000/generate", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: text })
    })
      .then(response => response.json())
      .then(result => {
        setLoading(false);
        const data = result.data;
        setResponseData(data);
      })
      .catch(error => {
        setLoading(false);
        console.error('Error:', error);
      });
  }

  const handleChange = (event) => {
    setText(event.target.value);
  }

  return (
    <Center height="100vh">
      <Box p={4} bg="gray.200" borderRadius="md">
        <Text fontSize="xl" fontWeight="bold" mb={4}>Recipe Generator</Text>
        <Input type="text" value={text} onChange={handleChange} mb={4} />
        <Button colorScheme="blue" onClick={fetchData} mb={4}>
          {loading ? (
            <Spinner size="sm" color="white" />
          ) : (
            'Generate Recipe'
          )}
        </Button>
        {responseData && (
          <Box p={4} bg="white" borderRadius="md">
            <Text fontSize="lg" fontWeight="bold">Generated Recipe:</Text>
            <Text mt={2}>{responseData}</Text>
          </Box>
        )}
      </Box>
    </Center>
  );
}

export default MyComponent;
