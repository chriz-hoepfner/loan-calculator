export const postToApi = async <T, S>(url: string, { arg }: { arg: T }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
    method: 'POST',
    body: JSON.stringify(arg),
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) {
    throw new Error();
  }

  // add delay to prevent extremely brief flash of loading state
  return await new Promise<S>(resolve =>
    setTimeout(() => resolve(res.json()), 500),
  );
};
