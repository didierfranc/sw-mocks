const hello = req => {
  const response = {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      items: ['hello world'],
    },
  }

  const { body, ...res } = response
  return new Response(JSON.stringify(body), res)
}
