import { gql } from "apollo-server-core";

const Schema = gql`
    type Piece { 
        id: ID! 
        title: String
        genre: String
        author: String 
        yearOfPublish: Number
    }
    type Query {
        getAllMangas: [Piece]
        getPiece(id: Int) : Piece 
    }
`;

export default Schema;
