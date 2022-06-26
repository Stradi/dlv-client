const getDownloadURL = async (url: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/dl`, {
    method: 'POST',
    body: JSON.stringify({
      url,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const jsonResponse = await response.json();
  return jsonResponse;
};

const isValidResponse = (body: any): boolean => {
  return !body.error;
};

export { getDownloadURL, isValidResponse };
