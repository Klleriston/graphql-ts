import mangas from "./dataset";

const Resolvers = {
    Query: {
        getAllMangas: () => mangas,
        getPiece: (_: any, args: any) => {
            console.log(args);
            return mangas.find((piece) => piece.id === args.id);
        }
    }
};

export default Resolvers;