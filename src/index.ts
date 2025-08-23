import app from './app';

const PORT = process.env.PORT ? Number(process.env.PORT) : 8080;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on http://localhost:${PORT}`);
});