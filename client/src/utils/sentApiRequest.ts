type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

// return correct request helper fn

export const sendApiRequest = async (
  url: string,
  method: Method,
  data: unknown = {},
): Promise<any> => {
  const response = await fetch(
    url,
    // object different based on method type
  );

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};