import { app } from './app';

/* istanbul ignore next */
const PORT = process.env.PORT || 8000;
/* istanbul ignore next */
const server = app.listen(PORT, () => console.log(`Server ready at http://localhost:${PORT}/graphql`));

export { server };
